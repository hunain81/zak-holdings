import React, { useState } from 'react';
import { Play, ArrowRight, Compass, ShieldCheck, Zap, TreePine, Building, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import City3DCanvas from '../components/City3DCanvas';

export default function ZakCity({ setActiveView, onOpenVideo }) {
  const masterplanDistricts = [
    {
      id: 'residential',
      name: 'Residential Sanctuary',
      tag: 'Phase 1 - 250 Acres',
      desc: 'Ultra-luxury eco-villas and carbon-neutral low-rise residences nestled in native forest preserves with smart automated climate control.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'innovation',
      name: 'Innovation & Tech Campus',
      tag: 'Phase 2 - 180 Acres',
      desc: 'State-of-the-art AI technology parks, clean tech incubator labs, and automated micro-mobility transport corridors.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'ecopark',
      name: 'Eco-Park & Solar Lagoon',
      tag: 'Phase 1 - 200 Acres',
      desc: 'Central artificial wetlands providing natural greywater purification, solar canopy walks, and zero-carbon biodiversity zones.',
      img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'commercial',
      name: 'Waterfront Commercial Plaza',
      tag: 'Phase 3 - 123 Acres',
      desc: 'Pedestrianized high-street luxury retail, Michelin culinary dining, and global financial corporate headquarters.',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const [selectedDistrict, setSelectedDistrict] = useState(masterplanDistricts[0]);

  return (
    <div style={{ backgroundColor: '#111712', color: '#f4efdf', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      
      {/* Background Aerial Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '950px',
        backgroundImage: `radial-gradient(ellipse at center, rgba(24, 34, 26, 0.45) 0%, rgba(17, 23, 18, 0.98) 85%), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.85,
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Header Navigation */}
        <header style={{
          borderBottom: '1px solid rgba(163, 184, 128, 0.25)',
          padding: '1.25rem 2rem',
          backdropFilter: 'blur(20px)',
          background: 'rgba(17, 23, 18, 0.85)'
        }}>
          <div style={{ maxWidth: '1350px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }} onClick={() => setActiveView('city')}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '1.5px solid #a3b880',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(108, 125, 83, 0.25)',
                boxShadow: '0 0 20px rgba(108, 125, 83, 0.4)'
              }}>
                <span style={{ fontFamily: 'Cinzel, serif', fontWeight: '700', fontSize: '20px', color: '#f4efdf' }}>Z</span>
              </div>
              <div>
                <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.2rem', letterSpacing: '0.12em', color: '#ffffff', fontWeight: '700' }}>
                  ZAK CITY
                </h1>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#a3b880', textTransform: 'uppercase', display: 'block', fontWeight: '600' }}>
                  Smart Eco Masterplan
                </span>
              </div>
            </div>

            {/* Nav Links */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
              <button onClick={() => setActiveView('holdings')} style={cityNavLinkStyle}>HOLDINGS HQ</button>
              <button onClick={() => setActiveView('city')} style={{ ...cityNavLinkStyle, color: '#a3b880' }}>MASTERPLAN</button>
              <button onClick={() => setActiveView('zehn')} style={cityNavLinkStyle}>ZEHN AI OS</button>
              <button onClick={() => setActiveView('commodities')} style={cityNavLinkStyle}>ZAK COMMODITIES</button>
              <button onClick={() => setActiveView('contact')} style={cityNavLinkStyle}>INQUIRE</button>
            </nav>

            <button className="btn-olive" onClick={() => setActiveView('contact')}>
              ENQUIRE
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section style={{ padding: '5rem 2rem 4rem 2rem', maxWidth: '1350px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            
            <div>
              <span className="badge-olive" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                Foster + Partners Masterplan Design
              </span>
              <h1 style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '3.75rem',
                lineHeight: 1.15,
                fontWeight: '400',
                marginBottom: '1.5rem',
                color: '#f4efdf',
                fontStyle: 'italic'
              }}>
                Distinctively Local, <br />
                <span style={{ fontStyle: 'normal', fontWeight: '600', color: '#a3b880' }}>
                  Yet Future-Ready.
                </span>
              </h1>
              <p style={{
                fontSize: '1.2rem',
                color: '#c2d1b8',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                fontWeight: '300'
              }}>
                A City Rooted in Nature. Designed for Generations. ZAK City redefines modern urban living with nature, clean energy, and AI automation.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '3rem' }}>
                <button className="btn-olive" onClick={() => setActiveView('contact')} style={{ padding: '0.9rem 2rem' }}>
                  EXPLORE MASTERPLAN
                </button>
                <button 
                  onClick={() => onOpenVideo('ZAK City Masterplan', '', 'Experience the 3D cinematic walkthrough of ZAK City eco-district.')}
                  style={{
                    background: 'rgba(244, 239, 223, 0.08)',
                    border: '1px solid rgba(244, 239, 223, 0.3)',
                    color: '#f4efdf',
                    padding: '0.9rem 1.75rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}
                >
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#a3b880',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Play size={12} color="#111712" fill="#111712" />
                  </div>
                  <span>WATCH FILM</span>
                </button>
              </div>
            </div>

            {/* 3D Holographic Eco-City Grid Canvas */}
            <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid rgba(163, 184, 128, 0.35)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)', borderRadius: '20px', background: 'rgba(24, 34, 26, 0.85)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', padding: '0 0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#a3b880', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  3D Holographic Masterplan Elevation
                </span>
                <span style={{ fontSize: '0.7rem', color: '#f4efdf', background: 'rgba(108, 125, 83, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  Live 3D Render
                </span>
              </div>
              <City3DCanvas />
            </div>

          </div>

          {/* 5 Column Stats Bar */}
          <div style={{
            background: 'rgba(24, 34, 26, 0.95)',
            border: '1px solid rgba(163, 184, 128, 0.3)',
            borderRadius: '16px',
            padding: '2rem',
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.08)', paddingRight: '0.75rem' }}>
              <div style={{ fontSize: '2rem', fontFamily: 'Cinzel, serif', fontWeight: '700', color: '#a3b880' }}>753+</div>
              <div style={{ fontSize: '0.8rem', color: '#f4efdf', fontWeight: '600' }}>Acres</div>
              <div style={{ fontSize: '0.65rem', color: '#8e9e85' }}>Phase 1 Masterplan</div>
            </div>

            <div style={{ borderRight: '1px solid rgba(255,255,255,0.08)', paddingRight: '0.75rem' }}>
              <div style={{ fontSize: '2rem', fontFamily: 'Cinzel, serif', fontWeight: '700', color: '#a3b880' }}>6,000+</div>
              <div style={{ fontSize: '0.8rem', color: '#f4efdf', fontWeight: '600' }}>Jobs</div>
              <div style={{ fontSize: '0.65rem', color: '#8e9e85' }}>Economic Potential</div>
            </div>

            <div style={{ borderRight: '1px solid rgba(255,255,255,0.08)', paddingRight: '0.75rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#a3b880', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                NATURAL HARMONY
              </div>
              <div style={{ fontSize: '0.8rem', color: '#f4efdf', fontWeight: '600' }}>Foster + Partners</div>
              <div style={{ fontSize: '0.65rem', color: '#8e9e85' }}>Lead Architectural Firm</div>
            </div>

            <div style={{ borderRight: '1px solid rgba(255,255,255,0.08)', paddingRight: '0.75rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#a3b880', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                NET ZERO DISTRICT
              </div>
              <div style={{ fontSize: '0.8rem', color: '#f4efdf', fontWeight: '600' }}>100% Renewable</div>
              <div style={{ fontSize: '0.65rem', color: '#8e9e85' }}>Our Commitment</div>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#a3b880', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                FUTURE-READY
              </div>
              <div style={{ fontSize: '0.8rem', color: '#f4efdf', fontWeight: '600' }}>Smart & Connected</div>
              <div style={{ fontSize: '0.65rem', color: '#8e9e85' }}>AI Autonomous Transport</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

const cityNavLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#c2d1b8',
  fontSize: '0.8rem',
  letterSpacing: '0.08em',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
};


