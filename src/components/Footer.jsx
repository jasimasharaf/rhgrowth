import React from 'react';
import { MessageSquare, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './BrandIcons';

export default function Footer({ onOpenContact }) {
  const whatsappMessage = encodeURIComponent("Hi RH Growth, I would like to discuss social media management for my business.");
  const whatsappUrl = `https://wa.me/917510903898?text=${whatsappMessage}`;

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <span className="logo-title">RH Growth<span className="logo-ext">.in</span></span>
              <span className="logo-sub">Social Media Management by Team RusticHands</span>
            </a>
            <p className="footer-about-text">
              We help businesses build a stronger digital presence through creative content, 
              strategic social media management and consistent brand communication.
            </p>
            <div className="parent-badge">
              <ShieldCheck size={16} className="text-teal" />
              <span>Part of Team RusticHands</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Our Work</a></li>
              <li><a href="#process">How We Work</a></li>
              <li><a href="#team">Leadership Team</a></li>
              <li><a href="#why-us">Why RH Growth</a></li>
            </ul>
          </div>

          {/* Connect & Lineage */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Connect With Us</h4>
            <div className="social-links-grid">
              <a href="https://www.instagram.com/rhgrowth.in/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link-btn" title="Instagram">
                <InstagramIcon size={18} />
                <span>Instagram</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-link-btn" title="WhatsApp">
                <MessageSquare size={18} />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:rhgrowth.in@gmail.com" className="social-link-btn" title="Email">
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a href="tel:+917510903898" className="social-link-btn" title="Call">
                <MessageSquare size={18} />
                <span>7510903898</span>
              </a>
            </div>

            <div className="parent-link-card glass-card">
              <span className="parent-label">Parent Brand Website</span>
              <a href="https://rustichands.in" target="_blank" rel="noopener noreferrer" className="parent-url">
                <span>rustichands.in</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RH Growth.in — All rights reserved.</p>
          <p className="footer-credit">An initiative by Team RusticHands</p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #04090a;
          border-top: 1px solid var(--border-color);
          padding: 4.5rem 0 2rem 0;
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 1fr;
          gap: 3.5rem;
          margin-bottom: 3.5rem;
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.25rem;
        }

        .logo-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .logo-ext { color: var(--accent-teal); }

        .logo-sub {
          font-size: 0.775rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .footer-about-text {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
          max-width: 380px;
        }

        .parent-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          background: rgba(45, 212, 191, 0.08);
          border: 1px solid rgba(45, 212, 191, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .footer-col-title {
          font-size: 1.05rem;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-nav-list a {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .footer-nav-list a:hover {
          color: var(--accent-teal);
        }

        .social-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .social-link-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 0.85rem;
          transition: var(--transition);
        }

        .social-link-btn:hover {
          background: rgba(45, 212, 191, 0.1);
          border-color: var(--accent-teal);
          color: var(--accent-teal);
        }

        .parent-link-card {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .parent-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .parent-url {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 1rem;
          font-weight: 700;
          color: var(--accent-teal);
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
