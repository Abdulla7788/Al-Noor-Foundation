import React from 'react';
import { FadeInSection } from '../components/Shared';

const EventDetailsPage = ({ eventId, onNavigate }) => {
    // Detailed Events Data
    const eventsData = {
        'sewing_training': {
            title: 'Women Empowerment Lab: Sewing & Stitching',
            image: '/sweeing2.jpg',
            description: 'Free 5-month vocational training course for women in rural Prakasam district. We provide the machines, materials, and certificates to each successful graduate.',
            date: 'July - November 2025',
            impactLabel: '150+ Women Enrolled',
            category: 'Skill Building',
            vision: 'Financial independence for every woman in the region.'
        }
    };

    const event = eventsData[eventId] || eventsData['sewing_training'];

    return (
        <div className="page-container py-32 bg-transparent min-h-screen">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
                    <FadeInSection>
                        <div className="relative group p-4">
                            <div className="absolute inset-0 bg-primary/20 rounded-[4rem] group-hover:rotate-12 transition-transform duration-700 blur-2xl"></div>
                            <img src={event.image} alt={event.title} className="relative z-10 w-full rounded-[3.5rem] h-[650px] object-cover shadow-3xl border-8 border-bg-dark/40" />
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={200}>
                        <div className="space-y-12 py-10">
                            <h1 className="text-6xl md:text-7xl font-black text-white leading-tight tracking-tighter italic">{event.title}</h1>
                            <div className="p-8 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-xl">
                                <p className="text-emerald-100/60 text-xl leading-relaxed italic">"{event.description}"</p>
                            </div>
                            <div className="grid grid-cols-2 gap-12">
                                <div className="border-l-8 border-accent p-6 bg-accent/5 rounded-2xl">
                                    <h4 className="text-white font-black text-xs uppercase tracking-tighter mb-4">Event Date</h4>
                                    <p className="text-emerald-50 text-xl font-bold leading-tight">{event.date}</p>
                                </div>
                                <div className="border-l-8 border-primary p-6 bg-primary/20 rounded-2xl">
                                    <h4 className="text-primary font-black text-xs uppercase tracking-tighter mb-4">The Impact</h4>
                                    <p className="text-white text-xl font-bold leading-tight">{event.impactLabel}</p>
                                </div>
                            </div>
                            <div className="pt-10">
                                <button onClick={() => onNavigate('involved')} className="btn btn-primary px-16 py-6 text-xl rounded-full shadow-2xl">
                                    Volunteer for This <i className="fas fa-hand-holding-heart text-accent ml-4 animate-pulse"></i>
                                </button>
                            </div>
                        </div>
                    </FadeInSection>
                </div>

                <div className="bg-emerald-950 p-24 rounded-[5rem] text-center shadow-3xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-10"></div>
                    <div className="relative z-10">
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tighter leading-tight">Empowering lives <br/><span className="text-accent font-inter">one stitch at a time.</span></h3>
                        <p className="text-emerald-100/30 font-black text-[10px] uppercase tracking-[0.5em] mb-12">Authorized Community Relief NGO</p>
                        <button onClick={() => onNavigate('donate')} className="btn btn-primary px-12 py-5 rounded-full font-black text-xs">Help Fund this Program</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;
