import React, { useState } from 'react';
import { X, ExternalLink, Check, Image as ImageIcon, Layers, Film } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

export default function WorkGalleryModal({ category, selectedProject, onClose, onOpenContact }) {
  if (!category && !selectedProject) return null;

  const [lightboxMedia, setLightboxMedia] = useState(null);

  // If a specific project was passed directly or selected
  const activeProject = selectedProject || (category?.projects ? category.projects[0] : null);
  const isProjectView = Boolean(activeProject && (selectedProject || category?.id === 'social-media-management'));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="gallery-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="gallery-modal-header">
          <div>
            <span className="gallery-modal-badge">
              {isProjectView ? `${activeProject.category} Project` : category.badge}
            </span>
            <h2 className="gallery-modal-title">
              {isProjectView ? activeProject.title : category.title}
            </h2>
            <p className="gallery-modal-desc">
              {isProjectView ? activeProject.tagline : category.description}
            </p>
          </div>

          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="gallery-modal-body">
          {/* ---------------- PROJECT DETAIL VIEW (For TECHHOUSE.IN, GOODFOOD.IN, FRESH DROPS COCONUT OILS) ---------------- */}
          {isProjectView && activeProject && (
            <div className="project-detail-view">
              
              {/* 1. Prominent Instagram Profile Screenshot (Uncropped, Natural Fit) */}
              <div className="profile-screenshot-hero-box glass-card">
                <span className="screenshot-label-tag">Instagram Profile Screenshot</span>
                <div className="screenshot-frame">
                  <img 
                    src={activeProject.profileScreenshot} 
                    alt={`${activeProject.title} Instagram Profile Screenshot`}
                    className="screenshot-img-contain"
                    onClick={() => setLightboxMedia({
                      mediaUrl: activeProject.profileScreenshot,
                      title: `${activeProject.title} — Instagram Profile Screenshot`,
                      description: activeProject.tagline
                    })}
                  />
                </div>
              </div>

              {/* 2. What We Created Section */}
              <div className="what-we-created-box glass-card mb-4">
                <h3 className="section-block-title">What We Created</h3>
                <div className="created-bullets-grid">
                  {activeProject.whatWeCreated.map((item, idx) => (
                    <div key={idx} className="bullet-item">
                      <Check size={16} className="text-teal flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ---------------- STANDARD CATEGORY GALLERY (Creative Production & Real-Time Work) ---------------- */}
          {!isProjectView && category?.items && (
            <div className="standard-category-view">
              
              {/* Introduction Box for Creative Production */}
              {category.introText && (
                <div className="category-intro-box glass-card mb-4">
                  <p className="category-intro-p">{category.introText}</p>
                  
                  {category.capabilities && (
                    <div className="capabilities-pills-row mt-3">
                      {category.capabilities.map((cap, i) => (
                        <span key={i} className="capability-pill">
                          <Check size={12} className="text-teal" />
                          <span>{cap}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="media-grid">
                {category.items.map((item, idx) => (
                  <div key={item.id || idx} className="media-card glass-card">
                    <div className="media-preview-box">
                      {item.type === 'video' ? (
                        <VideoPlayer 
                          src={item.mediaUrl} 
                          poster={item.posterUrl || category.coverImage}
                          title={item.title}
                        />
                      ) : (
                        <div className="image-lightbox-trigger" onClick={() => setLightboxMedia(item)}>
                          <img src={item.mediaUrl} alt={item.title} className="gallery-img-cover" />
                          <div className="image-hover-overlay">
                            <span className="expand-pill">
                              <ImageIcon size={14} /> View Full Image
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="media-card-info">
                      <span className="media-category-pill">{item.category}</span>
                      <h4 className="media-item-title">{item.title}</h4>
                      <p className="media-item-desc">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Full Image Lightbox Overlay */}
        {lightboxMedia && (
          <div className="lightbox-overlay" onClick={() => setLightboxMedia(null)}>
            <div className="lightbox-content glass-card" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setLightboxMedia(null)}>
                <X size={20} />
              </button>
              <img src={lightboxMedia.mediaUrl} alt={lightboxMedia.title} className="lightbox-full-img" />
              <div className="lightbox-caption">
                <h4>{lightboxMedia.title}</h4>
                <p>{lightboxMedia.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="gallery-modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close Project View</button>
          <button className="btn-primary" onClick={() => { onClose(); onOpenContact(); }}>
            <span>Discuss Social Media Management</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .gallery-modal-card {
          max-width: 1040px;
          width: 100%;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          background: rgba(8, 16, 18, 0.96);
          border: 1px solid var(--border-glow);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.75);
          position: relative;
          overflow: hidden;
        }

        .gallery-modal-header {
          padding: 1.75rem 2.25rem 1.25rem 2.25rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .gallery-modal-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-teal);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .gallery-modal-title {
          font-size: 2.1rem;
          margin-bottom: 0.25rem;
        }

        .gallery-modal-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .gallery-modal-body {
          padding: 2rem 2.25rem;
          overflow-y: auto;
          flex: 1;
        }

        /* Profile Screenshot Hero Container */
        .profile-screenshot-hero-box {
          padding: 1.5rem;
          background: rgba(12, 24, 27, 0.85);
          border: 1px solid var(--border-glow);
          margin-bottom: 2rem;
          position: relative;
        }

        .screenshot-label-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-teal);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
          display: block;
        }

        .screenshot-frame {
          width: 100%;
          max-height: 780px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #04090a;
          border-radius: var(--radius-md);
          padding: 1rem;
          border: 1px solid var(--border-color);
          cursor: pointer;
        }

        .screenshot-img-contain {
          max-width: 100%;
          max-height: 720px;
          object-fit: contain; /* Preserves natural proportions, zero distortion/cropping */
          display: block;
          border-radius: var(--radius-sm);
          transition: transform 0.3s ease;
        }

        .screenshot-img-contain:hover {
          transform: scale(1.01);
        }

        /* What We Created Box */
        .what-we-created-box {
          padding: 1.75rem;
          background: rgba(14, 28, 31, 0.75);
          border: 1px solid var(--border-color);
        }

        .section-block-title {
          font-size: 1.35rem;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .created-bullets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
        }

        .bullet-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .flex-shrink-0 { flex-shrink: 0; }

        /* OUR WORK Media Gallery */
        .our-work-gallery-section {
          margin-top: 2rem;
        }

        .our-work-main-title {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
        }

        .our-work-sub {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .our-work-media-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 1.25rem;
        }

        .our-work-media-card {
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: rgba(10, 20, 22, 0.75);
        }

        .media-frame {
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #04090a;
          position: relative;
          aspect-ratio: 16 / 10;
        }

        .image-lightbox-trigger {
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-img-contain {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
        }

        .gallery-img-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .image-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4, 10, 11, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }

        .image-lightbox-trigger:hover .image-hover-overlay {
          opacity: 1;
        }

        .expand-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          background: var(--accent-teal);
          color: #041012;
          font-weight: 700;
          font-size: 0.8rem;
          border-radius: var(--radius-full);
        }

        .media-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .media-cat-badge {
          font-size: 0.725rem;
          color: var(--accent-teal);
          font-weight: 600;
        }

        .media-title {
          font-size: 1.05rem;
        }

        .media-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        /* Lightbox Overlay */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 9, 10, 0.94);
          backdrop-filter: blur(16px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .lightbox-content {
          max-width: 900px;
          width: 100%;
          padding: 1.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .lightbox-close {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--accent-teal);
          color: #041012;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .lightbox-full-img {
          width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: var(--radius-md);
        }

        .lightbox-caption h4 {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
        }

        .lightbox-caption p {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .gallery-modal-footer {
          padding: 1.25rem 2.25rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
          background: rgba(6, 13, 15, 0.95);
        }

        .category-intro-box {
          padding: 1.5rem 1.75rem;
          background: rgba(14, 28, 31, 0.85);
          border: 1px solid var(--border-glow);
        }

        .category-intro-p {
          font-size: 1rem;
          color: var(--text-primary);
          line-height: 1.6;
          font-weight: 500;
        }

        .capabilities-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .capability-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.775rem;
          padding: 0.3rem 0.7rem;
          background: rgba(45, 212, 191, 0.08);
          border: 1px solid rgba(45, 212, 191, 0.22);
          border-radius: var(--radius-full);
          color: var(--accent-teal);
          font-weight: 600;
        }

        .mt-3 { margin-top: 1rem; }
        .mb-4 { margin-bottom: 1.5rem; }
        .mb-3 { margin-bottom: 1rem; }

        @media (max-width: 900px) {
          .created-bullets-grid, .our-work-media-grid {
            grid-template-columns: 1fr;
          }
          .gallery-modal-card {
            max-height: 95vh;
          }
        }
      `}</style>
    </div>
  );
}
