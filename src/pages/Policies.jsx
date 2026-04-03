import React from 'react';

export const PrivacyPolicyPage = () => (
    <div className="page-container py-32 bg-[#0a3d2e] min-h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/Community.png')] bg-cover opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Institutional Privacy</span>
            <h1 className="text-6xl font-black text-white mb-12 tracking-tight">Privacy <span className="text-accent italic">Policy</span></h1>
            
            <div className="space-y-12 text-emerald-50/70 font-medium leading-[2] text-lg lg:text-xl">
                <p className="border-l-4 border-accent pl-8 py-2 bg-white/5">At Al-Noor Foundation, your trust is our most valuable asset. This policy outlines how we handle and protect your personal information.</p>
                
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-white tracking-tight">1. Information Collection</h2>
                    <p>We collect essential information required for charitable operations, including your name, email, phone number, and transaction IDs. For donors, we collect PAN details as mandated by the Income Tax Department of India for issuing 80G tax-exempt receipts.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-white tracking-tight">2. How We Use Data</h2>
                    <ul className="list-disc ml-8 space-y-4">
                        <li>Processing donations and issuing legal tax receipts.</li>
                        <li>Coordinating volunteer activities and skill-sharing programs.</li>
                        <li>Sending quarterly impact reports and critical relief updates.</li>
                        <li>Statutory compliance and internal auditing.</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-white tracking-tight">3. Data Security</h2>
                    <p>We implement industry-standard encryption and secure server protocols. Your personal identifiers are never sold, rented, or shared with third-party marketing agencies. Access is restricted to authorized personnel only.</p>
                </section>
                
                <p className="pt-12 text-sm uppercase font-black tracking-widest text-accent/50 italic border-t border-white/10">Last Revised: April 2025</p>
            </div>
        </div>
    </div>
);

export const RefundPolicyPage = () => (
    <div className="page-container py-32 bg-[#0a3d2e] min-h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/Community.png')] bg-cover opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Financial Integrity</span>
            <h1 className="text-6xl font-black text-white mb-12 tracking-tight">Refund <span className="text-accent italic">Policy</span></h1>
            
            <div className="space-y-12 text-emerald-50/70 font-medium leading-[2] text-lg lg:text-xl">
                <p className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10">Al-Noor Foundation is a registered non-profit organization. We are profoundly grateful for every contribution received to support our benevolent causes.</p>
                
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-white tracking-tight underline-offset-8 underline decoration-accent/20">Non-Refundable Policy</h2>
                    <p>As a charitable trust, all donations made to Al-Noor Foundation are final and non-refundable. Once a contribution is processed, it is immediately allocated to our active relief programs and administrative logistics to ensure the fastest impact on the ground.</p>
                </section>

                <section className="space-y-12">
                    <h2 className="text-3xl font-black text-white tracking-tight underline-offset-8 underline decoration-accent/20">Exceptions & Disputes</h2>
                    <p>In the rare event of a technical error (e.g., a duplicated transaction or an unauthorized charge), please contact our Finance Department at <span className="text-accent font-black">foundationalnoor77@gmail.com</span> within 48 hours of the transaction.</p>
                    <p className="text-sm italic">Verification documentation will be required for any transaction review.</p>
                </section>
            </div>
        </div>
    </div>
);

export const ShippingPolicyPage = () => (
    <div className="page-container py-24 bg-[#0B0E14]">
        <div className="container mx-auto px-6 max-w-4xl text-gray-400">
            <h1 className="section-title">Shipping <span className="text-gradient">Policy</span></h1>
            <div className="space-y-8 font-light leading-relaxed text-lg text-center">
                <p>Al-Noor Foundation does not sell or ship any physical goods or products.</p>
                <div className="glass-card p-12 border-white/5">
                    <p className="text-xl text-white">No shipping or delivery policy is applicable as we do not deliver physical products.</p>
                </div>
            </div>
        </div>
    </div>
);
