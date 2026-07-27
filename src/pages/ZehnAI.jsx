import React, { useState } from 'react';
import { Play, ArrowRight, CheckCircle2, Cpu, BarChart3, Workflow, Search, Zap, Shield, ChevronDown, Layers, Sparkles, MessageSquare, Bot, AlertTriangle, FileText, Activity, Users, Database, Server, RefreshCw, Eye, Power, Lock, Clock, Calendar, Check, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Zehn3DCanvas from '../components/Zehn3DCanvas';

export default function ZehnAI({ setActiveView, onOpenVideo }) {
  const [aimode, setAiMode] = useState('LIVE'); // 'OFF', 'SHADOW', 'LIVE'
  const [activeTier, setActiveTier] = useState('daira'); // 'grow', 'flow', 'daira'
  const [activeModule, setActiveModule] = useState('realestate');

  const [metrics] = useState({
    responseRate: 24.8,
    resolutionTime: 18.2,
    completionRate: 32.0,
    leadsCapturedToday: 1248,
    autofollowupsSent: 342,
    accuracyRate: 98.4
  });

  const modules = [
    {
      id: 'realestate',
      icon: '',
      name: 'Real Estate & Plots',
      subtitle: 'Housing Societies & Developers',
      features: [
        'Property & Plot Inventory Registry with Foster & Partners Masterplans',
        'AI Property Matching (extracts budget, location, type automatically)',
        'Post-Viewing Automated Follow-up Sequences via WhatsApp',
        'Dead Lead Revival (Reactivates 90+ day cold leads against new listings)',
        'Installment & Document Chase (CNIC, Allotment, NOC reminders)'
      ]
    },
    {
      id: 'clinic',
      icon: '',
      name: 'Clinics & Medical',
      subtitle: 'Doctors, Clinics & Hospitals',
      features: [
        'Urdu / Roman Urdu Patient Triage & Qualification Assistant',
        'Automated WhatsApp Appointment Bookings & Reminders',
        'Post-Visit Health Check-ins & Digital Prescription Archiving',
        'Doctor Availability & Fee Schedule Management',
        'Missed Appointment Recovery & Urgent Case Escalations'
      ]
    },
    {
      id: 'restaurant',
      icon: '',
      name: 'Restaurants & Hospitality',
      subtitle: 'Dining, Cafes & Hotels',
      features: [
        'Digital WhatsApp Menu & Automated Order Taking',
        'Table Reservations & Occupancy Management',
        'Daily Kitchen Summary Reports sent to Owner evening WhatsApp',
        'Wastage Tracking & Ingredient Reorder Recommendations',
        'Customer Review & Testimonial Collection Engine'
      ]
    },
    {
      id: 'education',
      icon: '',
      name: 'Education & Schools',
      subtitle: 'Schools, Colleges & Academies',
      features: [
        'Student Enrollment AI Assistant for Admission Inquiries',
        'Automated Parent WhatsApp Fee Due Reminders & Receipts',
        'Attendance Tracking & Excessive Absence Alerts',
        'Exam Results & Student Performance Dispatches'
      ]
    },
    {
      id: 'distribution',
      icon: '',
      name: 'Distribution & FMCG',
      subtitle: 'Wholesalers & Distributors',
      features: [
        'Retailer Ledger & Sales Order Capture via WhatsApp',
        'AI Invoice Chasing for Overdue Retailer Balances',
        'Delivery Route Planning & Driver Performance Analytics',
        'Product Return & Damage Management Log'
      ]
    },
    {
      id: 'club',
      icon: '',
      name: 'Clubs & Sports Facilities',
      subtitle: 'Private & Recreation Clubs',
      features: [
        'Membership Registry & Guest Gate Pass Issuance',
        'Shooting Range Lane, Instructor & Ammunition Tracking',
        'Member Dining Account Charging & Statement Summaries',
        'AI Morning Brief (Daily operational summary sent to GM)'
      ]
    },
    {
      id: 'finance',
      icon: '',
      name: 'Finance & HR OS',
      subtitle: 'Enterprise Back-Office Suite',
      features: [
        'Double-Entry Accounting Ledger & Bank Reconciliation',
        'FBR Tax Deadline Reminders (Sales Tax, Income Tax, WHT)',
        'CV Screening & Automated WhatsApp Interview Scheduling',
        'Payroll Generation, Attendance & Leave Approval Workflow'
      ]
    }
  ];

  const currentModuleData = modules.find(m => m.id === activeModule) || modules[0];

  return (
    <div style={{ backgroundColor: '#f4ede0', color: '#1b1a17', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      
      {/* Warm ZEHN Brand Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1200px',
        backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(179, 139, 78, 0.18), transparent 24%), radial-gradient(circle at 90% 5%, rgba(179, 139, 78, 0.12), transparent 20%), linear-gradient(180deg, rgba(244, 237, 224, 1) 0%, rgba(255, 250, 240, 1) 100%)',
        opacity: 0.95,
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Header Navigation */}
        <header style={{
          borderBottom: '1px solid rgba(179, 139, 78, 0.16)',
          padding: '1.25rem 2rem',
          background: 'rgba(255, 249, 240, 0.95)',
          backdropFilter: 'blur(20px)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ maxWidth: '1350px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Logo (image for ZEHN only) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }} onClick={() => setActiveView('zehn')}>
              <img
                src="/zehn-logo.png"
                alt="ZEHN logo"
                style={{
                  width: '56px',
                  height: '56px',
                  objectFit: 'contain',
                  background: '#fff9f0',
                  padding: '6px',
                  borderRadius: '10px',
                  boxShadow: '0 6px 18px rgba(179, 139, 78, 0.18)'
                }}
              />
              <div>
                <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.6rem', letterSpacing: '0.12em', color: '#1b1a17', fontWeight: '800' }}>
                  ZEHN
                </h1>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: '#7b6241', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  intelligence behind better business
                </span>
              </div>
            </div>

            {/* Links */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <button onClick={() => setActiveView('holdings')} style={zehnNavLinkStyle}>HOLDINGS HQ</button>
              <button onClick={() => setActiveView('city')} style={zehnNavLinkStyle}>ZAK CITY</button>
              <button onClick={() => setActiveView('zehn')} style={{ ...zehnNavLinkStyle, color: '#b38b4e' }}>ZEHN AI OS</button>
              <button onClick={() => setActiveView('commodities')} style={zehnNavLinkStyle}>ZAK COMMODITIES</button>
              <button onClick={() => setActiveView('contact')} style={zehnNavLinkStyle}>CONTACT DEMO</button>
            </nav>

            {/* CTA */}
            <button className="btn-zehn-primary" onClick={() => setActiveView('contact')}>
              REQUEST DEMO
            </button>
          </div>
        </header>

        {/* Cover Hero Section */}
        <section style={{ padding: '5rem 2rem 4rem 2rem', maxWidth: '1350px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Hero Text */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span className="badge-zehn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={14} color="#b38b4e" /> Pakistan's Shared Parent AI Engine
                </span>
                <span className="badge-autopilot">AUTOPILOT READY</span>
              </div>
              <h1 style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '3.75rem',
                lineHeight: 1.12,
                fontWeight: '700',
                color: '#1b1a17',
                marginBottom: '1.5rem'
              }}>
                ZEHN is the <span style={{ color: '#b38b4e' }}>intelligence</span> behind better business.
              </h1>
              <p style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.5rem',
                color: '#7b6241',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                DAIRA is our software layer built to turn intelligence into action across workflows, operations, and enterprise scale.
              </p>

              <p style={{
                fontSize: '1.15rem',
                color: '#7b6241',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '560px'
              }}>
                ZEHN ("mind" or "intellect") is the invisible AI brain for your business. It intercepts WhatsApp inquiries, captures leads, runs context-aware follow-ups, generates daily owner reports, and uses XGBoost ML to forecast revenue.
              </p>

              {/* 3 AI Operational Mode Selector Buttons */}
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#7b6241', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                  Interactive AI Operational Mode:
                </span>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button 
                    onClick={() => setAiMode('OFF')}
                    style={{
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      border: aimode === 'OFF' ? '1px solid rgba(179, 139, 78, 0.45)' : '1px solid rgba(179, 139, 78, 0.16)',
                      background: aimode === 'OFF' ? 'rgba(179, 139, 78, 0.12)' : 'rgba(255, 255, 255, 0.8)',
                      color: aimode === 'OFF' ? '#7b6241' : '#7b6241',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Power size={14} /> OFF Mode (Manual)
                  </button>

                  <button 
                    onClick={() => setAiMode('SHADOW')}
                    style={{
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      border: aimode === 'SHADOW' ? '1px solid rgba(179, 139, 78, 0.45)' : '1px solid rgba(179, 139, 78, 0.16)',
                      background: aimode === 'SHADOW' ? 'rgba(179, 139, 78, 0.12)' : 'rgba(255, 255, 255, 0.8)',
                      color: aimode === 'SHADOW' ? '#4a3c29' : '#7b6241',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Eye size={14} /> SHADOW Mode (Review Drafts)
                  </button>

                  <button 
                    onClick={() => setAiMode('LIVE')}
                    style={{
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      border: aimode === 'LIVE' ? '1px solid rgba(179, 139, 78, 0.45)' : '1px solid rgba(179, 139, 78, 0.16)',
                      background: aimode === 'LIVE' ? 'rgba(179, 139, 78, 0.16)' : 'rgba(255, 255, 255, 0.8)',
                      color: aimode === 'LIVE' ? '#4a3c29' : '#7b6241',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      boxShadow: aimode === 'LIVE' ? '0 0 20px rgba(179, 139, 78, 0.25)' : 'none'
                    }}
                  >
                    <Bot size={14} /> LIVE Mode (24/7 Autopilot)
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <button className="btn-zehn-primary" onClick={() => setActiveView('contact')}>
                  GET ZEHN FOR YOUR BUSINESS
                </button>
                <button 
                  className="btn-zehn-outline"
                  onClick={() => onOpenVideo('ZEHN AI OS Demonstration', '', 'Full platform demonstration of WhatsApp AI, DAIRA OS, and XGBoost forecasting.')}
                >
                  <Play size={16} color="#b38b4e" fill="#b38b4e" /> WATCH DEMO
                </button>
              </div>
            </div>

            {/* Right 3D Neural Sphere Canvas Window */}
            <div className="card-3d-glow glass-zehn-card" style={{ boxShadow: '0 25px 60px -15px rgba(179, 139, 78, 0.25)' }}>
              
              {/* Window Header */}
              <div style={{
                background: 'rgba(255, 249, 240, 0.95)',
                padding: '0.85rem 1.5rem',
                borderBottom: '1px solid rgba(179, 139, 78, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#d3b16a', display: 'inline-block' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#b38b4e', display: 'inline-block' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#7b6241', display: 'inline-block' }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#4a3c29', marginLeft: '0.5rem', fontFamily: 'JetBrains Mono' }}>
                    DAIRA OS — Active Mode: <span style={{ color: aimode === 'LIVE' ? '#4a3c29' : aimode === 'SHADOW' ? '#7b6241' : '#7b6241' }}>{aimode}</span>
                  </span>
                </div>
                <span style={{ fontSize: '0.7rem', color: '#4a3c29', background: 'rgba(179, 139, 78, 0.14)', border: '1px solid rgba(179, 139, 78, 0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: '700' }}>
                  3D NEURAL SPHERE
                </span>
              </div>

              {/* Window Dashboard Body */}
              <div style={{ padding: '1.5rem' }}>
                
                {/* Simulated Live Mode Notification */}
                <div style={{
                  background: aimode === 'LIVE' ? 'rgba(179, 139, 78, 0.12)' : aimode === 'SHADOW' ? 'rgba(179, 139, 78, 0.08)' : 'rgba(255, 244, 229, 0.9)',
                  border: aimode === 'LIVE' ? '1px solid rgba(179, 139, 78, 0.35)' : aimode === 'SHADOW' ? '1px solid rgba(179, 139, 78, 0.35)' : '1px solid rgba(179, 139, 78, 0.16)',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <MessageSquare size={16} color={aimode === 'LIVE' ? '#b38b4e' : aimode === 'SHADOW' ? '#7b6241' : '#7b6241'} />
                    <span>
                      {aimode === 'LIVE' && 'WhatsApp Autopilot Active: Urdu & Roman Urdu AI handling inbound inquiries 24/7'}
                      {aimode === 'SHADOW' && 'Shadow Mode Active: AI writing drafts for owner approval before dispatch'}
                      {aimode === 'OFF' && 'AI Mode OFF: Manual handling active. WhatsApp AI standing by.'}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: '800', fontFamily: 'JetBrains Mono', color: '#4a3c29' }}>
                    {aimode === 'LIVE' ? 'LIVE 24/7' : aimode === 'SHADOW' ? 'REVIEW DRAFTS' : 'OFF'}
                  </span>
                </div>

                {/* 3 Metrics Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(255, 249, 240, 0.95)', border: '1px solid rgba(179, 139, 78, 0.16)', borderRadius: '10px', padding: '0.85rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#7b6241' }}>Response Rate</div>
                    <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#1b1a17' }}>{metrics.responseRate}%</div>
                    <div style={{ fontSize: '0.65rem', color: '#b38b4e', fontWeight: '700' }}>+12.5% vs avg</div>
                  </div>

                  <div style={{ background: 'rgba(255, 249, 240, 0.95)', border: '1px solid rgba(179, 139, 78, 0.16)', borderRadius: '10px', padding: '0.85rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#7b6241' }}>Resolution Time</div>
                    <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#1b1a17' }}>{metrics.resolutionTime}m</div>
                    <div style={{ fontSize: '0.65rem', color: '#b38b4e', fontWeight: '700' }}>-4.7m speedup</div>
                  </div>

                  <div style={{ background: 'rgba(255, 249, 240, 0.95)', border: '1px solid rgba(179, 139, 78, 0.16)', borderRadius: '10px', padding: '0.85rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#7b6241' }}>AI Accuracy</div>
                    <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#1b1a17' }}>{metrics.accuracyRate}%</div>
                    <div style={{ fontSize: '0.65rem', color: '#b38b4e', fontWeight: '700' }}>550+ Test Suite</div>
                  </div>
                </div>

                {/* 3D Neural Sphere Canvas */}
                <div style={{ background: '#fff6eb', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(179, 139, 78, 0.18)' }}>
                  <Zehn3DCanvas />
                </div>
              </div>

            </div>

          </div>

          {/* 4 Stat Bar Summary from Technical Spec */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            background: 'rgba(255, 249, 240, 0.95)',
            border: '1px solid rgba(179, 139, 78, 0.16)',
            borderRadius: '16px',
            padding: '2rem',
            marginTop: '3.5rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#b38b4e', fontFamily: 'Outfit' }}>7</div>
              <div style={{ fontSize: '0.8rem', color: '#4a3c29', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tailored Industries</div>
              <div style={{ fontSize: '0.7rem', color: '#7b6241' }}>Real Estate, Clinics, Clubs, etc.</div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#d3b16a', fontFamily: 'Outfit' }}>3</div>
              <div style={{ fontSize: '0.8rem', color: '#4a3c29', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Service Tiers</div>
              <div style={{ fontSize: '0.7rem', color: '#7b6241' }}>Grow, Flow, and DAIRA</div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#b38b4e', fontFamily: 'Outfit' }}>60+</div>
              <div style={{ fontSize: '0.8rem', color: '#4a3c29', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Backend Modules</div>
              <div style={{ fontSize: '0.7rem', color: '#7b6241' }}>NestJS + PostgreSQL + pgvector</div>
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#b38b4e', fontFamily: 'Outfit' }}>550+</div>
              <div style={{ fontSize: '0.8rem', color: '#4a3c29', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Automated Tests</div>
              <div style={{ fontSize: '0.7rem', color: '#7b6241' }}>Prompt Injection & Safety Audited</div>
            </div>
          </div>
        </section>

        {/* SERVICE TIERS SECTION (Grow / Flow / DAIRA) */}
        <section style={{ padding: '5rem 2rem', maxWidth: '1350px', margin: '0 auto', background: '#fff9f0', border: '1px solid rgba(179, 139, 78, 0.16)', borderRadius: '24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-zehn" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
              Flexible Deployment Tiers
            </span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', color: '#1b1a17', fontWeight: '800' }}>
              One Engine. Three Levels of Feature Depth.
            </h2>
            <p style={{ color: '#7b6241', maxWidth: '650px', margin: '0.5rem auto 0 auto', fontSize: '1rem' }}>
              All tiers run on the exact same codebase. Upgrading a business simply unlocks features in real-time.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="perspective-container">
            
            {/* TIER 1: GROW */}
            <div 
              onClick={() => setActiveTier('grow')}
              className="card-3d-glow"
              style={{
                background: 'linear-gradient(145deg, #fff7ec, #fff0d8)',
                border: activeTier === 'grow' ? '2px solid #b38b4e' : '1px solid rgba(179, 139, 78, 0.16)',
                borderRadius: '18px',
                padding: '2.5rem',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <span style={{ background: 'rgba(179, 139, 78, 0.15)', color: '#4a3c29', padding: '0.3rem 0.85rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase' }}>
                TIER 1 — ESSENTIALS
              </span>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', color: '#1b1a17', fontWeight: '800', margin: '1rem 0 0.5rem 0' }}>
                Grow
              </h3>
              <p style={{ color: '#7b6241', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '2.5rem' }}>
                The starting plan covering essential WhatsApp AI conversations and lead capture.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: '#4a3c29' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> WhatsApp Lead Capture API</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> AI Conversations (Urdu & English)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> Lead Pipeline (New → Won/Lost)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> Daily Evening Owner WhatsApp Report</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> Basic DAIRA Dashboard Access</li>
              </ul>
            </div>

            {/* TIER 2: FLOW */}
            <div 
              onClick={() => setActiveTier('flow')}
              className="card-3d-glow"
              style={{
                background: 'linear-gradient(145deg, #fff7ec, #fff0d8)',
                border: activeTier === 'flow' ? '2px solid #d3b16a' : '1px solid rgba(179, 139, 78, 0.16)',
                borderRadius: '18px',
                padding: '2.5rem',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <span style={{ background: 'rgba(179, 139, 78, 0.15)', color: '#4a3c29', padding: '0.3rem 0.85rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase' }}>
                TIER 2 — AUTOMATION
              </span>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', color: '#1b1a17', fontWeight: '800', margin: '1rem 0 0.5rem 0' }}>
                Flow
              </h3>
              <p style={{ color: '#7b6241', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '2.5rem' }}>
                Intelligent automation, follow-ups, vector search, and lead scoring.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: '#4a3c29' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> Everything in Grow +</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> Context-Aware Follow-Up Engine</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> RAG Knowledge Base (Vector Search)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> AI Lead Scoring (0–100 Intent)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> Dead Lead Revival (90+ day recovery)</li>
              </ul>
            </div>

            {/* TIER 3: DAIRA */}
            <div 
              onClick={() => setActiveTier('daira')}
              className="card-3d-glow"
              style={{
                background: 'linear-gradient(145deg, #fff7ec, #fff0d8)',
                border: activeTier === 'daira' ? '2px solid #d3b16a' : '1px solid rgba(179, 139, 78, 0.16)',
                borderRadius: '18px',
                padding: '2.5rem',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(179, 139, 78, 0.18)'
              }}
            >
              <span style={{ background: 'rgba(179, 139, 78, 0.15)', color: '#4a3c29', padding: '0.3rem 0.85rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase' }}>
                TIER 3 — ENTERPRISE DAIRA OS
              </span>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', color: '#1b1a17', fontWeight: '800', margin: '1rem 0 0.5rem 0' }}>
                DAIRA
              </h3>
              <p style={{ color: '#7b6241', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '2.5rem' }}>
                Full ML-powered command centre, revenue forecasting, and back-office OS.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: '#4a3c29' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> Everything in Flow +</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> ML Revenue & Inventory Demand Forecasting</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> Anomaly Detection & Auto-Alert Engine</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> DAIRA Command Centre Dashboard</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#b38b4e" /> Double-Entry Finance & HR OS Suite</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 7 INDUSTRY-SPECIFIC MODULES TAB SHOWCASE */}
        <section style={{ padding: '5rem 2rem', background: '#fff9f0', borderTop: '1px solid rgba(179, 139, 78, 0.16)', borderBottom: '1px solid rgba(179, 139, 78, 0.16)' }}>
          <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="badge-zehn" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                Industry-Specific Architecture
              </span>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', color: '#1b1a17', fontWeight: '800' }}>
                7 Purpose-Built Vertical Modules
              </h2>
              <p style={{ color: '#7b6241', maxWidth: '650px', margin: '0.5rem auto 0 auto', fontSize: '1rem' }}>
                ZEHN isn't a generic chatbot. Each industry module has its own schedulers, logic, and automated workflows.
              </p>
            </div>

            {/* Industry Module Tabs */}
            <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2.5rem' }}>
              {modules.map((m) => {
                const isSelected = activeModule === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveModule(m.id)}
                    style={{
                      padding: '0.75rem 1.25rem',
                      borderRadius: '10px',
                      background: isSelected ? 'linear-gradient(135deg, #b38b4e, #d3b16a)' : 'rgba(255, 255, 255, 0.9)',
                      border: isSelected ? '1px solid rgba(179, 139, 78, 0.35)' : '1px solid rgba(179, 139, 78, 0.16)',
                      color: isSelected ? '#1b1a17' : '#7b6241',
                      fontWeight: isSelected ? '700' : '500',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.85rem',
                      transition: 'all 0.25s ease',
                      boxShadow: isSelected ? '0 0 20px rgba(179, 139, 78, 0.35)' : 'none'
                    }}
                  >
                    <span>{m.icon}</span>
                    <span>{m.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Module Display Card */}
            <div className="glass-zehn-card" style={{ padding: '3rem', border: '1px solid rgba(179, 139, 78, 0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '3rem' }}>{currentModuleData.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2rem', color: '#1b1a17', fontWeight: '800' }}>
                    {currentModuleData.name} Module
                  </h3>
                  <p style={{ color: '#7b6241', fontSize: '0.95rem', fontWeight: '600' }}>
                    {currentModuleData.subtitle}
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {currentModuleData.features.map((feat, idx) => (
                  <div key={idx} style={{ background: 'rgba(255, 247, 234, 0.95)', border: '1px solid rgba(179, 139, 78, 0.16)', padding: '1.25rem', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} color="#b38b4e" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9rem', color: '#4a3c29', lineHeight: 1.5 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* AI ON AUTOPILOT - 20+ AUTOMATED CAPABILITIES GRID */}
        <section style={{ padding: '5rem 2rem 6rem 2rem', maxWidth: '1350px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-autopilot" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
              100% Zero-Touch Automation
            </span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', color: '#1b1a17', fontWeight: '800' }}>
              AI Features Running Continuously On Autopilot
            </h2>
            <p style={{ color: '#7b6241', maxWidth: '650px', margin: '0.5rem auto 0 auto', fontSize: '1rem' }}>
              These capabilities run 24/7 without any human input. The owner simply checks their evening WhatsApp brief.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                icon: '',
                title: 'WhatsApp Conversational AI',
                desc: 'Reads, understands, and replies to inbound messages 24/7 in Urdu, Roman Urdu, and English. Checks context history and RAG knowledge base.'
              },
              {
                icon: '',
                title: 'Automated Follow-Up Engine',
                desc: 'Schedules and dispatches personalized follow-ups when customers go silent. Respects quiet hours and Meta 24-hour windows.'
              },
              {
                icon: '',
                title: 'Daily Evening WhatsApp Briefs',
                desc: 'Compiles all metrics, leads, and inquiries every evening and sends a synthesized AI report directly to the business owner.'
              },
              {
                icon: '',
                title: 'Monthly Performance Audits',
                desc: 'Generates automated month-over-month growth analytics, win rates, and strategic recommendations for executive review.'
              },
              {
                icon: '',
                title: 'ML Revenue Forecasting (XGBoost)',
                desc: 'Trains custom time-series regression models per client to forecast revenue and inventory demand with confidence bounds.'
              },
              {
                icon: '',
                title: 'Anomaly & Loss Detection',
                desc: 'Automatically monitors metrics for high cancellation rates, inventory discrepancies, and hot leads neglected by staff.'
              },
              {
                icon: '',
                title: 'AI Lead Intent Scoring (0–100)',
                desc: 'Rates lead purchase intent from 0 to 100 based on conversation velocity, keywords, and historical conversion signals.'
              },
              {
                icon: '',
                title: 'Self-Learning Config Proposals',
                desc: 'Analyzes draft review patterns to automatically propose knowledge base updates and tone adjustments to the owner.'
              },
              {
                icon: '',
                title: 'Dead Lead Revival Campaigns',
                desc: 'Reactivates 90+ day cold leads automatically by matching them against newly listed properties and offers.'
              },
              {
                icon: '',
                title: 'Automated Document Chase',
                desc: 'Reminds buyers to submit pending registration documents (CNIC, NOC, allotment) via persistent WhatsApp sequences.'
              },
              {
                icon: '',
                title: 'Installment & Invoice Chasing',
                desc: 'Sends polite, escalating WhatsApp payment reminders for plot installments, retailer balances, and overdue invoices.'
              },
              {
                icon: '',
                title: 'Pakistani Holiday Campaigns',
                desc: 'Automatically triggers broadcast campaigns for Eid, Ramadan, and Independence Day (14 August) with cultural messaging.'
              }
            ].map((item, idx) => (
              <div key={idx} className="glass-zehn-card" style={{ padding: '1.75rem' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', color: '#1b1a17', fontWeight: '700' }}>{item.title}</h4>
                  <span className="badge-autopilot" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>AUTOPILOT</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#7b6241', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founders — visible only on the ZEHN product page */}
        <section style={{ padding: '3rem 2rem 6rem 2rem', maxWidth: '1350px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'flex-start' }}>
            <div className="glass-zehn-card" style={{ padding: '1rem 1.25rem', border: '1px solid rgba(179,139,78,0.12)', borderRadius: '12px', maxWidth: '420px' }}>
              <div style={{ fontSize: '0.85rem', color: '#7b6241', fontWeight: 800, marginBottom: '0.5rem' }}>ZEHN Founders</div>
              <div style={{ fontSize: '0.95rem', color: '#1b1a17', lineHeight: 1.5 }}>
                <div><strong>Chan Shah Kazmi</strong> — CEO &amp; Co-founder</div>
                <div><strong>Hunain Ashfaq</strong> — CTO &amp; Co-founder</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const zehnNavLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#7b6241',
  fontSize: '0.8rem',
  letterSpacing: '0.08em',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
};


