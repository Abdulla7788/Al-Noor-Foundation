import React from 'react';
import { FadeInSection } from '../components/Shared';

const AboutPage = () => {
    const team = [
        { name: 'Wasim Akram', role: 'Founder & Visionary', img: '/manager.jpg' },
        { name: 'Foundation Secretary', role: 'Operations Lead', img: '/secretary.jpg' },
        { name: 'Finance Lead', role: 'Transparency & Accounts', img: '/finance.jpg' },
        { name: 'Lead Volunteer', role: 'Community Impact', img: '/LADIE.jpg' }
    ];

    return (
        <div className="page-container py-32 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center mb-32">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Est. 2025</span>
                    <h1 className="text-7xl md:text-8xl font-black text-primary tracking-tighter leading-tight mb-12">Our <span className="text-accent italic">Story</span></h1>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium text-lg leading-relaxed">Dedicated to serving humanity with dignity, transparency, and a relentless focus on sustainable rural development.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-24 items-center mb-40 max-w-7xl mx-auto">
                    <FadeInSection>
                        <div className="relative group p-6">
                            <div className="absolute inset-0 bg-accent/20 rounded-[4rem] rotate-3 blur-3xl scale-95 group-hover:scale-105 transition-all duration-1000"></div>
                            <div className="relative z-10 overflow-hidden rounded-[3.5rem] shadow-2xl border-8 border-white">
                                <img src="/founder.jpg" alt="Foundation Origin" className="w-full h-[650px] object-cover hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-black text-2xl mb-2 italic">A Vision of Hope</h3>
                                    <p className="text-white/70 text-sm font-medium">Empowering the unreachable since day one.</p>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={200}>
                        <div className="space-y-12">
                            <h2 className="text-5xl font-black text-primary leading-tight tracking-tighter">The Power of <br/><span className="text-accent italic">Collective Compassion</span></h2>
                            <p className="text-slate-500 text-xl leading-relaxed font-inter italic">
                                "Our journey began with a simple observation: small acts of kindness, when multiplied by a community, can solve the most complex social challenges."
                            </p>
                            <div className="space-y-8">
                                {[
                                    { title: 'Sustainable Education', desc: 'Building digital literacy labs in remote villages.' },
                                    { title: 'Clean Water Initiative', desc: 'Implementing solar-powered borewells for zero-cost maintenance.' },
                                    { title: 'Direct Relief', desc: 'Immediate food and medical assistance for families in crisis.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                                            <i className="fa-solid fa-check text-sm font-black"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-black text-primary text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate-400 font-medium text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-12 grid grid-cols-2 gap-12 border-t border-slate-200">
                                <div>
                                    <h4 className="text-5xl font-black text-primary mb-2 tracking-tighter">100%</h4>
                                    <p className="text-accent text-[9px] font-black uppercase tracking-[0.4em]">Audit Transparency</p>
                                </div>
                                <div>
                                    <h4 className="text-5xl font-black text-primary mb-2 tracking-tighter">Direct</h4>
                                    <p className="text-accent text-[9px] font-black uppercase tracking-[0.4em]">Impact Delivery</p>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>

                <div className="bg-white p-24 md:p-32 rounded-[5rem] shadow-2xl border border-slate-100 relative overflow-hidden mb-32">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/Community.png')] bg-cover opacity-5 mix-blend-multiply"></div>
                    <div className="relative z-10">
                        <div className="text-center mb-24">
                            <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Our Team</span>
                            <h2 className="text-6xl font-black text-primary tracking-tighter leading-tight">Meet the <span className="text-accent italic">Leadership</span></h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 max-w-7xl mx-auto">
                            {team.map((member, index) => (
                                <FadeInSection key={index} delay={index * 150}>
                                    <div className="group text-center">
                                        <div className="relative mb-12 inline-block p-4">
                                            <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-2xl"></div>
                                            <img src={member.img} alt={member.name} className="relative z-10 w-64 h-64 rounded-[3.5rem] object-cover border-8 border-white shadow-2xl group-hover:scale-105 transition-all duration-700" />
                                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-14 w-14 rounded-2xl bg-accent text-black flex items-center justify-center text-xl shadow-xl z-20 opacity-0 group-hover:opacity-100 transition-all">
                                                <i className="fa-solid fa-id-card-clip"></i>
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-black text-primary mb-3 tracking-tighter">{member.name}</h3>
                                        <p className="text-accent font-black tracking-[0.4em] uppercase text-[10px]">{member.role}</p>
                                        <div className="mt-8 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all">
                                            {['twitter', 'linkedin-in'].map(soc => (
                                                <i key={soc} className={`fab fa-${soc} text-slate-300 hover:text-primary cursor-pointer transition-colors`}></i>
                                            ))}
                                        </div>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
