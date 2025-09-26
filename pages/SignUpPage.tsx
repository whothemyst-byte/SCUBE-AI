import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { type FormData } from '../types';
import { CheckCircleIcon, XMarkIcon } from '../components/icons';

const SignUpPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        companyInfo: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.companyInfo) {
            setError('Please fill in all required fields.');
            setStatus('error');
            return;
        }
        setError('');
        setStatus('submitting');
        
        // Mock Supabase call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            // In a real app, you would integrate the Supabase client here:
            // const { data, error } = await supabase.from('early_access_signups').insert([formData]);
            // if (error) throw new Error(error.message);
            console.log('Submitted data:', formData);
            setStatus('success');
        } catch (err) {
            setStatus('error');
            setError('Something went wrong. Please try again later.');
        }
    };

    const inputClasses = "w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-purple focus:border-transparent transition-all";

    return (
        <div className="flex-grow flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-2xl mx-auto">
                <div className="relative bg-black/30 border border-violet-purple/30 rounded-2xl shadow-glow-violet backdrop-blur-md p-8 md:p-12">
                    
                    {status === 'success' ? (
                        <div className="text-center">
                            <CheckCircleIcon className="w-20 h-20 text-violet-purple mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-4">You're on the list!</h2>
                            <p className="text-gray-300 mb-8">
                                Thank you for registering for early access, {formData.name}. We'll contact you at {formData.email} when the agent is ready for you.
                            </p>
                            <Link to="/" className="inline-block bg-mint-green text-dark-charcoal font-bold px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:-translate-y-1">
                                Back to Home
                            </Link>
                        </div>
                    ) : (
                        <>
                            <button onClick={() => navigate('/')} className="absolute top-4 right-4 text-gray-500 hover:text-white">
                                <XMarkIcon className="w-6 h-6" />
                            </button>
                            <h2 className="text-3xl font-bold text-white text-center mb-2">Get Early Access</h2>
                            <p className="text-center text-gray-400 mb-8">Register now for the next drop of our AI Agent.</p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Your Name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="you@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number (Optional)</label>
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label htmlFor="companyInfo" className="block text-sm font-medium text-gray-300 mb-2">About your company / need</label>
                                    <textarea name="companyInfo" id="companyInfo" value={formData.companyInfo} onChange={handleChange} rows={4} className={inputClasses} placeholder="Tell us what you'd like to automate..." required></textarea>
                                </div>
                                {status === 'error' && <p className="text-red-400 text-sm">{error}</p>}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-mint-green text-dark-charcoal font-bold py-3 px-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:-translate-y-1 disabled:transform-none disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </>
                                        ) : 'Register for Early Access'}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;