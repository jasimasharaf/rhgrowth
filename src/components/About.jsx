import React from 'react';
import { Layers, ShieldCheck, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid glass-card">
          <div className="about-content">
            <div className="badge mb-3">
              <Layers size={14} />
              <span>About RH Growth.in</span>
            </div>

            <h2 className="about-title">
              Building Brands. <span className="text-teal">Growing Presence.</span>
            </h2>

            <p className="about-description">
              RH Growth.in is the social media management wing of <strong>Team RusticHands</strong>. 
              We work with businesses to create, manage and improve their presence across Instagram and Facebook.
            </p>

            <div className="about-features">
              <div className="feature-box">
                <div className="feature-icon-wrapper">
                  <Target size={20} className="feature-icon" />
                </div>
                <div>
                  <h4 className="feature-title">Strategic Execution</h4>
                  <p className="feature-text">Tailored social plans aligned with your target audience.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-icon-wrapper">
                  <TrendingUp size={20} className="feature-icon" />
                </div>
                <div>
                  <h4 className="feature-title">Consistent Management</h4>
                  <p className="feature-text">Regular postings, visual alignment, and audience interaction.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-badge-side">
            <div className="lineage-box">
              <div className="lineage-header">
                <ShieldCheck size={28} className="text-teal" />
                <div>
                  <h3 className="lineage-title">Team RusticHands</h3>
                  <span className="lineage-link">rustichands.in</span>
                </div>
              </div>
              <p className="lineage-desc">
                Operating under parent brand Team RusticHands, RH Growth.in delivers dedicated 
                social media solutions designed for sustainable brand communication.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          padding: 3.5rem;
          align-items: center;
        }

        .mb-3 {
          margin-bottom: 1rem;
        }

        .about-title {
          font-size: 2.5rem;
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }

        .about-description {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .feature-box {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .feature-icon-wrapper {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: rgba(45, 212, 191, 0.1);
          border: 1px solid rgba(45, 212, 191, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-icon {
          color: var(--accent-teal);
        }

        .feature-title {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .feature-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Lineage Box */
        .lineage-box {
          background: rgba(10, 19, 21, 0.8);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .lineage-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .lineage-title {
          font-size: 1.25rem;
          line-height: 1.1;
        }

        .lineage-link {
          font-size: 0.85rem;
          color: var(--accent-teal);
          font-weight: 500;
        }

        .lineage-desc {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .lineage-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-teal);
          background: rgba(45, 212, 191, 0.08);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          align-self: flex-start;
        }

        .lineage-pill .dot {
          width: 6px;
          height: 6px;
          background: var(--accent-teal);
          border-radius: 50%;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          .about-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
