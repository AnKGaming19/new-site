import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-50"
        >
          <div className="bg-[#0f111a]/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Cookie size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Cookie Policy</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We use cookies to enhance your experience and analyze our traffic. No personal data is sold.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={handleAccept}
                  className="flex-1 py-2 bg-white text-black font-bold text-sm rounded-lg hover:bg-primary transition-colors"
                >
                  Accept
                </button>
                <button 
                  onClick={handleDecline}
                  className="flex-1 py-2 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-lg hover:bg-white/10 transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 p-1 text-gray-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;