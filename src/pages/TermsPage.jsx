import React from 'react';

const TermsPage = () => (
    <div className="page-container py-32 bg-[#0a3d2e] min-h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/Community.png')] bg-cover opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Governing Rules</span>
            <h1 className="text-6xl font-black text-white mb-12 tracking-tight">Terms & <span className="text-accent italic">Conditions</span></h1>
            
            <div className="space-y-12 text-emerald-50/70 font-medium leading-[2] text-lg lg:text-xl">
                <p className="border-l-4 border-accent pl-8 py-2 bg-white/5">Welcome to the Al-Noor Foundation. By interacting with our digital platform, you agree to the following legally binding terms of service.</p>
                
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-white tracking-tight">1. Use of Content</h2>
                    <p>Unless otherwise stated, all media, text, blueprints of our projects, and structural impact data are the intellectual property of Al-Noor Foundation. You may use our reports for educational purposes with proper attribution, but commercial reproduction is strictly prohibited.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-white tracking-tight">2. Donor Conduct</h2>
                    <p>Users are expected to provide accurate information when donating or volunteering. Impersonation of officials or providing fraudulent financial identifiers is a violation of international compliance laws and will result in immediate banning from the platform.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-white tracking-tight">3. External Transactions</h2>
                    <p>Our platform facilitates donations via secure third-party portals (UPI, Razorpay, Bank Transfer). Al-Noor Foundation is not liable for technical failures occurring on external banking servers.</p>
                </section>

                <section className="space-y-6 text-center pt-24">
                    <h2 className="text-2xl font-black text-white mb-8">Questions?</h2>
                    <a href="mailto:foundationalnoor77@gmail.com" className="btn btn-accent px-12 py-4 rounded-2xl text-black font-black uppercase tracking-widest text-sm hover:bg-white transition-all">Connect with Legal Team</a>
                </section>
                
                <p className="pt-12 text-sm uppercase font-black tracking-widest text-accent/50 italic border-t border-white/10">Agreement Version: 1.2.0 (2025)</p>
            </div>
        </div>
    </div>
);

export default TermsPage;
