import React from 'react';
import { FadeInSection } from '../components/Shared';

const ServiceDetailsPage = ({ serviceId, onNavigate }) => {
    // Shared Services Data - Aligned with ProgramsPage IDs
    const servicesData = {
        'education': {
            title: 'Sustainable Education Labs',
            image: '/education.jpg',
            content: 'Our education program goes beyond textbooks. We provide digital learning kits, teacher training, and safe school environments for children in overlooked rural clusters.',
            impact: 'Over 5.5K students enrolled in specialized digital labs.',
            vision: 'To eliminate the digital divide in rural Indian villages.',
            category: 'LITERACY PRODUCTIVITY'
        },
        'water': {
            title: 'Safe Water Borewells',
            image: '/borewell.jpg',
            content: 'We install high-capacity solar-powered borewells and advanced filtration systems. This eliminates water-borne diseases and reduces the kilometers women must walk for clean water.',
            impact: '45+ Deep Borewells installed serving over 15K villagers.',
            vision: 'Access to clean drinking water for every household in the district.',
            category: 'HEALTH & SANITATION'
        },
        'groceries': {
            title: 'Food & Relief Distribution',
            image: '/festival grocorries.jpg',
            content: 'Strategic food security programs for elderly citizens and low-income families. We provide nutrient-dense seasonal grocery kits and immediate relief during local crises.',
            impact: '25K+ Meals distributed through seasonal initiatives.',
            vision: 'Zero hunger in the communities where we serve.',
            category: 'SOCIAL WELFARE'
        },
        'sewing_training': {
            title: 'Women Empowerment Labs',
            image: '/SWEEING.jpg',
            content: 'Empowering women through vocational tailoring training. Graduates receive sewing machines and startup kits to begin their own micro-businesses from home.',
            impact: '1.2K+ Women trained and equipped for financial independence.',
            vision: 'A self-reliant ecosystem for rural women entrepreneurs.',
            category: 'VOCATIONAL SKILLS'
        }
    };

    const service = servicesData[serviceId] || servicesData['education'];

    return (
        <div className="page-container py-32 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Back Button */}
                <button 
                    onClick={() => onNavigate('programs')}
                    className="mb-16 flex items-center gap-4 text-primary font-black uppercase text-[10px] tracking-[0.4em] hover:text-accent transition-all group"
                >
                    <i className="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform"></i> 
                    Back to All Services
                </button>

                <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
                    <FadeInSection>
                        <div className="relative group p-6">
                            <div className="absolute inset-0 bg-accent/20 rounded-[4rem] rotate-3 blur-3xl scale-95 group-hover:scale-105 transition-all duration-1000"></div>
                            <div className="relative z-10 overflow-hidden rounded-[3.5rem] shadow-2xl border-8 border-white">
                                <img src={service.image} alt={service.title} className="w-full h-[650px] object-cover hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute bottom-12 left-12">
                                    <span className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-[10px] font-black tracking-widest text-primary shadow-xl">
                                        OFFICIAL IMPACT SITE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={200}>
                        <div className="space-y-12">
                            <div>
                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">{service.category}</span>
                                <h1 className="text-7xl font-black text-primary leading-tight tracking-tighter italic mb-8">{service.title}</h1>
                                <p className="text-slate-500 text-xl leading-relaxed font-inter border-l-4 border-accent pl-10">"{service.content}"</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                <div className="p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100">
                                    <h4 className="text-accent font-black text-[9px] uppercase tracking-widest mb-4">Current Milestone</h4>
                                    <p className="text-primary text-2xl font-black leading-tight tracking-tighter">{service.impact}</p>
                                </div>
                                <div className="p-10 bg-primary text-white rounded-[3rem] shadow-xl">
                                    <h4 className="text-white/40 font-black text-[9px] uppercase tracking-widest mb-4">Strategic Vision</h4>
                                    <p className="text-white text-2xl font-black leading-tight tracking-tighter">{service.vision}</p>
                                </div>
                            </div>

                            <div className="pt-10 flex flex-col sm:flex-row gap-6">
                                <button onClick={() => onNavigate('donate')} className="bg-accent text-black px-16 py-6 text-lg font-black rounded-[2.5rem] shadow-2xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4">
                                    Support this Program <i className="fas fa-heart text-xl animate-pulse"></i>
                                </button>
                                <button onClick={() => onNavigate('programs')} className="text-primary font-black uppercase text-[11px] tracking-widest hover:text-accent transition-colors flex items-center border-b-2 border-primary/10 pb-2 ml-4">
                                    Browse other Pillars
                                </button>
                            </div>
                        </div>
                    </FadeInSection>
                </div>

                <div className="bg-white p-20 md:p-32 rounded-[5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('/Community.png')] bg-cover opacity-5 mix-blend-multiply pointer-events-none"></div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center">
                        <h3 className="text-5xl md:text-6xl font-black text-primary mb-10 tracking-tighter leading-tight">Your donation is TAX EXEMPT <br/><span className="text-accent italic">under 80G regulation.</span></h3>
                        <p className="text-slate-400 font-black text-xs uppercase tracking-[0.4em] mb-16">Al-Noor Foundation: A Transperent & Audited NGO</p>
                        <div className="flex justify-center gap-12">
                            <button onClick={() => onNavigate('contact')} className="bg-primary text-white px-12 py-5 rounded-3xl font-black text-xs tracking-widest hover:bg-accent hover:text-black transition-all shadow-xl">
                                Request Impact Report <i className="fa-solid fa-file-pdf ml-4"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;
