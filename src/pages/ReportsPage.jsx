import React from 'react';
import { FadeInSection } from '../components/Shared';

const ReportsPage = () => {
    const reports = [
        { title: 'Annual Impact Report 2024', month: 'January 2025', size: '2.4 MB', type: 'Strategic Audited' },
        { title: 'Madinapadu Water Project', month: 'March 2025', size: '1.8 MB', type: 'Completion Report' },
        { title: 'Skill Center Enrollment', month: 'Feb 2025', size: '900 KB', type: 'Internal Audit' }
    ];

    return (
        <div className="page-container py-32 bg-transparent min-h-screen">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-24">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Financial Integrity</span>
                    <h1 className="section-title text-white">Transparency <span className="text-accent italic">& Reports</span></h1>
                    <p className="section-subtitle text-emerald-100/60 font-medium">We believe true philanthropy is built on absolute accountability. Access our live records.</p>
                </div>

                <div className="grid gap-8">
                    {reports.map((report, i) => (
                        <FadeInSection key={i} delay={i * 100}>
                            <div className="glass-card p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-8 group hover:-translate-y-2 transition-all border-none shadow-2xl">
                                <div className="flex items-center gap-8">
                                    <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-accent text-3xl group-hover:bg-primary group-hover:text-white transition-all">
                                        <i className="fas fa-file-invoice-dollar"></i>
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-accent/10 text-accent text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-accent/20">{report.type}</span>
                                            <span className="text-gray-300 text-[10px] font-bold">{report.month}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-primary leading-tight">{report.title}</h3>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-gray-400 font-mono text-xs">{report.size}</span>
                                    <button className="btn btn-primary px-10 py-4 shadow-xl">
                                        Download PDF <i className="fas fa-download ml-3"></i>
                                    </button>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>

                <div className="mt-32 p-16 rounded-[4rem] bg-accent/5 border-2 border-dashed border-accent/20 text-center">
                    <h3 className="text-primary font-black text-2xl mb-4">Request Detailed Audit</h3>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-10">As a donor, you have the right to request a granular breakdown of your specific contribution. Email our finance team directly for custom reports.</p>
                    <a href="mailto:finance@alnoortrust.org" className="text-accent font-black uppercase text-xs tracking-widest border-b-2 border-accent pb-1 hover:pb-2 transition-all">Connect with Finance Office</a>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
