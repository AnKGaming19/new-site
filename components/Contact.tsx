import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Loader2, CheckCircle, Linkedin, Instagram } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

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
    <section id="contact" className="py-24 bg-[#0b0c15] relative overflow-hidden scroll-mt-20">

      {/* Dynamic Background with Cursor Spotlight */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Interactive Cursor Spotlight - Exclusive to Hero (made more discreet) */}
        <div 
            className="absolute w-[220px] h-[220px] rounded-full blur-[30px] transition-all duration-300 pointer-events-none"
            style={{
                left: mousePosition.x,
                top: mousePosition.y,
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.14) 0%, rgba(112, 0, 255, 0.08) 45%, transparent 60%)',
                opacity: isHovering ? 0.32 : 0,
                mixBlendMode: 'normal'
            }}
        />
      
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to <span className="text-primary">Anchor</span> Your Success?
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              The future waits for no one. Contact our principal consultants to discuss your specific infrastructure and goals.
            </p>

            <div className="space-y-6">
              <a href="mailto:info@aianchor.online" className="flex items-center gap-6 group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all">
                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-1">Email Us</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">info@aianchor.online</p>
                </div>
                <ArrowRight className="ml-auto text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              <div className="grid sm:grid-cols-2 gap-4">
                  <a href="https://www.linkedin.com/company/aianchor/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all">
                    <div className="p-3 bg-[#0077b5]/10 rounded-full text-[#0077b5] group-hover:scale-110 transition-transform">
                        <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm">LinkedIn</h3>
                        <p className="text-gray-300 text-xs group-hover:text-white transition-colors">Connect with us</p>
                    </div>
                  </a>

                  <a href="https://www.instagram.com/aianchor_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all">
                    <div className="p-3 bg-[#E1306C]/10 rounded-full text-[#E1306C] group-hover:scale-110 transition-transform">
                        <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm">Instagram</h3>
                        <p className="text-gray-300 text-xs group-hover:text-white transition-colors">Follow us</p>
                    </div>
                  </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
          >
            {formState === 'success' ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">We've received your inquiry and will be in touch shortly.</p>
                    <button 
                        onClick={() => setFormState('idle')}
                        className="mt-8 text-primary hover:text-white transition-colors text-sm font-medium"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                        <input
                          name="firstName"
                          required
                          type="text"
                          className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                          title="First Name"
                          placeholder="Enter your first name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                        <input
                          name="lastName"
                          required
                          type="text"
                          className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                          title="Last Name"
                          placeholder="Enter your last name"
                        />
                    </div>
                    </div>
                    
                    <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      name="email"
                      required
                      type="email"
                      className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                      title="Email Address"
                      placeholder="Enter your email address"
                    />
                    </div>

                    <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Interest</label>
                    <div className="relative">
                        <select
                          name="interest"
                          className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors appearance-none"
                          aria-label="Interest"
                        >
                            <option>Strategic Consulting</option>
                            <option>Voice Agents & Automation</option>
                            <option>Operational Visibility</option>
                            <option>Other</option>
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                    </div>
                    </div>

                    <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
                      placeholder="Type your message here..."
                      title="Message"
                    ></textarea>
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

       {/* Bottom Wave to Footer (#050507) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px] rotate-180">
           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#050507"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
