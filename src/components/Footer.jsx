import React from 'react';

const Footer = ({ onNavigate }) => {
    return (
        <footer className="relative bg-primary pt-32 pb-12 overflow-hidden border-t-8 border-accent">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/Community.png')] bg-cover bg-center mix-blend-multiply opacity-20"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-xl">
                                <img src="/FLOGO.jpg" alt="Al-Noor" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter uppercase">Al-Noor</span>
                        </div>
                        <p className="text-gray-500 font-medium leading-relaxed text-sm mb-10 pr-6">
                            Dedicated to transforming rural lives through sustainable initiatives in education, clean water, and community relief.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: 'instagram', color: '#E4405F', url: 'https://www.instagram.com/foundationalnoor?igsh=MWhibDg4Y3g4ZXltbQ==' },
                                { icon: 'whatsapp', color: '#25D366', url: 'https://wa.me/917997666551' },
                                { icon: 'youtube', color: '#FF0000', url: 'https://youtube.com/@alnoorfoundation-q5v?si=J6kSJsnI37uef_WY' }
                            ].map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-[1rem] bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent hover:bg-accent hover:text-black hover:-translate-y-2 transition-all duration-500 shadow-2xl group">
                                    <i className={`fab fa-${social.icon} text-lg`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-10">Quick Access</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Programs', 'Events', 'Donate'].map(link => (
                                <li key={link}>
                                    <button onClick={() => onNavigate(link.toLowerCase())} className="text-gray-400 hover:text-accent font-bold text-sm tracking-wide transition-colors">
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-10">Compliance</h4>
                        <ul className="space-y-4">
                            {['Terms', 'Privacy', 'Refund', 'Legal'].map(link => (
                                <li key={link}>
                                    <button onClick={() => onNavigate(link.toLowerCase())} className="text-gray-400 hover:text-accent font-bold text-sm tracking-wide transition-colors">
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-10">Head Office</h4>
                        <p className="text-gray-400 font-medium text-sm leading-relaxed mb-6 italic">
                            Madinapadu Village, <br/>
                            Dachepalli Mandal, <br/>
                            Palnadu District, <br/>
                            Pin: 522414.
                        </p>
                        <p className="text-white font-black text-sm tracking-tight">Reg No: 122/2025</p>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
                        &copy; 2025 Al-Noor Foundation. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8">
                         <span className="text-gray-500 text-[10px] uppercase font-black">NGO Darpan: AP/2025/XXXXX</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
