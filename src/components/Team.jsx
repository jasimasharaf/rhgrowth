import React from 'react';
import { Users, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Team({ onOpenContact }) {
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge mb-3">
            <Users size={14} />
            <span>Leadership</span>
          </div>
          <h2 className="section-title">
            Meet the <span className="text-teal">Team</span>
          </h2>
          <p className="section-subtitle">
            Two founders. One vision — helping businesses build a stronger digital presence.
          </p>
        </div>

        <div className="team-card glass-card">
          <div className="team-visual-side">
            <div className="team-image-container">
              <img 
                src="/assets/founders.jpg" 
                alt="Founders of Team RusticHands & RH Growth.in" 
                className="team-main-img" 
              />
              <div className="team-image-gradient"></div>
              <div className="team-image-badge">
                <ShieldCheck size={16} className="text-teal" />
                <span>Founders & Directors</span>
              </div>
            </div>
          </div>

          <div className="team-info-side">
            <div className="team-tagline-box">
              <h3 className="team-founders-title">Co-Founders & Executive Leads</h3>
            </div>

            <p className="team-quote">
              "Two founders. One vision — helping businesses build a stronger digital presence."
            </p>

            <p className="team-bio">
              We operate Team RusticHands and RH Growth.in together as hands-on founders. 
              Our focus is straightforward: working directly with business owners to build creative content, 
              maintain consistent page management, and execute practical strategies across Instagram and Facebook.
            </p>

            <div className="founder-roles-grid">
              <div className="role-card">
                <span className="role-title">Creative & Content Lead</span>
                <span className="role-sub">Visual identity, grid design & creative communication.</span>
              </div>
              <div className="role-card">
                <span className="role-title">Strategy & Growth Lead</span>
                <span className="role-sub">Social media planning, account coordination & campaign execution.</span>
              </div>
            </div>

            <div className="team-action">
              <button onClick={onOpenContact} className="btn-primary">
                <span>Connect With the Founders</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .team-section {
          position: relative;
        }

        .team-card {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3.5rem;
          padding: 2.5rem;
          align-items: center;
        }

        .team-visual-side {
          position: relative;
        }

        .team-image-container {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 16 / 11;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
        }

        .team-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-card:hover .team-main-img {
          transform: scale(1.03);
        }

        .team-image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(6, 14, 16, 0.9) 100%);
        }

        .team-image-badge {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          background: rgba(10, 20, 22, 0.85);
          border: 1px solid var(--border-glow);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          backdrop-filter: blur(12px);
        }

        .team-info-side {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .team-founders-title {
          font-size: 2rem;
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .team-brand-lineage {
          font-size: 0.875rem;
          color: var(--accent-teal);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .team-quote {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.5;
          padding-left: 1rem;
          border-left: 3px solid var(--accent-teal);
        }

        .team-bio {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .founder-roles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .role-card {
          padding: 1rem;
          background: rgba(8, 17, 19, 0.7);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
        }

        .role-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .role-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .team-action {
          margin-top: 0.75rem;
        }

        @media (max-width: 900px) {
          .team-card {
            grid-template-columns: 1fr;
            padding: 1.75rem;
          }
          .founder-roles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
