import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Rocket, TrendingUp, ChevronRight, Check } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress so the line fills completely when the section is halfway through the viewport
  const scaleX = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  const steps = [
    {
      id: 1,
      title: "Discovery",
      icon: Search,
      desc: "We analyze your operations and map inefficiencies, identifying the highest ROI use cases for automation.",
      deliverables: "Process map, automation roadmap, ROI forecast.",
      timeline: "2-3 days",
      color: "text-blue-400",
      bg: "bg-blue-500"
    },
    {
      id: 2,
      title: "Pilot",
      icon: Rocket,
      desc: "We build a focused automation pilot to validate performance and demonstrate measurable results.",
      deliverables: "Working AI system, KPI dashboard, optimization insights.",
      timeline: "7-14 days",
      color: "text-purple-400",
      bg: "bg-purple-500"
    },
    {
      id: 3,
      title: "Scale & Maintain",
      icon: TrendingUp,
      desc: "Once validated, we scale your infrastructure across departments with full support and optimization.",
      deliverables: "Enterprise rollout, training, continuous improvement.",
      timeline: "2-4 weeks",
      color: "text-primary",
      bg: "bg-primary"
    }
  ];

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
    <section id="process" ref={containerRef} className="py-32 bg-[#050507] relative overflow-visible scroll-mt-20">
      
      <ParticleBackground />

      {/* Background Grid with Fade Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_80%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Process</h2>
          <p className="text-2xl text-white mb-4">From Discovery to Deployment. Done with You, Not for You.</p>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our B2B consulting framework ensures your automation rollout is precise, measurable, and aligned with business goals.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-white/10">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-primary"
              style={{ scaleX: scaleX, transformOrigin: "0%" }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pt-8 group"
              >
                {/* Number Badge */}
                <div className="absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#050507] border-4 border-[#0f111a] flex items-center justify-center z-10 group-hover:border-white/20 transition-colors">
                  <div className={`w-12 h-12 rounded-full ${step.bg} flex items-center justify-center text-black font-bold text-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                    {step.id}
                  </div>
                </div>

                <div className="bg-[#0f111a] border border-white/5 rounded-2xl p-8 hover:bg-[#131620] transition-colors relative overflow-hidden h-full">
                  <div className={`absolute top-0 right-0 p-4 opacity-10`}>
                     <step.icon size={100} />
                  </div>

                  <div className="relative z-10 mt-6 text-center">
                    <h3 className="text-2xl font-bold font-display mb-4">{step.title}</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed h-[80px]">
                      {step.desc}
                    </p>

                    <div className="space-y-3 text-left">
                      <div className="p-4 bg-black/20 rounded-lg border border-white/5">
                        <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${step.color}`}>Deliverables</div>
                        <p className="text-sm text-gray-200">{step.deliverables}</p>
                      </div>
                      <div className="p-4 bg-black/20 rounded-lg border border-white/5 flex justify-between items-center">
                         <div className={`text-xs font-bold uppercase tracking-wider ${step.color}`}>Timeline</div>
                         <div className="text-sm text-white font-mono">{step.timeline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-900/20 to-primary/20 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm"
        >
           <p className="text-xl text-gray-200">
             Average go-live: <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">14 days</span>. 
             Clients experience <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">25-40% faster lead response</span> and measurable ROI within the first month.
           </p>
           <div className="mt-8">
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-primary transition-colors"
              >
                 Get Your Automation Plan <ChevronRight size={20} />
              </a>
           </div>
        </motion.div>

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

export default Process;