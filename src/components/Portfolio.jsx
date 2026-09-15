import React, { useState } from 'react';
import { workCategories } from '../data/portfolioData';
import WorkGalleryModal from './WorkGalleryModal';
import { ArrowRight, Layers, Sparkles, Video, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';

export default function Portfolio({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const creativeCategory = workCategories.find(c => c.id === 'creative-work');
  const realtimeCategory = workCategories.find(c => c.id === 'realtime-work');
  const socialMgmtCategory = workCategories.find(c => c.id === 'social-media-management');

  return (
    <section id="work" className="section portfolio-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge mb-3">
            <Layers size={14} />
            <span>Our Work</span>
          </div>
          <h2 className="section-title">
            Our <span className="text-teal">Work</span>
          </h2>
          <p className="section-subtitle">
            Real projects. Real execution. Continuous learning. Explore our social media management and creative execution.
          </p>
        </div>

        {/* ---------------- 1 & 2. CREATIVE WORK & REAL-TIME WORK (Top Grid) ---------------- */}
        <div className="top-categories-grid mb-5">
          {/* CREATIVE WORK */}
          {creativeCategory && (
            <div className="main-work-card glass-card">
              <div className="card-visual-wrapper">
                <img src={creativeCategory.coverImage} alt={creativeCategory.title} className="card-cover-img" />
                <div className="card-cover-gradient"></div>
                <div className="card-badge-tag">{creativeCategory.badge}</div>
              </div>
              <div className="card-body-content">
                <div className="card-icon-row">
                  <Sparkles size={24} className="text-teal" />
                  <h3 className="work-card-title">{creativeCategory.title}</h3>
                </div>
                <p className="work-card-description">{creativeCategory.description}</p>
                <button 
                  onClick={() => setSelectedCategory(creativeCategory)} 
                  className="btn-primary w-full view-work-btn"
                >
                  <span>View Work</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* REAL-TIME WORK */}
          {realtimeCategory && (
            <div className="main-work-card glass-card">
              <div className="card-visual-wrapper">
                <img src={realtimeCategory.coverImage} alt={realtimeCategory.title} className="card-cover-img" />
                <div className="card-cover-gradient"></div>
                <div className="card-badge-tag">{realtimeCategory.badge}</div>
              </div>
              <div className="card-body-content">
                <div className="card-icon-row">
                  <Video size={24} className="text-teal" />
                  <h3 className="work-card-title">{realtimeCategory.title}</h3>
                </div>
                <p className="work-card-description">{realtimeCategory.description}</p>
                <button 
                  onClick={() => setSelectedCategory(realtimeCategory)} 
                  className="btn-primary w-full view-work-btn"
                >
                  <span>View Work</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ---------------- 3. SOCIAL MEDIA MANAGEMENT (Prominent Feature Section) ---------------- */}
        {socialMgmtCategory && (
          <div className="social-mgmt-prominent-box glass-card">
            <div className="social-mgmt-header text-center mb-4">
              <div className="badge mb-2">
                <InstagramIcon size={14} />
                <span>Core Agency Service</span>
              </div>
              <h3 className="social-mgmt-main-title">{socialMgmtCategory.title}</h3>
              <p className="social-mgmt-main-subtitle">{socialMgmtCategory.subtitle}</p>
            </div>

            {/* THREE INSTAGRAM PROJECT CARDS */}
            <div className="instagram-projects-grid">
              {socialMgmtCategory.projects && socialMgmtCategory.projects.map((project) => (
                <div key={project.id} className="insta-project-card glass-card">
                  
                  {/* Uncropped, Properly Framed Screenshot Container */}
                  <div className="card-screenshot-wrapper">
                    <img 
                      src={project.profileScreenshot} 
                      alt={`${project.title} Instagram Profile Screenshot`} 
                      className="card-screenshot-contain"
                    />
                  </div>

                  <div className="card-project-body">
                    <div className="card-project-meta mb-2">
                      <span className="project-cat-pill">{project.category}</span>
                      <h4 className="project-card-name">{project.title}</h4>
                    </div>

                    <p className="project-card-tagline">{project.tagline}</p>

                    <button 
                      onClick={() => setSelectedProject(project)} 
                      className="btn-primary w-full view-project-action-btn mt-auto"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Dedicated Gallery / Project Detail Modal */}
      {(selectedCategory || selectedProject) && (
        <WorkGalleryModal 
          category={selectedCategory} 
          selectedProject={selectedProject}
          onClose={() => { setSelectedCategory(null); setSelectedProject(null); }} 
          onOpenContact={onOpenContact}
        />
      )}

      <style>{`
        .portfolio-section {
          position: relative;
        }

        .top-categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
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
          aspect-ratio: 16 / 9;
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
          transform: scale(1.04);
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
          margin-bottom: 0.5rem;
        }

        .work-card-title {
          font-size: 1.35rem;
          font-weight: 800;
        }

        .work-card-description {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .view-work-btn {
          margin-top: auto;
          padding: 0.8rem 1.25rem;
        }

        /* Prominent Social Media Management Feature Box */
        .social-mgmt-prominent-box {
          padding: 3rem 2.25rem;
          background: linear-gradient(180deg, rgba(14, 28, 31, 0.85) 0%, rgba(8, 16, 18, 0.95) 100%);
          border: 1px solid var(--border-glow);
          position: relative;
        }

        .social-mgmt-main-title {
          font-size: 2.25rem;
          margin-bottom: 0.35rem;
          letter-spacing: -0.02em;
        }

        .social-mgmt-main-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 680px;
          margin: 0 auto;
        }

        /* 3 Instagram Project Cards Grid */
        .instagram-projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-top: 2rem;
        }

        .insta-project-card {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          background: rgba(10, 20, 22, 0.85);
          border: 1px solid var(--border-color);
          transition: var(--transition);
        }

        .insta-project-card:hover {
          border-color: var(--border-glow);
          transform: translateY(-4px);
        }

        /* Natural, Uncropped Screenshot Wrapper */
        .card-screenshot-wrapper {
          width: 100%;
          height: 280px;
          background: #04090a;
          border-radius: calc(var(--radius-md) - 2px);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border: 1px solid var(--border-color);
        }

        .card-screenshot-contain {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* Preserves exact proportions, zero cropping/stretching */
          display: block;
          border-radius: var(--radius-sm);
        }

        .card-project-body {
          padding: 1.25rem 0.5rem 0.5rem 0.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-cat-pill {
          font-size: 0.725rem;
          font-weight: 700;
          color: var(--accent-teal);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
          display: block;
        }

        .project-card-name {
          font-size: 1.35rem;
          font-weight: 800;
        }

        .project-card-tagline {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .view-project-action-btn {
          padding: 0.75rem 1.25rem;
          font-size: 0.875rem;
          letter-spacing: 0.04em;
        }

        .mb-5 { margin-bottom: 2.5rem; }
        .mb-4 { margin-bottom: 1.5rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mt-auto { margin-top: auto; }
        .w-full { width: 100%; }

        @media (max-width: 1024px) {
          .top-categories-grid, .instagram-projects-grid {
            grid-template-columns: 1fr;
          }
          .social-mgmt-prominent-box {
            padding: 2rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
