import React from 'react';
import { FadeInSection } from '../components/Shared';

const VolunteersPage = () => {
    const volunteers = [
        { name: 'Sameer Ahmed', role: 'Support Staff', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80' },
        { name: 'Ayesha Khan', role: 'Education Lead', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80' },
        { name: 'Rahul Sharma', role: 'Relief Coordinator', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80' },
        { name: 'Fatima Zahra', role: 'Healthcare Assistant', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80' }
    ];

    return (
        <div className="page-container py-24 bg-[#0B0E14]">
            <div className="container mx-auto px-6">
                <h1 className="section-title">Our <span className="text-gradient">Volunteers</span></h1>
                <p className="section-subtitle">The heartbeat of our foundation. These dedicated individuals give their time and energy to serve humanity.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {volunteers.map((v, idx) => (
                        <FadeInSection key={idx} delay={idx * 100}>
                            <div className="text-center group">
                                <div className="relative mb-6 inline-block">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                                    <img src={v.img} alt={v.name} className="w-40 h-40 rounded-full mx-auto relative z-10 shadow-2xl border-4 border-white/5 group-hover:border-cyan-400 transition-all duration-500 hover:scale-105 object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{v.name}</h3>
                                <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest">{v.role}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>

                <FadeInSection delay={400}>
                    <div className="mt-24 text-center glass-card p-12 border-white/5 bg-white/[0.02]">
                        <h2 className="text-3xl font-bold text-white mb-6">Want to join this amazing team?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">We are always looking for passionate people to join our mission. No matter your background, your contribution matters.</p>
                        <a href="/involved" className="btn btn-primary px-12">Register Now</a>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default VolunteersPage;
