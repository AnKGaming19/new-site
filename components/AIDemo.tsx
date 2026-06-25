import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { LoadingState } from '../types';

const AIDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading === LoadingState.LOADING) return;

    setLoading(LoadingState.LOADING);
    setResponse(null);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `
        You are "Anchor AI", the strategic product advisor for AI Anchor.
        
        COMPANY CONTEXT:
        - Name: AI Anchor
        - Website: www.aianchor.online
        - Contact Email: info@aianchor.online
        - Mission: We build custom business software, CRMs, dashboards, client portals, and AI-enhanced systems to help service businesses manage operations in one place.
        
        OUR SERVICES:
        1. Custom Web Applications: Tailored platforms, internal tools, admin panels, booking systems.
        2. Custom CRMs: Lead, client, appointment, and follow-up management.
        3. Dashboards & Analytics: Revenue, bookings, and performance visibility.
        4. Client Portals: Secure client access, files, requests, and reports.
        5. Workflow Automations: Lead capture, follow-ups, CRM updates, and reporting.
        6. AI-Enhanced Systems: AI agents, chatbots, summaries, and automated reports.
        
        OUR PROCESS:
        1. Discovery Call: Understand the business, workflow, tools, and bottlenecks.
        2. System Mapping: Map the CRM, dashboard, portal, automation, or web app.
        3. Design & Development: Build a clean, secure, scalable system.
        4. Testing & Launch: Connect integrations, fix issues, and prepare for use.
        5. Support & Improvements: Ongoing support, small improvements, and future features.
        
        YOUR ROLE:
        Answer the user's question based on the above information.
        If they ask how to get started, direct them to book a strategy call or email info@aianchor.online.
        Keep answers professional, concise (under 100 words), and clear.
      `;

      // Use generateContent for a single-turn "Audit" feel
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: input,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
        }
      });

      setResponse(result.text || "I apologize, but I couldn't generate a strategy at this moment. Please try again.");
      setLoading(LoadingState.SUCCESS);

    } catch (error) {
      console.error(error);
      setLoading(LoadingState.ERROR);
    }
  };

  return (
    <section id="ai-demo" className="py-24 relative overflow-hidden bg-[#050507] scroll-mt-20">
      
      {/* Top Wave Transition from About (black) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -mt-[1px]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#000000"></path>
        </svg>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-dark-900 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold mb-4">
              <Sparkles className="w-3 h-3" />
              Example Systems
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Systems We Can <span className="gradient-text">Build</span>
            </h2>
            <p className="text-gray-400">
              Ask about a system you want to build, how it should work, or what problem you need to solve.
            </p>
          </motion.div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col gap-6">
              
              {/* Output Area */}
              <div className="min-h-[150px] bg-dark-900/50 rounded-xl p-6 border border-white/5 flex items-center justify-center text-left">
                <AnimatePresence mode="wait">
                  {loading === LoadingState.IDLE && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="text-gray-500 text-center"
                    >
                      <p className="mb-2">Try asking about:</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs cursor-pointer hover:bg-white/10 transition" onClick={() => setInput("Can you build a CRM for my business?")}>"Can you build a CRM?"</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs cursor-pointer hover:bg-white/10 transition" onClick={() => setInput("What should a client portal include?")}>"What should a client portal include?"</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-xs cursor-pointer hover:bg-white/10 transition" onClick={() => setInput("What would a booking dashboard include?")}>"What should a dashboard include?"</span>
                      </div>
                    </motion.div>
                  )}
                  {loading === LoadingState.LOADING && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-3 text-primary"
                    >
                        <Loader2 className="w-8 h-8 animate-spin" />
                        <span className="text-sm font-mono">Reviewing your system...</span>
                    </motion.div>
                  )}
                  {loading === LoadingState.SUCCESS && response && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="prose prose-invert w-full"
                    >
                        <p className="text-lg leading-relaxed text-gray-200">
                           <span className="text-primary font-mono mr-2">{'>'}</span>
                           {response}
                        </p>
                    </motion.div>
                  )}
                  {loading === LoadingState.ERROR && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        <span>Connection interrupted. Please try again.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about a CRM, portal, dashboard, or automation system..."
                  className="w-full bg-dark-800 border border-white/10 rounded-xl py-4 pl-6 pr-16 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading === LoadingState.LOADING}
                  className="absolute right-2 top-2 bottom-2 aspect-square bg-gradient-to-tr from-primary to-secondary rounded-lg flex items-center justify-center text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              <div className="text-xs text-gray-600 text-center">
                  Powered by Google Gemini 2.5 Flash.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemo;