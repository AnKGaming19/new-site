import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black relative scroll-mt-20 overflow-visible">
      
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-8">
                    Who We Are
                </h2>
                
                <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed mb-12">
                    AIAnchor is an AI consulting agency that builds <strong className="text-white font-semibold">AI Tailored Solutions</strong> and <strong className="text-white font-semibold">AI Tailored Infrastructures</strong> to help businesses operate with speed, accuracy, and consistency. 
                </p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    We eliminate slow responses, repetitive work, and lost opportunities. We create intelligent ecosystems that perform even when your team isn't online.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-[2rem] bg-gradient-to-br from-gray-900 to-black border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <h3 className="text-primary font-bold text-xl mb-6 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-primary" /> Our Mission
                    </h3>
                    <p className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                       To bridge the gap between technology and execution, giving modern companies the clarity and systems they need to grow confidently.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <div className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 flex items-center gap-6">
                        <div className="text-4xl font-bold text-white">30-50%</div>
                        <div className="text-gray-300 text-sm">Time savings achieved by typical clients within the first quarter.</div>
                    </div>
                    <div className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 flex items-center gap-6">
                        <div className="text-4xl font-bold text-white">14 Days</div>
                        <div className="text-gray-300 text-sm">Average time to Go-Live for our tailored automation pilots.</div>
                    </div>
                    <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20 flex items-center justify-center text-center">
                        <span className="text-primary font-medium">Measurable ROI within the first month.</span>
                    </div>
                </motion.div>
            </div>

        </div>
      </div>

        {/*Top Smooth Wave (Fills next section color #0b0c15) */}
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    className="block w-full h-[60px] md:h-[100px]"
  >
    <path
      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
      fill="#0b0c15"
    />
  </svg>
</div>


      {/* Bottom Wave to Services (#0b0c15) */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px] rotate-180">
<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0b0c15"></path>
</svg>
</div>
    </section>
  );
};
    

export default About;