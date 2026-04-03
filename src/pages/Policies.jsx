import React from 'react';

export const PrivacyPolicyPage = () => (
    <div className="page-container py-24 bg-[#0B0E14]">
        <div className="container mx-auto px-6 max-w-4xl text-gray-400">
            <h1 className="section-title">Privacy <span className="text-gradient">Policy</span></h1>
            <div className="space-y-8 font-light leading-relaxed text-lg">
                <p>Your privacy is important to us. It is Al-Noor Foundation's policy to respect your privacy regarding any information we may collect from you across our website.</p>
                <div className="glass-card p-8 border-white/5 space-y-6">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500">1. Information we collect</h2>
                        <p>We only ask for personal information when we truly need it to provide a service to you, such as when processing a donation or registering you as a volunteer.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500">2. Data Security</h2>
                        <p>We take the security of your data seriously and use commercially acceptable means to protect it.</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
);

export const RefundPolicyPage = () => (
    <div className="page-container py-24 bg-[#0B0E14]">
        <div className="container mx-auto px-6 max-w-4xl text-gray-400">
            <h1 className="section-title">Refund <span className="text-gradient">Policy</span></h1>
            <div className="space-y-8 font-light leading-relaxed text-lg">
                <p>Al-Noor Foundation is a non-profit organization. We are grateful for every donation received in support of our benevolent causes.</p>
                <div className="glass-card p-8 border-white/5 space-y-6 text-center">
                    <p className="text-xl text-white font-medium">As a charitable foundation, all donations made to Al-Noor Foundation are final and non-refundable.</p>
                    <p>If you believe a fraudulent transaction has occurred, please contact us immediately at foundationalnoor@gmail.com.</p>
                </div>
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
