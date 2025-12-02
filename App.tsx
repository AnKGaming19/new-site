import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import VoiceAgent from './components/VoiceAgent';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans selection:bg-primary selection:text-dark-900">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <Process />
        <VoiceAgent />
        <About />
        <Contact />
      </main>

      <Footer />
      <CookieConsent />
      <ChatWidget />
    </div>
  );
};

export default App;