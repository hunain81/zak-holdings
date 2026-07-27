import React from 'react';
import { ArrowRight, Compass, Leaf, Lightbulb, Users, TrendingUp, Globe, Shield, Award, ChevronDown, Sparkles } from 'lucide-react';
import Holdings3DCanvas from '../components/Holdings3DCanvas';

export default function HoldingsHome({ setActiveView, onOpenVideo }) {
  return (
    <div style={{ backgroundColor: '#07090e', color: '#f0f2f8', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      
      {/* Background Aerial Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '950px',
        backgroundImage: `radial-gradient(ellipse at 50% 20%, rgba(212, 175, 55, 0.18) 0%, rgba(7, 9, 14, 0.96) 75%), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.85,
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Navigation Bar */}
        <header style={{
          borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
          padding: '1.25rem 2rem',
          backdropFilter: 'blur(20px)',
          background: 'rgba(7, 9, 14, 0.8)'
        }}>
          <div style={{ maxWidth: '1350px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }} onClick={() => setActiveView('holdings')}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1.5px solid #d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(7, 9, 14, 0.95) 100%)',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
              }}>
                <span style={{ fontFamily: 'Cinzel, serif', fontWeight: '800', fontSize: '22px', color: '#fce8a6' }}>Z</span>
              </div>
              <div>
                <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', letterSpacing: '0.12em', color: '#ffffff', fontWeight: '700' }}>
                  ZAK HOLDINGS
                </h1>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#d4af37', textTransform: 'uppercase', display: 'block', fontWeight: '600' }}>
                  Global Conglomerate
                </span>
              </div>
            </div>

            {/* Nav Links */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <button onClick={() => setActiveView('about')} style={navLinkStyle}>ABOUT US</button>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <button onClick={() => setActiveView('city')} style={{ ...navLinkStyle, color: '#a3b880' }}>ZAK CITY</button>
                <button onClick={() => setActiveView('zehn')} style={{ ...navLinkStyle, color: '#b86235' }}>ZEHN AI</button>
                <button onClick={() => setActiveView('commodities')} style={{ ...navLinkStyle, color: '#cb7a41' }}>ZAK COMMODITIES</button>
              </div>

              <button onClick={() => setActiveView('about')} style={navLinkStyle}>INVESTOR RELATIONS</button>
              <button onClick={() => setActiveView('contact')} style={navLinkStyle}>CONTACT US</button>
            </nav>

            {/* CTA Button */}
            <button className="btn-gold" onClick={() => setActiveView('contact')}>
              GET IN TOUCH
            </button>
          </div>
        </header>

        {/* Hero & 3D Interactive Canvas Section */}
        <section style={{ padding: '5rem 2rem 4rem 2rem', maxWidth: '1350px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Hero Headline */}
            <div>
              <span className="badge-gold" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={14} color="#d4af37" /> Global Visionary Conglomerate
              </span>
              <h1 style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '3.75rem',
                lineHeight: 1.1,
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#ffffff',
                textShadow: '0 4px 20px rgba(0,0,0,0.8)'
              }}>
                Building Sustainable <br />
                <span className="text-gold-gradient">Legacies</span>
              </h1>
              <p style={{
                fontSize: '1.15rem',
                color: '#b0b8c8',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                fontWeight: '300'
              }}>
                ZAK Holdings creates future-ready businesses that drive value, innovation, and lasting global impact across Real Estate Masterplanning, Enterprise AI Intelligence, and Global Physical Commodity Trading.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <button className="btn-gold" onClick={() => setActiveView('contact')}>
                  EXPLORE DIVISIONS
                </button>
                <button className="btn-outline-gold" onClick={() => setActiveView('about')}>
                  OUR PHILOSOPHY
                </button>
              </div>
            </div>

            {/* Right 3D Interactive Canvas */}
            <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid rgba(212, 175, 55, 0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.7)', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', padding: '0 0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#d4af37', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  3D Financial Network Sphere
                </span>
                <span style={{ fontSize: '0.7rem', color: '#9ba3b4', background: 'rgba(212, 175, 55, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  Interactive 60FPS
                </span>
              </div>
              <Holdings3DCanvas />
            </div>

          </div>

          {/* 5 Core Pillars Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            borderTop: '1px solid rgba(212, 175, 55, 0.2)',
            marginTop: '4rem',
            paddingTop: '2.5rem'
          }}>
            {[
              { icon: Compass, label: 'VISIONARY STRATEGY' },
              { icon: Leaf, label: 'SUSTAINABLE DEVELOPMENT' },
              { icon: Lightbulb, label: 'INNOVATIVE SOLUTIONS' },
              { icon: Users, label: 'AUTHENTIC PARTNERSHIPS' },
              { icon: TrendingUp, label: 'ECO-CONSCIOUS GROWTH' }
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} style={{ textAlign: 'center' }} className="animate-float-3d">
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid rgba(212, 175, 55, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem auto',
                    boxShadow: '0 0 15px rgba(212, 175, 55, 0.25)'
                  }}>
                    <Icon size={22} color="#d4af37" />
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    color: '#d4af37',
                    textTransform: 'uppercase',
                    display: 'block',
                    lineHeight: 1.3
                  }}>
                    {p.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* OUR BUSINESSES - Feature 3D Cards Grid */}
        <section style={{ padding: '4rem 2rem 6rem 2rem', maxWidth: '1350px', margin: '0 auto' }} className="perspective-container">
          <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#d4af37', textTransform: 'uppercase', fontWeight: '700' }}>
                PORTFOLIO DIVISIONS
              </span>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.4rem', color: '#ffffff', marginTop: '0.25rem' }}>
                Core Business Ecosystem
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            
            {/* Card 1: ZAK CITY */}
            <div 
              onClick={() => setActiveView('city')}
              className="card-city-3d"
              style={{
                background: 'linear-gradient(160deg, #18221a 0%, #111712 100%)',
                border: '1px solid rgba(163, 184, 128, 0.4)',
                borderRadius: '18px',
                padding: '2.5rem',
                cursor: 'pointer',
                boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    border: '1.5px solid #a3b880',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontFamily: 'Cinzel, serif',
                    color: '#f4efdf',
                    background: 'rgba(108, 125, 83, 0.2)'
                  }}>
                    Z
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.35rem', color: '#f4efdf' }}>ZAK CITY</h3>
                  </div>
                </div>
                <span className="badge-olive">FLAGSHIP</span>
              </div>
              <p style={{ color: '#8e9e85', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', minHeight: '3rem' }}>
                A next-generation eco-smart city masterplan by Foster + Partners integrating nature and AI.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a3b880', fontWeight: '700', fontSize: '0.9rem' }}>
                <span>EXPLORE ZAK CITY</span>
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Card 2: ZEHN */}
            <div 
              onClick={() => setActiveView('zehn')}
              className="card-zehn-3d"
              style={{
                background: '#f5f2eb',
                border: '1px solid #e6dfd3',
                borderRadius: '18px',
                padding: '2.5rem',
                cursor: 'pointer',
                color: '#1e1b18',
                boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    fontSize: '1.6rem',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '800',
                    letterSpacing: '0.1em',
                    color: '#1e1b18'
                  }}>
                    ZEHN
                  </div>
                </div>
                <span style={{ background: 'rgba(184, 98, 53, 0.12)', color: '#b86235', padding: '0.3rem 0.85rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700' }}>
                  ENTERPRISE AI
                </span>
              </div>
              <p style={{ color: '#736b63', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', minHeight: '3rem' }}>
                AI-powered business OS that connects data, teams, and processes so organizations run better.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b86235', fontWeight: '700', fontSize: '0.9rem' }}>
                <span>EXPLORE ZEHN</span>
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Card 3: ZAK COMMODITIES */}
            <div 
              onClick={() => setActiveView('commodities')}
              className="card-commodities-3d"
              style={{
                background: 'linear-gradient(160deg, #0e172a 0%, #070d19 100%)',
                border: '1px solid rgba(203, 122, 65, 0.4)',
                borderRadius: '18px',
                padding: '2.5rem',
                cursor: 'pointer',
                boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '4px',
                    border: '1.5px solid #cb7a41',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontFamily: 'Cinzel, serif',
                    color: '#e5a962',
                    background: 'rgba(203, 122, 65, 0.2)'
                  }}>
                    Z
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.25rem', color: '#edf2fb' }}>ZAK COMMODITIES</h3>
                  </div>
                </div>
                <span className="badge-copper">GLOBAL TRADE</span>
              </div>
              <p style={{ color: '#8596b5', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', minHeight: '3rem' }}>
                Global physical energy trading and maritime supply logistics connecting markets worldwide.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cb7a41', fontWeight: '700', fontSize: '0.9rem' }}>
                <span>EXPLORE ZAK COMMODITIES</span>
                <ArrowRight size={18} />
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#a0aec0',
  fontSize: '0.8rem',
  letterSpacing: '0.08em',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
};


