import React, { useState, useEffect, useRef, useCallback } from 'react';

// STYLES - All CSS from the original file is placed here
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

    :root {
        /* New Green Theme - Light Mode (Higher Contrast) */
        --color-primary-light: #047857; /* Emerald 700 */
        --color-secondary-light: #F59E0B; /* Amber 500 */
        --color-accent-light: #06b6d4; /* Cyan 500 */
        --color-background-light: #ffffff; /* White */
        --color-text-light: #111827; /* Gray 900 */
        --color-text-muted-light: #374151; /* Gray 700 */

        /* New Green Theme - Dark Mode (Higher Contrast) */
        --color-primary-dark: #a7f3d0; /* Emerald 200 */
        --color-secondary-dark: #facc15; /* Yellow 400 */
        --color-accent-dark: #22d3ee; /* Cyan 400 */
        --color-background-dark: #111827; /* Gray 900 */
        --color-text-dark: #f9fafb; /* Gray 50 */
        --color-text-muted-dark: #9ca3af; /* Gray 400 */
    }
    
    html {
        scroll-behavior: smooth;
    }

    html.light {
        background-color: var(--color-background-light);
        color: var(--color-text-light);
    }

    html.dark {
        background-color: var(--color-background-dark);
        color: var(--color-text-dark);
    }

    body {
        font-family: 'Poppins', sans-serif;
        transition: background-color 0.3s, color 0.3s;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--color-text-light);
    }
    html.dark body {
        color: var(--color-text-dark);
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
        text-decoration: none; /* Added for <a> tags */
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
        box-shadow: 0 0 0 4px var(--color-accent-light);
    }
    html.dark .btn:focus {
        box-shadow: 0 0 0 4px var(--color-accent-dark);
    }

    .btn-primary {
        background-image: linear-gradient(45deg, var(--color-secondary-light), #FBBF24);
        color: #111827;
        box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
    }
     html.dark .btn-primary {
        background-image: linear-gradient(45deg, var(--color-secondary-dark), #FBBF24);
        color: #111827;
        box-shadow: 0 4px 15px rgba(250, 204, 21, 0.2);
    }

    /* Shimmer Effect on Primary Button */
    .btn-primary::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
        transform: rotate(45deg);
        transition: transform 0.8s ease;
        opacity: 0;
    }
    .btn-primary:hover::after {
        transform: translate(30%, 30%) rotate(45deg);
        opacity: 1;
    }


    .btn-secondary {
        background-color: transparent;
        border-color: var(--color-secondary-light);
        color: var(--color-secondary-light);
    }
    .btn-secondary:hover {
        background-color: var(--color-secondary-light);
        color: #111827;
        box-shadow: 0 8px 15px rgba(245, 158, 11, 0.2);
    }
    html.dark .btn-secondary {
        border-color: var(--color-secondary-dark);
        color: var(--color-secondary-dark);
    }
     html.dark .btn-secondary:hover {
        background-color: var(--color-secondary-dark);
        color: #111827;
    }
    
    /* Modern Section Titles with Gradient */
    .section-title {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 1rem;
        text-align: center;
        letter-spacing: -1px;
    }
    
    .section-subtitle {
        font-size: 1.125rem;
        text-align: center;
        max-width: 48rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3rem;
        color: var(--color-text-muted-light);
    }
    html.dark .section-subtitle { color: var(--color-text-muted-dark); }
    
    html.light .section-title {
        background: linear-gradient(45deg, var(--color-primary-light), var(--color-accent-light));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    html.dark .section-title {
        background: linear-gradient(45deg, var(--color-primary-dark), var(--color-accent-dark));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
        text-decoration: none;
    }
    html.light .nav-link { color: var(--color-text-light); }
    html.light .nav-link:hover { color: var(--color-accent-light); }
    html.dark .nav-link { color: var(--color-primary-dark); }
    html.dark .nav-link:hover { color: var(--color-accent-dark); }
    
    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-accent-light);
        transition: width 0.3s ease-in-out;
    }
    html.dark .nav-link::after { background-color: var(--color-accent-dark); }
    
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
    }
    html.light #preloader { background-color: var(--color-background-light); }
    html.dark #preloader { background-color: var(--color-background-dark); }
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
        border-color: var(--color-secondary-light) transparent transparent transparent;
    }
    html.dark .loader-ring div { border-color: var(--color-secondary-dark) transparent transparent transparent; }
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
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
    }
    html.dark .card-hover {
        background-color: #1f2937;
        box-shadow: 0 1px 2px 0 rgb(255 255 255 / 0.05);
    }
    .card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }
     html.dark .card-hover:hover {
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }


    .page-container {
        animation: page-fade-in 0.6s ease-in-out;
    }
    @keyframes page-fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    /* Lightbox for Gallery */
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
    
    /* FAQ Accordion */
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

    /* Modern Form Inputs */
    .modern-input {
        background-color: #f3f4f6;
        border: 2px solid transparent;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    html.dark .modern-input {
        background-color: #374151;
    }
    .modern-input:focus {
        outline: none;
        border-color: var(--color-accent-light);
        box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.2);
    }
    html.dark .modern-input:focus {
        border-color: var(--color-accent-dark);
        box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.2);
    }

    /* New Animations */
    @keyframes hero-bg-pan {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .hero-bg-animated {
        animation: hero-bg-pan 40s ease-in-out infinite;
        background-size: 150% 150%;
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

    /* Nav Dropdown */
    .dropdown {
        position: relative;
    }
    .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 1rem;
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        z-index: 50;
        min-width: 160px;
        opacity: 0;
        transform: translateY(-10px);
        visibility: hidden;
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
    }
    html.dark .dropdown-menu {
        background-color: #1f2937;
    }
    .dropdown:hover .dropdown-menu {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    }
    .dropdown-item {
        display: block;
        padding: 0.75rem 1rem;
        white-space: nowrap;
        text-decoration: none;
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

// --- PAGE COMPONENTS ---
const HomePage = ({ onNavigate }) => (
    <div className="page-container">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-animated" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tighter">Serving Humanity, Spreading Light</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-slate-300">Al-Noor Foundation is committed to creating lasting change through education, healthcare, and relief programs for communities in need.</p>
                <div className="space-x-4">
                    <a href="#involved" onClick={(e) => { e.preventDefault(); onNavigate('involved'); }} className="btn btn-primary">Join Us</a>
                    <a href="#donate" onClick={(e) => { e.preventDefault(); onNavigate('donate'); }} className="btn btn-secondary">Donate Now</a>
                </div>
            </div>
        </div>

        {/* Mission and Vision */}
        <section className="py-24 bg-white dark:bg-gray-900/20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeInSection>
                        <h2 className="section-title text-left">Our Mission & Vision</h2>
                        <p className="mb-4 text-gray-700 dark:text-gray-300">Our mission is to empower vulnerable communities by providing sustainable solutions in education, healthcare, and social welfare. We envision a world where every individual has the opportunity to thrive with dignity and hope.</p>
                        <p className="text-gray-700 dark:text-gray-300">We believe in a hands-on approach, working directly with local partners to ensure our efforts are effective and culturally sensitive.</p>
                    </FadeInSection>
                    <FadeInSection>
                        <img src="https://images.unsplash.com/photo-1620121684840-3ff6ff5738d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Community Empowerment" className="rounded-xl shadow-2xl w-full h-full object-cover" />
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
                            <AnimatedCounter target={15000} />
                            <p className="text-lg">Children Educated</p>
                        </div>
                    </FadeInSection>
                     <FadeInSection delay={100}>
                        <div className="p-4 impact-icon-container">
                            <i className="fas fa-notes-medical text-5xl text-yellow-400 mb-4"></i>
                            <AnimatedCounter target={25000} />
                            <p className="text-lg">Patients Treated</p>
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
        
        {/* Testimonials */}
        <TestimonialCarousel />
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
                        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Our Story</h2>
                        <p className="mb-4">Founded in 2010, Al-Noor Foundation began with a simple yet powerful idea: that even a small act of kindness can ignite a beacon of hope. From a local food drive, we have grown into a multi-faceted organization serving thousands across the nation, driven by compassion and a commitment to sustainable change.</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1528605248644-efffb40b84b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Journey" className="rounded-xl shadow-2xl" />
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 my-24 flex flex-col md:flex-row items-center gap-8">
                    <img src="https://images.unsplash.com/photo-1583341712160-56a08464a83b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Founder" className="w-40 h-40 rounded-full object-cover flex-shrink-0 shadow-lg border-4 border-yellow-400" />
                    <div>
                        <h3 className="text-2xl font-bold mb-2">A Message from Our Founder</h3>
                        <p className="italic text-lg mb-4 text-gray-600 dark:text-gray-300">"We started Al-Noor not just to provide aid, but to build bridges of hope and opportunity. Every donation, every hour volunteered, is a testament to the power of collective action. Thank you for being a part of this journey."</p>
                        <p className="font-semibold">— Dr. Ayesha Khan, Founder</p>
                    </div>
                </div>
            </FadeInSection>
            
            <FadeInSection>
                <div className="mt-24">
                    <h2 className="section-title">Our Team</h2>
                    <p className="section-subtitle">A group of passionate individuals dedicated to our mission.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 object-cover" />
                            <h4 className="font-bold text-lg">John Doe</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Director of Operations</p>
                        </div>
                         <div className="text-center group">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 object-cover" />
                            <h4 className="font-bold text-lg">Jane Smith</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Program Manager</p>
                        </div>
                         <div className="text-center group">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 object-cover" />
                            <h4 className="font-bold text-lg">David Chen</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Outreach Coordinator</p>
                        </div>
                         <div className="text-center group">
                            <img src="https://images.unsplash.com/photo-1614283233556-f35b7fd9b38a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member 4" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 object-cover" />
                            <h4 className="font-bold text-lg">Maria Garcia</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Volunteer</p>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </div>
    </div>
);

const ProgramsPage = () => (
    <div className="page-container py-24 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto px-6">
            <h1 className="section-title">Our Work</h1>
            <p className="section-subtitle">We focus on key areas to create sustainable impact and foster self-reliance.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FadeInSection>
                    <div className="bg-white shadow-lg overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1543196614-e046c7d3d82e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Education Support" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Education Support</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Providing scholarships, school supplies, and digital learning centers to underprivileged students.</p>
                            <button onClick={(e) => e.preventDefault()} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0 cursor-pointer">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection delay={100}>
                    <div className="bg-white shadow-lg overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Health Camps" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Health Camps</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Organizing free medical camps in remote areas, offering check-ups, medicines, and health awareness.</p>
                             <button onClick={(e) => e.preventDefault()} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0 cursor-pointer">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                        </div>
                    </div>
                </FadeInSection>
                 <FadeInSection delay={200}>
                    <div className="bg-white shadow-lg overflow-hidden card-hover">
                        <img src="https://images.unsplash.com/photo-1599059813005-23f7981359f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food & Shelter" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Food & Shelter Programs</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Distributing nutritious meals and providing safe shelter for homeless individuals and families.</p>
                             <button onClick={(e) => e.preventDefault()} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0 cursor-pointer">Learn More <i className="fas fa-arrow-right ml-1"></i></button>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    </div>
);

const InvolvedPage = () => (
    <div className="page-container py-24">
         <div className="container mx-auto px-6">
            <h1 className="section-title">Get Involved</h1>
            <p className="section-subtitle">You have the power to change lives. Join our community of volunteers, partners, and advocates.</p>
            <FadeInSection>
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Volunteer Registration</h2>
                    <form>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md modern-input" />
                            <input type="email" placeholder="Email Address" className="w-full p-3 rounded-md modern-input" />
                        </div>
                        <div className="mb-6">
                            <select className="w-full p-3 rounded-md modern-input">
                                <option>Area of Interest</option>
                                <option>Education</option>
                                <option>Healthcare</option>
                            </select>
                        </div>
                        <div className="mb-6">
                           <textarea placeholder="Why do you want to volunteer?" rows="4" className="w-full p-3 rounded-md modern-input"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit Application</button>
                        </div>
                    </form>
                </div>
            </FadeInSection>
        </div>
    </div>
);

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
            setAmountError('Please enter an amount of at least ₹100.');
            return;
        }

        // =================================================================================
        // --- Razorpay Configuration ---
        // IMPORTANT: Replace this with your actual Key ID from your Razorpay account.
        // See the razorpay_setup_guide.md file for instructions.
        const razorpayKeyId = 'YOUR_RAZORPAY_KEY_ID';
        // =================================================================================
        
        if (razorpayKeyId === 'YOUR_RAZORPAY_KEY_ID') {
            alert('Razorpay Key ID is not set. Please follow the setup guide.');
            return;
        }

        const options = {
            key: razorpayKeyId,
            amount: amount * 100, // Amount in paise
            currency: "INR",
            name: "Al-Noor Foundation",
            description: "Donation for a social cause",
            image: "https://placehold.co/100x100/047857/FFFFFF?text=AN",
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
                color: "#047857",
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
        <div className="page-container py-24 bg-gray-50 dark:bg-gray-900/20">
            <div className="container mx-auto px-6">
                <h1 className="section-title">Make a Difference</h1>
                <p className="section-subtitle">Your donation empowers us to continue our work and bring hope to those who need it most.</p>
                <FadeInSection>
                    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl transition-all duration-500">
                        {viewState === 'amount_selection' && renderAmountSelection()}
                        {viewState === 'success' && renderSuccessState()}
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};


const EventsPage = () => (
    <div className="page-container py-24">
         <div className="container mx-auto px-6">
            <h1 className="section-title">Events & News</h1>
            <p className="section-subtitle">Stay updated with our latest activities, stories of impact, and upcoming events.</p>
            <FadeInSection>
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden md:flex mb-8 card-hover">
                    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Annual Charity Gala" className="md:w-1/3 object-cover" />
                    <div className="p-6 md:p-8">
                        <p className="text-sm text-yellow-500 font-semibold mb-1">UPCOMING: DEC 15, 2025</p>
                        <h3 className="text-2xl font-bold mb-2">Annual Charity Gala 2025</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Join us for an evening of inspiration and fundraising to support our programs for the upcoming year.</p>
                        <button onClick={(e) => e.preventDefault()} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0 cursor-pointer">Register Now <i className="fas fa-arrow-right ml-1"></i></button>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection delay={100}>
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden md:flex mb-8 card-hover">
                    <img src="https://images.unsplash.com/photo-1628744448842-149b2b513835?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Health Camp Success" className="md:w-1/3 object-cover" />
                    <div className="p-6 md:p-8">
                        <p className="text-sm text-gray-500 font-semibold mb-1">NEWS: NOV 02, 2025</p>
                        <h3 className="text-2xl font-bold mb-2">Successful Health Camp in Rural Areas</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Our recent health camp provided medical assistance to over 500 individuals, a major milestone for our healthcare initiative.</p>
                         <button onClick={(e) => e.preventDefault()} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0 cursor-pointer">Read More <i className="fas fa-arrow-right ml-1"></i></button>
                    </div>
                </div>
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
        const phoneNumber = "919391303713"; // Country code + phone number
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
                    <p className="text-gray-700 dark:text-gray-300">Thank you for reaching out. We have opened WhatsApp for you to send the message directly.</p>
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
                    <p className="text-gray-700 dark:text-gray-300">Your message was sent to WhatsApp, but the email could not be delivered. Please check your EmailJS keys.</p>
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
        <div className="page-container py-24 bg-gray-50 dark:bg-gray-900/20">
            <div className="container mx-auto px-6">
                <h1 className="section-title">Contact Us</h1>
                <p className="section-subtitle">We'd love to hear from you. Whether you have a question, suggestion, or just want to say hello, feel free to reach out.</p>
                <div className="grid md:grid-cols-2 gap-16">
                     <FadeInSection>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl min-h-[480px] flex flex-col justify-center">
                            {renderFormContent()}
                        </div>
                     </FadeInSection>
                    <FadeInSection delay={100}>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                            <p className="mb-4 flex items-start"><i className="fas fa-map-marker-alt mr-3 mt-1 text-cyan-500 dark:text-cyan-400"></i><span>D.No: 1-45, Madinapadu Village,<br/>Dachepalli Mandal, Palnadu District,<br/>Andhra Pradesh, India</span></p>
                            <p className="mb-4 flex items-center"><i className="fas fa-phone mr-3 text-cyan-500 dark:text-cyan-400"></i> (123) 456-7890</p>
                            <p className="mb-4 flex items-center"><i className="fas fa-envelope mr-3 text-cyan-500 dark:text-cyan-400"></i> contact@alnoor.org</p>
                            <div className="mt-8">
                                <h4 className="font-bold mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><i className="fab fa-facebook"></i></a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><i className="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"><i className="fab fa-instagram"></i></a>
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.1234567890123!2d79.1234567!3d16.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDA3JzI0LjQiTiA3OcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1633382400000!5m2!1sen!2sin"
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
        { id: 1, category: 'education', src: 'https://images.unsplash.com/photo-1574362846839-4d7dea38b725?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Children learning' },
        { id: 2, category: 'health', src: 'https://images.unsplash.com/photo-1588776814546-da62483769ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Medical checkup' },
        { id: 3, category: 'relief', src: 'https://images.unsplash.com/photo-1599059813005-23f7981359f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Food distribution' },
        { id: 4, category: 'education', src: 'https://images.unsplash.com/photo-1541339907198-e08756ded66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Student receiving award' },
        { id: 5, category: 'community', src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Community gathering' },
        { id: 6, category: 'health', src: 'https://images.unsplash.com/photo-1628744448842-149b2b513835?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Mobile health van' },
    ];
    
    const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);
    
    return (
        <div className="page-container py-24">
            <div className="container mx-auto px-6">
                <h1 className="section-title">Gallery & Media</h1>
                <p className="section-subtitle">A glimpse into the moments that define our mission and the lives we've touched.</p>
                
                <FadeInSection>
                    <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
                        <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full font-semibold transition ${filter === 'all' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 dark:bg-gray-700'}`}>All</button>
                        <button onClick={() => setFilter('education')} className={`px-4 py-2 rounded-full font-semibold transition ${filter === 'education' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 dark:bg-gray-700'}`}>Education</button>
                        <button onClick={() => setFilter('health')} className={`px-4 py-2 rounded-full font-semibold transition ${filter === 'health' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 dark:bg-gray-700'}`}>Health</button>
                        <button onClick={() => setFilter('relief')} className={`px-4 py-2 rounded-full font-semibold transition ${filter === 'relief' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-200 dark:bg-gray-700'}`}>Relief</button>
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
    <div className="page-container py-24 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto px-6">
            <h1 className="section-title">Our Impact & Reports</h1>
            <p className="section-subtitle">We believe in full transparency. Explore our annual reports and financial statements to see how your contributions are making a difference.</p>

            <FadeInSection>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Report Card */}
                    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-6 card-hover">
                        <i className="fas fa-file-pdf text-5xl text-red-500"></i>
                        <div>
                            <h3 className="text-xl font-bold">Annual Report 2024</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Published: Jan 2025</p>
                            <button onClick={(e) => e.preventDefault()} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0 cursor-pointer">Download PDF <i className="fas fa-download ml-1"></i></button>
                        </div>
                    </div>
                     {/* Report Card */}
                    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-6 card-hover">
                        <i className="fas fa-file-invoice-dollar text-5xl text-green-500"></i>
                        <div>
                            <h3 className="text-xl font-bold">Financial Statement 2024</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Published: Jan 2025</p>
                            <button onClick={(e) => e.preventDefault()} className="font-semibold text-cyan-500 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 bg-transparent border-none p-0 cursor-pointer">Download PDF <i className="fas fa-download ml-1"></i></button>
                        </div>
                    </div>
                </div>
            </FadeInSection>

             <FadeInSection>
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 mt-16 rounded-xl shadow-2xl">
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
                            <div key={index} className="faq-item bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <details className="p-4 group">
                                    <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center group-hover:text-cyan-500 dark:group-hover:text-cyan-400">
                                        {faq.q}
                                        <i className="fas fa-plus icon-plus"></i>
                                    </summary>
                                    <p className="mt-4 text-gray-700 dark:text-gray-300">
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
            <span className="lightbox-close" onClick={onClose}>×</span>
        </div>
    );
};

const Header = ({ currentPage, onNavigate, onThemeToggle, theme }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['home', 'about', 'programs', 'gallery', 'involved', 'contact'];
    
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
            case 'involved': return 'Join as Volunteer';
            case 'contact': return 'Contact Us';
            default: return item;
        }
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isSticky ? 'shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg' : ''}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('home'); }} className="text-2xl font-bold mr-10 bg-transparent border-none p-0" style={{textDecoration: 'none'}}>
                        Al-Noor <span className="text-yellow-400">Foundation</span>
                    </a>
                    <div className="hidden lg:flex items-center">
                        {navItems.map(item => (
                            <a href={`#${item}`} key={item} onClick={(e) => { e.preventDefault(); handleNav(item); }} className={`nav-link capitalize ${currentPage === item ? 'active' : ''}`}>{getNavItemName(item)}</a>
                        ))}
                         <div className="dropdown">
                            <button className="nav-link flex items-center">
                                More <i className="fas fa-chevron-down ml-2 text-xs"></i>
                            </button>
                            <div className="dropdown-menu">
                                <a href="#impact" onClick={(e) => {e.preventDefault(); handleNav('impact')}} className="dropdown-item nav-link">Impact</a>
                                <a href="#events" onClick={(e) => {e.preventDefault(); handleNav('events')}} className="dropdown-item nav-link">Events</a>
                                <a href="#faq" onClick={(e) => {e.preventDefault(); handleNav('faq')}} className="dropdown-item nav-link">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={onThemeToggle} className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                        {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                    </button>
                    <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white dark:bg-gray-800 py-4 shadow-lg`}>
                 {navItems.map(item => (
                    <a href={`#${item}`} key={item} onClick={(e) => { e.preventDefault(); handleNav(item); }} className="block w-full text-center py-2 capitalize text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 bg-transparent border-none" style={{textDecoration: 'none'}}>{getNavItemName(item)}</a>
                ))}
                <a href="#impact" onClick={(e) => { e.preventDefault(); handleNav('impact'); }} className="block w-full text-center py-2 capitalize text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 bg-transparent border-none" style={{textDecoration: 'none'}}>Impact</a>
                <a href="#events" onClick={(e) => { e.preventDefault(); handleNav('events'); }} className="block w-full text-center py-2 capitalize text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 bg-transparent border-none" style={{textDecoration: 'none'}}>Events</a>
                <a href="#faq" onClick={(e) => { e.preventDefault(); handleNav('faq'); }} className="block w-full text-center py-2 capitalize text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 bg-transparent border-none" style={{textDecoration: 'none'}}>FAQ</a>
            </div>
        </header>
    );
};

const TestimonialCarousel = () => {
    const testimonials = [
        { quote: "Al-Noor's scholarship changed my life. I am now the first in my family to attend university...", name: "Amina Yusuf", role: "Scholarship Recipient" },
        { quote: "Volunteering at the health camp was a profound experience. Seeing the immediate impact...", name: "Dr. Ben Carter", role: "Volunteer Doctor" },
        { quote: "We partner with Al-Noor because of their transparency and dedication. Every dollar is accounted for...", name: "Sarah Chen", role: "Corporate Donor" }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const slide = useCallback((direction) => {
        const total = testimonials.length;
        setCurrentIndex((prevIndex) => (prevIndex + direction + total) % total);
    }, [testimonials.length]);

    useEffect(() => {
        const autoSlide = setInterval(() => slide(1), 7000);
        return () => clearInterval(autoSlide);
    }, [slide]);

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900/20">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Voices of Change</h2>
                <p className="section-subtitle">Hear from those whose lives have been touched by your generosity.</p>
                <FadeInSection>
                    <div className="relative overflow-hidden max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((t, index) => (
                                <div key={index} className="flex-shrink-0 w-full px-8 text-center">
                                    <p className="text-xl italic mb-4">"{t.quote}"</p>
                                    <p className="font-bold text-lg">{t.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => slide(-1)} className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black text-2xl transition-all"><i className="fas fa-chevron-left"></i></button>
                        <button onClick={() => slide(1)} className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black text-2xl transition-all"><i className="fas fa-chevron-right"></i></button>
                    </div>
                </FadeInSection>
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
                            <li><a href="#about" onClick={(e) => {e.preventDefault(); onNavigate('about')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left" style={{textDecoration: 'none'}}>About Us</a></li>
                            <li><a href="#programs" onClick={(e) => {e.preventDefault(); onNavigate('programs')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left" style={{textDecoration: 'none'}}>Our Work</a></li>
                            <li><a href="#gallery" onClick={(e) => {e.preventDefault(); onNavigate('gallery')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left" style={{textDecoration: 'none'}}>Gallery</a></li>
                            <li><a href="#faq" onClick={(e) => {e.preventDefault(); onNavigate('faq')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left" style={{textDecoration: 'none'}}>FAQ</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-lg font-bold text-white mb-4">Get Involved</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#involved" onClick={(e) => {e.preventDefault(); onNavigate('involved')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left" style={{textDecoration: 'none'}}>Volunteer</a></li>
                            <li><a href="#events" onClick={(e) => {e.preventDefault(); onNavigate('events')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left" style={{textDecoration: 'none'}}>Events</a></li>
                            <li><a href="#contact" onClick={(e) => {e.preventDefault(); onNavigate('contact')}} className="hover:text-yellow-400 bg-transparent border-none p-0 text-left" style={{textDecoration: 'none'}}>Contact</a></li>
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
                    <p>© 2025 Al-Noor Foundation. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};


// --- MAIN APP COMPONENT ---
export default function App() {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('light');
    const [currentPage, setCurrentPage] = useState('home');
    const [lightboxImage, setLightboxImage] = useState(null);

    // Dynamically load the EmailJS script when the app starts.
    useScript('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js');

    useEffect(() => {
        // Preloader
        const timer = setTimeout(() => setLoading(false), 1000);
        
        // Theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.className = savedTheme;

        return () => clearTimeout(timer);
    }, []);

    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.className = newTheme;
    };

    const handleNavigate = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'about': return <AboutPage />;
            case 'programs': return <ProgramsPage />;
            case 'involved': return <InvolvedPage />;
            case 'donate': return <DonatePage />;
            case 'events': return <EventsPage />;
            case 'contact': return <ContactPage />;
            case 'gallery': return <GalleryPage onImageClick={setLightboxImage} />;
            case 'impact': return <ImpactPage />;
            case 'faq': return <FAQPage />;
            default: return <HomePage onNavigate={handleNavigate} />;
        }
    };
    
    return (
        <>
            <GlobalStyles />
            <Preloader loading={loading} />
            <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
            <div className="bg-gray-50 dark:bg-[#111827]">
                <Header 
                    currentPage={currentPage}
                    onNavigate={handleNavigate}
                    onThemeToggle={handleThemeToggle}
                    theme={theme}
                />
                <main className="pt-20">
                    {renderPage()}
                </main>
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} className="fixed bottom-5 left-5 btn btn-secondary shadow-lg z-30 w-14 h-14 !p-0">
                    <i className="fas fa-home text-xl"></i>
                </a>
                <a href="#donate" onClick={(e) => { e.preventDefault(); handleNavigate('donate'); }} className="fixed bottom-5 right-5 btn btn-primary shadow-lg flex items-center space-x-2 z-30">
                    <i className="fas fa-heart"></i>
                    <span>Donate</span>
                </a>
                <Footer onNavigate={handleNavigate} />
            </div>
        </>
    );
}
