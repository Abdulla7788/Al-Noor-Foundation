import React from 'react';
import { FadeInSection } from '../components/Shared';

const LegalPage = () => {
    const policies = [
        { 
            title: 'Privacy Policy', 
            icon: 'user-lock', 
            content: 'We are committed to protecting the privacy of our donors and beneficiaries. No personal data will be sold or shared with any third party without explicit consent.' 
        },
        { 
            title: 'Donation & Refund Policy', 
            icon: 'hand-holding-usd', 
            content: 'Donations to Al Noor Foundation are non-refundable since they are allocated to relief programs immediately. Tax receipts are issued for each contribution.' 
        },
        { 
            title: 'Terms of Service', 
            icon: 'file-contract', 
            content: 'By using our platform, users agree to facilitate genuine humanitarian aid and avoid any misuse of our non-profit resources.' 
        },
        { 
            title: 'Registration Compliance', 
            icon: 'certificate', 
            content: 'Al Noor Foundation is a registered Section 8 NGO under the Companies Act 2013 and holds valid 12A and 80G tax exemptions.' 
        }
    ];

    return (
        <div className="page-container py-32 bg-transparent min-h-screen">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-24">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Official Governance</span>
                    <h1 className="section-title text-white">Compliance <span className="text-accent italic">& Legal</span></h1>
                    <p className="section-subtitle text-emerald-100/60 font-medium">As a formally registered non-profit, we maintain strict adherence to governmental regulations.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {policies.map((p, i) => (
                        <FadeInSection key={i} delay={i * 100}>
                            <div className="glass-card p-12 bg-white rounded-[3rem] border-none shadow-2xl group hover:-translate-y-4 transition-all duration-700 h-full">
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary text-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <i className={`fas fa-${p.icon}`}></i>
                                </div>
                                <h3 className="text-2xl font-black text-primary mb-6 tracking-tight group-hover:text-accent transition-colors">{p.title}</h3>
                                <p className="text-emerald-950/60 leading-relaxed font-medium">{p.content}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>

                <div className="mt-32 p-16 rounded-[4.5rem] bg-emerald-950 border border-white/5 text-center shadow-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative z-10">
                        <h4 className="text-accent text-[8px] font-black uppercase tracking-[0.6em] mb-4 block">NGO Registration No:</h4>
                        <p className="text-white font-black text-4xl mb-4 tracking-tighter mix-blend-difference">UXXXXXXXXXXXXXXX</p>
                        <p className="text-emerald-100/30 text-xs font-bold uppercase tracking-widest mt-8">Certified Section 8 NGO | Ministry of Corporate Affairs, India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
