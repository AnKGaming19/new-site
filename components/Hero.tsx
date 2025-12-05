import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Cpu, Activity } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    // Calculate normalized position (-0.5 to 0.5) for tilt
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const relativeX = (clientX - centerX) / rect.width;
    const relativeY = (clientY - centerY) / rect.height;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 bg-[#050507]"
    >
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <ParticleBackground />
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px] rotate-180">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0b0c15"></path>
          </svg>
        </div>
      </div>

      {/* Main Content - Now outside absolute background to allow Flexbox centering */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-3xl pointer-events-none lg:pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary text-xs font-mono mb-8 overflow-hidden whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00f0ff]" />
            AI TAILORED INFRASTRUCTURES // V.2.0
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tight"
          >
            Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Ecosystems</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative">
              Built to Scale
              <svg className="absolute w-full h-3 bottom-1 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg border-l-2 border-primary/30 pl-6"
          >
            AI Anchor builds consulting-grade AI infrastructures designed around your exact workflows. We eliminate slow responses, repetitive work, and lost opportunities.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="px-8 py-4 bg-white text-black font-bold text-lg rounded-none skew-x-[-10deg] hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-3 group"
            >
              <span className="skew-x-[10deg] flex items-center gap-2">
                Get Your Plan <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="px-8 py-4 border border-white/20 text-white font-medium text-lg rounded-none skew-x-[-10deg] hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center group bg-white/5 backdrop-blur-sm"
            >
              <span className="skew-x-[10deg]">Explore Solutions</span>
            </a>
          </motion.div>
        </div>

        {/* Abstract Visualization - Interactive 3D Card */}
        <div className="hidden lg:block relative h-[700px] w-full perspective-[2000px]">
          <motion.div 
            style={{ 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d"
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-[10%] right-0 w-[90%] h-[80%] bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 rounded-xl backdrop-blur-xl shadow-2xl transform-gpu"
          >
             {/* Glossy Reflection Overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl pointer-events-none" />

             {/* Decorative UI Header */}
             <div className="h-8 border-b border-white/5 flex items-center px-4 gap-2 bg-black/20 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                <div className="ml-auto text-[10px] font-mono text-gray-400">SYS_OPTIMIZED</div>
             </div>

             {/* Content */}
             <div className="p-8 relative h-full flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

                <div className="flex gap-6">
                    <div className="flex-1 p-6 bg-white/5 border border-white/5 rounded-lg backdrop-blur-sm relative overflow-hidden group hover:border-primary/30 transition-colors">
                        <div className="text-gray-300 text-xs font-mono mb-2">AVG RESPONSE TIME</div>
                        <div className="text-3xl font-display font-bold text-white">0.4s</div>
                        <div className="w-full h-1 bg-gray-800 mt-4 rounded-full overflow-hidden">
                            <div className="w-[95%] h-full bg-primary shadow-[0_0_10px_#00f0ff]" />
                        </div>
                    </div>
                    <div className="flex-1 p-6 bg-white/5 border border-white/5 rounded-lg backdrop-blur-sm group hover:border-secondary/30 transition-colors">
                        <div className="text-gray-300 text-xs font-mono mb-2">LEAD CONVERSION</div>
                        <div className="text-3xl font-display font-bold text-white">+42%</div>
                         <div className="flex gap-1 mt-4">
                            {[1,2,3,4,5,6,7].map(i => (
                                <div key={i} className={`h-4 flex-1 rounded-sm ${i > 5 ? 'bg-gray-800' : 'bg-secondary'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Animated Node Graph Simulation */}
                <div className="relative h-[300px] border border-white/5 rounded-lg bg-black/40 p-4 overflow-hidden">
                    <div className="absolute top-4 left-4 text-xs font-mono text-primary">Workflow_Automation.json</div>
                    
                    {/* Floating Nodes - Enhanced with Parallax */}
                    <motion.div 
                        style={{ transform: "translateZ(40px)" }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/3 left-10 p-3 bg-dark-800 border border-white/20 rounded-lg flex items-center gap-3 shadow-lg"
                    >
                        <div className="p-2 bg-blue-500/20 rounded-md text-blue-400"><Cpu size={14} /></div>
                        <div className="text-xs text-gray-300">CRM Sync</div>
                    </motion.div>

                     <motion.div 
                        style={{ transform: "translateZ(60px)" }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/2 right-10 p-3 bg-dark-800 border border-white/20 rounded-lg flex items-center gap-3 shadow-lg"
                    >
                        <div className="p-2 bg-green-500/20 rounded-md text-green-400"><Activity size={14} /></div>
                        <div className="text-xs text-gray-300">Revenue Analytics</div>
                    </motion.div>

                    {/* Connecting Line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.path 
                            d="M 140 120 C 250 120, 250 180, 360 180"
                            stroke="rgba(0, 240, 255, 0.3)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                        />
                         <motion.circle 
                            r="4" 
                            fill="#00f0ff"
                            className="shadow-[0_0_10px_#00f0ff]"
                        >
                            <animateMotion 
                                dur="3s" 
                                repeatCount="indefinite"
                                path="M 140 120 C 250 120, 250 180, 360 180"
                            />
                        </motion.circle>
                    </svg>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;