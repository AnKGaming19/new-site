import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Loader2, CheckCircle, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnzezlo", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-28 bg-[#0b0c15] relative overflow-visible scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1627] to-[#0a101d] p-8 md:p-10 shadow-[0_0_40px_rgba(59,130,246,0.12)]"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 max-w-4xl">
            Ready to build a system that moves your business forward?
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-7 max-w-3xl">
            Book a free strategy call and let&apos;s talk about the right solution for your business.
          </p>
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('contact-form');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-semibold text-white hover:brightness-110 transition-all"
          >
            Book a Strategy Call <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Let&apos;s plan the right build for your workflow.
            </h3>
            <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
              Tell us what you need. We&apos;ll help you shape a practical system your team can actually use.
            </p>

            <div className="space-y-4">
              <a href="mailto:info@aianchor.online" className="flex items-center gap-5 group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all">
                <div className="p-3.5 bg-primary/10 rounded-xl text-primary group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Us</h4>
                  <p className="text-gray-300 group-hover:text-white transition-colors">info@aianchor.online</p>
                </div>
                <ArrowRight className="ml-auto text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <div className="grid sm:grid-cols-2 gap-4">
                <a href="https://www.linkedin.com/company/aianchor/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all">
                  <div className="p-2.5 bg-[#0077b5]/10 rounded-lg text-[#0077b5] group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">LinkedIn</h4>
                    <p className="text-gray-300 text-xs group-hover:text-white transition-colors">See our updates</p>
                  </div>
                </a>

                <a href="https://www.instagram.com/aianchor_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all">
                  <div className="p-2.5 bg-[#E1306C]/10 rounded-lg text-[#E1306C] group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Instagram</h4>
                    <p className="text-gray-300 text-xs group-hover:text-white transition-colors">Behind the work</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0e1627]/75 border border-white/10 p-7 md:p-8 rounded-3xl backdrop-blur-sm"
          >
            {formState === 'success' ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">We&apos;ve received your inquiry and will be in touch shortly.</p>
                <button
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-primary hover:text-white transition-colors text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input name="firstName" required type="text" aria-label="First Name" className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input name="lastName" required type="text" aria-label="Last Name" className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors" />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input name="email" required type="email" aria-label="Email Address" className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors" />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Interest</label>
                  <div className="relative">
                    <select name="interest" aria-label="Interest" className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors appearance-none">
                      <option>Custom Web App</option>
                      <option>CRM / Business System</option>
                      <option>Dashboard / Analytics</option>
                      <option>Client Portal</option>
                      <option>Automation / Integrations</option>
                      <option>AI-Enhanced System</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="mb-7">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea name="message" required rows={4} aria-label="Message" className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full py-4 bg-white text-dark-900 font-bold rounded-lg hover:bg-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {formState === 'error' && (
                  <p className="mt-4 text-red-400 text-sm text-center">Something went wrong. Please try again later.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>

         {/* Bottom Wave to Services (#0000) */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]">
<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0000"></path>
</svg>
</div>
    </section>
  );
};

export default Contact;