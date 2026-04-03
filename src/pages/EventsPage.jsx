import React from 'react';
import { FadeInSection } from '../components/Shared';

const eventsData = [
    {
        id: 'sewing_training',
        title: 'Sewing Machine Training',
        image: '/sweing2.jpg',
        shortDescription: 'Free 5-month vocational course empowering women through skill development.',
        status: 'Active: July - Nov 2025',
        category: 'Skill Training',
        impact: '150+ Women Graduated',
        icon: 'scissors'
    }
];

const EventsPage = ({ onNavigate }) => (
    <div className="page-container py-32 bg-slate-50 min-h-screen font-inter">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-32">
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Chronicles of Hope</span>
                <h1 className="text-7xl md:text-8xl font-black text-primary tracking-tighter leading-tight">Events & <span className="text-accent italic">Impact</span></h1>
                <p className="max-w-2xl mx-auto text-slate-500 font-medium mt-10 leading-relaxed italic border-l-4 border-accent pl-10">Real-world milestones in our collective journey towards rural self-reliance.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
                {eventsData.map((event, index) => (
                    <FadeInSection key={event.id} delay={index * 100}>
                        <div className="group bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row h-full hover:shadow-primary/5 transition-all duration-700">
                            <div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-primary text-accent text-[8px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-2xl backdrop-blur-sm">
                                        {event.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-12 md:w-7/12 flex flex-col justify-center relative">
                                <span className="text-slate-300 text-[10px] font-black uppercase tracking-widest mb-4 block">{event.status}</span>
                                <h3 className="text-3xl font-black text-primary mb-6 leading-tight tracking-tighter group-hover:text-accent transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-slate-400 mb-8 line-clamp-3 text-sm leading-relaxed font-medium">{event.shortDescription}</p>
                                
                                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10">
                                            <i className={`fas fa-${event.icon} text-sm`}></i>
                                        </div>
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">{event.impact}</span>
                                    </div>
                                    <button 
                                        className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-primary hover:bg-accent hover:text-black transition-all group/btn"
                                    >
                                        <i className="fas fa-arrow-right-long group-hover/btn:translate-x-1 transition-transform"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
            
            <div className="mt-40">
                <div className="mb-20">
                    <h2 className="text-4xl font-black text-primary tracking-tighter italic">Upcoming <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-4">Landmarks</span></h2>
                    <p className="text-slate-400 font-medium text-sm mt-4 tracking-widest uppercase">The Next Phase of Our Rural Mission</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                    {[
                        { title: 'Digital Literacy Lab Phase 2', schedule: 'JANUARY 2026', img: '/education.jpg', icon: 'laptop' },
                        { title: 'District Solar Borewell Cluster', schedule: 'FEBRUARY 2026', img: '/borewell.jpg', icon: 'bolt' }
                    ].map((up, i) => (
                        <div key={i} className="group bg-white p-6 rounded-[3.5rem] shadow-xl border border-slate-100 flex items-center gap-10 hover:shadow-primary/5 transition-all duration-700">
                            <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden flex-shrink-0">
                                <img src={up.img} alt={up.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                            </div>
                            <div>
                                <span className="text-accent text-[8px] font-black tracking-[0.4em] mb-3 block">{up.schedule}</span>
                                <h4 className="text-2xl font-black text-primary leading-tight tracking-tighter group-hover:text-accent transition-colors">{up.title}</h4>
                                <div className="mt-6 flex items-center gap-2 text-slate-300">
                                    <i className={`fas fa-${up.icon} text-xs`}></i>
                                    <span className="text-[9px] font-black uppercase tracking-widest">In Strategic Mapping</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FadeInSection delay={400}>
                <div className="mt-32 bg-white p-24 md:p-32 rounded-[5rem] shadow-2xl border border-slate-200 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/Community.jpg')] bg-cover opacity-30 grayscale transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-24 h-24 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary text-4xl mb-12 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                            <i className="fa-solid fa-calendar-plus"></i>
                        </div>
                        <h3 className="text-5xl md:text-6xl font-black text-primary mb-10 tracking-tighter leading-tight">Be Part of our <br/><span className="text-accent italic">Future Initiatives</span></h3>
                        <p className="text-slate-500 max-w-2xl mx-auto mb-16 text-xl leading-relaxed italic border-l-4 border-accent pl-10">We are currently mapping new health clusters and mobile medical clinic locations. Your participation can spark a new milestone.</p>
                        <button onClick={() => onNavigate('involved')} className="bg-primary text-white px-16 py-6 rounded-[2rem] font-black tracking-widest uppercase text-xs hover:bg-accent hover:text-black transition-all shadow-2xl">
                            Volunteer for Strategy <i className="fa-solid fa-hand-holding-hand ml-4"></i>
                        </button>
                    </div>
                </div>
            </FadeInSection>
        </div>
    </div>
);

export default EventsPage;
