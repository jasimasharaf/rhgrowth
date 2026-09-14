import React from 'react';
import { 
  Calendar, 
  Megaphone, 
  Palette, 
  Compass, 
  Users, 
  TrendingUp 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './BrandIcons';

export default function Services() {
  const servicesList = [
    {
      icon: <InstagramIcon size={24} />,
      title: "Instagram Management",
      description: "Complete management of your Instagram account including post design, story creation, reel layout, and grid aesthetics."
    },
    {
      icon: <FacebookIcon size={24} />,
      title: "Facebook Management",
      description: "Consistent Facebook business page updates, content publication, cover design, and community page maintenance."
    },
    {
      icon: <Calendar size={24} />,
      title: "Content Planning",
      description: "Organized content calendars and posting schedules to ensure consistent, timely brand communication."
    },
    {
      icon: <Megaphone size={24} />,
      title: "Social Media Marketing",
      description: "Strategic promotional creative graphics and campaign posts designed to increase business visibility."
    },
    {
      icon: <Palette size={24} />,
      title: "Page Setup & Branding",
      description: "Complete initial page setup, bio optimization, highlight covers, and brand visual styling."
    },
    {
      icon: <Compass size={24} />,
      title: "Content Strategy",
      description: "Tailored content direction aligned with your specific business goals, industry, and target audience."
    },
    {
      icon: <Users size={24} />,
      title: "Audience Engagement",
      description: "Active audience interaction management, comment handling, and community relationship building."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Brand Growth",
      description: "Long-term social presence building to position your business credibly on Instagram and Facebook."
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge mb-3">
            <span>What We Offer</span>
          </div>
          <h2 className="section-title">
            Tailored Social Media <span className="text-teal">Services</span>
          </h2>
          <p className="section-subtitle">
            We provide structured, consistent social media management services designed to help businesses build authority online.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          position: relative;
        }

        .text-center {
          text-align: center;
        }

        .section-header {
          max-width: 680px;
          margin: 0 auto 4rem auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-title {
          font-size: 2.75rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .service-card {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .service-icon-box {
          width: 48px;
          height: 48px;
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

        .service-card:hover .service-icon-box {
          background: var(--accent-teal);
          color: #050e10;
          transform: scale(1.08);
        }

        .service-title {
          font-size: 1.15rem;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .service-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </section>
  );
}
