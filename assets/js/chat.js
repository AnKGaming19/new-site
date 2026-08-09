/*
 * "Anchor" — the site support assistant widget.
 *
 * Loaded lazily by main.js when #chat-widget is on the page. The markup ships hidden, so
 * everything here runs before the visitor ever sees a launcher: if this file fails to
 * load, the corner stays empty instead of showing a button that does nothing.
 *
 * The transcript lives in sessionStorage (not localStorage): it survives navigation
 * between pages of the site, and disappears with the tab. Nothing is stored that a
 * consent decision would need to cover.
 */
(function () {
  'use strict';

  var root = document.getElementById('chat-widget');
  var configEl = document.getElementById('chat-config');
  if (!root || !configEl || !window.fetch) return;

  var cfg;
  try {
    cfg = JSON.parse(configEl.textContent);
  } catch (e) {
    return;
  }

  var STORE_KEY = 'aianchor-chat';
  var MAX_STORED_TURNS = 20;
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var launcher = document.getElementById('chat-launcher');
  var panel = document.getElementById('chat-panel');
  var log = document.getElementById('chat-log');
  var form = document.getElementById('chat-form');
  var input = document.getElementById('chat-input');
  var sendBtn = form.querySelector('.chat-send');
  var avatarTemplate = document.getElementById('chat-avatar-template');

  var history = [];
  var busy = false; // a reply is in flight
  var pending = null; // its AbortController, when the browser has one
  var hideTimer = null;

  // --- transcript storage ---------------------------------------------------

  function loadHistory() {
    try {
      var raw = sessionStorage.getItem(STORE_KEY);
      var parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) ? parsed.slice(-MAX_STORED_TURNS) : [];
    } catch (e) {
      return [];
    }
  }

  function saveHistory() {
    try {
      sessionStorage.setItem(STORE_KEY, JSON.stringify(history.slice(-MAX_STORED_TURNS)));
    } catch (e) {
      // Private mode / storage blocked: the conversation just doesn't survive navigation.
    }
  }

  // --- rendering ------------------------------------------------------------

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /*
   * Deliberately not a Markdown parser: model output is untrusted text, so everything is
   * escaped first and only three constructs are then re-introduced — links (restricted to
   * same-site paths and https), bold, and bullet lists. Anything else the model writes
   * shows up as the literal characters it typed, which is the safe failure.
   */
  function renderRich(text) {
    var safe = escapeHtml(text);

    safe = safe.replace(/\[([^\]\n]{1,120})\]\(([^)\s]{1,300})\)/g, function (match, label, href) {
      // A leading "//" is protocol-relative, i.e. another origin wearing a same-site
      // costume — it has to fail the path test, not pass it.
      var sameSite = href.charAt(0) === '/' && href.charAt(1) !== '/';
      var external = href.indexOf('https://') === 0;
      if (!sameSite && !external) return label;
      return (
        '<a href="' +
        href +
        '" class="chat-link"' +
        (external ? ' target="_blank" rel="noopener noreferrer"' : '') +
        '>' +
        label +
        '</a>'
      );
    });
    safe = safe.replace(/\*\*([^*\n]{1,200})\*\*/g, '<strong>$1</strong>');

    var out = [];
    var inList = false;
    safe.split('\n').forEach(function (line) {
      var item = line.match(/^\s*[-*•]\s+(.+)$/);
      if (item) {
        if (!inList) {
          out.push('<ul class="chat-list">');
          inList = true;
        }
        out.push('<li>' + item[1] + '</li>');
        return;
      }
      if (inList) {
        out.push('</ul>');
        inList = false;
      }
      if (line.trim()) out.push('<p>' + line + '</p>');
    });
    if (inList) out.push('</ul>');
    return out.join('');
  }

  function atBottom() {
    return log.scrollHeight - log.scrollTop - log.clientHeight < 60;
  }

  function scrollToBottom(force) {
    if (force || atBottom()) log.scrollTop = log.scrollHeight;
  }

  /*
   * Assistant turns are prefixed with the avatar cloned out of the page's <template>;
   * visitor turns are the bubble alone, right-aligned.
   *
   * Both class names are written out in full on purpose. Tailwind tree-shakes
   * @layer components against the literal strings it finds in these files, so a name
   * assembled as 'chat-msg-' + role is invisible to it and its rules get dropped.
   */
  function row(role) {
    var wrap = document.createElement('div');
    if (role === 'assistant') {
      wrap.className = 'chat-msg chat-msg-assistant';
      if (avatarTemplate) wrap.appendChild(avatarTemplate.content.cloneNode(true));
    } else {
      wrap.className = 'chat-msg chat-msg-user';
    }
    return wrap;
  }

  function addMessage(role, text) {
    var wrap = row(role);
    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.innerHTML = renderRich(text);
    wrap.appendChild(bubble);
    log.appendChild(wrap);
    scrollToBottom(true);
    return bubble;
  }

  function addNotice(text, tone) {
    var el = document.createElement('p');
    el.className = 'chat-notice' + (tone === 'error' ? ' chat-notice-error' : '');
    el.textContent = text;
    log.appendChild(el);
    scrollToBottom(true);
    return el;
  }

  function addTyping() {
    var wrap = row('assistant');
    var dots = document.createElement('div');
    dots.className = 'chat-bubble chat-typing';
    dots.setAttribute('aria-label', cfg.typing);
    dots.innerHTML = '<span></span><span></span><span></span>';
    wrap.appendChild(dots);
    log.appendChild(wrap);
    scrollToBottom(true);
    return wrap;
  }

  function renderSuggestions() {
    if (!cfg.suggestions || !cfg.suggestions.length) return;
    var wrap = document.createElement('div');
    wrap.className = 'chat-suggestions';
    cfg.suggestions.forEach(function (question) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chat-chip btn-interactive';
      btn.textContent = question;
      btn.addEventListener('click', function () {
        wrap.remove();
        send(question);
      });
      wrap.appendChild(btn);
    });
    log.appendChild(wrap);
  }

  function renderLog() {
    log.innerHTML = '';
    addMessage('assistant', cfg.greeting);
    history.forEach(function (entry) {
      addMessage(entry.role === 'assistant' ? 'assistant' : 'user', entry.content);
    });
    if (!history.length) renderSuggestions();
    scrollToBottom(true);
  }

  // --- open / close ---------------------------------------------------------

  function setOpen(open) {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    launcher.setAttribute('aria-expanded', String(open));
    root.classList.toggle('is-open', open);

    if (open) {
      panel.hidden = false;
      // Flush the display:none -> flex change before adding the class, so the transition
      // has a from-state to run out of instead of snapping straight to the end.
      void panel.offsetWidth;
      panel.classList.add('is-visible');
      scrollToBottom(true);
      if (!('ontouchstart' in window)) input.focus();
      return;
    }

    panel.classList.remove('is-visible');
    var finish = function () {
      panel.hidden = true;
    };
    if (reducedMotion) finish();
    else hideTimer = setTimeout(finish, 200);
  }

  // --- sending --------------------------------------------------------------

  function errorText(code) {
    return cfg.errors[code] || cfg.errors.generic;
  }

  function setBusy(value) {
    busy = value;
    sendBtn.disabled = value || !input.value.trim();
    input.disabled = value;
    root.classList.toggle('is-busy', value);
  }

  function readError(res) {
    if (res.status === 429) return 'rateLimited';
    if (res.status === 503) return 'unavailable';
    return 'generic';
  }

  /**
   * Consume the handler's SSE stream. Each frame is a `data: {...}` line terminated by a
   * blank line; partial frames are held in `buffer` until the terminator arrives, because
   * a chunk boundary can land anywhere — including mid-character, which is why the decoder
   * is called with { stream: true }.
   */
  function consumeStream(res, onDelta) {
    var reader = res.body.getReader();
    var decoder = new TextDecoder();
    var buffer = '';
    var result = { ok: false, code: 'generic' };

    function handleFrame(frame) {
      var line = frame.split('\n').filter(function (l) {
        return l.indexOf('data:') === 0;
      })[0];
      if (!line) return;
      var payload;
      try {
        payload = JSON.parse(line.slice(5).trim());
      } catch (e) {
        return;
      }
      if (payload.type === 'delta') onDelta(payload.text);
      else if (payload.type === 'done') result.ok = true;
      else if (payload.type === 'error') result.code = payload.code === 'rate_limited' ? 'rateLimited' : payload.code === 'refused' ? 'refused' : 'generic';
    }

    function pump() {
      return reader.read().then(function (chunk) {
        if (chunk.done) {
          if (buffer.trim()) handleFrame(buffer);
          return result;
        }
        buffer += decoder.decode(chunk.value, { stream: true });
        var parts = buffer.split('\n\n');
        buffer = parts.pop();
        parts.forEach(handleFrame);
        return pump();
      });
    }

    return pump();
  }

  function send(text) {
    var message = String(text || '').trim();
    if (!message || busy) return;

    var suggestions = log.querySelector('.chat-suggestions');
    if (suggestions) suggestions.remove();

    addMessage('user', message);
    history.push({ role: 'user', content: message });
    saveHistory();

    input.value = '';
    autoGrow();
    setBusy(true);

    var typing = addTyping();
    var bubble = null;
    var answer = '';
    var controller = window.AbortController ? new AbortController() : null;
    pending = controller;

    // Idempotent: the stream can fail on either the fetch path or the parse path, and a
    // second call would pop a turn that was already accounted for.
    var settled = false;
    var finish = function (code) {
      if (settled) return;
      settled = true;
      pending = null;
      setBusy(false);
      if (typing.parentNode) typing.remove();
      if (code) {
        // A failed turn shouldn't poison the next one — the question stays on screen but
        // leaves the history, so a retry doesn't resend a turn the model never answered.
        history.pop();
        saveHistory();
        addNotice(errorText(code), 'error');
      } else {
        history.push({ role: 'assistant', content: answer });
        saveHistory();
      }
      if (!('ontouchstart' in window)) input.focus();
    };

    fetch(cfg.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
      body: JSON.stringify({ messages: history, lang: cfg.lang }),
      signal: controller ? controller.signal : undefined,
    })
      .then(function (res) {
        if (!res.ok) return finish(readError(res));
        if (!res.body || !res.body.getReader) {
          // Browser without a readable body: wait for the whole response, then reassemble
          // the deltas from the same frames and show the answer in one go.
          return res.text().then(function (body) {
            body.split('\n\n').forEach(function (frame) {
              var line = frame.split('\n').filter(function (l) {
                return l.indexOf('data:') === 0;
              })[0];
              if (!line) return;
              try {
                var payload = JSON.parse(line.slice(5).trim());
                if (payload.type === 'delta') answer += payload.text;
              } catch (e) {}
            });
            if (!answer) return finish('generic');
            typing.remove();
            addMessage('assistant', answer);
            finish(null);
          });
        }

        return consumeStream(res, function (delta) {
          answer += delta;
          if (!bubble) {
            typing.remove();
            bubble = addMessage('assistant', '');
          }
          bubble.innerHTML = renderRich(answer);
          scrollToBottom(false);
        }).then(function (result) {
          if (!result.ok || !answer) return finish(result.ok ? 'generic' : result.code);
          finish(null);
        });
      })
      .catch(function (err) {
        if (err && err.name === 'AbortError') {
          settled = true;
          pending = null;
          setBusy(false);
          if (typing.parentNode) typing.remove();
          return;
        }
        finish('generic');
      });
  }

  // --- composer -------------------------------------------------------------

  function autoGrow() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
  }

  input.addEventListener('input', function () {
    autoGrow();
    sendBtn.disabled = !input.value.trim() || busy;
  });

  input.addEventListener('keydown', function (e) {
    // Enter sends, Shift+Enter is a newline — the convention every chat UI shares.
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input.value);
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    send(input.value);
  });

  launcher.addEventListener('click', function () {
    setOpen(panel.hidden);
  });

  root.querySelectorAll('[data-chat-close]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setOpen(false);
      launcher.focus();
    });
  });

  root.querySelectorAll('[data-chat-reset]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (pending) pending.abort();
      pending = null;
      history = [];
      saveHistory();
      setBusy(false);
      renderLog();
      input.focus();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      launcher.focus();
    }
  });

  // --- boot -----------------------------------------------------------------

  history = loadHistory();
  renderLog();
  root.hidden = false;
})();
