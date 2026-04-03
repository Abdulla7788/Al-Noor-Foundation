import React, { useState } from 'react';
import { FadeInSection } from '../components/Shared';

const DonatePage = () => {
    const [amount, setAmount] = useState(500);
    const [customAmount, setCustomAmount] = useState('');
    const [donorDetails, setDonorDetails] = useState({ name: '', email: '', phone: '' });
    const [isProcessing, setIsProcessing] = useState(false);
    const [receipt, setReceipt] = useState(null);
    const [error, setError] = useState('');

    const UPI_ID = '7997666551@hdfc';
    const MERCHANT_NAME = 'Al-Noor Foundation';

    const handleAmountClick = (value) => {
        setAmount(value);
        setCustomAmount('');
        setError('');
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        setCustomAmount(value);
        if (value && parseFloat(value) > 0) {
            setAmount(parseFloat(value));
        }
        setError('');
    };

    const handleInputChange = (e) => {
        setDonorDetails({ ...donorDetails, [e.target.name]: e.target.value });
    };

    const handleDonateSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsProcessing(true);

        // Client-side validation
        if (!donorDetails.name || !donorDetails.email || !donorDetails.phone) {
            setError('Please fill in all donor information.');
            setIsProcessing(false);
            return;
        }

        try {
            // CALLING PHP BACKEND
            const response = await fetch('http://localhost/Al-Noor-Foundation-main/backend/process_donation.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...donorDetails,
                    amount: amount,
                    transaction_id: 'TXN_' + Date.now() // Mock ID for simulation
                })
            });

            const result = await response.json();
            
            if (response.ok) {
                setReceipt(result.receipt);
                // Also trigger native upi in background if on mobile
                const upiLink = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${amount}&cu=INR`;
                window.location.href = upiLink;
            } else {
                setError(result.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to connect to backend server. Ensure XAMPP is running.');
        } finally {
            setIsProcessing(false);
        }
    };

    const upiLinkBase = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${amount}&cu=INR`;
    const qrCodeUrl = '/upi_qr.jpeg';

    if (receipt) {
        return (
            <div className="page-container py-32 bg-transparent min-h-screen flex items-center justify-center">
                <FadeInSection>
                    <div className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl border-t-8 border-accent relative">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-3xl shadow-xl">
                            <i className="fas fa-check"></i>
                        </div>
                        <div className="text-center mt-6">
                            <h2 className="text-3xl font-black text-primary mb-2">Thank You!</h2>
                            <p className="text-gray-500 font-bold text-sm tracking-widest uppercase mb-10">Donation Confirmed</p>
                            
                            <div className="space-y-4 border-y border-gray-100 py-8 mb-10 text-left">
                                <div className="flex justify-between">
                                    <span className="text-gray-400 font-bold uppercase text-[10px]">Donor</span>
                                    <span className="text-gray-900 font-black">{receipt.donor}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400 font-bold uppercase text-[10px]">Amount</span>
                                    <span className="text-accent font-black">{receipt.amount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400 font-bold uppercase text-[10px]">Receipt ID</span>
                                    <span className="text-gray-900 font-mono text-xs">{receipt.id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400 font-bold uppercase text-[10px]">Status</span>
                                    <span className="text-green-600 font-black flex items-center gap-1">
                                        <i className="fas fa-certificate text-[10px]"></i> VERIFIED
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs text-gray-400 leading-relaxed mb-10">A confirmation message and digital receipt have been sent to your registered phone number / WhatsApp.</p>
                            
                            <div className="flex flex-col gap-4">
                                <button onClick={() => window.print()} className="btn btn-primary w-full shadow-lg">Download PDF Receipt</button>
                                <button onClick={() => setReceipt(null)} className="btn btn-secondary w-full border-none">Make another donation</button>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        );
    }

    return (
        <div className="page-container py-32 bg-transparent min-h-screen">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-24">
                    <span className="inline-block py-2 px-8 rounded-full bg-accent text-white text-[10px] font-black mb-8 tracking-[0.4em] uppercase shadow-lg">Saving Lives Together</span>
                    <h1 className="text-6xl md:text-7xl font-black text-primary leading-tight tracking-tighter mb-8">Empower Through <span className="text-accent italic">Giving</span></h1>
                    <p className="max-w-xl mx-auto text-gray-500 font-medium leading-relaxed">Your contribution provides critical resources to vulnerable communities including education, clean water, and relief.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Donation Form */}
                    <div className="space-y-12">
                        <div className="glass-card p-12 relative overflow-hidden bg-white border border-gray-100 shadow-2xl rounded-[3rem]">
                            <h3 className="text-2xl font-black mb-10 text-primary flex items-center gap-4 border-b border-gray-50 pb-6">
                                <i className="fas fa-user-circle text-accent"></i> Donor Information
                            </h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 ml-2">Display Name</label>
                                        <input type="text" name="name" placeholder="E.g. Shaik Shavali" required className="w-full bg-gray-50 border border-transparent rounded-2xl py-4 px-8 text-gray-900 focus:border-accent focus:bg-white outline-none transition-all font-bold placeholder-gray-300" onChange={handleInputChange} />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 ml-2">Phone / WhatsApp</label>
                                        <input type="tel" name="phone" placeholder="91XXXXXXXXXX" required className="w-full bg-gray-50 border border-transparent rounded-2xl py-4 px-8 text-gray-900 focus:border-accent focus:bg-white outline-none transition-all font-bold placeholder-gray-300" onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 ml-2">Email Address</label>
                                    <input type="email" name="email" placeholder="example@mail.com" required className="w-full bg-gray-50 border border-transparent rounded-2xl py-4 px-8 text-gray-900 focus:border-accent focus:bg-white outline-none transition-all font-bold placeholder-gray-300" onChange={handleInputChange} />
                                </div>

                                <div className="pt-10">
                                    <h4 className="text-xl font-black mb-10 text-primary flex items-center gap-4 border-b border-gray-50 pb-6">
                                        <i className="fas fa-coins text-accent"></i> Select Donation
                                    </h4>
                                    <div className="grid grid-cols-3 gap-6 mb-10">
                                        {[500, 1000, 5000].map((val) => (
                                            <button
                                                key={val}
                                                type="button"
                                                onClick={() => handleAmountClick(val)}
                                                className={`py-8 rounded-[2rem] font-black transition-all duration-500 border-2 text-2xl ${amount === val ? 'bg-primary border-primary text-accent shadow-2xl scale-110' : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-accent/40 hover:text-primary'}`}
                                            >
                                                ₹{val}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="relative group">
                                        <span className="absolute left-8 top-1/2 -translate-y-1/2 text-accent font-black text-3xl">₹</span>
                                        <input
                                            type="number"
                                            placeholder="Enter other amount"
                                            value={customAmount}
                                            onChange={handleCustomAmountChange}
                                            className="w-full bg-gray-950/5 border-2 border-gray-100 rounded-[2.5rem] py-8 pl-16 pr-8 text-gray-900 placeholder-gray-300 focus:border-accent focus:bg-white outline-none transition-all font-black text-3xl"
                                        />
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-xs font-black uppercase tracking-widest mt-4 text-center">{error}</p>}
                                
                                <button 
                                    onClick={handleDonateSubmit} 
                                    disabled={isProcessing}
                                    className={`btn btn-primary w-full py-6 text-xl rounded-[2.5rem] mt-10 tracking-[0.2em] shadow-2xl ${isProcessing ? 'opacity-50 cursor-wait' : ''}`}
                                >
                                    {isProcessing ? 'Verifying...' : 'Pay & Get Receipt'} <i className="fas fa-shield-alt ml-4"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Security & Scanner */}
                    <div className="lg:sticky lg:top-32 space-y-12">
                        <div className="glass-card p-12 rounded-[3.5rem] border-white/5 flex flex-col items-center justify-center relative overflow-hidden bg-primary shadow-[0_30px_100px_rgba(15,61,46,0.2)]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full translate-x-32 -translate-y-32 blur-3xl"></div>
                            <h3 className="text-2xl font-black mb-12 text-center text-white tracking-widest uppercase">Quick <span className="text-accent italic">Scanner</span></h3>
                            
                            <div className="relative group p-4">
                                <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="p-8 bg-white rounded-[3.5rem] shadow-2xl relative z-10 border-8 border-emerald-950/20">
                                    <img src={qrCodeUrl} alt="Donate QR" className="w-64 h-64 relative z-10 rounded-2xl mx-auto object-contain" />
                                </div>
                            </div>

                            <div className="mt-16 text-center w-full">
                                <p className="text-emerald-100/30 text-[10px] mb-4 uppercase tracking-[0.3em] font-black">Official Merchant ID</p>
                                <div className="flex items-center justify-between bg-emerald-950/30 px-8 py-5 rounded-[2rem] border border-white/5 backdrop-blur-sm">
                                    <code className="text-accent font-mono text-xl font-bold tracking-wider">{UPI_ID}</code>
                                    <button className="text-white hover:text-accent transition-colors" onClick={() => navigator.clipboard.writeText(UPI_ID)}>
                                        <i className="far fa-copy text-2xl"></i>
                                    </button>
                                </div>
                                <div className="mt-10 flex flex-wrap justify-center gap-6 opacity-30 brightness-200">
                                    <i className="fab fa-cc-visa text-3xl"></i>
                                    <i className="fab fa-apple-pay text-3xl"></i>
                                    <i className="fab fa-google-pay text-3xl"></i>
                                    <i className="fab fa-amazon-pay text-3xl"></i>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 rounded-[3rem] bg-accent/5 border-2 border-dashed border-accent/20">
                            <h4 className="text-primary font-black text-xl mb-4 font-inter leading-tight">Your donation is TAX EXEMPT under section 80G.</h4>
                            <p className="text-gray-500 text-sm font-medium">As a registered Section 8 non-profit, we ensure absolute transparency. Every ₹100 you donate is allocated directly to on-ground impact programs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatePage;
