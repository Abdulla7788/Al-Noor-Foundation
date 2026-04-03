import React, { useState } from 'react';
import { FadeInSection } from '../components/Shared';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappMsg = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/917997666552?text=${whatsappMsg}`, '_blank');
    };

    return (
        <div className="page-container py-32 min-h-screen relative overflow-hidden bg-slate-50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Official Support</span>
                    <h1 className="text-6xl md:text-7xl font-black text-primary tracking-tighter leading-tight mb-8">Contact <span className="text-accent italic">Our Team</span></h1>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium leading-relaxed">Have questions about our programs or want to get involved? We're here to help you every step of the way.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                    <div className="space-y-12">
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-accent text-3xl mb-8 group-hover:bg-accent group-hover:text-black transition-all">
                                <i className="fa-solid fa-map-location-dot"></i>
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-4 tracking-tight">Our Location</h3>
                            <p className="text-slate-500 font-medium leading-relaxed font-inter italic">Madinapadu Village, Dachepalli Mandal,<br/>Palnadu District, Pin: 522414.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                { icon: 'phone-volume', label: 'Call Us', val: '+91 79976 66552', color: 'bg-emerald-500' },
                                { icon: 'envelope-open-text', label: 'Email Us', val: 'alnoortrust2025@gmail.com', color: 'bg-blue-500' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                                    <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center text-xl mb-6 shadow-lg group-hover:scale-110 transition-all`}>
                                        <i className={`fa-solid fa-${item.icon}`}></i>
                                    </div>
                                    <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-2">{item.label}</span>
                                    <p className="text-slate-900 font-black text-sm tracking-tight">{item.val}</p>
                                </div>
                            ))}
                        </div>

                        {/* Google Maps Integration */}
                        <div className="h-[500px] rounded-[3.5rem] overflow-hidden border-8 border-white shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15332.916892644243!2d80.08333!3d16.58333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b087796d74f7f%3A0x7d0d0f1f1f1f1f1f!2sMadinapadu%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                                className="w-full h-full grayscale border-none filter brightness-90 contrast-110"
                                allowFullScreen="" 
                                loading="lazy"
                                title="Foundation Location"
                            ></iframe>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-12 lg:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <h2 className="text-4xl font-black mb-12 text-primary leading-tight">Send us a <span className="text-accent italic">Message</span></h2>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 ml-2">Full Name</label>
                                        <input type="text" name="name" placeholder="E.g. Shaik Shavali" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-5 px-8 text-slate-900 focus:border-accent focus:bg-white outline-none transition-all font-bold placeholder-slate-300" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 ml-2">Email Address</label>
                                        <input type="email" name="email" placeholder="example@mail.com" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-5 px-8 text-slate-900 focus:border-accent focus:bg-white outline-none transition-all font-bold placeholder-slate-300" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 ml-2">Subject</label>
                                        <input type="text" name="subject" placeholder="How can we help?" required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-5 px-8 text-slate-900 focus:border-accent focus:bg-white outline-none transition-all font-bold placeholder-slate-300" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 ml-2">Your Message</label>
                                        <textarea name="message" rows="5" placeholder="Write your message here..." required className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-5 px-8 text-slate-900 focus:border-accent focus:bg-white outline-none resize-none transition-all font-bold placeholder-slate-300" onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-primary text-accent hover:bg-black hover:text-white py-6 rounded-3xl text-xl font-black shadow-2xl transition-all flex items-center justify-center gap-4">
                                     Send via WhatsApp <i className="fa-brands fa-whatsapp"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
