import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Landing from './pages/Landing';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Team from './pages/Team';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Prefetch other routes when path changes
    if (pathname === '/') {
      [Gallery, Events, Team, JoinUs, Contact].forEach(component => {
        if (component.prefetch) {
          component.prefetch().catch(() => {});
        }
      });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollToTop />
      <div className="bg-gray-900 text-white">
        <Routes>
            <Route path="/" element={<><Landing /><About /></>} />
            <Route path="/about" element={<><Landing /><About scrollToAbout={true} /></>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <BackToTop />
      </div>
    </>
  );
}

export default App;
