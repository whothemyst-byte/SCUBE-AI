import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';
import { ChevronRightIcon, BoltIcon, CurrencyDollarIcon, LayersIcon, CheckCircleIcon } from '../components/icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:border-violet-purple transition-all duration-300 transform hover:-translate-y-2">
        <div className="text-violet-purple w-12 h-12 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-dark-charcoal mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const HomePage: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

    const plans = [
        {
            name: 'Starter',
            monthlyPrice: 1499,
            annualPrice: 14999,
            description: 'For freelancers & solo artists just starting out.',
            features: [
                'Service Booking Website (1 service category)',
                'WhatsApp Auto-Reply Agent',
                'Lead Log in Google Sheet',
                '200 Messages / month',
                'Email Support'
            ],
            cta: 'Get it now',
            ctaLink: '/signup',
        },
        {
            name: 'Growth',
            monthlyPrice: 3499,
            annualPrice: 34999,
            description: 'For small businesses & growing artists handling multiple bookings.',
            features: [
                'Everything in Starter',
                'Up to 5 Service Categories',
                'Branded WhatsApp Number',
                'Smart FAQ Agent (AI-powered)',
                '1,000 Messages / month',
                'Google Calendar/Calendly Integration',
                'Weekly Lead Report',
                'Priority Email & WhatsApp Support'
            ],
            cta: 'Get it now',
            ctaLink: '/signup',
            isPopular: true,
        },
        {
            name: 'Premium',
            monthlyPrice: 7499,
            annualPrice: 74999,
            description: 'For large companies, studios, and agencies handling multiple clients.',
            features: [
                'Everything in Growth',
                'Unlimited Service Categories',
                'Multi-Agent Support',
                '5,000 Messages / month',
                'Instagram DM Automation',
                'Custom Branding (Logo, Colors, Domain)',
                'Advanced Analytics Dashboard',
                'Dedicated Account Manager'
            ],
            cta: 'Get it now',
            ctaLink: '/signup',
        }
    ];

    return (
        <div className="flex-grow">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-electric-blue to-violet-purple rounded-b-3xl">
                <section className="container mx-auto px-4 py-16 md:py-24 text-center">
                    <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-6 pt-12">
                        Automate Your Business<br />Processes With SCUBE
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                        Our tailored AI solutions cut down manual tasks, freeing time for strategic growth and scalability.
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <Link
                            to="/signup"
                            className="bg-sunset-pink text-white font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                        >
                            Sign Up
                        </Link>
                    </div>
                    
                    <div className="mt-24">
                        <h2 className="text-2xl font-semibold text-white mb-4">New AI Agent Drops In:</h2>
                        <Countdown />
                    </div>
                </section>
            </div>
            
            {/* Features Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose SCUBE?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<BoltIcon />}
                        title="Fast Setup"
                        description="Integrate our AI agents into your existing workflows in minutes, not months. Get started instantly."
                    />
                    <FeatureCard
                        icon={<CurrencyDollarIcon />}
                        title="Low Cost"
                        description="Affordable, transparent pricing models designed to provide maximum ROI without breaking the bank."
                    />
                    <FeatureCard
                        icon={<LayersIcon />}
                        title="Infinite Scalability"
                        description="Our cloud-native infrastructure ensures that your AI capabilities grow seamlessly with your business needs."
                    />
                </div>
            </section>
            
            {/* About Us Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About SCUBE AI</h2>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                        Founded by a team of passionate AI researchers and engineers, SCUBE is on a mission to democratize artificial intelligence for businesses of all sizes. We believe in building autonomous systems that not only enhance productivity but also unlock new avenues for innovation. Our commitment is to create AI that is reliable, ethical, and transformative.
                    </p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                        Choose your Plan
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 mb-8">
                        Discover the perfect plan tailored just for you.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center bg-dark-charcoal/70 p-1 rounded-full mb-4">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${billingCycle === 'monthly' ? 'bg-mint-green text-dark-charcoal' : 'text-gray-300 hover:text-white'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('annually')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 relative ${billingCycle === 'annually' ? 'bg-mint-green text-dark-charcoal' : 'text-gray-300 hover:text-white'}`}
                        >
                            Annually
                            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                                20% discount
                            </span>
                        </button>
                    </div>

                    <p className="text-mint-green font-semibold">Sign up now for 1 month free trial.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`
                                bg-white rounded-3xl p-8 transition-all duration-300 border flex flex-col
                                ${plan.isPopular ? 'border-violet-purple ring-4 ring-violet-purple/20' : 'border-gray-200 hover:border-violet-purple'}
                            `}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-violet-purple text-white px-4 py-1 text-sm font-bold rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-dark-charcoal mb-2">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-4">Billed {billingCycle}</p>
                            
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl md:text-5xl font-extrabold text-dark-charcoal">
                                    ₹{billingCycle === 'monthly' ? plan.monthlyPrice : (plan.annualPrice / 12).toFixed(0)}
                                </span>
                                <span className="text-gray-500 ml-2">/ month</span>
                            </div>

                            <p className="text-gray-600 mb-6 text-sm h-10">{plan.description}</p>
                            <hr className="border-gray-200 my-6" />
                            <ul className="space-y-4 text-gray-700 mb-8 flex-grow">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <CheckCircleIcon className="w-6 h-6 text-mint-green mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to={plan.ctaLink}
                                className={`
                                    w-full block text-center font-bold py-3 px-4 rounded-xl transition-all duration-300 mt-auto text-lg transform hover:-translate-y-1
                                    ${plan.isPopular ? 'bg-gradient-to-r from-electric-blue to-mint-green text-dark-charcoal hover:opacity-90' : 'bg-sunset-pink text-white hover:bg-opacity-90'}
                                `}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Contact Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto bg-white border border-gray-200 p-8 md:p-12 rounded-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">Ready to Transform Your Business?</h2>
                    <p className="text-base md:text-lg text-gray-600 mb-8">
                        Let's talk about how SCUBE's AI agents can be tailored to your specific needs.
                    </p>
                    <Link
                        to="/signup"
                        className="inline-block whitespace-nowrap bg-gradient-to-r from-electric-blue to-mint-green text-dark-charcoal font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                    >
                        Schedule a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;