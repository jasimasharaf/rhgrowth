import React from 'react';
import { Search, Compass, Palette, Repeat, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "We understand the business, audience and goals.",
      icon: <Search size={22} />
    },
    {
      number: "02",
      title: "Plan",
      description: "We create a practical social media strategy.",
      icon: <Compass size={22} />
    },
    {
      number: "03",
      title: "Create",
      description: "We develop content, visuals and communication.",
      icon: <Palette size={22} />
    },
    {
      number: "04",
      title: "Manage",
      description: "We consistently manage and maintain the social media presence.",
      icon: <Repeat size={22} />
    },
    {
      number: "05",
      title: "Grow",
      description: "We analyze performance and improve the strategy.",
      icon: <TrendingUp size={22} />
    }
  ];

  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge mb-3">
            <span>Our Process</span>
          </div>
          <h2 className="section-title">
            How We <span className="text-teal">Work</span>
          </h2>
          <p className="section-subtitle">
            A clear, 5-step strategic workflow designed to deliver consistent, business-driven social media management.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step-card glass-card">
              <div className="step-top">
                <span className="step-num">{step.number}</span>
                <div className="step-icon">{step.icon}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-section {
          position: relative;
        }

        .process-timeline {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          position: relative;
        }

        .process-step-card {
          padding: 1.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .step-num {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.75rem;
          color: var(--accent-teal);
          opacity: 0.85;
        }

        .step-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: rgba(45, 212, 191, 0.08);
          border: 1px solid rgba(45, 212, 191, 0.25);
          color: var(--accent-teal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .step-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .process-timeline {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .process-timeline {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
