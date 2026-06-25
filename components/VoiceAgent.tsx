import React from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    HelpCircle,
    CalendarCheck,
    UserRoundCog,
    Mic,
    Activity,
    Database,
    Sheet,
    CalendarDays,
    Clock3,
    Mail,
    Orbit,
} from 'lucide-react';

const VoiceAgent: React.FC = () => {
  const features = [
    {
      icon: Phone,
      title: "Instant Call Pickup",
            desc: "Answers missed calls instantly and captures opportunities.",
            accent: "text-cyan-300",
            iconBg: "bg-cyan-400/10 border-cyan-300/30",
    },
    {
      icon: HelpCircle,
      title: "Smart Discovery",
            desc: "Asks the right questions and understands client needs.",
            accent: "text-violet-300",
            iconBg: "bg-violet-400/10 border-violet-300/30",
    },
    {
            icon: CalendarCheck,
            title: "Appointment Booking",
            desc: "Books appointments directly on your calendar automatically.",
            accent: "text-blue-300",
            iconBg: "bg-blue-400/10 border-blue-300/30",
    },
    {
            icon: UserRoundCog,
            title: "CRM Sync & Follow-Up",
            desc: "Syncs leads and triggers follow-ups so nothing falls through.",
            accent: "text-indigo-300",
            iconBg: "bg-indigo-400/10 border-indigo-300/30",
    }
  ];

  const stack = [
        { name: "Airtable", icon: Database, accent: "text-amber-300" },
        { name: "Google Sheets", icon: Sheet, accent: "text-emerald-300" },
        { name: "Google Calendar", icon: CalendarDays, accent: "text-blue-300" },
        { name: "Cal.com", icon: Clock3, accent: "text-gray-200" },
        { name: "Outlook", icon: Mail, accent: "text-sky-300" },
        { name: "HubSpot", icon: Orbit, accent: "text-orange-300" },
  ];

  return (
        <section id="voice-agent" className="py-24 md:py-28 bg-[#0b0c15] overflow-visible relative scroll-mt-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
            <div className="absolute left-1/2 top-20 -translate-x-1/2 h-52 w-[65%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
        >
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] tracking-[0.14em] font-semibold text-primary mb-5">
                        AI-POWERED
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">AI Voice Systems</h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Intelligent voice automation that handles calls, answers questions, and drives real business outcomes.
                    </p>
        </motion.div>

                <div className="hidden lg:grid lg:grid-cols-[1fr_320px_1fr] items-center gap-6 max-w-6xl mx-auto mb-14">
                    <div className="space-y-5">
                        {[features[0], features[2]].map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 + idx * 0.1 }}
                                className="relative rounded-2xl border border-white/10 bg-[#0d1525]/70 p-5"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`h-12 w-12 rounded-xl border flex items-center justify-center ${item.iconBg}`}>
                                        <item.icon className={`h-5 w-5 ${item.accent}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-gray-300">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 -right-6 w-6 h-px bg-gradient-to-r from-cyan-300/40 to-transparent" />
                                <div className="absolute top-1/2 -right-[2px] h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300/80" />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative mx-auto h-[320px] w-[320px] rounded-full"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 p-[2px] shadow-[0_0_80px_rgba(59,130,246,0.35)]">
                            <div className="h-full w-full rounded-full bg-[#070f1f] flex flex-col items-center justify-center">
                                <Mic className="h-14 w-14 text-white mb-3" />
                                <div className="flex items-end gap-1 h-6">
                                    {[8, 14, 20, 14, 8].map((h, i) => (
                                        <motion.span
                                            key={i}
                                            animate={{ height: [h - 4, h, h - 4] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.08 }}
                                            className="w-1 rounded-full bg-cyan-300"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 rounded-full border border-cyan-300/20 animate-[ping_3s_ease-in-out_infinite]" />
                    </motion.div>

                    <div className="space-y-5">
                        {[features[1], features[3]].map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="relative rounded-2xl border border-white/10 bg-[#0d1525]/70 p-5"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`h-12 w-12 rounded-xl border flex items-center justify-center ${item.iconBg}`}>
                                        <item.icon className={`h-5 w-5 ${item.accent}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-gray-300">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 -left-6 w-6 h-px bg-gradient-to-l from-violet-300/40 to-transparent" />
                                <div className="absolute top-1/2 -left-[2px] h-2 w-2 -translate-y-1/2 rounded-full bg-violet-300/80" />
                            </motion.div>
                        ))}
                    </div>
        </div>

                <div className="lg:hidden mb-12">
                    <div className="mx-auto mb-8 flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/30 bg-[#091323] shadow-[0_0_60px_rgba(34,211,238,0.2)]">
                        <Mic className="h-10 w-10 text-white" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {features.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="rounded-2xl border border-white/10 bg-[#0d1525]/70 p-5"
                            >
                                <div className={`mb-4 h-11 w-11 rounded-xl border flex items-center justify-center ${item.iconBg}`}>
                                    <item.icon className={`h-5 w-5 ${item.accent}`} />
                                </div>
                                <h3 className="text-xl font-display font-semibold text-white mb-1">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
        </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-[#0a1324]/70 p-6 md:p-8"
        >
                    <div className="text-center mb-6 text-gray-300 text-sm md:text-base">Works with your stack</div>

                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4">
                        {stack.map((tool) => (
                            <motion.div
                                key={tool.name}
                                whileHover={{ y: -4 }}
                                className="rounded-xl border border-white/10 bg-[#0f1728] px-3 py-4 flex flex-col items-center justify-center gap-2"
                            >
                                <tool.icon className={`h-6 w-6 ${tool.accent}`} />
                                <span className="text-xs text-gray-300 text-center leading-tight">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold border border-emerald-400/20">
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