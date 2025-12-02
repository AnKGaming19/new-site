import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorSpotlight: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
      style={{
        background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.25) 0%, rgba(112, 0, 255, 0.15) 30%, transparent 70%)',
      }}
    />
  );
};

export default CursorSpotlight;