import React, { useState } from 'react';
import { X, MessageSquare, Mail, Phone, Send, CheckCircle, Shield } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    platform: 'Instagram & Facebook',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent("Hi RH Growth, I would like to discuss social media management for my business.");
  const whatsappUrl = `https://wa.me/917510903898?text=${whatsappMessage}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="contact-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="contact-modal-header text-center">
          <div className="badge mb-2">
            <MessageSquare size={14} />
            <span>RH Growth Contact</span>
          </div>
          <h2 className="contact-modal-title">Start a Conversation</h2>
          <p className="contact-modal-sub">
            Let's build a social media presence that represents your business and connects with your audience.
          </p>
        </div>

        {/* Quick Instant Channels */}
        <div className="instant-channels">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="channel-btn whatsapp-btn"
          >
            <MessageSquare size={18} />
            <span>WhatsApp (7510903898)</span>
          </a>

          <a 
            href="mailto:rhgrowth.in@gmail.com?subject=Social%20Media%20Inquiry%20-%20RH%20Growth" 
            className="channel-btn email-btn"
          >
            <Mail size={18} />
            <span>rhgrowth.in@gmail.com</span>
          </a>

          <a 
            href="tel:+917510903898" 
            className="channel-btn phone-btn"
          >
            <Phone size={18} />
            <span>Call (+91 7510903898)</span>
          </a>

          <a 
            href="https://www.instagram.com/rhgrowth.in/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="channel-btn insta-btn"
          >
            <MessageSquare size={18} />
            <span>@rhgrowth.in</span>
          </a>
        </div>

        <div className="modal-divider">
          <span>or send us a message</span>
        </div>

        {submitted ? (
          <div className="success-box text-center">
            <CheckCircle size={44} className="text-teal mb-2" />
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. The RH Growth.in team will respond to your inquiry shortly.</p>
            <button className="btn-secondary mt-4" onClick={() => { setSubmitted(false); onClose(); }}>
              Close Window
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Rahul Sharma" 
                  className="form-input" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Business Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Rustic Cafe" 
                  className="form-input" 
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Platform Focus</label>
              <select 
                className="form-select"
                value={formData.platform}
                onChange={(e) => setFormData({...formData, platform: e.target.value})}
              >
                <option value="Instagram & Facebook">Instagram & Facebook Management</option>
                <option value="Instagram Management">Instagram Management Only</option>
                <option value="Facebook Management">Facebook Management Only</option>
                <option value="Page Setup & Branding">Page Setup & Branding Kit</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Tell Us About Your Business</label>
              <textarea 
                rows="3" 
                required 
                placeholder="Share a brief overview of your business or what you'd like help with..." 
                className="form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              <span>Send Inquiry</span>
              <Send size={16} />
            </button>
          </form>
        )}

        <div className="contact-footer-note">
          <Shield size={14} className="text-teal" />
          <span>RH Growth.in — Operated under Team RusticHands (rustichands.in)</span>
        </div>
      </div>

      <style>{`
        .contact-modal-card {
          max-width: 580px;
          width: 100%;
          padding: 2.25rem;
          position: relative;
          background: rgba(10, 20, 22, 0.95);
          border: 1px solid var(--border-glow);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.7);
        }

        .mb-2 { margin-bottom: 0.5rem; }
        .mt-4 { margin-top: 1rem; }
        .w-full { width: 100%; }

        .contact-modal-title {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }

        .contact-modal-sub {
          font-size: 0.925rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .instant-channels {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .channel-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .whatsapp-btn {
          background: rgba(37, 211, 102, 0.12);
          border: 1px solid rgba(37, 211, 102, 0.3);
          color: #25d366;
        }

        .whatsapp-btn:hover {
          background: #25d366;
          color: #04100c;
        }

        .email-btn {
          background: rgba(45, 212, 191, 0.12);
          border: 1px solid rgba(45, 212, 191, 0.3);
          color: var(--accent-teal);
        }

        .email-btn:hover {
          background: var(--accent-teal);
          color: #04100c;
        }

        .phone-btn {
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          color: #38bdf8;
        }

        .phone-btn:hover {
          background: #38bdf8;
          color: #04100c;
        }

        .insta-btn {
          background: rgba(225, 48, 108, 0.12);
          border: 1px solid rgba(225, 48, 108, 0.3);
          color: #e1306c;
        }

        .insta-btn:hover {
          background: #e1306c;
          color: #fff;
        }

        .modal-divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 1.25rem 0;
          color: var(--text-muted);
          font-size: 0.775rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modal-divider::before, .modal-divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-divider span {
          padding: 0 0.75rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-label {
          font-size: 0.825rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 0.7rem 0.9rem;
          background: rgba(6, 14, 16, 0.8);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--accent-teal);
          box-shadow: 0 0 12px rgba(45, 212, 191, 0.2);
        }

        .contact-footer-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.775rem;
          color: var(--text-muted);
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .success-box {
          padding: 2rem 1rem;
        }

        @media (max-width: 550px) {
          .form-row { grid-template-columns: 1fr; }
          .instant-channels { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
