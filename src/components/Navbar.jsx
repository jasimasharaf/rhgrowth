import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-brand">
          <span className="brand-name">RH Growth<span className="domain-ext">.in</span></span>
          <span className="brand-sub">by Team RusticHands</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-only">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Our Work</a>
          <a href="#process">How We Work</a>
          <a href="#team">Team</a>
        </nav>

        <div className="nav-actions desktop-only">
          <button onClick={onOpenContact} className="btn-primary nav-btn">
            <span>Let's Work Together</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-links">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)}>How We Work</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)}>Team</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }} 
              className="btn-primary w-full mt-4"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight size={18} />
            </button>
          </nav>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 90;
          padding: 1.25rem 0;
          transition: var(--transition);
        }

        .navbar-header.scrolled {
          padding: 0.85rem 0;
          background: rgba(7, 13, 15, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.45rem;
          color: var(--text-primary);
          letter-spacing: -0.03em;
        }

        .domain-ext {
          color: var(--accent-teal);
        }

        .brand-sub {
          font-size: 0.725rem;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
          font-weight: 500;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          font-size: 0.925rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .nav-links a:hover {
          color: var(--accent-teal);
        }

        .nav-btn {
          padding: 0.65rem 1.4rem;
          font-size: 0.875rem;
        }

        .mobile-toggle {
          color: var(--text-primary);
          padding: 0.5rem;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(14, 25, 27, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-color);
          padding: 2rem;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav-links a {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .desktop-only { display: flex; }
        .mobile-only { display: none; }

        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
