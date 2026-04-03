import React, { useState, useEffect, useRef } from 'react';

// --- HELPER HOOK for Intersection Observer ---
export const useIntersectionObserver = (options) => {
    const [entry, setEntry] = useState(null);
    const [node, setNode] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        observer.current = new window.IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setEntry(entry);
        }, options);
        const { current: currentObserver } = observer;
        if (node) currentObserver.observe(node);
        return () => currentObserver.disconnect();
    }, [node, options]);

    return [setNode, entry];
};

// --- REUSABLE COMPONENTS ---
export const FadeInSection = ({ children, delay = 0 }) => {
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

export const AnimatedCounter = ({ target }) => {
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

export const Preloader = ({ loading }) => (
    <div id="preloader" style={{ opacity: loading ? 1 : 0, visibility: loading ? 'visible' : 'hidden' }}>
        <div className="loader-ring"><div></div><div></div><div></div><div></div></div>
    </div>
);

export const Lightbox = ({ src, onClose }) => {
    if (!src) return null;
    return (
        <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out" onClick={onClose}>
            <img src={src} alt="Enlarged view" className="max-w-full max-h-full rounded-lg shadow-2xl transition-transform duration-500 scale-100" onClick={e => e.stopPropagation()} />
            <span className="absolute top-8 right-8 text-white text-5xl cursor-pointer hover:text-cyan-400 transition-colors" onClick={onClose}>&times;</span>
        </div>
    );
};

export const Section = ({ title, subtitle, children, className = "" }) => (
    <section className={`py-32 relative overflow-hidden ${className}`}>
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <FadeInSection>
                    <h2 className="section-title">{title}</h2>
                    {subtitle && <p className="section-subtitle">{subtitle}</p>}
                </FadeInSection>
            </div>
            {children}
        </div>
    </section>
);
