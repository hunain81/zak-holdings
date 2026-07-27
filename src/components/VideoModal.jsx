import React from 'react';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, title, videoUrl, subtitle }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }} onClick={onClose}>
      <div 
        style={{
          width: '100%',
          maxWidth: '900px',
          background: '#0d1117',
          borderRadius: '16px',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          animation: 'fadeIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '1rem 1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', fontFamily: 'Cinzel, serif' }}>{title || 'ZAK Showcase'}</h3>
            {subtitle && <p style={{ color: '#8e9e85', fontSize: '0.8rem' }}>{subtitle}</p>}
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#9ba3b4',
              cursor: 'pointer',
              padding: '0.4rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player / Simulation Container */}
        <div style={{
          position: 'relative',
          paddingTop: '56.25%', /* 16:9 Aspect Ratio */
          background: '#05070a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {videoUrl ? (
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              src={videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(17, 23, 18, 0.9) 100%)',
              color: '#fff',
              textAlign: 'center',
              padding: '2rem'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.2)',
                border: '2px solid #d4af37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)'
              }}>
                <Play size={32} color="#d4af37" style={{ marginLeft: '4px' }} />
              </div>
              <h4 style={{ fontSize: '1.4rem', fontFamily: 'Cinzel, serif', color: '#f3e5ab', marginBottom: '0.5rem' }}>
                {title} Cinematic Presentation
              </h4>
              <p style={{ color: '#9ba3b4', maxWidth: '500px', fontSize: '0.9rem' }}>
                Experiencing the Masterplan & Architectural Blueprint of ZAK Holdings' Flagship Projects.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


