import React from 'react';
import { FadeInSection } from '../components/Shared';

const LegalPage = () => {
    const policies = [
        { 
            title: 'Privacy Safeguards', 
            icon: 'user-shield', 
            content: 'We adhere to the IT Act 2000 (India) for data protection. Your personal and financial identifiers are exclusively used for 80G tax receipting and quarterly impact audits.' 
        },
        { 
            title: 'Financial Ethics', 
            icon: 'balance-scale', 
            content: 'As a non-profit, we maintain a no-refund policy for processed donations. In cases of verifiable technical duplicates, disputes are resolved through our finance office within 48 hours.' 
        },
        { 
            title: 'Governance Terms', 
            icon: 'gavel', 
            content: 'All humanitarian operations are governed by the Section 8 Compliance guidelines of the Ministry of Corporate Affairs (MCA). Any misuse of funds is subject to civil litigation.' 
        },
        { 
            title: 'Trust Certifications', 
            icon: 'award', 
            content: 'Al-Noor Foundation operates with active 12A and 80G tax exemptions, ensuring all local contributions are eligible for maximum tax benefits under Section 80G of the IT Act.' 
        }
    ];

    return (
        <div className="page-container py-32 bg-[#0a3d2e] min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/Community.png')] bg-cover opacity-10 mix-blend-overlay grayscale"></div>
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-24">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Official Governance</span>
                    <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-8">Legal <span className="text-accent italic">& Compliance</span></h1>
                    <p className="max-w-3xl mx-auto text-emerald-100/60 font-medium leading-relaxed">Maintaining the highest standards of transparency as a formally registered Section 8 non-profit organization.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {policies.map((p, i) => (
                        <FadeInSection key={i} delay={i * 100}>
                            <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] group hover:bg-white/10 transition-all duration-500 h-full">
                                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-black text-2xl mb-8 group-hover:scale-110 transition-all">
                                    <i className={`fas fa-${p.icon}`}></i>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:text-accent transition-colors">{p.title}</h3>
                                <p className="text-emerald-50/50 leading-relaxed font-medium">{p.content}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>

                <div className="mt-32 p-16 rounded-[4.5rem] bg-accent border-none text-center shadow-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl opacity-20"></div>
                    <div className="relative z-10">
                        <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Corporate Identification Number (CIN)</h4>
                        <p className="text-primary font-black text-4xl mb-6 tracking-tighter mix-blend-multiply">U85300AP2025NPL123456</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-primary/60 text-[10px] font-black uppercase tracking-widest mt-8">
                            <span>NGO Darpan: AP/2025/0XXXXXX</span>
                            <span className="hidden md:block w-2 h-2 rounded-full bg-primary/20"></span>
                            <span>Registered Office: Madinapadu, Palnadu</span>
                            <span className="hidden md:block w-2 h-2 rounded-full bg-primary/20"></span>
                            <a href="mailto:foundationalnoor77@gmail.com" className="text-primary hover:text-black transition-colors">foundationalnoor77@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
