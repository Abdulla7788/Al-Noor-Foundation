import React, { useState } from 'react';
import { FadeInSection } from '../components/Shared';

const InvolvedPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMsg = `Volunteer Application:%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AInterest: ${formData.interest}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/917997666552?text=${whatsappMsg}`, '_blank');
    };

    return (
        <div className="page-container py-32 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-32">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Expand Our Reach</span>
                    <h1 className="text-7xl md:text-8xl font-black text-primary tracking-tighter leading-tight italic">Join the <span className="text-accent">Mission</span></h1>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium mt-10 leading-relaxed italic border-l-4 border-accent pl-10 text-xl">Your time and unique skills can spark a generational shift in Madinapadu and beyond.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-5xl font-black text-primary leading-tight tracking-tighter">Become a <span className="text-accent">Messenger of Hope</span></h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                Join our global network of advocates, professionals, and change-makers committed to sustainable rural development.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            {[
                                { title: 'Direct Impact', desc: 'Work directly with beneficiaries in our digital labs and health clusters.', icon: 'hand-holding-heart' },
                                { title: 'Skill Sharing', desc: 'Consult on our strategic roadmap or lead specialized vocational workshops.', icon: 'brain' },
                                { title: 'Strategic Advocacy', desc: 'Amplify our vision across corporate and global philanthropic networks.', icon: 'rss' }
                            ].map((item, idx) => (
                                <FadeInSection key={idx} delay={idx * 150}>
                                    <div className="flex gap-8 p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl group hover:-translate-y-2 transition-all duration-500">
                                        <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-inner border border-primary/10">
                                            <i className={`fas fa-${item.icon}`}></i>
                                        </div>
                                        <div>
                                            <h4 className="text-primary text-2xl font-black mb-2 tracking-tighter group-hover:text-accent transition-colors">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-12 md:p-20 rounded-[5rem] shadow-3xl border border-slate-100 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('/Community.jpg')] bg-cover opacity-5 mix-blend-multiply pointer-events-none transition-transform duration-1000 group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="mb-12">
                                <h3 className="text-4xl font-black text-primary tracking-tighter mb-4 italic">Strategic <span className="text-accent">Application</span></h3>
                                <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest">Connect directly with our operations team via WhatsApp.</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase text-primary tracking-widest opacity-40 ml-4">Full Identity</label>
                                    <input type="text" name="name" placeholder="Name" required className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-6 px-10 text-primary font-bold placeholder:text-slate-300 focus:border-accent outline-none transition-all shadow-inner" onChange={handleChange} />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase text-primary tracking-widest opacity-40 ml-4">Email</label>
                                        <input type="email" name="email" placeholder="Email" required className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-6 px-10 text-primary font-bold placeholder:text-slate-300 focus:border-accent outline-none transition-all shadow-inner" onChange={handleChange} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase text-primary tracking-widest opacity-40 ml-4">Contact Phone</label>
                                        <input type="tel" name="phone" placeholder="Phone" required className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-6 px-10 text-primary font-bold placeholder:text-slate-300 focus:border-accent outline-none transition-all shadow-inner" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase text-primary tracking-widest opacity-40 ml-4">Core Interest Pillar</label>
                                    <select name="interest" className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-6 px-10 text-primary font-bold focus:border-accent outline-none shadow-inner" onChange={handleChange}>
                                        <option value="">Select Domain</option>
                                        <option value="education">Digital Education</option>
                                        <option value="water">Sanitation & Water</option>
                                        <option value="medical">Medical Relief</option>
                                        <option value="skills">Vocational Training</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black uppercase text-primary tracking-widest opacity-40 ml-4">Brief Statement of Intent</label>
                                    <textarea name="message" rows="4" placeholder="How do you wish to contribute?" className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-6 px-10 text-primary font-bold placeholder:text-slate-300 focus:border-accent outline-none resize-none transition-all shadow-inner" onChange={handleChange}></textarea>
                                </div>
                                
                                <button type="submit" className="w-full bg-primary text-white py-8 rounded-3xl text-xs font-black uppercase tracking-[0.4em] hover:bg-accent hover:text-black transition-all shadow-2xl mt-12 flex items-center justify-center gap-6">
                                    Connect & Apply <i className="fa-brands fa-whatsapp text-2xl text-accent group-hover:text-black"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvolvedPage;
