import React from 'react';
import { FadeInSection, AnimatedCounter } from '../components/Shared';

const HomePage = ({ onNavigate }) => {
    return (
        <div className="page-container bg-transparent">
            {/* 1. HERO SECTION (High-End & Fitted) */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white mb-20 pt-20">
                <div className="absolute inset-0 z-0">
                    <img 
                      src="/backgroundImage.jpg" 
                      alt="Al-Noor Foundation Charity" 
                      className="w-full h-full object-cover object-center filter contrast-110 brightness-95 scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/5"></div>
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
                    <FadeInSection>
                        <div className="bg-white/80 backdrop-blur-2xl p-10 md:p-20 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white/50 text-center">
                            <p className="text-gray-800 text-xl md:text-3xl font-black leading-tight mb-12 max-w-4xl mx-auto italic tracking-tight">
                                "Building sustainable futures through water, education, and vocational labs for the most vulnerable rural communities."
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-8">
                                <button onClick={() => onNavigate('donate')} className="bg-white text-black px-14 py-6 text-xl rounded-[2.5rem] shadow-2xl font-black hover:-translate-y-2 hover:bg-accent transition-all duration-500 flex items-center justify-center group">
                                    <i className="fa-solid fa-heart mr-3 text-accent group-hover:text-black transition-colors"></i> Support Now
                                </button>
                                <button onClick={() => onNavigate('involved')} className="bg-white/30 backdrop-blur-md border border-white/40 text-black px-14 py-6 text-xl rounded-[2.5rem] shadow-xl font-bold hover:bg-white/50 transition-all duration-500">
                                    Join Us <i className="fas fa-users ml-3"></i>
                                </button>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* 2. URGENT DONATION BANNER */}
            <section className="container mx-auto px-6 mb-32">
                <FadeInSection>
                    <div className="bg-accent rounded-[3.5rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border-8 border-white/10 group cursor-pointer hover:scale-[1.02] transition-all">
                        <div className="absolute inset-0 z-0 opacity-20">
                            <img src="/borewell.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Borewell" />
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-32 -translate-y-32 blur-3xl animate-pulse"></div>
                        
                        <div className="items-center text-center md:text-left z-10 relative">
                            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent text-2xl shadow-lg">
                                    <i className="fa-solid fa-exclamation-triangle"></i>
                                </div>
                                <h3 className="text-[11px] font-black text-white uppercase tracking-[0.4em]">Urgent Campaign</h3>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">Clean Water for <br/>Villages</h2>
                        </div>
                        <div className="text-center md:text-right z-10 relative">

                            <button onClick={() => onNavigate('donate')} className="bg-white text-primary hover:bg-black hover:text-white px-12 py-5 text-lg rounded-[2rem] transition-all shadow-xl font-black flex items-center justify-center gap-3 ml-auto">
                                Donate Now <i className="fa-solid fa-tint"></i>
                            </button>
                        </div>
                    </div>
                </FadeInSection>
            </section>            {/* 3. IMPACT SECTION (Stats) */}
            <section className="py-24 relative overflow-hidden bg-white mx-6 rounded-[5rem] mb-32 border border-slate-100 shadow-2xl">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { count: 1200, label: 'Lives Impacted', icon: 'users', color: '#0f3d2e' },
                            { count: 450, label: 'Students Helped', icon: 'user-graduate', color: '#d4af37' },
                            { count: 25000, label: 'Meals Provided', icon: 'bowl-food', color: '#0f3d2e' },
                            { count: 58, label: 'Villages Served', icon: 'house-chimney-window', color: '#d4af37' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group hover:-translate-y-4 transition-all duration-700">
                                <div className="flex justify-center mb-8">
                                    <div className="w-24 h-24 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-center text-4xl shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500" style={{color: stat.color}}>
                                        <i className={`fa-solid fa-${stat.icon}`}></i>
                                    </div>
                                </div>
                                <div className="text-5xl font-black text-primary mb-2 tracking-tighter">
                                    <AnimatedCounter target={stat.count} />+
                                </div>
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] leading-relaxed max-w-[150px] mx-auto">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* 4. FEATURED CAMPAIGNS (Card-based UI) */}
            <section className="py-32 container mx-auto px-6 mb-32">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div className="max-w-2xl">
                        <span className="text-accent text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Proven Reach</span>
                        <h2 className="text-6xl font-black text-primary leading-tight tracking-tighter">Active <br/><span className="text-accent italic">Campaigns</span></h2>
                    </div>
                    <button onClick={() => onNavigate('programs')} className="text-primary font-black uppercase text-xs tracking-widest border-b-2 border-accent pb-2 hover:translate-x-2 transition-transform">
                        Explore all Programs <i className="fas fa-long-arrow-alt-right ml-2"></i>
                    </button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-16">
                    {[
                        { title: 'Digital Literacy Units', img: '/education.png', icon: 'laptop-code', category: 'Education' },
                        { title: 'Safe Water Borewells', img: '/borewell.png', icon: 'faucet', category: 'Health' },
                        { title: 'Emergency Food Relief', img: '/Community.png', icon: 'box-open', category: 'Welfare' }
                    ].map((item, i) => (
                        <FadeInSection key={i} delay={i * 200}>
                            <div className="bg-white rounded-[3.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-gray-100 group cursor-default hover:shadow-2xl transition-all duration-700">
                                <div className="h-[450px] relative overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000 brightness-90 group-hover:brightness-100" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 text-white z-10 group-hover:-translate-y-4 transition-transform duration-500">
                                        <span className="bg-accent/40 backdrop-blur-md px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block border border-accent/20">{item.category}</span>
                                        <h3 className="text-3xl font-black leading-tight mb-8 pr-12">{item.title}</h3>
                                        <button onClick={() => onNavigate('donate')} className="btn btn-accent px-10 py-5 rounded-[1.5rem] shadow-2xl opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                                            Donate Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </section>

            {/* 5. JOIN THE ECOSYSTEM (Call to Action Blocks) */}
            <section className="py-32 container mx-auto px-6 mb-32">
                <div className="text-center mb-24">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Take the next step</span>
                    <h2 className="text-6xl font-black text-primary tracking-tighter leading-tight">Your Role in <br/><span className="text-accent italic">Our Mission</span></h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { title: 'Donate Funds', desc: 'Sponsor a child\'s education or a village borewell project.', icon: 'hand-holding-heart', btn: 'Give Now', action: 'donate' },
                        { title: 'Become Volunteer', desc: 'Join our local teams on the ground in Madinapadu.', icon: 'users-gear', btn: 'Sign Up', action: 'involved' },
                        { title: 'Corporate Partner', desc: 'Align your CSR goals with sustainable rural impact.', icon: 'handshake', btn: 'Contact Us', action: 'contact' }
                    ].map((box, i) => (
                        <div key={i} className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 group hover:bg-primary transition-all duration-700">
                            <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-3xl text-primary mb-10 group-hover:bg-accent group-hover:text-black transition-all">
                                <i className={`fa-solid fa-${box.icon}`}></i>
                            </div>
                            <h3 className="text-3xl font-black text-primary mb-6 group-hover:text-white">{box.title}</h3>
                            <p className="text-slate-500 font-medium leading-relaxed mb-10 group-hover:text-slate-300">{box.desc}</p>
                            <button onClick={() => onNavigate(box.action)} className="bg-accent text-black px-10 py-5 rounded-2xl shadow-xl font-black transition-all group-hover:bg-white group-hover:text-black hover:scale-105">
                                {box.btn}
                            </button>
                        </div>
                    ))}
                </div>
            </section>



            {/* 7. TESTIMONIALS SLIDER SECTION */}
            <section className="py-32 bg-white mx-6 rounded-[5rem] mb-32 overflow-hidden relative shadow-2xl border border-slate-100">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-accent text-6xl mb-12 block"><i className="fa-solid fa-quote-left opacity-30"></i></span>
                    <FadeInSection>
                        <p className="text-3xl md:text-5xl font-black text-primary leading-tight tracking-tighter italic mb-16 max-w-5xl mx-auto">
                            "Seeing the children at the Digital Lab flourish has been the highlight of my year. Al-Noor is truly local and truly effective."
                        </p>
                        <div className="flex flex-col items-center justify-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-slate-100 p-2 border-4 border-accent shadow-xl">
                                <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                                    <i className="fa-solid fa-heart text-4xl text-accent"></i>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* 8. NEWSLETTER SUBSCRIPTION */}
            <section className="py-24 container mx-auto px-6">
                <div className="bg-emerald-950 rounded-[4rem] p-24 text-center relative overflow-hidden border border-white/5 shadow-[0_50px_100px_rgba(15,61,46,0.3)]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-gradient-to-b from-white/5 to-transparent"></div>
                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">Stay Connected <br/><span className="text-accent">Monthly Impact Reports</span></h2>
                        <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-6">
                            <input type="email" placeholder="Your Email Address" className="flex-1 bg-white/10 border-2 border-white/20 rounded-[2rem] py-6 px-10 text-white placeholder:text-white/40 focus:border-accent outline-none font-bold text-lg" />
                            <button className="bg-accent text-black px-12 py-6 text-xl rounded-[2rem] shadow-2xl font-black hover:bg-white hover:scale-105 transition-all">Subscribe</button>
                        </div>
                        <p className="mt-10 text-emerald-100/20 text-[10px] font-black uppercase tracking-[0.4em]">Zero Spam • Weekly Stories of Change</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
