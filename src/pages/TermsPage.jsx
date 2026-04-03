import React from 'react';

const TermsPage = () => (
    <div className="page-container py-24 bg-[#0B0E14]">
        <div className="container mx-auto px-6 max-w-4xl text-gray-400">
            <h1 className="section-title">Terms and <span className="text-gradient">Conditions</span></h1>
            <div className="space-y-8 font-light leading-relaxed text-lg">
                <p>Welcome to Al-Noor Foundation. By accessing our website, you agree to comply with and be bound by the following terms and conditions.</p>
                <div className="glass-card p-8 border-white/5 space-y-6">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500">1. Intellectual Property</h2>
                        <p>All content on this website, including text, images, and logos, is the property of Al-Noor Foundation unless otherwise stated. Unauthorized use is prohibited.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500">2. Restrictions</h2>
                        <p>You may not use this website in any way that causes damage, impacts user access, or violates any laws or regulations.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500">3. Limitation of Liability</h2>
                        <p>Al-Noor Foundation is not liable for any damages arising out of your use of this website.</p>
                    </section>
                </div>
            </div>
        </div>
    </div>
);

export default TermsPage;
