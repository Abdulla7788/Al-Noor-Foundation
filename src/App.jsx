import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Preloader, Lightbox } from './components/Shared';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import DonatePage from './pages/DonatePage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import { PrivacyPolicyPage, RefundPolicyPage, ShippingPolicyPage } from './pages/Policies';
import InvolvedPage from './pages/InvolvedPage';
import VolunteersPage from './pages/VolunteersPage';
import ReportsPage from './pages/ReportsPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import EventDetailsPage from './pages/EventDetailsPage';

const AppContent = () => {
    const [loading, setLoading] = useState(true);
    const [lightboxImage, setLightboxImage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // We're using a specific NGO Deep Green Theme, managing it via CSS variables.
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    const handleNavigate = (path, data = {}) => {
        if (data.serviceId) {
            navigate(`/service/${data.serviceId}`);
        } else if (data.eventId) {
            navigate(`/event/${data.eventId}`);
        } else {
            navigate(`/${path}`);
        }
    };

    const currentPage = location.pathname.split('/')[1] || 'home';

    return (
        <div className="min-h-screen selection:bg-accent selection:text-white overflow-x-hidden">
            <Preloader loading={loading} />
            <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
            
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            
            <main className="relative z-10">
                <Routes>
                    <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
                    <Route path="/home" element={<HomePage onNavigate={handleNavigate} />} />
                    <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
                    <Route path="/programs" element={<ProgramsPage onNavigate={handleNavigate} />} />
                    <Route path="/services" element={<ProgramsPage onNavigate={handleNavigate} />} />
                    <Route path="/donate" element={<DonatePage />} />
                    <Route path="/events" element={<EventsPage onNavigate={handleNavigate} />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/gallery" element={<GalleryPage onImageClick={setLightboxImage} onNavigate={handleNavigate} />} />
                    <Route path="/faq" element={<FAQPage onNavigate={handleNavigate} />} />
                    <Route path="/involved" element={<InvolvedPage onNavigate={handleNavigate} />} />
                    <Route path="/volunteer" element={<InvolvedPage onNavigate={handleNavigate} />} />
                    <Route path="/volunteers" element={<VolunteersPage onNavigate={handleNavigate} />} />
                    <Route path="/reports" element={<ReportsPage onNavigate={handleNavigate} />} />
                    <Route path="/impact" element={<ReportsPage onNavigate={handleNavigate} />} />
                    <Route path="/terms" element={<TermsPage onNavigate={handleNavigate} />} />
                    <Route path="/privacy" element={<PrivacyPolicyPage onNavigate={handleNavigate} />} />
                    <Route path="/refund" element={<RefundPolicyPage onNavigate={handleNavigate} />} />
                    <Route path="/shipping" element={<ShippingPolicyPage onNavigate={handleNavigate} />} />
                    <Route path="/service/:serviceId" element={<ServiceDetailsFetcher onNavigate={handleNavigate} />} />
                    <Route path="/event/:eventId" element={<EventDetailsFetcher onNavigate={handleNavigate} />} />
                </Routes>
            </main>

            {/* Quick Action Floating Widget */}
            <div className="fixed bottom-12 right-12 z-50 flex flex-col gap-4">
                <button 
                  onClick={() => handleNavigate('donate')} 
                  className="bg-accent text-black w-24 h-24 rounded-[2.5rem] flex flex-col items-center justify-center shadow-[0_30px_60px_-15px_rgba(212,175,55,0.6)] hover:-rotate-12 hover:scale-110 transition-all group border-4 border-white/20"
                >
                    <i className="fa-solid fa-hand-holding-heart text-3xl group-hover:scale-125 transition-transform animate-bounce"></i>
                    <span className="text-[10px] font-black uppercase mt-1 tracking-widest">Donate</span>
                </button>
            </div>

            <Footer onNavigate={handleNavigate} />
        </div>
    );
};

const ServiceDetailsFetcher = ({ onNavigate }) => {
    const { serviceId } = useParams();
    return <ServiceDetailsPage serviceId={serviceId} onNavigate={onNavigate} />;
};

const EventDetailsFetcher = ({ onNavigate }) => {
    const { eventId } = useParams();
    return <EventDetailsPage eventId={eventId} onNavigate={onNavigate} />;
};

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}
