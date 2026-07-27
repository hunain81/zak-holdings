import React from 'react';
import { Building2, Trees, Cpu, Ship, Info, Mail, Sparkles } from 'lucide-react';

export default function BrandSwitcherBar({ activeView, setActiveView }) {
  const views = [
    { id: 'holdings', label: 'ZAK Holdings', icon: Building2, tag: 'Corporate HQ' },
    { id: 'city', label: 'ZAK City', icon: Trees, tag: 'Eco Smart City' },
    { id: 'zehn', label: 'ZEHN AI OS', icon: Cpu, tag: 'Enterprise AI' },
    { id: 'commodities', label: 'ZAK Commodities', icon: Ship, tag: 'Global Trade' },
    { id: 'about', label: 'About Us', icon: Info, tag: 'Governance' },
    { id: 'contact', label: 'Contact Us', icon: Mail, tag: 'Inquiries' },
  ];

  return (
    <div style={{
      background: 'rgba(4, 5, 8, 0.92)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
      padding: '0.5rem 1.25rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(24px)',
      boxShadow: '0 4px 25px rgba(0, 0, 0, 0.6)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {/* Brand Logo & Indicator */}
        <div 
          onClick={() => setActiveView('holdings')} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #d4af37, #9e7d17)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontWeight: 'bold',
            fontSize: '15px',
            fontFamily: 'Cinzel, serif',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}>
            Z
          </div>
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.12em', color: '#f0f2f8', textTransform: 'uppercase', fontFamily: 'Cinzel' }}>
              ZAK HOLDINGS
            </span>
            <span style={{ fontSize: '0.7rem', color: '#d4af37', marginLeft: '0.5rem', fontWeight: '600' }}>
              • Global Conglomerate
            </span>
          </div>
        </div>

        {/* View Switch Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflowX: 'auto', padding: '0.2rem 0' }}>
          {views.map((v) => {
            const Icon = v.icon;
            const isActive = activeView === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveView(v.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 0.95rem',
                  borderRadius: '6px',
                  border: isActive 
                    ? '1px solid rgba(212, 175, 55, 0.7)' 
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive 
                    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(212, 175, 55, 0.08))' 
                    : 'rgba(255, 255, 255, 0.03)',
                  color: isActive ? '#fce8a6' : '#a0aec0',
                  fontSize: '0.8rem',
                  fontWeight: isActive ? '700' : '500',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 15px rgba(212, 175, 55, 0.25)' : 'none'
                }}
              >
                <Icon size={14} color={isActive ? '#d4af37' : '#718096'} />
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


