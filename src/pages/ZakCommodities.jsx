import React, { useState, useEffect } from 'react';
import { Ship, Globe, Anchor, TrendingUp, ShieldCheck, RefreshCw, ChevronDown, ArrowUpRight, ArrowDownRight, Compass, Sparkles } from 'lucide-react';
import Commodities3DCanvas from '../components/Commodities3DCanvas';

export default function ZakCommodities({ setActiveView, onOpenVideo }) {
  const [tickerPrices, setTickerPrices] = useState([
    { symbol: 'BRENT CRUDE', price: 82.45, change: '+1.2%', up: true },
    { symbol: 'LNG ENERGY', price: 14.20, change: '+0.8%', up: true },
    { symbol: 'COPPER CATHODE', price: 9140.00, change: '-0.3%', up: false },
    { symbol: 'GOLD BULLION', price: 2380.50, change: '+1.5%', up: true },
    { symbol: 'BALTIC FREIGHT', price: 1845.00, change: '+2.1%', up: true },
    { symbol: 'WHEAT FUTURES', price: 612.25, change: '-0.5%', up: false }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPrices(prev => prev.map(item => {
        const delta = (Math.random() - 0.48) * 0.5;
        const newPrice = Math.max(1, +(item.price + delta).toFixed(2));
        const up = delta >= 0;
        return {
          ...item,
          price: newPrice,
          change: `${up ? '+' : ''}${(delta * 0.1).toFixed(2)}%`,
          up
        };
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--commodities-bg)', color: '#edf2fb', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      
      {/* Background Container Ship Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '760px',
        backgroundImage: `linear-gradient(180deg, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.6) 40%, rgba(5,10,20,0.4) 100%), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=60')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.88,
        zIndex: 0,
        filter: 'grayscale(8%) contrast(95%)'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Live Ticker Bar */}
        <div style={{
          background: 'rgba(4, 8, 16, 0.48)',
          borderBottom: '1px solid rgba(203, 122, 65, 0.14)',
          padding: '0.5rem 1rem',
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          overflowX: 'auto'
        }}>
          <span style={{ color: 'var(--commodities-copper)', fontWeight: '700', letterSpacing: '0.08em', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RefreshCw size={14} className="animate-spin" /> LIVE MARKET TICKER
          </span>
          <div style={{ display: 'flex', gap: '1.75rem', whiteSpace: 'nowrap' }}>
            {tickerPrices.map((t, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: '160px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#bfcbe0', fontWeight: '700', fontSize: '0.75rem' }}>{t.symbol}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#ffffff', fontWeight: 800 }}>${t.price}</div>
                </div>
                <div style={{ color: t.up ? 'var(--commodities-gold)' : '#ff7b76', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  {t.up ? <ArrowUpRight size={14} color="var(--commodities-gold)" /> : <ArrowDownRight size={14} color="#ff7b76" />}
                  <span style={{ fontWeight: 700 }}>{t.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Header Navigation */}
        <header style={{
          borderBottom: '1px solid rgba(203, 122, 65, 0.25)',
          padding: '1.25rem 2rem',
          backdropFilter: 'blur(20px)',
          background: 'rgba(14, 23, 42, 0.85)'
        }}>
          <div style={{ maxWidth: '1350px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }} onClick={() => setActiveView('commodities')}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                border: '1.5px solid #cb7a41',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(203, 122, 65, 0.2)',
                boxShadow: '0 0 20px rgba(203, 122, 65, 0.4)'
              }}>
                <span style={{ fontFamily: 'Cinzel, serif', fontWeight: '700', fontSize: '20px', color: '#e5a962' }}>Z</span>
              </div>
              <div>
                <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.2rem', letterSpacing: '0.12em', color: '#ffffff', fontWeight: '700' }}>
                  ZAK COMMODITIES
                </h1>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#cb7a41', textTransform: 'uppercase', display: 'block', fontWeight: '600' }}>
                  Global Physical Trading
                </span>
              </div>
            </div>

            {/* Links */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
              <button onClick={() => setActiveView('holdings')} style={commoditiesNavLinkStyle}>HOLDINGS HQ</button>
              <button onClick={() => setActiveView('city')} style={commoditiesNavLinkStyle}>ZAK CITY</button>
              <button onClick={() => setActiveView('zehn')} style={commoditiesNavLinkStyle}>ZEHN AI</button>
              <button onClick={() => setActiveView('commodities')} style={{ ...commoditiesNavLinkStyle, color: '#cb7a41' }}>SOLUTIONS</button>
              <button onClick={() => setActiveView('contact')} style={commoditiesNavLinkStyle}>DESK</button>
            </nav>

            <button className="btn-copper" onClick={() => setActiveView('contact')}>
              TRADE WITH US
            </button>
          </div>
        </header>

        {/* Hero & 3D Globe Section */}
        <section style={{ padding: '5rem 2rem 4rem 2rem', maxWidth: '1350px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            
              <div>
              <span className="badge-copper" style={{ marginBottom: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                <Sparkles size={14} color="#e5a962" /> Physical Energy Trading & Maritime Freight
              </span>
              <h1 style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '3rem',
                lineHeight: 1.08,
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Global Reach, Practical Execution.
                <br />
                <span className="text-copper-gradient">Trusted Commodity Supply.</span>
              </h1>
              <p style={{
                fontSize: '1.05rem',
                color: '#c2cbe0',
                lineHeight: 1.6,
                marginBottom: '1.75rem',
                fontWeight: '400',
                maxWidth: '680px'
              }}>
                Operational expertise across energy, metals, and freight — combining physical infrastructure, market intelligence, and disciplined logistics to deliver reliable outcomes.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button className="btn-gold" onClick={() => setActiveView('contact')}>
                  CONTACT TRADING DESK
                </button>
                <button className="btn-outline-gold" onClick={() => onOpenVideo && onOpenVideo()}>
                  WATCH MARKET BRIEF
                </button>
              </div>
            </div>

            {/* 3D Global Trade Arcs Globe Canvas */}
            <div className="card-commodities-3d" style={{
              background: 'rgba(14, 23, 42, 0.85)',
              borderRadius: '20px',
              border: '1px solid rgba(203, 122, 65, 0.4)',
              padding: '1.5rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', padding: '0 0.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--commodities-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  3D Global Trade Route Globe
                </span>
                <span style={{ fontSize: '0.7rem', color: '#ffffff', background: 'rgba(203, 122, 65, 0.14)', padding: '0.25rem 0.6rem', borderRadius: '6px', fontWeight: 700 }}>
                  Real-time Trade Nodes
                </span>
              </div>
              <Commodities3DCanvas />
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

const commoditiesNavLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#8596b5',
  fontSize: '0.8rem',
  letterSpacing: '0.08em',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
};


