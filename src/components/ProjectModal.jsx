import React from 'react';
import { X, ExternalLink, Check, Layers, Shield } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="modal-tag-pill">{tag}</span>
            ))}
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        <div className="modal-preview-wrapper">
          <img src={project.image} alt={project.title} className="modal-preview-img" />
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4 className="modal-section-title">Overview & Execution</h4>
            <p className="modal-text">{project.overview}</p>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">What We Delivered</h4>
            <ul className="modal-list">
              {project.deliverables.map((item, i) => (
                <li key={i}>
                  <Check size={16} className="text-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-note glass-card">
            <Shield size={18} className="text-teal" />
            <span>
              Real execution work conducted under RH Growth.in frameworks.
            </span>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>Close Preview</button>
          <button className="btn-primary" onClick={() => { onClose(); onOpenContact(); }}>
            <span>Discuss Similar Project</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .modal-content {
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
          background: rgba(12, 22, 24, 0.95);
          border: 1px solid var(--border-glow);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }

        .modal-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .modal-close:hover {
          background: var(--accent-teal);
          color: #040e10;
        }

        .modal-header {
          margin-bottom: 1.5rem;
        }

        .modal-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .modal-tag-pill {
          font-size: 0.75rem;
          padding: 0.25rem 0.65rem;
          background: rgba(45, 212, 191, 0.1);
          border: 1px solid rgba(45, 212, 191, 0.25);
          color: var(--accent-teal);
          border-radius: var(--radius-full);
          font-weight: 600;
        }

        .modal-title {
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }

        .modal-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .modal-preview-wrapper {
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          margin-bottom: 1.75rem;
          aspect-ratio: 16 / 9;
        }

        .modal-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-body {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .modal-section-title {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .modal-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .modal-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .modal-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.925rem;
          color: var(--text-secondary);
        }

        .modal-note {
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          border-radius: var(--radius-md);
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }

        @media (max-width: 600px) {
          .modal-content { padding: 1.5rem; }
          .modal-footer { flex-direction: column; width: 100%; }
          .modal-footer button { width: 100%; }
        }
      `}</style>
    </div>
  );
}
