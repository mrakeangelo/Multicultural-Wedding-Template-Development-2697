import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import OurRoots from './components/OurRoots';
import CeremonyOverview from './components/CeremonyOverview';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import TraditionsGuide from './components/TraditionsGuide';
import WeddingParty from './components/WeddingParty';
import Registry from './components/Registry';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for fonts and initial setup
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indian-background to-indian-primary/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-indian-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-indian-text font-script text-xl">Loading Unity Threads...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-indian-background to-indian-primary/5">
              <Routes>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/" element={
                  <>
                    <Header />
                    <main>
                      <Hero />
                      <OurRoots />
                      <CeremonyOverview />
                      <Timeline />
                      <Gallery />
                      <TraditionsGuide />
                      <WeddingParty />
                      <RSVP />
                      <Guestbook />
                      <Registry />
                    </main>
                    <Footer />
                  </>
                } />
              </Routes>
            </div>
          </Router>
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;