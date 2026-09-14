import React from 'react';
import { MessageSquare, ArrowDown } from 'lucide-react';

export default function CTA({ onOpenContact }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card glass-card">
          <div className="ambient-glow cta-glow"></div>
          
          <div className="cta-content text-center">
            <h2 className="cta-headline">
              Ready to Grow Your <span className="text-teal">Social Presence?</span>
            </h2>

            <p className="cta-text">
              Let's build a social media presence that represents your business and connects with your audience.
            </p>

            <div className="cta-buttons">
              <button onClick={onOpenContact} className="btn-primary cta-btn">
                <MessageSquare size={18} />
                <span>Start a Conversation</span>
              </button>

              <a href="#work" className="btn-secondary cta-btn">
                <span>View Our Work</span>
                <ArrowDown size={18} />
              </a>
            </div>

            <div className="cta-brand-tag">
              RH Growth.in — Social Media Management Wing of Team RusticHands
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          position: relative;
        }

        .cta-card {
          padding: 5rem 3rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(14, 28, 31, 0.85) 0%, rgba(8, 16, 18, 0.95) 100%);
          border: 1px solid var(--border-glow);
        }

        .cta-glow {
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 300px;
          opacity: 0.6;
        }

        .cta-content {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-headline {
          font-size: 3rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .cta-text {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 0.95rem 2rem;
          font-size: 1rem;
        }

        .cta-brand-tag {
          font-size: 0.825rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .cta-card { padding: 3rem 1.5rem; }
          .cta-headline { font-size: 2.25rem; }
          .cta-buttons { flex-direction: column; width: 100%; }
          .cta-buttons button, .cta-buttons a { width: 100%; }
        }
      `}</style>
    </section>
  );
}
