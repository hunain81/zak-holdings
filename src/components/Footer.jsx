import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ setActiveView }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#040508',
      borderTop: '1px solid rgba(212, 175, 55, 0.25)',
      color: '#9ba3b4',
      padding: '4rem 2rem 2rem 2rem',
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        
        {/* Top Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', cursor: 'pointer' }} onClick={() => setActiveView('holdings')}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1.5px solid #d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(212, 175, 55, 0.15)',
                color: '#d4af37',
                fontFamily: 'Cinzel',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>
                Z
              </div>
              <h3 style={{ fontFamily: 'Cinzel, serif', color: '#ffffff', fontSize: '1.15rem', letterSpacing: '0.1em' }}>
                ZAK HOLDINGS
              </h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#718096', lineHeight: 1.6, marginBottom: '1rem' }}>
              Creating future-ready businesses that drive value, innovation, and lasting global impact across Real Estate, AI Intelligence, and Physical Commodities.
            </p>
            <div style={{ fontSize: '0.85rem', color: '#9ba3b4', marginBottom: '1rem' }}>
              <strong style={{ color: '#edf2fb' }}>Office</strong>: Islamabad, Pakistan
            </div>
            {/* ZEHN co-founders are shown only on the ZEHN product page */}
          </div>

          {/* Column 1: Core Brands */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', color: '#ffffff', fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.08em' }}>
              BUSINESS DIVISIONS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li>
                <button onClick={() => setActiveView('holdings')} style={footerBtnStyle}>
                  ZAK Holdings HQ
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('city')} style={{ ...footerBtnStyle, color: '#a3b880' }}>
                  ZAK City (Eco Smart City)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('zehn')} style={{ ...footerBtnStyle, color: '#b86235' }}>
                  ZEHN (Enterprise AI OS)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('commodities')} style={{ ...footerBtnStyle, color: '#cb7a41' }}>
                  ZAK Commodities (Energy & Trade)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Corporate */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', color: '#ffffff', fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.08em' }}>
              CORPORATE
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li><button onClick={() => setActiveView('about')} style={footerBtnStyle}>About the Group</button></li>
              <li><button onClick={() => setActiveView('about')} style={footerBtnStyle}>Executive Leadership</button></li>
              <li><button onClick={() => setActiveView('about')} style={footerBtnStyle}>ESG & Governance</button></li>
              <li><button onClick={() => setActiveView('about')} style={footerBtnStyle}>Investor Relations</button></li>
            </ul>
          </div>

          {/* Column 3: Global Hubs */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', color: '#ffffff', fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.08em' }}>
              GLOBAL HUBS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#718096' }}>
              <li>Islamabad, Pakistan — Corporate Office</li>
            </ul>
          </div>

          {/* Column 4: Quick Action */}
          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', color: '#ffffff', fontSize: '0.9rem', marginBottom: '1.2rem', letterSpacing: '0.08em' }}>
              CONTACT & INQUIRY
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#718096', marginBottom: '1rem' }}>
              Reach out for investment inquiries, corporate leasing, or trading desks.
            </p>
            <button className="btn-gold" onClick={() => setActiveView('contact')} style={{ fontSize: '0.75rem', padding: '0.66rem 1.2rem', width: '100%', justifyContent: 'center' }}>
              CONTACT US
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: '#718096'
        }}>
          <div>
            © {new Date().getFullYear()} ZAK Holdings Group. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button onClick={() => setActiveView('contact')} style={footerBtnStyle}>Privacy Policy</button>
            <button onClick={() => setActiveView('contact')} style={footerBtnStyle}>Terms of Service</button>
            
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                color: '#d4af37',
                padding: '0.45rem',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '1rem'
              }}
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

const footerBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#9ba3b4',
  fontSize: '0.85rem',
  cursor: 'pointer',
  padding: 0,
  textAlign: 'left',
  transition: 'color 0.2s ease'
};


