import React from 'react';
import { motion } from 'framer-motion';
import { Phone, HelpCircle, Filter, CalendarCheck, Mic, Activity } from 'lucide-react';

const VoiceAgent: React.FC = () => {
  const features = [
    {
      icon: Phone,
      title: "Instant Call Pickup",
      desc: "Picks up missed calls instantly, ensuring no lead goes unanswered.",
      pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-8"
    },
    {
      icon: HelpCircle,
      title: "Smart Discovery",
      desc: "Asks discovery questions automatically to understand client needs.",
      pos: "top-1/2 right-0 translate-x-full ml-8 -translate-y-1/2"
    },
    {
      icon: Filter,
      title: "Lead Qualification",
      desc: "Qualifies leads as A/B/C priority for efficient routing.",
      pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-8"
    },
    {
      icon: CalendarCheck,
      title: "Smart Scheduling",
      desc: "Schedules appointments or routes to team members seamlessly.",
      pos: "top-1/2 left-0 -translate-x-full mr-8 -translate-y-1/2"
    }
  ];

  const stack = [
    { 
        name: "Airtable", 
        // Using SVG component for Airtable
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-500">
                <path d="M12.0001 0.799805L0.800049 6.39981V11.5998L12.0001 17.1998L23.2001 11.5998V6.39981L12.0001 0.799805ZM10.8001 13.9998V23.1998H1.60005V13.9998H10.8001ZM12.9334 23.1998V13.9998H22.1334V23.1998H12.9334Z" />
            </svg>
        )
    },
    { name: "Google Sheets", icon: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg" },
    { name: "Google Calendar", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" },
    { name: "Cal.com", icon: "https://cal.com/logo.svg" },
    { 
        name: "Outlook", 
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#0078D4]">
                <rect x="2" y="5" width="20" height="14" rx="2" fill="currentColor" opacity="0.1" />
                <path d="M22 7L12 14L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="14" y="11" width="10" height="10" rx="2" fill="#0078D4" />
                <text x="19" y="18" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle" style={{fontFamily: 'sans-serif'}}>O</text>
            </svg>
        )
    },
    { name: "HubSpot", icon: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" }
  ];

  return (
    <section id="voice-agent" className="py-32 bg-[#0b0c15] overflow-visible relative scroll-mt-20">
      
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Voice Agent / AI Receptionist</h2>
          <p className="text-gray-300 text-lg">AI-powered receptionist with pre-qualification at scale.</p>
        </motion.div>

        {/* Central Intelligence Visualization - Desktop */}
        <div className="hidden lg:flex justify-center items-center relative h-[600px] mb-20">
            {/* The Core */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-20 w-48 h-48 rounded-full bg-black border border-primary/30 flex items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.2)]"
            >
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-[ping_3s_ease-in-out_infinite]" />
                <div className="absolute inset-4 rounded-full border border-primary/20 animate-[ping_3s_ease-in-out_infinite_0.5s]" />
                <Mic className="w-16 h-16 text-white" />
                
                {/* Audio Waves */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-end gap-1 h-8">
                     {[...Array(5)].map((_, i) => (
                        <motion.div 
                            key={i}
                            animate={{ height: [10, 30, 10] }}
                            transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 bg-primary rounded-full" 
                        />
                     ))}
                </div>
            </motion.div>

            {/* Orbiting Features */}
            <div className="absolute inset-0 w-full h-full max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-10 left-10 max-w-xs text-right"
                >
                    <div className="mb-4 flex justify-end"><div className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-primary"><Phone /></div></div>
                    <h3 className="text-xl font-bold text-white mb-2">Instant Call Pickup</h3>
                    <p className="text-sm text-gray-300">Picks up missed calls instantly, ensuring no lead goes unanswered.</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-10 right-10 max-w-xs text-left"
                >
                    <div className="mb-4 flex justify-start"><div className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-secondary"><HelpCircle /></div></div>
                    <h3 className="text-xl font-bold text-white mb-2">Smart Discovery</h3>
                    <p className="text-sm text-gray-300">Asks discovery questions automatically to understand client needs.</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-10 left-10 max-w-xs text-right"
                >
                    <div className="mb-4 flex justify-end"><div className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-green-400"><Filter /></div></div>
                    <h3 className="text-xl font-bold text-white mb-2">Lead Qualification</h3>
                    <p className="text-sm text-gray-300">Qualifies leads as A/B/C priority for efficient routing.</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-10 right-10 max-w-xs text-left"
                >
                    <div className="mb-4 flex justify-start"><div className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-pink-400"><CalendarCheck /></div></div>
                    <h3 className="text-xl font-bold text-white mb-2">Smart Scheduling</h3>
                    <p className="text-sm text-gray-300">Schedules appointments or routes to team members seamlessly.</p>
                </motion.div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                    <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                    <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                    <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="white" strokeWidth="1" />
                </svg>
            </div>
        </div>

        {/* Mobile View for Features */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6 mb-16">
            {features.map((f, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl"
                >
                    <f.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-sm text-gray-300">{f.desc}</p>
                </motion.div>
            ))}
        </div>

        {/* Integrations Dock */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
        >
            <div className="flex items-center gap-4 mb-8 text-gray-400 text-sm font-mono uppercase tracking-widest">
                <span className="w-12 h-[1px] bg-gray-700"></span>
                Works with your stack
                <span className="flex-grow h-[1px] bg-gray-700"></span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {stack.map((tech, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="group w-24 h-24 bg-[#0f111a] border border-white/5 rounded-2xl flex flex-col items-center justify-center p-4 hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer"
                    >
                        {typeof tech.icon === 'string' ? (
                            <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain mb-3 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all" />
                        ) : (
                            <div className="mb-3 opacity-50 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">{tech.icon}</div>
                        )}
                        <span className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors">{tech.name}</span>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-bold border border-green-500/20">
                    <Activity size={16} />
                    Never miss a lead. 24/7 availability. Instant qualification.
                 </div>
            </div>
        </motion.div>
      </div>

       
    </section>
  );
};

export default VoiceAgent;