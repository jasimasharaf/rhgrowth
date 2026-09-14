import React from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  Layers, 
  Target, 
  BarChart, 
  ShieldCheck 
} from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      icon: <Sparkles size={24} />,
      title: "Creative & Business-Focused Approach",
      description: "We merge clean visual design with practical business communication so your social presence looks great and speaks directly to your audience."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Consistent Social Media Management",
      description: "No irregular posting or neglected feeds. We maintain steady, dependable management across your active platforms."
    },
    {
      icon: <Layers size={24} />,
      title: "Instagram & Facebook Focus",
      description: "We specialize specifically in Meta's ecosystem (Instagram & Facebook), mastering grid layouts, reels, stories, and page tools."
    },
    {
      icon: <Target size={24} />,
      title: "Customized Content Strategy",
      description: "Every business has distinct goals. We tailor content plans, visual guidelines, and post themes specifically for your brand."
    },
    {
      icon: <BarChart size={24} />,
      title: "Practical Marketing",
      description: "Straightforward marketing techniques that build real social proof, clear brand message, and genuine client engagement."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Long-Term Brand Building",
      description: "We focus on building sustainable digital presence that represents your business with integrity and long-term value."
    }
  ];

  return (
    <section id="why-us" className="section why-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge mb-3">
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">
            Why <span className="text-teal">RH Growth.in</span>
          </h2>
          <p className="section-subtitle">
            Grounded execution, clear communication, and dedicated social media management operated under Team RusticHands.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((item, index) => (
            <div key={index} className="pillar-card glass-card">
              <div className="pillar-icon-box">
                {item.icon}
              </div>
              <h3 className="pillar-card-title">{item.title}</h3>
              <p className="pillar-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-section {
          position: relative;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .pillar-card {
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .pillar-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: rgba(45, 212, 191, 0.08);
          border: 1px solid rgba(45, 212, 191, 0.25);
          color: var(--accent-teal);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: var(--transition);
        }

        .pillar-card:hover .pillar-icon-box {
          background: var(--accent-teal);
          color: #040d0f;
          transform: translateY(-2px);
        }

        .pillar-card-title {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .pillar-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
