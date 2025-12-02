import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PhoneOff, Clock, Search, Zap, CheckCircle2, AlertTriangle, ArrowRight, Bot, BarChart3, ShieldAlert } from 'lucide-react';

const servicesData = [
  {
    id: "01",
    title: "Lead Management",
    problemTitle: "Missed Opportunities",
    problem: "Prospects go unanswered, calls go to voicemail, and your pipeline leaks value every hour you're offline.",
    solution: "Deploy AI Voice Agents & Scheduling Systems that respond instantly 24/7, qualify leads using natural conversation, and book meetings directly into your calendar.",
    result: "Zero missed calls, instant lead capture, and a calendar filled with qualified prospects.",
    icon: PhoneOff,
    solutionIcon: Bot,
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/50",
    accent: "text-red-400"
  },
  {
    id: "02",
    title: "Workflow Automation",
    problemTitle: "Operational Drag",
    problem: "Your team burns 30-50% of their day on data entry, repetitive emails, and manual handovers between disconnected tools.",
    solution: "Architect end-to-end custom automation pipelines that sync your CRM, forms, and communication channels in real-time without human input.",
    result: "Team focuses on high-value strategy while admin tasks run on autopilot.",
    icon: Clock,
    solutionIcon: Zap,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/50",
    accent: "text-blue-400"
  },
  {
    id: "03",
    title: "Business Intelligence",
    problemTitle: "Data Blindness",
    problem: "Decision paralysis caused by scattered data. You can't scale what you can't see, and manual reporting is always outdated.",
    solution: "Implement live AI-powered dashboards that aggregate data across all departments to visualize KPIs, cash flow, and bottlenecks instantly.",
    result: "Crystal clear operational visibility and data-backed growth decisions.",
    icon: Search,
    solutionIcon: BarChart3,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/50",
    accent: "text-purple-400"
  }
];

const ServiceCard: React.FC<{ service: typeof servicesData[0], index: number }> = ({ service, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative hover:scale-[1.02] transition-transform duration-500 ease-out"
    >
      <div className="grid lg:grid-cols-12 gap-0 lg:gap-8 items-stretch">
        
        {/* LEFT: The Problem (Error State) */}
        <div className="lg:col-span-5 bg-[#0f111a] border border-red-500/20 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-8 relative overflow-hidden group-hover:border-red-500/60 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-500">
            {/* Background Noise with Parallax */}
            <motion.div 
              style={{ y: backgroundY }}
              className="absolute -inset-[20%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"
            ></motion.div>
            
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50 z-10" />
            
            <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-500/10 rounded-lg text-red-500 border border-red-500/20">
                        <service.icon size={20} />
                    </div>
                    <span className="font-mono text-xs text-red-400 uppercase tracking-widest">System_Error_0{index+1}</span>
                </div>
                <AlertTriangle className="text-red-500/40 animate-pulse" size={20} />
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10">{service.problemTitle}</h3>
            <p className="text-gray-300 leading-relaxed text-sm mb-6 border-l-2 border-red-500/20 pl-4 relative z-10">
                "{service.problem}"
            </p>
            
            <div className="inline-flex items-center gap-2 text-xs font-mono text-red-400 opacity-70 relative z-10">
                <ShieldAlert size={12} />
                IMPACT: HIGH SEVERITY
            </div>
        </div>

        {/* CENTER: The Bridge */}
        <div className="lg:col-span-1 flex lg:flex-col items-center justify-center relative py-4 lg:py-0">
            <div className="absolute inset-0 flex items-center justify-center lg:flex-col">
                {/* Connecting Line */}
                <div className="w-full h-[2px] lg:w-[2px] lg:h-full bg-gradient-to-r lg:bg-gradient-to-b from-red-500/50 via-gray-700 to-primary/50" />
            </div>
            {/* Processing Node */}
            <div className="relative z-10 w-10 h-10 bg-black border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                <ArrowRight className="w-4 h-4 text-white lg:rotate-0 rotate-90" />
            </div>
        </div>

        {/* RIGHT: The Solution (Optimized State) */}
        <div className="lg:col-span-6 bg-gradient-to-br from-gray-900 to-black border border-primary/20 rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none p-1 relative overflow-hidden group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-500 shadow-2xl">
            
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="h-full bg-[#050507]/80 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary border border-primary/20 shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                            <service.solutionIcon size={20} />
                        </div>
                        <span className="font-mono text-xs text-primary uppercase tracking-widest">AI_Protocol_Active</span>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00f0ff]" />
                  </div>

                  {/* Solution Content */}
                  <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-3">AI Intervention</h4>
                      <p className="text-gray-100 text-lg leading-relaxed font-light">
                        {service.solution}
                      </p>
                  </div>

                  {/* Result Footer */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    <div>
                        <span className="block text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Target Outcome</span>
                        <p className="text-white font-medium text-sm">{service.result}</p>
                    </div>
                  </div>
            </div>
        </div>

      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#0b0c15] relative scroll-mt-20 overflow-hidden">
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 border border-primary/30 rounded-full bg-primary/5 text-primary text-xs font-mono mb-6"
          >
            SYSTEM DIAGNOSTICS & OPTIMIZATION
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Identifying The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Bottleneck</span>.<br />
            Deploying The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solution</span>.
          </motion.h2>
        </div>

        <div className="space-y-12">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom Wave to Process (#050507) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px] rotate-180">
           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#050507"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;