import React, { useState } from 'react';
import { X, ExternalLink, Film, Image as ImageIcon, Layers, ShieldCheck } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

export default function WorkGalleryModal({ category, onClose, onOpenContact }) {
  if (!category) return null;

  const [activeTab, setActiveTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const isSocialMgmt = category.id === 'social-media-management';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="gallery-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="gallery-modal-header">
          <div>
            <span className="gallery-modal-badge">{category.badge}</span>
            <h2 className="gallery-modal-title">{category.title}</h2>
            <p className="gallery-modal-desc">{category.description}</p>
          </div>

          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="gallery-modal-body">
          {/* STANDARD CATEGORIES (Creative Work & Real-Time Work) */}
          {!isSocialMgmt && category.items && (
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
                      <div className="image-lightbox-wrapper" onClick={() => setSelectedMedia(item)}>
                        <img src={item.mediaUrl} alt={item.title} className="gallery-img" />
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
          )}

          {/* SPECIALIZED CATEGORY: SOCIAL MEDIA MANAGEMENT */}
          {isSocialMgmt && (
            <div className="social-mgmt-gallery">
              {/* 1. ZAAD Platforms Section */}
              {category.zaadPlatform && (
                <div className="special-project-section glass-card mb-5">
                  <div className="special-header">
                    <div className="special-badge">Featured Client Project</div>
                    <h3 className="special-title">{category.zaadPlatform.title}</h3>
                    <p className="special-desc">{category.zaadPlatform.description}</p>
                  </div>

                  <div className="special-media-grid">
                    {category.zaadPlatform.items.map((item, idx) => (
                      <div key={idx} className="media-card inner-card">
                        <div className="media-preview-box">
                          {item.type === 'video' ? (
                            <VideoPlayer 
                              src={item.mediaUrl} 
                              poster={item.posterUrl} 
                              title={item.title}
                            />
                          ) : (
                            <div className="image-lightbox-wrapper" onClick={() => setSelectedMedia(item)}>
                              <img src={item.mediaUrl} alt={item.title} className="gallery-img" />
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

              {/* 2. Three Social Media Page Projects */}
              <div className="page-projects-header mb-3">
                <h3 className="page-projects-main-title">Social Media Page Projects</h3>
                <p className="page-projects-main-sub">Structured business page management showcases.</p>
              </div>

              <div className="page-projects-grid">
                {category.pageProjects.map((proj) => (
                  <div key={proj.id} className="page-proj-card glass-card">
                    <div className="page-proj-header">
                      <span className="proj-cat-badge">{proj.category}</span>
                      <h4 className="proj-title">{proj.title}</h4>
                      <p className="proj-desc">{proj.description}</p>
                    </div>

                    <div className="proj-items-list">
                      {proj.items.map((item, i) => (
                        <div key={i} className="proj-media-item">
                          {item.type === 'video' ? (
                            <VideoPlayer 
                              src={item.mediaUrl} 
                              poster={item.posterUrl} 
                              title={item.title}
                            />
                          ) : (
                            <div className="image-lightbox-wrapper" onClick={() => setSelectedMedia(item)}>
                              <img src={item.mediaUrl} alt={item.title} className="gallery-img" />
                            </div>
                          )}
                          <div className="proj-item-meta">
                            <span className="proj-item-name">{item.title}</span>
                            <span className="proj-item-note">{item.note}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Lightbox Popup for Full Image View */}
        {selectedMedia && (
          <div className="lightbox-overlay" onClick={() => setSelectedMedia(null)}>
            <div className="lightbox-content glass-card" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setSelectedMedia(null)}>
                <X size={20} />
              </button>
              <img src={selectedMedia.mediaUrl} alt={selectedMedia.title} className="lightbox-full-img" />
              <div className="lightbox-caption">
                <h4>{selectedMedia.title}</h4>
                <p>{selectedMedia.description || selectedMedia.note}</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="gallery-modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close Gallery</button>
          <button className="btn-primary" onClick={() => { onClose(); onOpenContact(); }}>
            <span>Work With Us</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .gallery-modal-card {
          max-width: 1040px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          background: rgba(8, 16, 18, 0.96);
          border: 1px solid var(--border-glow);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.7);
          position: relative;
          overflow: hidden;
        }

        .gallery-modal-header {
          padding: 2rem 2.25rem 1.5rem 2.25rem;
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
          margin-bottom: 0.35rem;
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

        .media-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .media-card {
          padding: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background: rgba(12, 24, 27, 0.7);
        }

        .media-preview-box {
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #04090a;
          position: relative;
        }

        .image-lightbox-wrapper {
          position: relative;
          cursor: pointer;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .image-lightbox-wrapper:hover .gallery-img {
          transform: scale(1.04);
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

        .image-lightbox-wrapper:hover .image-hover-overlay {
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

        .media-card-info {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .media-category-pill {
          font-size: 0.725rem;
          color: var(--accent-teal);
          font-weight: 600;
        }

        .media-item-title {
          font-size: 1.1rem;
        }

        .media-item-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* ZAAD Platforms & Page Projects */
        .special-project-section {
          padding: 1.75rem;
          background: rgba(14, 28, 31, 0.85);
          border: 1px solid var(--border-glow);
        }

        .special-header {
          margin-bottom: 1.5rem;
        }

        .special-badge {
          display: inline-block;
          font-size: 0.725rem;
          font-weight: 700;
          color: var(--accent-teal);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }

        .special-title {
          font-size: 1.75rem;
          margin-bottom: 0.25rem;
        }

        .special-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .special-media-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .mb-5 { margin-bottom: 2.25rem; }
        .mb-3 { margin-bottom: 1rem; }

        .page-projects-main-title {
          font-size: 1.5rem;
        }

        .page-projects-main-sub {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .page-projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .page-proj-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .proj-cat-badge {
          font-size: 0.725rem;
          color: var(--accent-teal);
          font-weight: 600;
        }

        .proj-title {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .proj-desc {
          font-size: 0.825rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .proj-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .proj-media-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .proj-item-meta {
          display: flex;
          flex-direction: column;
        }

        .proj-item-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .proj-item-note {
          font-size: 0.775rem;
          color: var(--text-secondary);
        }

        /* Lightbox Overlay */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 9, 10, 0.92);
          backdrop-filter: blur(16px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .lightbox-content {
          max-width: 850px;
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
          max-height: 70vh;
          object-fit: contain;
          border-radius: var(--radius-md);
        }

        .lightbox-caption h4 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .lightbox-caption p {
          font-size: 0.85rem;
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

        @media (max-width: 1000px) {
          .media-grid, .special-media-grid, .page-projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
