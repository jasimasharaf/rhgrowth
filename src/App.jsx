import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="app-main">
      <Navbar onOpenContact={handleOpenContact} />
      
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <About />
        <Services />
        <Portfolio onOpenContact={handleOpenContact} />
        <Process />
        <CTA onOpenContact={handleOpenContact} />
      </main>

      <Footer onOpenContact={handleOpenContact} />

      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
