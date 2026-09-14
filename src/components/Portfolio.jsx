import React, { useState } from 'react';
import { workCategories } from '../data/portfolioData';
import WorkGalleryModal from './WorkGalleryModal';
import { ArrowRight, Layers, Sparkles, Video } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';

export default function Portfolio({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Helper icons for the 3 main cards
  const getCardIcon = (id) => {
    switch(id) {
      case 'creative-work':
        return <Sparkles size={28} className="card-header-icon text-teal" />;
      case 'realtime-work':
        return <Video size={28} className="card-header-icon text-teal" />;
      case 'social-media-management':
        return <InstagramIcon size={28} className="card-header-icon text-teal" />;
      default:
        return <Layers size={28} className="card-header-icon text-teal" />;
    }
  };

  return (
    <section id="work" className="section portfolio-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge mb-3">
            <Layers size={14} />
            <span>Our Work</span>
          </div>
          <h2 className="section-title">
            Our <span className="text-teal">Work</span>
          </h2>
          <p className="section-subtitle">
            Real projects. Real execution. Continuous learning. Explore our three main pillars of social media execution.
          </p>
        </div>

        {/* 3 MAIN CARDS ONLY */}
        <div className="three-cards-grid">
          {workCategories.map((cat) => (
            <div key={cat.id} className="main-work-card glass-card">
              <div className="card-visual-wrapper">
                <img src={cat.coverImage} alt={cat.title} className="card-cover-img" />
                <div className="card-cover-gradient"></div>
                <div className="card-badge-tag">{cat.badge}</div>
              </div>

              <div className="card-body-content">
                <div className="card-icon-row">
                  {getCardIcon(cat.id)}
                  <h3 className="work-card-title">{cat.title}</h3>
                </div>

                <p className="work-card-description">{cat.description}</p>

                <div className="card-footer-action">
                  <button 
                    onClick={() => setSelectedCategory(cat)} 
                    className="btn-primary w-full view-work-btn"
                  >
                    <span>View Work</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dedicated Gallery Modal */}
      {selectedCategory && (
        <WorkGalleryModal 
          category={selectedCategory} 
          onClose={() => setSelectedCategory(null)} 
          onOpenContact={onOpenContact}
        />
      )}

      <style>{`
        .portfolio-section {
          position: relative;
        }

        .three-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 1rem;
        }

        .main-work-card {
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: var(--transition);
        }

        .card-visual-wrapper {
          position: relative;
          border-radius: calc(var(--radius-lg) - 4px);
          overflow: hidden;
          aspect-ratio: 16 / 10;
          background: var(--bg-surface);
        }

        .card-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .main-work-card:hover .card-cover-img {
          transform: scale(1.05);
        }

        .card-cover-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(8, 16, 18, 0.85) 100%);
        }

        .card-badge-tag {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          padding: 0.3rem 0.75rem;
          background: rgba(8, 16, 18, 0.85);
          border: 1px solid var(--border-glow);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-teal);
          backdrop-filter: blur(10px);
        }

        .card-body-content {
          padding: 1.5rem 0.75rem 0.75rem 0.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-icon-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .work-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .work-card-description {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .card-footer-action {
          margin-top: auto;
        }

        .view-work-btn {
          width: 100%;
          justify-content: center;
          padding: 0.8rem 1.25rem;
        }

        @media (max-width: 1024px) {
          .three-cards-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
