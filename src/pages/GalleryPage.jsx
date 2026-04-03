import React, { useState } from 'react';
import { FadeInSection } from '../components/Shared';

const GalleryPage = () => {
    const [filter, setFilter] = useState('all');

    const galleryItems = [
        { id: 1, category: 'education', src: '/education.jpg', alt: 'Sustainable Education Labs' },
        { id: 2, category: 'food', src: '/food1.jpg', alt: 'Nutrition Support Program' },
        { id: 3, category: 'relief', src: '/bedsheets.jpg', alt: 'Seasonal Relief Distribution' },
        { id: 4, category: 'community', src: '/borewell.jpg', alt: 'Safe Water Borewell Inauguration' },
        { id: 5, category: 'relief', src: '/clothes.jpg', alt: 'Clothing Drive for Vulnerable Groups' },
        { id: 6, category: 'community', src: '/Community.jpg', alt: 'Community Empowerment Meeting' },
        { id: 7, category: 'food', src: '/festival grocorries.jpg', alt: 'Festival Grocery Distribution' },
        { id: 8, category: 'food', src: '/food2.jpg', alt: 'Direct Nutritonal Assistance' },
        { id: 9, category: 'food', src: '/food3.jpg', alt: 'Hot Meal Initiative' },
        { id: 10, category: 'food', src: '/food4.jpg', alt: 'Elderly Support Program' },
        { id: 11, category: 'food', src: '/food5.jpg', alt: 'Crisis Relief Supplies' },
        { id: 12, category: 'food', src: '/food6.jpg', alt: 'Village Outreach Food Kits' },
        { id: 13, category: 'empowerment', src: '/SWEEING.jpg', alt: 'Women Tailoring Training' },
        { id: 14, category: 'empowerment', src: '/sweeing 1.jpg', alt: 'Skill Development Workshop' },
        { id: 15, category: 'empowerment', src: '/sweing2.jpg', alt: 'Micro-Entrepreneurship Kits' },
        { id: 16, category: 'community', src: '/backgroundImage.jpg', alt: 'Foundation Impact Team' },
    ];

    const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

    return (
        <div className="page-container py-32 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-32">
                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Visual Chronicles</span>
                    <h1 className="text-7xl md:text-8xl font-black text-primary tracking-tighter leading-tight">Media <span className="text-accent italic">Library</span></h1>
                    <p className="max-w-2xl mx-auto text-slate-500 font-medium mt-8 leading-relaxed italic border-l-4 border-accent pl-10">Capturing the moments where hope meets action on the ground in Madinapadu and beyond.</p>
                </div>

                <div className="flex justify-center flex-wrap gap-3 mb-24">
                    {['all', 'education', 'relief', 'food', 'community', 'empowerment'].map(f => (
                        <button 
                            key={f}
                            onClick={() => setFilter(f)} 
                            className={`px-10 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-500 border ${filter === f ? 'bg-primary border-primary text-accent shadow-2xl scale-110' : 'bg-white border-slate-100 text-slate-400 hover:border-accent hover:text-primary'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredItems.map((item, index) => (
                        <FadeInSection key={item.id} delay={index * 50}>
                            <div className="group relative rounded-[3rem] overflow-hidden bg-white shadow-2xl border-4 border-white aspect-square cursor-pointer">
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-125" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="inline-block py-1.5 px-4 rounded-full bg-accent text-black text-[9px] font-black mb-4 uppercase tracking-widest shadow-xl">{item.category}</span>
                                        <h4 className="text-white text-2xl font-black tracking-tight leading-tight italic">{item.alt}</h4>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>

                <div className="mt-40 bg-primary p-20 md:p-32 rounded-[5rem] text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('/Community.png')] bg-cover opacity-10 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <h3 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight italic">Documenting the <span className="text-accent">Change</span></h3>
                        <p className="text-emerald-100/30 font-black text-[10px] uppercase tracking-[0.5em] mb-12">Every photo represents lives impacted by your support.</p>
                        <button className="bg-accent text-black px-12 py-5 rounded-3xl font-black text-xs tracking-widest hover:bg-white transition-all shadow-2xl">Follow our Instagram <i className="fab fa-instagram ml-4 text-sm"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
