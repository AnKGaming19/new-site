import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ChristmasAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user has already seen the alert
    const hasSeenAlert = localStorage.getItem('christmasAlertSeen');
    
    if (!hasSeenAlert) {
      // Show alert after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('christmasAlertSeen', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f111a] border border-red-500/30 rounded-2xl max-w-md w-full relative overflow-visible shadow-[0_0_50px_rgba(239,68,68,0.2)]"
            >
              {/* Hanging Cartoon Santa Hat Image */}
              <img 
                src="/Santa_hat.svg.png" 
                alt="Santa Hat" 
                className="absolute -top-16 -left-24 w-44 h-auto z-20 transform -rotate-[25deg] filter drop-shadow-xl pointer-events-none"
              />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
                title="Close Christmas alert"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="p-8 pt-12 text-center relative overflow-hidden rounded-2xl">
                {/* Background Snow Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                     {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full w-1 h-1"
                            initial={{ 
                                x: Math.random() * 400, 
                                y: -10 
                            }}
                            animate={{ 
                                y: 400,
                                x: `calc(${Math.random() * 400}px + ${Math.random() * 50 - 25}px)`
                            }}
                            transition={{ 
                                duration: Math.random() * 3 + 2, 
                                repeat: Infinity, 
                                ease: "linear",
                                delay: Math.random() * 2
                            }}
                        />
                     ))}
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl font-display font-bold text-white mb-4">
                        Merry <span className="text-red-500">Christmas!</span>
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        From the AI Anchor team. Wishing you a peaceful holiday season filled with joy, growth, and meaningful moments.
                    </p>
                    
                    <button
                        onClick={handleClose}
                        className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-lg shadow-lg shadow-red-500/20 transition-all transform hover:scale-105"
                    >
                        Explore the Future
                    </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};


export default ChristmasAlert;


