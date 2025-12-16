import React, { useState, useEffect, useRef } from 'react';
// Firebase imports are removed as login is removed

// STYLES - All CSS from the original file is placed here
const GlobalStyles = () => (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

    :root {
        /* Futuristic Dark Theme */
        --color-bg-dark: #0B0E14; /* Deep Tech Black */
        --color-bg-card: #151A23; /* Lighter Black for cards */
        --color-primary: #00E5FF; /* Neon Cyan */
        --color-secondary: #7C4DFF; /* Neon Purple */
        --color-accent: #FFD600; /* Electric Amber */
        --color-text-main: #FFFFFF;
        --color-text-muted: #9CA3AF;
        
        --glass-bg: rgba(21, 26, 35, 0.7);
        --glass-border: rgba(255, 255, 255, 0.08);
        --neon-shadow: 0 0 10px rgba(0, 229, 255, 0.5), 0 0 20px rgba(0, 229, 255, 0.3);
    }
    
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--color-bg-dark);
        color: var(--color-text-main);
        font-family: 'Outfit', sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    /* SCROLLBAR */
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: var(--color-bg-dark);
    }
    ::-webkit-scrollbar-thumb {
        background: var(--color-secondary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary);
    }

    /* UTILITIES */
    .text-gradient {
        background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* BUTTONS */
    .btn {
        padding: 0.8rem 2rem;
        border-radius: 9999px; // Pill shape
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
        z-index: 1;
        border: 1px solid transparent;
        cursor: pointer;
        font-size: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .btn-primary {
        background: transparent;
        border-color: var(--color-primary);
        color: var(--color-primary);
        box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
    }
    
    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: var(--color-primary);
        z-index: -1;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-out;
    }

    .btn-primary:hover {
        color: #000;
        box-shadow: 0 0 20px rgba(0, 229, 255, 0.6);
    }

    .btn-primary:hover::before {
        transform: scaleX(1);
    }

    .btn-secondary {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.1);
        color: white;
        backdrop-filter: blur(5px);
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: var(--color-text-main);
        transform: translateY(-2px);
    }

    /* SECTIONS */
    .section-title {
        font-size: 3rem;
        font-weight: 800;
        text-align: center;
        margin-bottom: 1rem;
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;
        position: relative;
        display: inline-block;
        width: 100%;
    }
    
    .section-title span {
        background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .section-subtitle {
        text-align: center;
        color: var(--color-text-muted);
        max-width: 600px;
        margin: 0 auto 4rem;
        font-size: 1.1rem;
        line-height: 1.6;
    }

    /* GLASS CARDS */
    .glass-card {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(12px);
        border-radius: 16px;
        transition: all 0.4s ease;
        overflow: hidden;
    }
    
    .glass-card:hover {
        transform: translateY(-10px);
        border-color: var(--color-primary);
        box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    }
    
    .card-hover { /* Legacy support or alias */
        background: var(--color-bg-card);
        border: 1px solid var(--glass-border);
        border-radius: 12px;
        transition: all 0.3s ease;
    }
    .card-hover:hover {
        transform: translateY(-5px);
        border-color: var(--color-secondary);
        box-shadow: 0 10px 20px rgba(0,0,0,0.4);
    }

    /* NAVIGATION */
    .nav-link {
        color: var(--color-text-muted);
        font-weight: 500;
        transition: color 0.3s;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
    }
    .nav-link:hover, .nav-link.active {
        color: var(--color-primary);
        text-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
    }

    /* INPUTS */
    .modern-input {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--glass-border);
        color: white;
        transition: all 0.3s;
    }
    .modern-input:focus {
        background: rgba(255, 255, 255, 0.05);
        border-color: var(--color-primary);
        box-shadow: 0 0 0 2px rgba(0, 229, 255, 0.1);
        outline: none;
    }

    /* ANIMATIONS */
    .fade-in-section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.5, 0, 0, 1), transform 0.8s cubic-bezier(0.5, 0, 0, 1);
    }
    .fade-in-section.visible {
        opacity: 1;
        transform: translateY(0);
    }

    @keyframes neon-pulse {
        0%, 100% { box-shadow: 0 0 5px var(--color-primary), 0 0 10px var(--color-primary); }
        50% { box-shadow: 0 0 2px var(--color-primary), 0 0 5px var(--color-primary); }
    }

    /* IMAGE ALIGNMENT UTILS */
    .img-cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .aspect-video-card {
        aspect-ratio: 16 / 9;
        width: 100%;
        overflow: hidden;
    }

    /* Floating Navigation Buttons */
    .fixed-floating-btn {
        position: fixed;
        bottom: 1.5rem;
        z-index: 9999;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
    }
    
    .floating-left {
        left: 1.5rem;
    }
    
    .floating-right {
        right: 1.5rem;
    }
    
    /* Ensure they don't overlap on very small screens */
    @media (max-width: 350px) {
        .floating-left { bottom: 5rem; left: 50%; transform: translateX(-50%); }
        .floating-right { bottom: 1.5rem; left: 50%; right: auto; transform: translateX(-50%); }
    }
  `}</style>
);

// --- HELPER HOOK for Intersection Observer ---
const useIntersectionObserver = (options) => {
    const [entry, setEntry] = useState(null);
    const [node, setNode] = useState(null);

    const observer = useRef(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new window.IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setEntry(entry);
            }
        }, options);

        const { current: currentObserver } = observer;
        if (node) currentObserver.observe(node);

        return () => currentObserver.disconnect();
    }, [node, options]);

    return [setNode, entry];
};

// --- HELPER HOOK for Dynamic Script Loading ---
const useScript = (url) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
};

// --- REUSABLE COMPONENTS ---
const FadeInSection = ({ children, delay = 0 }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = !!entry;

    return (
        <div
            ref={ref}
            className={`fade-in-section ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const AnimatedCounter = ({ target }) => {
    const [count, setCount] = useState(0);
    const [ref, entry] = useIntersectionObserver({ threshold: 0.5 });
    const isVisible = !!entry;

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = target;
            if (start === end) return;

            const duration = 2000;
            const incrementTime = 10;
            const increment = end / (duration / incrementTime);

            const timer = setInterval(() => {
                start += increment;
                if (start > end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isVisible, target]);

    return <h3 ref={ref} className="text-4xl font-bold">{count.toLocaleString()}</h3>;
};

const servicesData = {
    'education': {
        title: 'Education Support',
        image: '/education.jpg',
        description: 'Our foundation is deeply committed to breaking the cycle of poverty through education. We provide comprehensive support to underprivileged students, including scholarships for higher education, essential school supplies like books and uniforms, and by establishing digital learning centers in remote areas to bridge the technological gap.'
    },
    'borewell': {
        title: 'Borewell Implementation',
        image: '/borewell.jpg',
        description: 'Access to clean and safe drinking water is a fundamental human right. We actively work on implementing bore wells in water-scarce regions. This initiative not only quenches thirst but also significantly improves community health by reducing waterborne diseases.'
    },
    'groceries': {
        title: 'Home & Festival Groceries Distribution',
        image: '/festival grocorries.jpg',
        description: 'To combat hunger and ensure no family is left behind, especially during festive seasons like Ramadan, we organize large-scale distribution of essential home groceries. These packages are thoughtfully curated to support families and individuals in need, allowing them to celebrate with dignity.'
    },
    'sewing_training': {
        title: 'Women Sewing Machine Training & Certification',
        image: '/clothes.jpg',
        description: 'Empowering women through vocational training is a core initiative. Our program provides comprehensive training in operating sewing machines, enabling women to gain valuable skills for self-employment and economic independence. Upon completion, participants receive certification, opening doors to new opportunities.'
    }
}

const eventsData = {
    'sewing_training': {
        title: 'Women Sewing Machine Training & Certification',
        image: '/sweeing 1.jpg', // Main image for event card
        shortDescription: 'Free 5-month training course with free machine distribution and certification.',
        status: 'Duration: July 2025 - November 2025',
        details: {
            members: 'Total 150 members are learning.',
            timings: 'Batch 1: 10:00 AM - 1:00 PM | Batch 2: 1:00 PM - 5:00 PM',
            venue: 'Near Noor Masjid, Madinapadu Road, Dachepalli',
            image: '/sewing_training_glimpse.jpg', // Glimpse image
            certificate: '/certificate.jpg' // Certificate image
        }
    }
}


// --- PAGE COMPONENTS ---
const HomePage = ({ onNavigate }) => (
    <div className="page-container">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}></div>
            {/* Added a solid overlay backup just in case image fails, and gradient for text readability and to darken image for text contrast */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-black/30"></div>

            <div className="relative z-10 max-w-4xl mx-auto mt-20">
                <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold mb-6 border border-cyan-500/30 backdrop-blur-sm animate-pulse">
                    EST. 2025
                </span>
                <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 tracking-tighter drop-shadow-2xl">
                    <span className="text-white">Serving</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Humanity</span>
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-slate-300 leading-relaxed font-light">
                    Igniting hope and creating lasting change through education, healthcare, and sustainable relief programs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={() => onNavigate('involved')} className="btn btn-primary min-w-[180px]">Join the Mission</button>
                    <button onClick={() => onNavigate('donate')} className="btn btn-secondary min-w-[180px]">Make an Impact</button>
                </div>
            </div>
        </div>

        {/* Mission and Vision */}
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <FadeInSection>
                        <h2 className="section-title text-left text-4xl mb-8"><span className="text-white">Our</span> <span>Vision</span></h2>
                        <div className="glass-card p-8 rounded-2xl relative">
                            <i className="fas fa-quote-left text-4xl text-cyan-500/20 absolute top-4 left-4"></i>
                            <p className="mb-6 text-lg leading-relaxed text-gray-300 relative z-10">
                                "Our mission is to empower vulnerable communities by providing sustainable solutions. We envision a world where every individual has the opportunity to thrive with dignity."
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <i className="fas fa-hand-holding-heart"></i>
                                </div>
                                <span className="font-semibold">Compassion</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <i className="fas fa-globe"></i>
                                </div>
                                <span className="font-semibold">Impact</span>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="relative rounded-2xl overflow-hidden glass-card p-2 border border-white/10">
                            <img src="/Community.jpg" alt="Community Empowerment" className="rounded-xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>

        {/* Impact Numbers */}
        {/* Impact Numbers */}
        <section className="py-32 relative overflow-hidden bg-[#0B0E14]">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                        <span className="text-white">OUR IMPACT IN</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">NUMBERS</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Your support translates into real, tangible change for countless lives.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: 'child', count: 500, label: 'Children Educating', color: 'from-amber-400 to-orange-500' },
                        { icon: 'plus-square', count: 100, label: 'Womens Training', color: 'from-blue-400 to-cyan-500' },
                        { icon: 'hand-holding-water', count: 50, label: 'Wells Built', color: 'from-cyan-400 to-teal-500' },
                        { icon: 'hands-helping', count: 8000, label: 'Families Supported', color: 'from-purple-400 to-pink-500' }
                    ].map((item, index) => (
                        <FadeInSection key={index} delay={index * 100}>
                            <div className="glass-card p-10 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-500 border border-white/5 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                                <div className="mb-6 relative inline-block">
                                    <div className={`text-5xl bg-clip-text text-transparent bg-gradient-to-br ${item.color} drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                        <i className={`fas fa-${item.icon}`}></i>
                                    </div>
                                    <div className={`absolute -inset-4 bg-gradient-to-r ${item.color} opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity`}></div>
                                </div>

                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                                    <AnimatedCounter target={item.count} />
                                    <span className={`text-2xl text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>+</span>
                                </div>
                                <p className="text-gray-400 font-medium tracking-wide uppercase text-sm mt-2 group-hover:text-white transition-colors">{item.label}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>

        {/* Quotations Section */}
        <Quotations />
    </div>
);

const AboutPage = () => (
    <div className="page-container py-24">
        <div className="container mx-auto px-6">
            <h1 className="section-title">About Al-Noor Foundation</h1>
            <p className="section-subtitle">Discover our journey, our values, and the dedicated people behind our work.</p>

            <FadeInSection>
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                        <p className="mb-4">Founded in 2025, Al-Noor Foundation began with a simple yet powerful idea: that even a small act of kindness can ignite a beacon of hope. From a local food drive, we have grown into a multi-faceted organization serving thousands across the nation, driven by compassion and a commitment to sustainable change.</p>
                    </div>
                    <img src="/backgroundImage.jpg" alt="Our Journey" className="rounded-xl shadow-2xl" />
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="bg-card-background rounded-xl shadow-xl p-8 md:p-12 my-24 flex flex-col md:flex-row items-center gap-8">
                    <img src="/founder.jpg" alt="Founder" className="w-40 h-40 rounded-full object-cover flex-shrink-0 shadow-lg border-4 border-yellow-400" />
                    <div>
                        <h3 className="text-2xl font-bold mb-2">A Message from Our Founder</h3>
                        <p className="italic text-lg mb-4 text-text-muted">"We started Al-Noor not just to provide aid, but to build bridges of hope and opportunity. Every donation, every hour volunteered, is a testament to the power of collective action. Thank you for being a part of this journey."</p>
                        <p className="font-semibold">— SHAIK.WASIM AKRAM, Founder</p>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="mt-24">
                    <h2 className="section-title">Our Team</h2>
                    <p className="section-subtitle">A group of passionate individuals dedicated to our mission.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <img src="/manager.jpg" alt="Team Member 1" className="w-32 h-36 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 object-cover" />
                            <h4 className="font-bold text-lg">WASIM AKRAM</h4>
                            <p className="text-sm text-text-muted">Director of Operations</p>
                        </div>
                        <div className="text-center group">
                            <img src="/secretary.jpg" alt="Team Member 2" className="w-32 h-35 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 object-cover" />
                            <h4 className="font-bold text-lg">SHAIK FAYAZUDDIN</h4>
                            <p className="text-sm text-text-muted">SECRETARY</p>
                        </div>
                        <div className="text-center group">
                            <img src="/LADIE.jpg" alt="Team Member 3" className="w-32 h-35 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 object-cover" />
                            <h4 className="font-bold text-lg">SHAIK JAITHUNBI</h4>
                            <p className="text-sm text-text-muted">LEAD VOLUNTEER</p>
                        </div>
                        <div className="text-center group">
                            <img src="/finance.jpg" alt="Team Member 4" className="w-32 h-35 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 object-cover" />
                            <h4 className="font-bold text-lg">SHAIK JANI</h4>
                            <p className="text-sm text-text-muted">FINANCE & ACCOUNTANT</p>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </div>
    </div>
);

const ProgramsPage = ({ onNavigate }) => (
    <div className="page-container py-24 bg-background">
        <div className="container mx-auto px-6">
            <h1 className="section-title">Our Work</h1>
            <p className="section-subtitle">We focus on key areas to create sustainable impact and foster self-reliance.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FadeInSection>
                    <div className="bg-card-background shadow-lg overflow-hidden card-hover">
                        <img src="/education.jpg" alt="Education Support" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Education Support</h3>
                            <p className="text-text-muted mb-4">Providing scholarships, school supplies, and digital learning centers to underprivileged students.</p>
                            <button onClick={() => onNavigate('service-details', { serviceId: 'education' })} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection delay={100}>
                    <div className="bg-card-background shadow-lg overflow-hidden card-hover">
                        <img src="/borewell.jpg" alt="Borewell Implementation" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Bore wells implementation</h3>
                            <p className="text-text-muted mb-4">Implementing bore wells in remote areas, to provide clean and safe drinking water.</p>
                            <button onClick={() => onNavigate('service-details', { serviceId: 'borewell' })} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection delay={200}>
                    <div className="bg-card-background shadow-lg overflow-hidden card-hover">
                        <img src="/festival grocorries.jpg" alt="Festival Groceries" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Festival Groceries Distribution</h3>
                            <p className="text-text-muted mb-4">Distributing all home needed groceries for festival of " RAMADAN " to all the individuals and families.</p>
                            <button onClick={() => onNavigate('service-details', { serviceId: 'groceries' })} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection delay={300}>
                    <div className="bg-card-background shadow-lg overflow-hidden card-hover">
                        <img src="/SWEEING.jpg" alt="Women Sewing Machine Training" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Women Sewing Machine Training & Certification</h3>
                            <p className="text-text-muted mb-4">Empowering women through vocational training to gain valuable skills for self-employment and economic independence.</p>
                            <button onClick={() => onNavigate('service-details', { serviceId: 'sewing_training' })} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    </div>
);

const ServiceDetailsPage = ({ service, onNavigate }) => (
    <div className="page-container py-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <button onClick={() => onNavigate('programs')} className="text-cyan-500 hover:underline mb-8">&larr; Back to Services</button>
            <FadeInSection>
                <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-xl shadow-2xl mb-8" />
                <h1 className="section-title text-left">{service.title}</h1>
                <p className="text-lg text-text-muted">{service.description}</p>
            </FadeInSection>
        </div>
    </div>
);

const InvolvedPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const messageText = `New Volunteer Application:\n\n*Name:*\n${formData.name}\n\n*Email:*\n${formData.email}\n\n*Phone:*\n${formData.phone}\n\n*Area of Interest:*\n${formData.interest}\n\n*Why do you want to volunteer:*\n${formData.message}`;
        const encodedMessage = encodeURIComponent(messageText);
        const phoneNumber = "917997666551"; // Country code + phone number
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // Optionally, reset form and show success. For this simple setup, WhatsApp opening is the primary confirmation.
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    };

    const renderFormContent = () => {
        if (status === 'success') {
            return (
                <div className="text-center flex flex-col items-center justify-center h-full">
                    <div className="text-5xl text-green-500 mb-4">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Application Sent!</h2>
                    <p className="text-text-muted">Thank you for your interest! We've opened WhatsApp for you to send the application details directly.</p>
                </div>
            );
        }

        return (
            <>
                <h2 className="text-2xl font-bold mb-6 text-center">Volunteer Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <input type="text" name="name" placeholder="Full Name" className="w-full p-3 rounded-md modern-input" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email Address" className="w-full p-3 rounded-md modern-input" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-6">
                        <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 rounded-md modern-input" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="mb-6">
                        <select name="interest" className="w-full p-3 rounded-md modern-input" value={formData.interest} onChange={handleChange} required>
                            <option value="">Area of Interest</option>
                            <option value="education">Education</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="relief">festive groceries help</option>
                            <option value="women_empowerment">Women employment</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-6">
                        <textarea name="message" placeholder="Why do you want to volunteer?" rows="4" className="w-full p-3 rounded-md modern-input" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? (
                                <>
                                    <svg className="spinner" viewBox="0 0 50 50">
                                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                                    </svg>
                                    Submitting...
                                </>
                            ) : (
                                'Submit Application'
                            )}
                        </button>
                    </div>
                </form>
            </>
        );
    };

    return (
        <div className="page-container py-24">
            <div className="container mx-auto px-6">
                <h1 className="section-title">Get Involved</h1>
                <p className="section-subtitle">You have the power to change lives. Join our community of volunteers, partners, and advocates.</p>
                <FadeInSection>
                    <div className="max-w-4xl mx-auto bg-card-background p-8 rounded-xl shadow-2xl">
                        {renderFormContent()}
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};


const DonatePage = () => {
    const [amount, setAmount] = useState(500);
    const [customAmount, setCustomAmount] = useState('');
    const [amountError, setAmountError] = useState('');

    // REPLACE WITH YOUR ACTUAL UPI ID
    const UPI_ID = "917997666551@ybl";
    const PAYEE_NAME = "Al-Noor Foundation";

    const presetAmounts = [100, 500, 1000, 2000, 5000];

    const handleAmountClick = (value) => {
        setAmount(value);
        setCustomAmount('');
        setAmountError('');
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        setCustomAmount(value);
        if (value && !isNaN(value)) {
            const numValue = parseInt(value, 10);
            setAmount(numValue);
            setAmountError(numValue < 1 ? 'Amount must be valid' : '');
        } else if (!value) {
            setAmount(500); // Default fallback
        }
    };

    // Generate UPI Link
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${amount}&cu=INR`;

    // QR Code API (using a public API for demo purposes - highly reliable)
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

    const handlePayment = (app) => {
        // ideally we would try to open specific schemes, but for PWA/Web, the generic intent often works best
        window.location.href = upiLink;
    };

    return (
        <div className="page-container py-24 min-h-screen">
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="section-title mb-2">Make a <span className="text-gradient">Difference</span></h1>
                <p className="section-subtitle mb-12">Your contribution, directly to those in need. <br /> <span className="text-cyan-400 font-semibold text-sm">SECURE UPI PAYMENT</span></p>

                <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">

                    {/* LEFT PANEL: Amount Selection */}
                    <div className="flex-1 glass-card p-8 text-left">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <i className="fas fa-hand-holding-dollar text-cyan-400"></i> Select Amount
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                                {presetAmounts.map(preset => (
                                    <button
                                        key={preset}
                                        onClick={() => handleAmountClick(preset)}
                                        className={`p-4 rounded-xl font-bold transition-all duration-300 relative overflow-hidden group ${amount === preset && !customAmount ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.3)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30'}`}
                                        style={{ borderWidth: '1px' }}
                                    >
                                        <span className="relative z-10">₹{preset}</span>
                                        {amount === preset && !customAmount && <div className="absolute inset-0 bg-cyan-400/10 blur-xl"></div>}
                                    </button>
                                ))}
                            </div>

                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                                <input
                                    type="number"
                                    placeholder="Custom Amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="w-full bg-black/30 border border-white/10 rounded-xl py-4 pl-10 pr-4 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all font-bold"
                                />
                            </div>
                            {amountError && <p className="text-red-400 text-sm mt-2">{amountError}</p>}
                        </div>

                        <div className="border-t border-white/10 pt-6">
                            <h4 className="text-gray-400 text-sm mb-4 uppercase tracking-wider font-semibold">Pay via App</h4>
                            <div className="grid grid-cols-1 gap-3">
                                <button onClick={() => window.location.href = upiLink} className="flex items-center justify-between p-4 rounded-xl bg-[#5f259f] hover:bg-[#4a1c7c] transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#5f259f]"><i className="fas fa-mobile-alt"></i></div>
                                        <span className="font-bold">PhonePe</span>
                                    </div>
                                    <i className="fas fa-arrow-right opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"></i>
                                </button>
                                <button onClick={() => window.location.href = upiLink} className="flex items-center justify-between p-4 rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1a73e8]"><i className="fab fa-google"></i></div>
                                        <span className="font-bold">Google Pay</span>
                                    </div>
                                    <i className="fas fa-arrow-right opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"></i>
                                </button>
                                <button onClick={() => window.location.href = upiLink} className="flex items-center justify-between p-4 rounded-xl bg-[#00baf2] hover:bg-[#0091be] transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#00baf2]"><i className="fas fa-wallet"></i></div>
                                        <span className="font-bold">Paytm / BHIM</span>
                                    </div>
                                    <i className="fas fa-arrow-right opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL: QR Code */}
                    <div className="flex-1 glass-card p-8 flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#151A23] to-[#0B0E14]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

                        <h3 className="text-xl font-bold mb-8 text-center">Scan to Pay <span className="text-cyan-400">₹{amount}</span></h3>

                        <div className="p-4 bg-white rounded-2xl shadow-[0_0_30px_rgba(0,229,255,0.15)] relative group">
                            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
                            <img src={qrCodeUrl} alt="Donate QR" className="w-64 h-64 relative z-10 rounded-lg" />
                            {/* Central Logo Overlay for style */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full p-1 shadow-lg z-20 flex items-center justify-center">
                                <i className="fas fa-heart text-red-500 text-xl"></i>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-400 text-sm mb-2">UPI ID</p>
                            <div className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg border border-white/5">
                                <code className="text-cyan-300 font-mono tracking-wide">{UPI_ID}</code>
                                <button className="text-gray-500 hover:text-white transition-colors" onClick={() => navigator.clipboard.writeText(UPI_ID)}>
                                    <i className="far fa-copy"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


const EventsPage = ({ onNavigate }) => (
    <div className="page-container py-24">
        <div className="container mx-auto px-6">
            <h1 className="section-title">Events & News</h1>
            <p className="section-subtitle">Stay updated with our latest activities, stories of impact, and upcoming events.</p>
            <FadeInSection>
                <div className="max-w-4xl mx-auto bg-card-background rounded-xl shadow-lg overflow-hidden md:flex mb-8 card-hover">
                    <img src="/sweing2.jpg" alt={eventsData.sewing_training.title} className="md:w-1/3 object-cover" />
                    <div className="p-6 md:p-8">
                        <p className="text-sm text-yellow-500 font-semibold mb-1">COMPLETED</p>
                        <h3 className="text-2xl font-bold mb-2">{eventsData.sewing_training.title}</h3>
                        <p className="text-text-muted mb-2">Status: {eventsData.sewing_training.status}</p>
                        <p className="text-text-muted mb-4">{eventsData.sewing_training.shortDescription}</p>
                        <button onClick={() => onNavigate('event-details', { eventId: 'sewing_training' })} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                    </div>
                </div>
            </FadeInSection>
        </div>
    </div>
);

const EventDetailsPage = ({ event, onNavigate }) => (
    <div className="page-container py-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <button onClick={() => onNavigate('events')} className="text-cyan-500 hover:underline mb-8">&larr; Back to Events</button>
            <FadeInSection>
                <img src={event.image} alt={event.title} className="w-full h-96 object-cover rounded-xl shadow-2xl mb-8" />
                <h1 className="section-title text-left">{event.title}</h1>
                <div className="bg-card-background rounded-lg p-6 space-y-4">
                    <p><strong>Status:</strong> {event.status}</p>
                    <p><strong>Participants:</strong> {event.details.members}</p>
                    <p><strong>Timings:</strong> {event.details.timings}</p>
                    <p><strong>Venue:</strong> {event.details.venue}</p>
                </div>
                <h2 className="text-2xl font-bold mt-12 mb-4">Glimpses from the Training</h2>
                <img src="/sweing2.jpg" alt="Training session" className="w-full h-auto object-cover rounded-xl shadow-lg mb-8" />
                <h2 className="text-2xl font-bold mt-12 mb-4">Certification of Completion</h2>
                <img src="/certificate.png" alt="Training Certificate" className="w-full h-auto object-cover rounded-xl shadow-lg" />
            </FadeInSection>
        </div>
    </div>
);


const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // --- Step 1: Open WhatsApp Immediately ---
        const messageText = `New Contact Form Submission:\n\n*Name:*\n${formData.name}\n\n*Email:*\n${formData.email}\n\n*Message:*\n${formData.message}`;
        const encodedMessage = encodeURIComponent(messageText);
        const phoneNumber = "917997666551"; // Country code + phone number
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // --- Step 2: Attempt to send email in the background ---

        // =================================================================================
        // --- EmailJS Configuration ---
        // IMPORTANT: Replace these with your actual IDs from your EmailJS account.
        // See the email_setup_guide.md file for instructions.
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const userID = 'YOUR_PUBLIC_KEY'; // This is also called Public Key in new accounts
        // =================================================================================

        // Check if the placeholder values have been changed.
        if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || userID === 'YOUR_PUBLIC_KEY') {
            console.error('EmailJS Error: Please replace the placeholder Service ID, Template ID, and Public Key in the code with your actual keys from your EmailJS account.');
            // We opened WhatsApp, so we can consider this a partial success for the user.
            // We will just reset the form and show a success message that implies the main action worked.
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            return;
        }

        // Check if emailjs script is loaded
        if (!window.emailjs) {
            console.error('EmailJS script has not loaded yet.');
            setStatus('success'); // Still a success because WhatsApp opened.
            setFormData({ name: '', email: '', message: '' });
            return;
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'shaikabdulla1199@gmail.com'
        };

        window.emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, (err) => {
                console.error('Failed to send email. Error: ', err);
                setStatus('error'); // Show error only if email fails
            });
    };

    const renderFormContent = () => {
        if (status === 'success') {
            return (
                <div className="text-center flex flex-col items-center justify-center h-full">
                    <div className="text-5xl text-green-500 mb-4 animate-bounce">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                    <p className="text-gray-400">Thank you for reaching out. We have opened WhatsApp for you to send the message directly.</p>
                </div>
            );
        }

        if (status === 'error') {
            return (
                <div className="text-center flex flex-col items-center justify-center h-full">
                    <div className="text-5xl text-red-500 mb-4 animate-pulse">
                        <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Email Failed</h2>
                    <p className="text-gray-400">Your message was sent to WhatsApp, but the email could not be delivered. Please check your EmailJS keys.</p>
                </div>
            );
        }

        return (
            <>
                <h2 className="text-2xl font-bold mb-6 text-white text-center md:text-left">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all font-medium"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all font-medium"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all font-medium"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300" disabled={status === 'sending'}>
                        {status === 'sending' ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                                Sending...
                            </span>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </>
        );
    };

    return (
        <div className="page-container py-24 min-h-screen relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h1 className="section-title text-center mb-4">Contact <span className="text-gradient">Us</span></h1>
                <p className="section-subtitle text-center mb-16 max-w-2xl mx-auto">We'd love to hear from you. Whether you have a question, suggestion, or just want to say hello, feel free to reach out.</p>

                <div className="max-w-6xl mx-auto glass-card p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {/* Form Section */}
                        <FadeInSection>
                            <div className="h-full">
                                {renderFormContent()}
                            </div>
                        </FadeInSection>

                        {/* Info Section */}
                        <FadeInSection delay={100}>
                            <div className="flex flex-col h-full justify-center space-y-8 md:pl-8 md:border-l border-white/10">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed">
                                                D.No: 1-45, Madinapadu Village,<br />
                                                Dachepalli Mandal, Palnadu District,<br />
                                                Andhra Pradesh, India - 522414
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <p className="text-gray-300 font-medium">(+91) 7997666551</p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 text-cyan-400">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <p className="text-gray-300 font-medium">foundationalnoor@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold mb-4 text-white">Follow Us</h4>
                                    <div className="flex gap-4">
                                        {['facebook', 'youtube', 'instagram', 'map-marker-alt'].map((icon, idx) => (
                                            <a key={idx} href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                                                <i className={`fab fa-${icon === 'map-marker-alt' ? 'google' : icon} ${icon === 'map-marker-alt' ? 'fas fa-map-marker-alt' : ''}`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>

                {/* Google Maps Integration */}
                <FadeInSection>
                    <div className="mt-16 max-w-6xl mx-auto glass-card p-4 rounded-3xl">
                        <div className="overflow-hidden rounded-2xl shadow-lg h-[400px] w-full relative">
                            <div className="absolute inset-0 bg-cyan-500/10 animate-pulse pointer-events-none z-10 mix-blend-overlay"></div>
                            <iframe
                                title="Google Maps Location of Madinapadu Village"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15334.26422055622!2d79.73461865!3d16.5925433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3562c11e742e97%3A0x334b51a4413346d!2sMadinapadu%2C%2BAndhra%2BPradesh!5e0!3m2!1sen!2sin!4v1665412345678!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(120%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};


const GalleryPage = ({ onImageClick }) => {
    const [filter, setFilter] = useState('all');

    const galleryItems = [
        { id: 1, category: 'education', src: '/education.jpg', alt: 'Children learning in a classroom' },
        { id: 2, category: 'food', src: '/food1.jpg', alt: 'Woman receiving food aid' },
        { id: 3, category: 'relief', src: '/bedsheets.jpg', alt: 'Distributing bedsheets to families' },
        { id: 4, category: 'community', src: '/borewell.jpg', alt: 'Community gathering for a new borewell' },
        { id: 5, category: 'relief', src: '/clothes.jpg', alt: 'Women receiving new clothes' },
        { id: 6, category: 'community', src: '/Community.jpg', alt: 'Foundation members interacting with the community' },
        { id: 7, category: 'food', src: '/festival grocorries.jpg', alt: 'Distributing groceries for a festival' },
        { id: 8, category: 'food', src: '/food2.jpg', alt: 'Elderly woman with food package' },
        { id: 9, category: 'community', src: '/food3.jpg', alt: 'A community feeding program event' },
        { id: 10, category: 'community', src: '/backgroundImage.jpg', alt: 'Foundation team group photo' },
    ];

    const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

    return (
        <div className="page-container py-24">
            <div className="container mx-auto px-6">
                <h1 className="section-title">Gallery & Media</h1>
                <p className="section-subtitle">A glimpse into the moments that define our mission and the lives we've touched.</p>

                <FadeInSection>
                    <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
                        <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full font-semibold transition ${filter === 'all' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700'}`}>All</button>
                        <button onClick={() => setFilter('education')} className={`px-4 py-2 rounded-full font-semibold transition ${filter === 'education' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700'}`}>Education</button>
                        <button onClick={() => setFilter('relief')} className={`px-4 py-2 rounded-full font-semibold transition ${filter === 'relief' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700'}`}>Relief</button>
                        <button onClick={() => setFilter('food')} className={`px-4 py-2 rounded-full font-semibold transition ${filter === 'food' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700'}`}>Food & Groceries</button>
                        <button onClick={() => setFilter('community')} className={`px-4 py-2 rounded-full font-semibold transition ${filter === 'community' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700'}`}>Community</button>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, index) => (
                        <FadeInSection key={item.id} delay={index * 50}>
                            <div className="overflow-hidden rounded-2xl glass-card cursor-pointer group relative aspect-video" onClick={() => onImageClick(item.src)}>
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/80 text-white text-xs font-bold mb-2 uppercase tracking-wide">{item.category}</span>
                                        <p className="text-white text-sm font-medium">{item.alt}</p>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ImpactPage = () => (
    <div className="page-container py-24 bg-background">
        <div className="container mx-auto px-6">
            <h1 className="section-title">Our Impact & Reports</h1>
            <p className="section-subtitle">We believe in full transparency. Explore our annual reports and financial statements to see how your contributions are making a difference.</p>

            <FadeInSection>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Report Card */}
                    <div className="bg-card-background p-6 rounded-xl shadow-lg flex items-center space-x-6 card-hover">
                        <i className="fas fa-file-pdf text-5xl text-red-500"></i>
                        <div>
                            <h3 className="text-xl font-bold">Annual Report 2024</h3>
                            <p className="text-sm text-text-muted mb-2">Published: Jan 2025</p>
                            <button className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0">Download PDF <i className="fas fa-download ml-1"></i></button>
                        </div>
                    </div>
                    {/* Report Card */}
                    <div className="bg-card-background p-6 rounded-xl shadow-lg flex items-center space-x-6 card-hover">
                        <i className="fas fa-file-invoice-dollar text-5xl text-green-500"></i>
                        <div>
                            <h3 className="text-xl font-bold">Financial Statement 2024</h3>
                            <p className="text-sm text-text-muted mb-2">Published: Jan 2025</p>
                            <button className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0">Download PDF <i className="fas fa-download ml-1"></i></button>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="max-w-4xl mx-auto bg-card-background p-8 mt-16 rounded-xl shadow-2xl">
                    <h2 className="text-2xl font-bold mb-4 text-center">Fund Utilization 2024</h2>
                    <img src="https://placehold.co/800x400/cccccc/333333?text=Pie+Chart+of+Fund+Utilization" alt="Fund Utilization Chart" className="w-full h-auto rounded-md" />
                </div>
            </FadeInSection>
        </div>
    </div>
);

const FAQPage = () => {
    const faqs = [
        { q: "How can I donate?", a: "You can donate through our secure online portal on the 'Donate' page. We accept all major credit cards, PayPal, and bank transfers." },
        { q: "Is my donation tax-deductible?", a: "Yes, Al-Noor Foundation is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law." },
        { q: "How much of my donation goes to the actual cause?", a: "We are proud to say that 90% of every donation goes directly to our programs. The remaining 10% covers essential administrative and fundraising costs to keep our operations running." },
        { q: "How can I volunteer?", a: "Please visit the 'Get Involved' page and fill out the volunteer registration form. Our team will get in touch with you regarding available opportunities." },
    ];

    return (
        <div className="page-container py-24">
            <div className="container mx-auto px-6">
                <h1 className="section-title">Frequently Asked Questions</h1>
                <p className="section-subtitle">Find answers to common questions about our foundation, donations, and how to get involved.</p>

                <FadeInSection>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item bg-card-background rounded-lg shadow-sm">
                                <details className="p-4 group">
                                    <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center group-hover:text-cyan-500 dark:group-hover:text-cyan-400">
                                        {faq.q}
                                        <i className="fas fa-plus icon-plus"></i>
                                    </summary>
                                    <p className="mt-4 text-text-muted">
                                        {faq.a}
                                    </p>
                                </details>
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};


// --- LAYOUT COMPONENTS ---
const Preloader = ({ loading }) => (
    <div id="preloader" style={{ opacity: loading ? 1 : 0, visibility: loading ? 'visible' : 'hidden' }}>
        <div className="loader-ring"><div></div><div></div><div></div><div></div></div>
    </div>
);

const Lightbox = ({ src, onClose }) => {
    if (!src) return null;
    return (
        <div className="lightbox" onClick={onClose}>
            <img src={src} alt="Enlarged gallery view" onClick={e => e.stopPropagation()} />
            <span className="lightbox-close" onClick={onClose}>&times;</span>
        </div>
    );
};

const Header = ({ currentPage, onNavigate }) => { // onThemeToggle, user, onLogout removed
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['home', 'about', 'programs', 'gallery', 'events', 'involved', 'contact'];

    const handleNav = (page) => {
        onNavigate(page);
        setMobileMenuOpen(false);
    };

    const getNavItemName = (item) => {
        switch (item) {
            case 'home': return 'Home';
            case 'about': return 'About Us';
            case 'programs': return 'Services';
            case 'gallery': return 'Gallery';
            case 'events': return 'Events';
            case 'involved': return 'Join as Volunteer';
            case 'contact': return 'Contact Us';
            default: return item;
        }
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b border-transparent ${isSticky ? 'bg-[#0B0E14]/80 backdrop-blur-xl border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'}`}>
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <button onClick={(e) => { e.preventDefault(); handleNav('home'); }} className="group relative z-50">
                        <div className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:to-cyan-300 transition-all duration-300">
                            Al-Noor <span className="font-light text-white group-hover:text-gray-200">Foundation</span>
                        </div>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                    </button>

                    <div className="hidden lg:flex items-center ml-12 space-x-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                        {navItems.map(item => (
                            <button
                                key={item}
                                onClick={(e) => { e.preventDefault(); handleNav(item); }}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${currentPage === item ? 'text-black' : 'text-gray-300 hover:text-white'}`}
                            >
                                {currentPage === item && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.4)]"></div>
                                )}
                                <span className="relative z-10">{getNavItemName(item)}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
                    >
                        <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-cyan-400' : 'group-hover:bg-cyan-400'}`}></span>
                        <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'group-hover:bg-cyan-400'}`}></span>
                        <span className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-cyan-400' : 'group-hover:bg-cyan-400'}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#0B0E14]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500/10 to-purple-500/10 pointer-events-none"></div>

                <div className="flex flex-col space-y-6 text-center z-10 w-full px-6">
                    {navItems.map((item, index) => (
                        <button
                            key={item}
                            onClick={(e) => { e.preventDefault(); handleNav(item); }}
                            className={`text-2xl font-light text-white tracking-wider hover:text-cyan-400 transition-all duration-300 py-2 border-b border-white/5 hover:border-cyan-400/50 hover:pl-4 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {getNavItemName(item)}
                        </button>
                    ))}

                    <div className="pt-8">
                        <button onClick={() => handleNav('donate')} className="btn btn-primary w-full py-4 text-xl shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                            <i className="fas fa-heart mr-2"></i> Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Quotations = () => {
    const quotes = [
        { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
        { quote: "We make a living by what we get, but we make a life by what we give.", author: "Winston Churchill" },
        { quote: "No one has ever become poor by giving.", author: "Anne Frank" },
        { quote: "Service to others is the rent you pay for your room here on Earth.", author: "Muhammad Ali" }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="section-title">Inspirational <span className="text-gradient">Quotations</span></h2>
                <p className="section-subtitle">Words that ignite the spirit of giving.</p>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {quotes.map((q, index) => (
                        <FadeInSection key={index} delay={index * 100}>
                            <div className="glass-card p-8 h-full relative group">
                                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-50 transition-opacity">
                                    <i className="fas fa-quote-right text-6xl text-cyan-400"></i>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-lg md:text-xl font-light leading-relaxed mb-6 text-gray-200">"{q.quote}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                                        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 uppercase tracking-widest text-sm">{q.author}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('sending');
        // Placeholder simulation for UI demo
        setTimeout(() => setStatus('success'), 1500);
        setTimeout(() => setStatus('idle'), 4000);
    };

    const getButtonContent = () => {
        switch (status) {
            case 'sending': return <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>;
            case 'success': return <i className="fas fa-check"></i>;
            case 'error': return <i className="fas fa-times"></i>;
            default: return <i className="fas fa-paper-plane"></i>;
        }
    };

    return (
        <footer className="relative bg-[#05070a] border-t border-white/5 pt-20 pb-10 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="md:col-span-12 lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Al-Noor Foundation</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                            Igniting hope and creating sustainable change. We believe in the power of collective compassion to transform lives.
                        </p>
                        <div className="flex gap-4">
                            {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-white border border-white/10 hover:border-cyan-500 flex items-center justify-center transition-all duration-300 group">
                                    <i className={`fab fa-${icon} text-gray-400 group-hover:text-white`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Explore</h3>
                        <ul className="space-y-4">
                            {['About Us', 'Our Work', 'Gallery', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <button onClick={() => onNavigate(item.toLowerCase().replace(' ', ''))} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Involved</h3>
                        <ul className="space-y-4">
                            {['Volunteer', 'Donate', 'Events', 'Contact'].map((item) => (
                                <li key={item}>
                                    <button onClick={() => onNavigate(item.toLowerCase())} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-12 lg:col-span-4">
                        <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02]">
                            <h3 className="text-white font-bold mb-2 text-lg">Detailed Updates</h3>
                            <p className="text-gray-400 text-sm mb-4">Subscribe to our weekly newsletter for impact stories.</p>
                            <form onSubmit={handleNewsletterSubmit} className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-black hover:bg-cyan-400 transition-colors">
                                    {getButtonContent()}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2025 Al-Noor Foundation. All rights reserved.</p>
                    <div className="flex gap-6">
                        <button onClick={() => onNavigate('privacy')} className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</button>
                        <button onClick={() => onNavigate('terms')} className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const TermsPage = () => (
    <div className="page-container py-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="section-title">Terms and Conditions</h1>
            <div className="prose dark:prose-invert lg:prose-xl mx-auto space-y-4 text-text-muted">
                <p>Welcome to Al-Noor Foundation. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Al-Noor Foundation's relationship with you in relation to this website.</p>

                <h2>1. Intellectual Property Rights</h2>
                <p>Other than the content you own, under these Terms, Al-Noor Foundation and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>

                <h2>2. Restrictions</h2>
                <p>You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is or may be damaging to this Website; using this Website in any way that impacts user access to this Website; using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</p>

                <h2>3. Your Content</h2>
                <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Al-Noor Foundation a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>

                <h2>4. No warranties</h2>
                <p>This Website is provided “as is,” with all faults, and Al-Noor Foundation express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>

                <h2>5. Limitation of liability</h2>
                <p>In no event shall Al-Noor Foundation, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Al-Noor Foundation, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>

                <h2>6. Governing Law & Jurisdiction</h2>
                <p>These Terms will be governed by and interpreted in accordance with the laws of the State of Andhra Pradesh, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.</p>
            </div>
        </div>
    </div>
);

// --- KOTHA PAGES (NEW PAGES for Razorpay) ---

const PrivacyPolicyPage = () => (
    <div className="page-container py-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="section-title">Privacy Policy</h1>
            <div className="prose dark:prose-invert lg:prose-xl mx-auto space-y-4 text-text-muted">
                <p>Your privacy is important to us. It is Al-Noor Foundation's policy to respect your privacy regarding any information we may collect from you across our website.</p>

                <h2>1. Information we collect</h2>
                <p>We only ask for personal information when we truly need it to provide a service to you (for example, when processing a donation or registering you as a volunteer). We collect it by fair and lawful means, with your knowledge and consent.</p>

                <h2>2. How we use your information</h2>
                <p>We use the information we collect to operate and maintain our website, process your donations, send you receipts and thank-you notes, and communicate with you about our work. We will not share your personal information with any third-party, except as required by law.</p>

                <h2>3. Security</h2>
                <p>We take the security of your data seriously and use commercially acceptable means to protect it. However, remember that no method of transmission over the internet or electronic storage is 100% secure.</p>

                <h2>4. Links to other sites</h2>
                <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
            </div>
        </div>
    </div>
);

const RefundPolicyPage = () => (
    <div className="page-container py-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="section-title">Cancellation & Refund Policy</h1>
            <div className="prose dark:prose-invert lg:prose-xl mx-auto space-y-4 text-text-muted">
                <p>Al-Noor Foundation is a non-profit organization. We are grateful for every donation received in support of our charitable causes.</p>
                <p>As a charitable foundation, all donations made to Al-Noor Foundation are **final and non-refundable**. We do not offer any refunds or cancellations for donations once they are processed successfully.</p>
                <p>If you have made an error in your donation amount or believe a fraudulent transaction has occurred, please contact us immediately at **foundationalnoor@gmail.com** so we can address the issue.</p>
            </div>
        </div>
    </div>
);

const ShippingPolicyPage = () => (
    <div className="page-container py-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="section-title">Shipping & Delivery Policy</h1>
            <div className="prose dark:prose-invert lg:prose-xl mx-auto space-y-4 text-text-muted">
                <p>Al-Noor Foundation does not sell or ship any physical goods or products. Our website's primary purpose is to facilitate our charitable activities and to accept monetary donations to support these causes.</p>
                <p>Therefore, **no shipping or delivery policy is applicable** as we do not deliver any products. All services rendered are of a charitable nature.</p>
            </div>
        </div>
    </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState('home');
    const [pageData, setPageData] = useState({});
    const [lightboxImage, setLightboxImage] = useState(null);

    // Dynamically load the EmailJS script when the app starts.
    useScript('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js');

    useEffect(() => {
        // Force dark theme permanently
        document.documentElement.className = 'dark';

        // Simulate app loading
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);

    }, []); // Empty dependency array means this runs once on mount

    const handleNavigate = (page, data = {}) => {
        setCurrentPage(page);
        setPageData(data);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'about': return <AboutPage />;
            case 'programs': return <ProgramsPage onNavigate={handleNavigate} />;
            case 'involved': return <InvolvedPage />;
            case 'donate': return <DonatePage />;
            case 'events': return <EventsPage onNavigate={handleNavigate} />;
            case 'contact': return <ContactPage />;
            case 'gallery': return <GalleryPage onImageClick={setLightboxImage} />;
            case 'impact': return <ImpactPage />;
            case 'faq': return <FAQPage />;
            case 'terms': return <TermsPage />;
            case 'privacy': return <PrivacyPolicyPage />;
            case 'refund': return <RefundPolicyPage />;
            case 'shipping': return <ShippingPolicyPage />;
            case 'service-details':
                const service = servicesData[pageData.serviceId];
                return service ? <ServiceDetailsPage service={service} onNavigate={handleNavigate} /> : <HomePage onNavigate={handleNavigate} />;
            case 'event-details':
                const event = eventsData[pageData.eventId];
                return event ? <EventDetailsPage event={event} onNavigate={handleNavigate} /> : <HomePage onNavigate={handleNavigate} />;
            default: return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <>
            <GlobalStyles />
            <Preloader loading={loading} />
            <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
            <div className="bg-background">
                <Header
                    currentPage={currentPage}
                    onNavigate={handleNavigate}
                />
                <main className="pt-20">
                    {renderPage()}
                </main>
                <button onClick={() => handleNavigate('home')} className="btn btn-secondary shadow-lg z-30 w-14 h-14 !p-0 fixed-floating-btn floating-left">
                    <i className="fas fa-home text-xl"></i>
                </button>
                <button onClick={() => handleNavigate('donate')} className="btn btn-primary shadow-lg flex items-center space-x-2 z-30 fixed-floating-btn floating-right">
                    <i className="fas fa-heart"></i>
                    <span>Donate</span>
                </button>
                <Footer onNavigate={handleNavigate} />
            </div>
        </>
    );
}