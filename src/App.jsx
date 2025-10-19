import React, { useState, useEffect, useRef, useCallback } from 'react';
// Firebase imports are removed as login is removed

// STYLES - All CSS from the original file is placed here
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

    :root {
        /* Fixed Dark Theme - Higher Contrast */
        --color-primary: #BBDEFB; /* Light Blue */
        --color-secondary: #FFD54F; /* Lighter Amber */
        --color-accent: #64B5F6; /* Lighter Bright Blue */
        --color-background: #121212; /* Nearly Black */
        --color-text: #F9FAFB; /* Off-white (Gray 50) */
        --color-text-muted: #D1D5DB; /* Brighter Gray (Gray 300) */
        --color-card-background: #1e1e1e;
    }
    
    html {
        scroll-behavior: smooth;
        background-color: var(--color-background);
        color: var(--color-text);
    }

    body {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--color-text);
    }
    
    /* Modern Button Styles */
    .btn {
        padding: 0.75rem 1.75rem;
        border-radius: 9999px;
        font-weight: 600;
        transition: all 0.3s ease-in-out;
        transform-origin: center;
        border: 2px solid transparent;
        letter-spacing: 0.5px;
        position: relative;
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    .btn:hover {
        transform: scale(1.05) translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    .btn:focus {
        outline: none;
        box-shadow: 0 0 0 4px var(--color-accent);
    }

    .btn-primary {
        background-image: linear-gradient(45deg, var(--color-secondary), #FFCA28);
        color: #111827;
        box-shadow: 0 4px 15px rgba(255, 213, 79, 0.3);
    }

    .btn-secondary {
        background-color: transparent;
        border-color: var(--color-secondary);
        color: var(--color-secondary);
    }
     .btn-secondary:hover {
        background-color: var(--color-secondary);
        color: #111827;
        box-shadow: 0 8px 15px rgba(255, 213, 79, 0.2);
    }
    
    /* Modern Section Titles with Gradient */
    .section-title {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        text-align: center;
        letter-spacing: -1px;
        background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .section-subtitle {
        font-size: 1.125rem;
        text-align: center;
        max-width: 48rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3rem;
        color: var(--color-text-muted);
    }
    
    /* Modern Nav Link */
    .nav-link {
        position: relative;
        padding: 0.5rem 0.25rem;
        margin: 0 0.75rem;
        transition: color 0.3s;
        font-weight: 500;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        color: var(--color-primary);
    }
    .nav-link:hover { color: var(--color-accent); }
    
    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-accent);
        transition: width 0.3s ease-in-out;
    }
    
    .nav-link:hover::after, .nav-link.active::after {
        width: 100%;
    }
    
    .fade-in-section {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .fade-in-section.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    #preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.7s ease, visibility 0.7s ease;
        background-color: var(--color-background);
    }
    .loader-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .loader-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid;
        border-radius: 50%;
        animation: loader-ring-anim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--color-secondary) transparent transparent transparent;
    }
    .loader-ring div:nth-child(1) { animation-delay: -0.45s; }
    .loader-ring div:nth-child(2) { animation-delay: -0.3s; }
    .loader-ring div:nth-child(3) { animation-delay: -0.15s; }
    @keyframes loader-ring-anim {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* Modern Card Hover Effect */
    .card-hover {
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        border-radius: 0.75rem;
        background-color: var(--color-card-background);
        box-shadow: 0 1px 2px 0 rgb(255 255 255 / 0.05);
    }
    .card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    .page-container {
        animation: page-fade-in 0.6s ease-in-out;
    }
    @keyframes page-fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .lightbox {
        position: fixed;
        inset: 0;
        background-color: rgba(17, 24, 39, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        z-index: 50;
    }
    .lightbox img {
        max-width: 90vw;
        max-height: 90vh;
        border-radius: 0.5rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .lightbox-close {
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
        color: white;
        font-size: 2.25rem;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    .lightbox-close:hover {
        transform: scale(1.2);
    }
    
    .faq-item details > summary {
        list-style: none;
    }
    .faq-item details > summary::-webkit-details-marker {
        display: none;
    }
    .faq-item .icon-plus {
        transition: transform 0.3s ease;
    }
    .faq-item details[open] summary .icon-plus {
        transform: rotate(45deg);
    }

    .modern-input {
        background-color: #374151;
        border: 2px solid transparent;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
        color: var(--color-text);
    }
    .modern-input:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px rgba(100, 181, 246, 0.2);
    }

    @keyframes hero-bg-pan {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .hero-bg-animated {
        animation: hero-bg-pan 40s ease-in-out infinite;
        background-size: 150% 100%;
    }

    .gallery-item-overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        opacity: 0;
        transition: opacity 0.4s ease;
    }
    .group:hover .gallery-item-overlay {
        opacity: 1;
    }

    .impact-icon-container {
        transition: transform 0.3s ease;
    }
    .impact-icon-container:hover {
        transform: scale(1.1);
    }
    
    .spinner {
      animation: rotate 2s linear infinite;
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
    .spinner .path {
      stroke: #fff;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
    .spinner-small {
      animation: rotate 1.5s linear infinite;
      width: 16px;
      height: 16px;
    }
    .spinner-small .path {
      stroke: #1f2937;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
      100% { transform: rotate(360deg); }
    }
    @keyframes dash {
      0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
      50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
      100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
    }

    /* Auto-scrolling quotations */
    .quotations-container {
        overflow: hidden;
        padding-top: 3rem;
        padding-bottom: 3rem;
        position: relative;
        width: 100%;
    }
    .quotations-container:hover .quotations-track {
        animation-play-state: paused;
    }
    .quotations-container::before,
    .quotations-container::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 15rem;
        z-index: 2;
    }
    .quotations-container::before {
        left: 0;
        background: linear-gradient(to right, var(--color-card-background), transparent);
    }
    .quotations-container::after {
        right: 0;
        background: linear-gradient(to left, var(--color-card-background), transparent);
    }

    .quotations-track {
        display: flex;
        width: calc(400px * 12); /* Card width * number of cards (6 original + 6 duplicates) */
        animation: scroll 80s linear infinite;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-400px * 6)); /* Scroll by the width of the original 6 cards */
        }
    }

    .quote-card {
        width: 400px;
        flex-shrink: 0;
        padding: 2rem;
        margin: 0 1rem;
        background-color: var(--color-background);
        border-radius: 0.75rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
        image: '/clothes.jpg',
        shortDescription: 'Join our vocational training program to empower women with skills for self-employment. Certification provided.',
        status: '5-Month Course (July - November)',
        details: {
            members: 'Currently training 150 women from the local community.',
            timings: 'Batch 1: 10:00 AM - 1:00 PM | Batch 2: 1:00 PM - 5:00 PM',
            venue: 'Near Noor Masjid, Madinapadu Road, Dachepalli',
            image: '/education.jpg',
            certificate: '/certificate.jpg'
        }
    }
}


// --- PAGE COMPONENTS ---
const HomePage = ({ onNavigate }) => (
    <div className="page-container">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-animated" style={{ backgroundImage: "url('/backgroundImage.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tighter">Serving Humanity, Spreading Light</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-slate-300">Al-Noor Foundation is committed to creating lasting change through education, healthcare, and relief programs for communities in need.</p>
                <div className="space-x-4">
                    <button onClick={() => onNavigate('involved')} className="btn btn-primary">Join Us</button>
                    <button onClick={() => onNavigate('donate')} className="btn btn-secondary">Donate Now</button>
                </div>
            </div>
        </div>

        {/* Mission and Vision */}
        <section className="py-24 bg-card-background">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeInSection>
                        <h2 className="section-title text-left">Our Mission & Vision</h2>
                        <p className="mb-4 text-text-muted">Our mission is to empower vulnerable communities by providing sustainable solutions in education, healthcare, and social welfare. We envision a world where every individual has the opportunity to thrive with dignity and hope.</p>
                        <p className="text-text-muted">We believe in a hands-on approach, working directly with local partners to ensure our efforts are effective and culturally sensitive.</p>
                    </FadeInSection>
                    <FadeInSection>
                        <img src="/Community.jpg" alt="Community Empowerment" className="rounded-xl shadow-2xl w-full h-full object-cover" />
                    </FadeInSection>
                </div>
            </div>
        </section>
        
        {/* Impact Numbers */}
        <section className="py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="section-title">Our Impact in Numbers</h2>
                <p className="section-subtitle">Your support translates into real, tangible change for countless lives.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                     <FadeInSection>
                        <div className="p-4 impact-icon-container">
                            <i className="fas fa-child text-5xl text-yellow-400 mb-4"></i>
                            <AnimatedCounter target={500} />
                            <p className="text-lg">Children Educating</p>
                        </div>
                    </FadeInSection>
                     <FadeInSection delay={100}>
                        <div className="p-4 impact-icon-container">
                            <i className="fas fa-notes-medical text-5xl text-yellow-400 mb-4"></i>
                            <AnimatedCounter target={100} />
                            <p className="text-lg">Womens Training </p>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={200}>
                        <div className="p-4 impact-icon-container">
                            <i className="fas fa-hand-holding-water text-5xl text-yellow-400 mb-4"></i>
                             <AnimatedCounter target={50} />
                            <p className="text-lg">Wells Built</p>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={300}>
                        <div className="p-4 impact-icon-container">
                            <i className="fas fa-hands-helping text-5xl text-yellow-400 mb-4"></i>
                            <AnimatedCounter target={8000} />
                            <p className="text-lg">Families Supported</p>
                        </div>
                    </FadeInSection>
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
                    <img src="/backgroundImage2.jpg" alt="Our Journey" className="rounded-xl shadow-2xl" />
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
                        <img src="/clothes.jpg" alt="Women Sewing Machine Training" className="w-full h-48 object-cover" />
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
        const phoneNumber = "+91 7997666551"; // Country code + phone number
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
    const [viewState, setViewState] = useState('amount_selection'); // 'amount_selection', 'success'
    const [amountError, setAmountError] = useState('');
    const presetAmounts = [500, 1000, 2500, 5000];

    useScript('https://checkout.razorpay.com/v1/checkout.js');

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
            if (numValue >= 100) {
                setAmount(numValue);
                setAmountError('');
            } else {
                setAmountError('Amount must be at least ₹100');
            }
        } else if (!value) {
            setAmountError('');
            setAmount(500); // Reset to a default preset if empty
        } else {
             setAmountError('Please enter a valid number');
        }
    };

    const displayRazorpay = () => {
        if (amountError || amount < 100) {
            alert('Please enter an amount of at least ₹100.'); // Use alert for simplicity in this dev build
            return;
        }

        // =================================================================================
        // --- Razorpay Configuration ---
        // IMPORTANT: Replace this with your actual Key ID from your Razorpay account.
        // See the razorpay_setup_guide.md file for instructions.
        const razorpayKeyId = 'YOUR_RAZORPAY_KEY_ID';
        // =================================================================================
        
        if (razorpayKeyId === 'YOUR_RAZORPAY_KEY_ID') {
            alert('Razorpay Key ID is not set. Please follow the setup guide in razorpay_setup_guide.md.');
            return;
        }

        const options = {
            key: razorpayKeyId,
            amount: amount * 100, // Amount in paise
            currency: "INR",
            name: "Al-Noor Foundation",
            description: "Donation for a social cause",
            image: "/FLOGO.jpg", // Use the actual logo here
            handler: function (response) {
                console.log(response);
                setViewState('success');
            },
            prefill: {
                name: "Donor",
                email: "donor@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Al-Noor Foundation Office",
            },
            theme: {
                color: "#0D47A1",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const resetDonation = () => {
        setViewState('amount_selection');
        setAmount(500);
        setCustomAmount('');
        setAmountError('');
    };

    const renderAmountSelection = () => (
         <>
            <h2 className="text-2xl font-bold mb-6 text-center">Donate Securely</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                <div className="text-center">
                     <h3 className="text-lg font-semibold text-center mb-4">Scan & Pay with UPI</h3>
                     <div className="flex justify-center p-2 bg-white rounded-lg shadow-inner">
                        <img src="/qr-code.jpg" alt="UPI Payment QR Code" className="w-48 h-48 rounded-md" />
                     </div>
                     <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">Use any UPI app like GPay, PhonePe, Paytm</p>
                </div>
                
                <div className="md:border-l-2 border-gray-200 dark:border-gray-700 md:pl-8">
                    <h3 className="text-lg font-semibold text-center mb-4">Or Pay Online</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {presetAmounts.map(preset => (
                            <button
                                key={preset}
                                onClick={() => handleAmountClick(preset)}
                                className={`p-3 border-2 rounded-lg text-md font-bold transition-colors ${amount === preset && !customAmount ? 'bg-yellow-400 text-black border-yellow-400' : 'hover:bg-yellow-400 hover:text-black hover:border-yellow-400 dark:border-gray-600 dark:hover:border-yellow-400'}`}
                            >
                                ₹{preset}
                            </button>
                        ))}
                    </div>
                    <input
                        type="number"
                        placeholder="Or Enter Custom Amount (min ₹100)"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="w-full p-3 rounded-md modern-input mb-2 text-center"
                    />
                    {amountError && <p className="text-red-500 text-sm text-center mb-4">{amountError}</p>}
                    
                    <div className="mt-6 text-center">
                         <button onClick={displayRazorpay} disabled={!!amountError || amount < 100} className="btn btn-primary w-full">
                            Donate ₹{amount} with Razorpay
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
    
    const renderSuccessState = () => (
        <div className="text-center py-10">
            <div className="text-6xl text-green-500 mb-4">
                <i className="fas fa-check-circle"></i>
            </div>
            <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Thank you for your generous donation of ₹{amount}.</p>
            <button onClick={resetDonation} className="btn btn-secondary">Make Another Donation</button>
        </div>
    );

    return (
        <div className="page-container py-24 bg-background">
            <div className="container mx-auto px-6">
                <h1 className="section-title">Make a Difference</h1>
                <p className="section-subtitle">Your donation empowers us to continue our work and bring hope to those who need it most.</p>
                <FadeInSection>
                    <div className="max-w-4xl mx-auto bg-card-background p-8 rounded-xl shadow-2xl transition-all duration-500">
                        {viewState === 'amount_selection' && renderAmountSelection()}
                        {viewState === 'success' && renderSuccessState()}
                    </div>
                </FadeInSection>
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
                    <img src="/sweeing 1.jpg" alt={eventsData.sewing_training.title} className="md:w-1/3 object-cover" />
                    <div className="p-6 md:p-8">
                        <p className="text-sm text-yellow-500 font-semibold mb-1">ONGOING</p>
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
                <img src="/sweing2.jpg" alt={event.title} className="w-full h-96 object-cover rounded-xl shadow-2xl mb-8" />
                <h1 className="section-title text-left">{event.title}</h1>
                <div className="bg-card-background rounded-lg p-6 space-y-4">
                    <p><strong>Status:</strong> {event.status}</p>
                    <p><strong>Participants:</strong> {event.details.members}</p>
                    <p><strong>Timings:</strong> {event.details.timings}</p>
                    <p><strong>Venue:</strong> {event.details.venue}</p>
                </div>
                 <h2 className="text-2xl font-bold mt-12 mb-4">Glimpses from the Training</h2>
                <img src="/SWEEING.jpg" alt="Training session" className="w-full h-auto object-cover rounded-xl shadow-lg mb-8" />
                <h2 className="text-2xl font-bold mt-12 mb-4">Certification of Completion</h2>
                <img src="/certificate.png" alt="Training Certificate" className="w-90% h-auto object-cover rounded-xl shadow-lg" />
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
                    <div className="text-5xl text-green-500 mb-4">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                    <p className="text-text-muted">Thank you for reaching out. We have opened WhatsApp for you to send the message directly.</p>
                </div>
            );
        }

        if (status === 'error') {
             return (
                <div className="text-center flex flex-col items-center justify-center h-full">
                    <div className="text-5xl text-red-500 mb-4">
                        <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Email Failed</h2>
                    <p className="text-text-muted">Your message was sent to WhatsApp, but the email could not be delivered. Please check your EmailJS keys.</p>
                </div>
            );
        }

        return (
            <>
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                   <div className="grid grid-cols-1 gap-6 mb-6">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            className="w-full p-3 rounded-md modern-input" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Your Email" 
                            className="w-full p-3 rounded-md modern-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                       <textarea 
                            name="message"
                            placeholder="Your Message" 
                            rows="5" 
                            className="w-full p-3 rounded-md modern-input"
                            value={formData.message}
                            onChange={handleChange}
                            required
                       ></textarea>
                    </div>
                    <div className="text-left">
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? (
                                <>
                                    <svg className="spinner" viewBox="0 0 50 50">
                                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </div>
                </form>
            </>
        );
    };

    return (
        <div className="page-container py-24 bg-background">
            <div className="container mx-auto px-6">
                <h1 className="section-title">Contact Us</h1>
                <p className="section-subtitle">We'd love to hear from you. Whether you have a question, suggestion, or just want to say hello, feel free to reach out.</p>
                <div className="grid md:grid-cols-2 gap-16">
                     <FadeInSection>
                        <div className="bg-card-background p-8 rounded-xl shadow-2xl min-h-[480px] flex flex-col justify-center">
                            {renderFormContent()}
                        </div>
                     </FadeInSection>
                    <FadeInSection delay={100}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                            <p className="mb-4 flex items-start"><i className="fas fa-map-marker-alt mr-3 mt-1 text-cyan-500"></i><span>D.No: 1-45, Madinapadu Village,<br/>Dachepalli Mandal, Palnadu District,<br/>Andhra Pradesh, India<br/>pin-522414 </span></p>
                            <p className="mb-4 flex items-center"><i className="fas fa-phone mr-3 text-cyan-500"></i> (+91)7997666551</p>
                            <p className="mb-4 flex items-center"><i className="fas fa-envelope mr-3 text-cyan-500"></i>foundationalnoor@gmail.com</p>
                            <div className="mt-8">
                                <h4 className="font-bold mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-500 transition-colors"><i className="fab fa-facebook"></i></a>
                                    <a href="https://youtu.be/D-RrrARZ0_k?feature=shared" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-500 transition-colors"><i className="fab fa-youtube"></i></a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-500 transition-colors"><i className="fab fa-instagram"></i></a>
                                    <a href="https://maps.app.goo.gl/NswGuLBPNjFRVum1A?g_st=ac" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-500 transition-colors"><i className="fas fa-map-marker-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
                {/* Google Maps Integration */}
                <FadeInSection>
                    <div className="mt-16">
                        <h2 className="section-title">Our Location</h2>
                        <div className="overflow-hidden rounded-xl shadow-2xl">
                             <iframe 
                                title="Google Maps Location of Madinapadu Village"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15334.26422055622!2d79.73461865!3d16.5925433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3562c11e742e97%3A0x334b51a4413346d!2sMadinapadu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1665412345678!5m2!1sen!2sin"
                                width="100%" 
                                height="450" 
                                style={{ border: 0 }} 
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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredItems.map((item, index) => (
                        <FadeInSection key={item.id} delay={index * 100}>
                            <div className="overflow-hidden rounded-lg shadow-lg cursor-pointer group relative" onClick={() => onImageClick(item.src)}>
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                                <div className="gallery-item-overlay">
                                    <i className="fas fa-search-plus"></i>
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
        switch(item) {
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
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isSticky ? 'shadow-lg bg-gray-800/80 backdrop-blur-lg' : ''}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <button onClick={(e) => { e.preventDefault(); handleNav('home'); }} className="text-2xl font-bold mr-10 bg-transparent border-none p-0 text-yellow-400">
                        Al-Noor <span className="text-white">Foundation</span>
                    </button>
                    <div className="hidden lg:flex items-center">
                        {navItems.map(item => (
                            <button key={item} onClick={(e) => { e.preventDefault(); handleNav(item); }} className={`nav-link capitalize ${currentPage === item ? 'active' : ''}`}>{getNavItemName(item)}</button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-md text-gray-200 hover:bg-gray-700">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-gray-800 py-4 shadow-lg`}>
                 {navItems.map(item => (
                    <button key={item} onClick={(e) => { e.preventDefault(); handleNav(item); }} className="block w-full text-center py-2 capitalize text-gray-200 hover:text-cyan-400 bg-transparent border-none">{getNavItemName(item)}</button>
                ))}
            </div>
        </header>
    );
};

const Quotations = () => {
    const quotes = [
        { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
        { quote: "We make a living by what we get, but we make a life by what we give.", author: "Winston Churchill" },
        { quote: "No one has ever become poor by giving.", author: "Anne Frank" },
        { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson"},
        { quote: "Only a life lived for others is a life worthwhile.", author: "Albert Einstein"},
        { quote: "Service to others is the rent you pay for your room here on Earth.", author: "Muhammad Ali"}
    ];

    const duplicatedQuotes = [...quotes, ...quotes];

    return (
        <section className="py-24 bg-card-background quotations-container">
            <h2 className="section-title">Inspirational Quotations</h2>
            <p className="section-subtitle">Words that inspire us to serve humanity.</p>
            <div className="quotations-track">
                {duplicatedQuotes.map((q, index) => (
                     <div key={index} className="quote-card">
                         <p className="text-xl italic mb-4 text-text-muted">"{q.quote}"</p>
                         <p className="font-semibold text-secondary">- {q.author}</p>
                     </div>
                ))}
            </div>
        </section>
    );
};

const Footer = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('sending');

        // --- EmailJS Configuration for Newsletter ---
        // IMPORTANT: Replace these with your actual IDs from your EmailJS account.
        // See the updated email_setup_guide.md file for instructions.
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_NEWSLETTER_TEMPLATE_ID'; // A NEW template ID for newsletters
        const userID = 'YOUR_PUBLIC_KEY';

        // Check for placeholder values
        if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_NEWSLETTER_TEMPLATE_ID' || userID === 'YOUR_PUBLIC_KEY') {
            console.error('EmailJS Newsletter Error: Please configure your EmailJS keys and the new newsletter template ID.');
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
            return;
        }

        // Check if emailjs script is loaded
        if (!window.emailjs) {
            console.error('EmailJS script has not loaded yet.');
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
            return;
        }

        const templateParams = {
            subscriber_email: email,
            to_email: 'shaikabdulla1199@gmail.com'
        };

        window.emailjs.send(serviceID, templateID, templateParams, userID)
            .then(() => {
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus('idle'), 4000);
            }, (err) => {
                console.error('Failed to send newsletter email.', err);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            });
    };

    const getButtonContent = () => {
        switch (status) {
            case 'sending':
                return (
                    <svg className="spinner-small" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>
                );
            case 'success':
                return <i className="fas fa-check text-green-500"></i>;
            case 'error':
                 return <i className="fas fa-times text-red-500"></i>;
            default:
                return 'Go';
        }
    };

    return (
        <footer className="bg-gray-800 dark:bg-black text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Al-Noor Foundation</h3>
                        <p className="text-sm">Serving Humanity, Spreading Light.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><button onClick={(e) => {e.preventDefault(); onNavigate('about')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left">About Us</button></li>
                            <li><button onClick={(e) => {e.preventDefault(); onNavigate('programs')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left">Our Work</button></li>
                            <li><button onClick={(e) => {e.preventDefault(); onNavigate('gallery')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left">Gallery</button></li>
                            <li><button onClick={(e) => {e.preventDefault(); onNavigate('faq')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left">FAQ</button></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-lg font-bold text-white mb-4">Get Involved</h3>
                        <ul className="space-y-2 text-sm">
                            <li><button onClick={(e) => {e.preventDefault(); onNavigate('involved')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left">Volunteer</button></li>
                            <li><button onClick={(e) => {e.preventDefault(); onNavigate('events')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left">Events</button></li>
                            <li><button onClick={(e) => {e.preventDefault(); onNavigate('contact')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left">Contact</button></li>
                             <li><button onClick={(e) => {e.preventDefault(); onNavigate('terms')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left">Terms & Conditions</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
                        <p className="text-sm mb-4">Subscribe to get our latest updates.</p>
                        <form className="flex" onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 rounded-l-md text-gray-800 focus:outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={status !== 'idle'}
                            />
                            <button type="submit" className="bg-yellow-400 text-gray-900 px-4 rounded-r-md font-bold hover:bg-yellow-500 flex items-center justify-center w-20" disabled={status === 'sending'}>
                                {getButtonContent()}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
                    <p>&copy; 2025 Al-Noor Foundation. All Rights Reserved.</p>
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
                <button onClick={() => handleNavigate('home')} className="fixed bottom-5 left-5 btn btn-secondary shadow-lg z-30 w-14 h-14 !p-0">
                    <i className="fas fa-home text-xl"></i>
                </button>
                <button onClick={() => handleNavigate('donate')} className="fixed bottom-5 right-5 btn btn-primary shadow-lg flex items-center space-x-2 z-30">
                    <i className="fas fa-heart"></i>
                    <span>Donate</span>
                </button>
                <Footer onNavigate={handleNavigate} />
            </div>
        </>
    );
}

