import React from 'react';
import { FadeInSection } from '../components/Shared';

const ProgramsPage = ({ onNavigate }) => {
    const services = [
        { id: 'education', title: 'Sustainable Education Labs', desc: 'Providing digital literacy and modern learning tools to rural children.', img: '/education.jpg', category: 'LITERACY', icon: 'graduation-cap' },
        { id: 'water', title: 'Safe Water Borewells', desc: 'Implementing solar-powered clean water solutions for remote villages.', img: '/borewell.jpg', category: 'HEALTH', icon: 'faucet-drip' },
        { id: 'groceries', title: 'Food & Relief Distribution', desc: 'Emergency grocery support and seasonal relief for vulnerable families.', img: '/festival grocorries.jpg', category: 'WELFARE', icon: 'basket-shopping' },
        { id: 'sewing_training', title: 'Women Empowerment Labs', desc: 'Vocational training and tailoring kits to foster financial independence.', img: '/SWEEING.jpg', category: 'VOCATIONAL', icon: 'scissors' }
    ];

    return (
        <div className="page-container py-32 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-32">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Impact Pillars</span>
                    <h1 className="text-7xl md:text-8xl font-black text-primary tracking-tighter leading-tight">Our <span className="text-accent italic">Services</span></h1>
                    <p className="max-w-xl mx-auto text-slate-500 font-medium mt-8 leading-relaxed">Providing sustainable solutions to rural challenges through integrated development programs.</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-16">
                    {services.map((service, index) => (
                        <FadeInSection key={service.id} delay={index * 100}>
                            <div className="group bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row min-h-[400px] hover:-translate-y-2 transition-all duration-700">
                                <div className="md:w-5/12 overflow-hidden relative">
                                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="md:w-7/12 p-12 flex flex-col justify-center bg-white relative">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary text-xl border border-primary/10">
                                            <i className={`fas fa-${service.icon}`}></i>
                                        </div>
                                        <span className="text-accent text-[9px] font-black uppercase tracking-[0.4em]">{service.category}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-primary mb-6 leading-tight tracking-tighter group-hover:text-accent transition-colors">{service.title}</h3>
                                    <p className="text-slate-400 font-medium text-sm leading-relaxed mb-10">{service.desc}</p>
                                    <button 
                                        onClick={() => onNavigate('service-details', { serviceId: service.id })} 
                                        className="inline-flex items-center gap-4 font-black text-[10px] uppercase tracking-widest text-primary hover:text-accent transition-all group"
                                    >
                                        Explore Strategy <i className="fas fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
                                    </button>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramsPage;
