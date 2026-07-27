import React from 'react';
import { Shield, Target, Users, Award, Building, Globe, Heart, ArrowRight } from 'lucide-react';

export default function AboutUs({ setActiveView }) {
  const leadership = [
    {
      name: 'Zaigham Abbas Kazmi',
      title: 'Chairman, ZAK Holdings',
      bio: 'Chairman overseeing strategic governance and group-level direction.'
    },
    {
      name: 'Chan Shah Kazmi',
      title: 'Chief Executive Officer, ZAK Holdings',
      bio: 'Chief Executive Officer responsible for group strategy and operations.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#090a0f', color: '#f0f2f8', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      
      {/* Hero Header */}
      <section style={{
        padding: '6rem 2rem 4rem 2rem',
        background: 'linear-gradient(180deg, rgba(18, 20, 28, 0.9) 0%, rgba(9, 10, 15, 1) 100%)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span className="badge-gold" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            About ZAK Holdings
          </span>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '3.25rem', color: '#ffffff', marginBottom: '1.25rem' }}>
            Architects of <span className="text-gold-gradient">Enduring Growth</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#9ba3b4', lineHeight: 1.7 }}>
            Founded on principles of integrity, strategic foresight, and sustainable innovation, ZAK Holdings operates a diversified global portfolio spanning smart urban infrastructure, enterprise artificial intelligence, and physical commodity trading.
          </p>
        </div>
      </section>

      {/* Corporate Philosophy / Values */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.2rem', color: '#ffffff' }}>Our Core Pillars</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Shield size={24} color="#d4af37" />
            </div>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Uncompromising Governance
            </h3>
            <p style={{ color: '#9ba3b4', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Adhering to strict international compliance, ESG standards, and fiduciary responsibility across every portfolio venture.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Target size={24} color="#d4af37" />
            </div>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Purposeful Innovation
            </h3>
            <p style={{ color: '#9ba3b4', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Pioneering technologies like ZEHN AI OS and zero-carbon masterplans to solve real-world industrial and urban challenges.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Globe size={24} color="#d4af37" />
            </div>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Global Interconnectedness
            </h3>
            <p style={{ color: '#9ba3b4', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Leveraging cross-border financial networks and trading infrastructure in Dubai, London, New York, and Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section style={{ padding: '4rem 2rem 6rem 2rem', background: '#0e111a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-gold" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>Executive Governance</span>
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.4rem', color: '#ffffff' }}>Group Executive Leadership</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.75rem' }}>
            {leadership.map((member, idx) => (
              <div key={idx} className="glass-card" style={{ border: '1px solid rgba(212, 175, 55, 0.2)', padding: '1.25rem' }}>
                <div>
                  <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.2rem' }}>{member.name}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#d4af37', fontWeight: '700', display: 'block', marginBottom: '0.75rem' }}>{member.title}</span>
                  <p style={{ fontSize: '0.8rem', color: '#9ba3b4', lineHeight: 1.5 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
