import React from 'react';
import { ArrowDown, Sparkles, CheckCircle2, Send } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section">
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">
            Welcome to <span className="text-teal">RH Growth</span>
          </h1>

          <h2 className="hero-subheadline">
            Social Media Management by Team RusticHands
          </h2>

          <p className="hero-description">
            We help businesses build a stronger digital presence through creative content, 
            strategic social media management and consistent brand communication.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              <span>View Our Work</span>
              <ArrowDown size={18} />
            </a>
            <button onClick={onOpenContact} className="btn-secondary">
              <span>Let's Work Together</span>
              <Send size={16} />
            </button>
          </div>

          <div className="hero-pillars">
            <div className="pillar-item">
              <CheckCircle2 size={16} className="pillar-icon" />
              <span>Instagram & Facebook Strategy</span>
            </div>
            <div className="pillar-item">
              <CheckCircle2 size={16} className="pillar-icon" />
              <span>Brand-Focused Creative Content</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="founder-image-card glass-card">
            <div className="card-image-wrapper">
              <img 
                src="https://res.cloudinary.com/zxszrucp/image/upload/v1789496445/WhatsApp_Image_2026-09-14_at_11.58.12_PM.jpg" 
                alt="Co-founders of Team RusticHands and RH Growth.in" 
                className="founder-img"
              />
              <div className="image-overlay-gradient"></div>
            </div>
            
            <div className="card-caption">
              <div className="caption-text">
                <span className="caption-title">Founders</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 9rem;
          padding-bottom: 5rem;
          overflow: hidden;
        }

        .glow-1 {
          top: 5%;
          left: -100px;
          opacity: 0.8;
        }

        .glow-2 {
          top: 30%;
          right: -120px;
          opacity: 0.6;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .mb-4 {
          margin-bottom: 1.25rem;
        }

        .hero-headline {
          font-size: 3.6rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }

        .text-teal {
          color: var(--accent-teal);
        }

        .hero-headline .domain {
          color: var(--text-primary);
        }

        .hero-subheadline {
          font-size: 1.5rem;
          color: var(--text-primary);
          font-weight: 600;
          margin-bottom: 1.25rem;
          opacity: 0.95;
        }

        .hero-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          max-width: 580px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .hero-pillars {
          display: flex;
          gap: 1.75rem;
          flex-wrap: wrap;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
          width: 100%;
        }

        .pillar-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .pillar-icon {
          color: var(--accent-teal);
        }

        /* Hero Visual Card */
        .hero-visual {
          position: relative;
        }

        .founder-image-card {
          padding: 0.75rem;
          overflow: hidden;
          position: relative;
        }

        .card-image-wrapper {
          position: relative;
          border-radius: calc(var(--radius-lg) - 4px);
          overflow: hidden;
          aspect-ratio: 16 / 10;
          background: var(--bg-surface);
        }

        .founder-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .founder-image-card:hover .founder-img {
          transform: scale(1.03);
        }

        .image-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(9, 18, 20, 0.85) 100%);
        }

        .card-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0.5rem 0.5rem 0.5rem;
        }

        .caption-text {
          display: flex;
          flex-direction: column;
        }

        .caption-title {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .caption-sub {
          font-size: 0.8rem;
          color: var(--accent-teal);
        }

        .caption-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.75rem;
          background: rgba(45, 212, 191, 0.1);
          border: 1px solid rgba(45, 212, 191, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: var(--accent-teal);
          font-weight: 600;
        }

        .live-pulse {
          width: 8px;
          height: 8px;
          background-color: var(--accent-teal);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-teal);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(45, 212, 191, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(45, 212, 191, 0); }
        }

        @media (max-width: 1024px) {
          .hero-headline { font-size: 3rem; }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-headline { font-size: 2.5rem; }
          .hero-subheadline { font-size: 1.25rem; }
        }

        @media (max-width: 480px) {
          .hero-headline { font-size: 2.1rem; }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions a, .hero-actions button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
