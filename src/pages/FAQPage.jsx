import React, { useState } from 'react';
import { FadeInSection } from '../components/Shared';

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const mainFaqs = [
        { q: 'Is my donation tax-deductible?', a: 'Yes, Al-Noor Foundation is a registered Section 8 non-profit NGO. All donations are eligible for tax exemptions under Section 80G of the Income Tax Act.' },
        { q: 'How is my donation used?', a: 'We maintain a 100% transparency policy. Every rupee is allocated to our core programs like education, clean water, and relief. You can download our impact reports for detailed breakdowns.' }
    ];

    return (
        <div className="page-container py-32 bg-transparent min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-20">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Information Desk</span>
                    <h1 className="section-title text-primary">Frequently Asked <span className="text-accent italic">Questions</span></h1>
                </div>

                <div className="space-y-6">
                    {mainFaqs.map((faq, i) => (
                        <div key={i} className="glass-card p-10 bg-white shadow-xl hover:-translate-y-2 transition-all">
                            <h3 className="text-xl font-black text-primary mb-4 flex items-center gap-4">
                                <span className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white text-xs shrink-0 font-black tracking-widest">Q</span>
                                {faq.q}
                            </h3>
                            <div className="pl-14 text-emerald-950/60 font-medium leading-relaxed">
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
