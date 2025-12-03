import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2, ChevronDown, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";


interface Message {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `You are the AIAnchor Website Chatbot. You speak in a warm, human, professional tone. Your job is to help visitors understand what AIAnchor does, guide them to the right service, answer questions clearly, and encourage them to book a quick strategy call when appropriate. Never be pushy. Keep every reply short and smooth.

Context
AIAnchor is an AI automation agency that converts traffic into booked strategy calls using AI systems. Core services include:
• AI inbound-call agents (AI receptionists)
• Workflow automations via n8n, Zapier and custom scripts
• Lead conversion dashboards
• Outreach + follow-up automations
• Integrations across CRM, website, and voice systems

What You Do
• Greet visitors naturally and ask what they’re trying to improve in their business
• Identify their situation (missed calls, slow response, outreach issues, lead leakage, etc)
• Give simple, clear explanations of solutions with no jargon
• Ask focused questions to qualify them, one at a time
• If they seem interested, offer to book a free strategy call
• Keep answers short, clear, and human
• Avoid unnecessary details unless the visitor asks for them

Guidelines
• No robotic phrasing and no em dashes
• Always focus on the visitor’s problem → your solution → benefit
• Never assume what they need before asking at least one clarifying question
• Always stay warm, helpful, and concise`;

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi there! 👋 Welcome to AI Anchor. What part of your business are you looking to automate or improve today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
const chatSession = useRef<any | null>(null);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const initChat = () => {
  const apiKey =
    typeof window !== "undefined"
      ? (globalThis as any).NEXT_PUBLIC_API_KEY ||
        (window as any).NEXT_PUBLIC_API_KEY
      : undefined;

  if (!apiKey) return;

  // Old SDK client
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash", // or "gemini-1.5-pro" if you prefer
    systemInstruction: SYSTEM_INSTRUCTION,
  });

  chatSession.current = model.startChat({
    history: [
      {
        role: "model",
        parts: [
          {
            text:
              "Hi there! 👋 Welcome to AI Anchor. What part of your business are you looking to automate or improve today?",
          },
        ],
      },
    ],
  });
};


  useEffect(() => {
      // Initialize chat when opened if not already initialized
      if (isOpen && !chatSession.current) {
          initChat();
      }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!chatSession.current) initChat();

      const result = await chatSession.current!.sendMessage(userMsg);
      const responseText = result.response?.text() ?? "";

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a bit of trouble connecting to our systems right now. Could you try asking that again?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[380px] h-[600px] max-h-[70vh] flex flex-col"
          >
            <div className="flex-1 bg-[#050507]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
              
              {/* Header */}
              <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-sm">AI Anchor Assistant</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-gray-400">Online</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                  title="Close chat"
                >
                  <ChevronDown size={20} />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-primary text-black rounded-tr-none font-medium' 
                          : 'bg-white/10 text-gray-100 rounded-tl-none border border-white/5'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                     <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                        <span className="text-xs text-gray-400">Thinking...</span>
                     </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-black/20 border-t border-white/5">
                <form onSubmit={handleSubmit} className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full bg-[#0f111a] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-black transition-all disabled:opacity-50 disabled:hover:bg-primary/10 disabled:hover:text-primary disabled:cursor-not-allowed"
                    title="Send message"
                  >
                    <Send size={16} />
                  </button>
                </form>
                <div className="text-[10px] text-center text-gray-400 mt-2">
                    AI can make mistakes. Please verify critical info.
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 ${
            isOpen ? 'bg-gray-800 text-white border border-white/10' : 'bg-gradient-to-tr from-primary to-secondary text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {!isOpen && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#050507]" />
        )}
      </motion.button>
    </>
  );
};

export default ChatWidget;