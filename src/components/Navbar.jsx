import React, { useState, useEffect } from 'react';

const Navbar = ({ currentPage, onNavigate }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About Us' },
        { id: 'programs', name: 'Services' },
        { id: 'gallery', name: 'Gallery' },
        { id: 'events', name: 'Events' },
        { id: 'involved', name: 'Join as Volunteer' },
        { id: 'contact', name: 'Contact Us' }
    ];

    const handleNav = (page) => {
        onNavigate(page);
        setMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${isSticky ? 'bg-white py-4 shadow-xl border-accent/20' : 'py-6 bg-white border-b border-gray-100'}`}>
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <button onClick={() => handleNav('home')} className="group flex items-center gap-4 relative z-50">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-gray-100 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                            <img src="/FLOGO.jpg" alt="Al-Noor" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-3xl font-black tracking-tighter text-black flex flex-col -gap-1">
                            <span>AL-NOOR</span>
                            <span className="text-[10px] font-black text-accent tracking-[0.4em] uppercase">Foundation</span>
                        </div>
                    </button>

                    <div className="hidden lg:flex items-center ml-16 space-x-2">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => handleNav(item.id)}
                                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 relative group ${currentPage === item.id ? 'text-accent' : 'text-black hover:text-accent'}`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                {currentPage === item.id ? (
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[1.5px] bg-accent"></div>
                                ) : (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-accent group-hover:w-8 transition-all duration-300"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <button 
                        onClick={() => handleNav('donate')} 
                        className="bg-accent text-black px-10 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_15px_30px_-10px_rgba(212,175,55,0.4)] hover:-translate-y-1 hover:scale-105 hover:bg-white transition-all duration-500 flex items-center gap-3 border border-accent/20"
                    >
                        Donate Now <i className="fa-solid fa-heart-circle-check text-base animate-pulse"></i>
                    </button>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden relative z-[110] w-12 h-12 flex flex-col justify-center items-center gap-2 group bg-slate-50 rounded-xl shadow-inner"
                    >
                        <span className={`h-[3px] w-7 bg-primary rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`h-[3px] w-7 bg-primary rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5 ml-auto'}`}></span>
                        <span className={`h-[3px] w-7 bg-primary rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col space-y-6 text-center z-10 w-full px-6">
                    {navItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => handleNav(item.id)}
                            className={`text-2xl font-bold text-gray-900 tracking-tight hover:text-primary transition-all duration-300 py-2 border-b border-gray-50`}
                        >
                            {item.name}
                        </button>
                    ))}
                    <div className="pt-8 text-center">
                        <button onClick={() => handleNav('donate')} className="btn btn-primary w-full py-4 text-xl">
                            <i className="fas fa-heart mr-2"></i> Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
