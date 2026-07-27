import React from 'react';
import { Maximize2, Play, ArrowRight, Compass, Leaf, Lightbulb, Users, TrendingUp, ChevronRight } from 'lucide-react';

export default function OverviewMockup({ setActiveView, onOpenVideo }) {
  return (
    <div style={{ backgroundColor: '#020305', minHeight: '100vh', padding: '1.5rem 1rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      
      {/* Overview Top Header Banner */}
      <div style={{ maxWidth: '1400px', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#ffffff', fontFamily: 'Cinzel, serif', fontSize: '1.4rem' }}>
            ZAK HOLDINGS — CONGLOMERATE SUITE
          </h2>
          <p style={{ color: '#8596b5', fontSize: '0.85rem' }}>
            Click on any of the 4 core business cards below to launch that standalone interactive website experience.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button 
            className="btn-gold" 
            onClick={() => setActiveView('holdings')}
            style={{ fontSize: '0.78rem', padding: '0.5rem 1.25rem' }}
          >
            ENTER MAIN CORPORATE HQ
          </button>
        </div>
      </div>

      {/* 2x2 Mockup Grid (Exact match to reference photo!) */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.25rem'
      }}>
        
        {/* TOP LEFT: ZAK HOLDINGS CARD */}
        <div 
          style={{
            background: '#090a0f',
            border: '1.5px solid rgba(212, 175, 55, 0.4)',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 15px 35px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header */}
          <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(212, 175, 55, 0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1px solid #d4af37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#d4af37', fontFamily: 'Cinzel' }}>Z</div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'Cinzel', fontWeight: '700', color: '#fff' }}>ZAK HOLDINGS</span>
            </div>
            <button 
              onClick={() => setActiveView('holdings')}
              style={{ background: 'rgba(212, 175, 55, 0.15)', border: '1px solid #d4af37', color: '#f3e5ab', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <Maximize2 size={12} /> Expand
            </button>
          </div>

          {/* Body content mini preview */}
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Building <br /><span className="text-gold-gradient">Sustainable Legacies</span>
              </h3>
              <p style={{ color: '#9ba3b4', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '1.25rem' }}>
                ZAK Holdings creates future-ready businesses that drive value, innovation and lasting global impact.
              </p>
              
              {/* Mini 5 pillar icons */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.4rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '0.75rem', textAlign: 'center' }}>
                {['VISIONARY', 'SUSTAINABLE', 'INNOVATIVE', 'PARTNERSHIPS', 'GROWTH'].map((label, idx) => (
                  <div key={idx} style={{ fontSize: '0.55rem', color: '#d4af37', fontWeight: '700' }}>{label}</div>
                ))}
              </div>
            </div>

            {/* Mini Portfolio Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginTop: '1rem' }}>
              <div onClick={() => setActiveView('city')} style={{ background: '#111712', border: '1px solid #6c7d53', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: '700', color: '#a3b880' }}>ZAK CITY</div>
                <div style={{ fontSize: '0.55rem', color: '#8e9e85' }}>Smart City by Foster + Partners</div>
              </div>
              <div onClick={() => setActiveView('zehn')} style={{ background: '#f5f2eb', border: '1px solid #e6dfd3', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#1e1b18' }}>ZEHN</div>
                <div style={{ fontSize: '0.55rem', color: '#736b63' }}>Enterprise AI OS</div>
              </div>
              <div onClick={() => setActiveView('commodities')} style={{ background: '#0e172a', border: '1px solid #cb7a41', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: '700', color: '#e5a962' }}>ZAK COMMODITIES</div>
                <div style={{ fontSize: '0.55rem', color: '#8596b5' }}>Global Energy Trade</div>
              </div>
            </div>
          </div>
        </div>

        {/* TOP RIGHT: ZAK CITY CARD */}
        <div 
          style={{
            background: '#111712',
            border: '1.5px solid rgba(163, 184, 128, 0.4)',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 15px 35px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header */}
          <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid rgba(163, 184, 128, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(108, 125, 83, 0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '22px', height: '22px', border: '1px solid #a3b880', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#f4efdf', fontFamily: 'Cinzel' }}>Z</div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'Cinzel', fontWeight: '700', color: '#f4efdf' }}>ZAK CITY</span>
            </div>
            <button 
              onClick={() => setActiveView('city')}
              style={{ background: 'rgba(108, 125, 83, 0.2)', border: '1px solid #a3b880', color: '#f4efdf', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <Maximize2 size={12} /> Expand
            </button>
          </div>

          {/* Body content */}
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#f4efdf', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                Distinctively Local, <br /><span style={{ fontStyle: 'normal', color: '#a3b880', fontWeight: '600' }}>Yet Future-Ready.</span>
              </h3>
              <p style={{ color: '#8e9e85', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '1.25rem' }}>
                A City Rooted in Nature. Designed for Generations by Foster + Partners.
              </p>
            </div>

            {/* Mini Stats Bar */}
            <div style={{ background: 'rgba(24, 34, 26, 0.8)', border: '1px solid rgba(163, 184, 128, 0.2)', borderRadius: '8px', padding: '0.75rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#a3b880' }}>753+</div>
                <div style={{ fontSize: '0.55rem', color: '#8e9e85' }}>Acres</div>
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#a3b880' }}>6,000+</div>
                <div style={{ fontSize: '0.55rem', color: '#8e9e85' }}>Jobs</div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', fontWeight: '700', color: '#a3b880' }}>FOSTER+PARTNERS</div>
                <div style={{ fontSize: '0.55rem', color: '#8e9e85' }}>Masterplan</div>
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', fontWeight: '700', color: '#a3b880' }}>NET ZERO</div>
                <div style={{ fontSize: '0.55rem', color: '#8e9e85' }}>District</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LEFT: ZEHN AI CARD */}
        <div 
          style={{
            background: '#f5f2eb',
            border: '1.5px solid #e6dfd3',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 15px 35px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            color: '#1e1b18'
          }}
        >
          {/* Header */}
          <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid #e6dfd3', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', fontFamily: 'Outfit', fontWeight: '800', color: '#1e1b18' }}>ZEHN</span>
              <span style={{ fontSize: '0.6rem', color: '#b86235', fontWeight: '700' }}>AI OS</span>
            </div>
            <button 
              onClick={() => setActiveView('zehn')}
              style={{ background: '#1e1b18', color: '#ffffff', border: 'none', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <Maximize2 size={12} /> Expand
            </button>
          </div>

          {/* Body content */}
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.8rem', color: '#1e1b18', fontWeight: '700', marginBottom: '0.3rem' }}>
                AI that understands. <br /><span style={{ color: '#b86235' }}>Intelligence that delivers.</span>
              </h3>
              <p style={{ color: '#736b63', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '1rem' }}>
                ZEHN is your AI-powered enterprise business OS. Connects data, people & processes.
              </p>
            </div>

            {/* Mini Dashboard Widget */}
            <div style={{ background: '#ffffff', border: '1px solid #e6dfd3', borderRadius: '8px', padding: '0.75rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '0.6rem', color: '#736b63' }}>Response Rate</div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#1e1b18' }}>24.8%</div>
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', color: '#736b63' }}>Resolution Time</div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#1e1b18' }}>18.2%</div>
              </div>
              <div>
                <div style={{ fontSize: '0.6rem', color: '#736b63' }}>Completion Rate</div>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#1e1b18' }}>32.0%</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT: ZAK COMMODITIES CARD */}
        <div 
          style={{
            background: '#070d19',
            border: '1.5px solid rgba(203, 122, 65, 0.4)',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 15px 35px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Header */}
          <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid rgba(203, 122, 65, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(14, 23, 42, 0.8)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '4px', border: '1px solid #cb7a41', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#e5a962', fontFamily: 'Cinzel' }}>Z</div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'Cinzel', fontWeight: '700', color: '#edf2fb' }}>ZAK COMMODITIES</span>
            </div>
            <button 
              onClick={() => setActiveView('commodities')}
              style={{ background: 'rgba(203, 122, 65, 0.2)', border: '1px solid #cb7a41', color: '#e5a962', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.7rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <Maximize2 size={12} /> Expand
            </button>
          </div>

          {/* Body content */}
          <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.8rem', color: '#ffffff', fontWeight: '700', marginBottom: '0.3rem' }}>
                Global Reach. <br /><span className="text-copper-gradient">Trusted Supply.</span>
              </h3>
              <p style={{ color: '#8596b5', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '1rem' }}>
                Delivering reliable physical commodity solutions across global markets.
              </p>
            </div>

            {/* Mini Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem', borderTop: '1px solid rgba(203, 122, 65, 0.2)', paddingTop: '0.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.55rem', color: '#e5a962', fontWeight: '700' }}>GLOBAL MARKETS</div>
              <div style={{ fontSize: '0.55rem', color: '#e5a962', fontWeight: '700' }}>TRUSTED PARTNERS</div>
              <div style={{ fontSize: '0.55rem', color: '#e5a962', fontWeight: '700' }}>EXCELLENCE</div>
              <div style={{ fontSize: '0.55rem', color: '#e5a962', fontWeight: '700' }}>SUSTAINABLE</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
