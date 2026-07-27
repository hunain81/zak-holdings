import React, { useState, useEffect } from 'react';
import BrandSwitcherBar from './components/BrandSwitcherBar';
import VideoModal from './components/VideoModal';
import Footer from './components/Footer';

// Pages
import HoldingsHome from './pages/HoldingsHome';
import ZakCity from './pages/ZakCity';
import ZehnAI from './pages/ZehnAI';
import ZakCommodities from './pages/ZakCommodities';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

export default function App() {
  // Default landing page is ZAK Holdings Corporate HQ
  const [activeView, setActiveView] = useState('holdings');
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    title: '',
    videoUrl: '',
    subtitle: ''
  });

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleOpenVideo = (title, videoUrl, subtitle) => {
    setVideoModal({
      isOpen: true,
      title,
      videoUrl,
      subtitle
    });
  };

  const handleCloseVideo = () => {
    setVideoModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#040508' }}>
      
      {/* Top Brand Navigation Bar */}
      <BrandSwitcherBar activeView={activeView} setActiveView={setActiveView} />

      {/* Main View Area */}
      <main style={{ flex: 1 }}>
        {activeView === 'holdings' && (
          <HoldingsHome setActiveView={setActiveView} onOpenVideo={handleOpenVideo} />
        )}

        {activeView === 'city' && (
          <ZakCity setActiveView={setActiveView} onOpenVideo={handleOpenVideo} />
        )}

        {activeView === 'zehn' && (
          <ZehnAI setActiveView={setActiveView} onOpenVideo={handleOpenVideo} />
        )}

        {activeView === 'commodities' && (
          <ZakCommodities setActiveView={setActiveView} onOpenVideo={handleOpenVideo} />
        )}

        {activeView === 'about' && (
          <AboutUs setActiveView={setActiveView} />
        )}

        {activeView === 'contact' && (
          <ContactUs setActiveView={setActiveView} />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActiveView={setActiveView} />

      {/* Video Showcase Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        title={videoModal.title}
        videoUrl={videoModal.videoUrl}
        subtitle={videoModal.subtitle}
      />
    </div>
  );
}
