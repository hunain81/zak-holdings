import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Building2, Trees, Cpu, Ship } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    department: 'holdings',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    {
      city: 'Islamabad, Pakistan — Corporate Office',
      address: 'Islamabad, Pakistan',
      email: 'info@zakholdings.com'
    }
  ];

  return (
    <div style={{ backgroundColor: '#090a0f', color: '#f0f2f8', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      
      {/* Header */}
      <section style={{
        padding: '5rem 2rem 3rem 2rem',
        background: 'linear-gradient(180deg, rgba(18, 20, 28, 0.9) 0%, rgba(9, 10, 15, 1) 100%)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge-gold" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            Get in Touch
          </span>
          <h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '3rem', color: '#ffffff', marginBottom: '1rem' }}>
            Contact ZAK Holdings & Divisions
          </h1>
          <p style={{ color: '#9ba3b4', fontSize: '1.1rem' }}>
            Connect directly with our corporate investor relations team, real estate masterplan advisors, enterprise AI specialists, or commodity trading desk.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section style={{ padding: '4rem 2rem 6rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem' }}>
          
          {/* Form */}
          <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(212, 175, 55, 0.25)' }}>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', color: '#ffffff', marginBottom: '1.5rem' }}>
              Direct Inquiry Portal
            </h3>

            {submitted ? (
              <div style={{
                background: 'rgba(39, 201, 63, 0.1)',
                border: '1px solid #27c93f',
                borderRadius: '10px',
                padding: '2rem',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={48} color="#27c93f" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>Inquiry Received</h4>
                <p style={{ color: '#9ba3b4', fontSize: '0.9rem' }}>
                  Thank you for reaching out to ZAK Holdings. Our division representative will respond to your request within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-gold" 
                  style={{ marginTop: '1.5rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                    Target Business Division
                  </label>
                  <select 
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#12151e',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: '#ffffff',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option value="holdings">ZAK Holdings — Corporate & IR</option>
                    <option value="city">ZAK City — Real Estate & Leasing</option>
                    <option value="zehn">ZEHN — Enterprise AI Platform Demo</option>
                    <option value="commodities">ZAK Commodities — Trading Desk</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: '#9ba3b4', display: 'block', marginBottom: '0.4rem' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: '#9ba3b4', display: 'block', marginBottom: '0.4rem' }}>Work Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. wright@firm.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', color: '#9ba3b4', display: 'block', marginBottom: '0.4rem' }}>Organization / Company</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Capital Management Partners"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', color: '#9ba3b4', display: 'block', marginBottom: '0.4rem' }}>Message / Details *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Please specify your inquiry topic or proposal..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <Send size={16} /> SUBMIT INQUIRY
                </button>
              </form>
            )}
          </div>

          {/* Global Offices Directory */}
          <div>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', color: '#ffffff', marginBottom: '1.5rem' }}>
              Corporate Office
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {offices.map((off, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <h4 style={{ color: '#d4af37', fontFamily: 'Cinzel, serif', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{off.city}</h4>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#9ba3b4', fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                    <MapPin size={14} color="#d4af37" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{off.address}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ba3b4', fontSize: '0.85rem' }}>
                    <Mail size={14} color="#d4af37" style={{ flexShrink: 0 }} />
                    <span>{off.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

const inputStyle = {
  width: '100%',
  background: '#12151e',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#ffffff',
  padding: '0.75rem 1rem',
  borderRadius: '6px',
  fontSize: '0.9rem',
  outline: 'none'
};
