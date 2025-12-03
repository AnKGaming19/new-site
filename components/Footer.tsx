import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            <div className="col-span-1 md:col-span-1">
                <a href="#" className="flex items-center gap-2 mb-6">
                <Anchor className="text-primary w-6 h-6" />
                <span className="font-display font-bold text-xl text-white">
                    AI <span className="text-primary">ANCHOR</span>
                </span>
                </a>
                <p className="text-gray-400 text-sm leading-relaxed">
                Pioneering the next generation of artificial intelligence solutions for forward-thinking enterprises.
                </p>
            </div>

            <div>
                <h4 className="font-bold text-white mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
            </div>

          

            <div>
                <h4 className="font-bold text-white mb-6">Social</h4>
                <div className="flex gap-4">
                <a 
                    href="https://www.linkedin.com/company/aianchor/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-dark-900 transition-all"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                <a 
                    href="https://www.instagram.com/aianchor_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-dark-900 transition-all"
                    aria-label="Instagram"
                >
                    <Instagram className="w-5 h-5" />
                </a>
                </div>
            </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AI Anchor Consulting. All rights reserved.
            </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
