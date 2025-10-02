import React from 'react';
import { HeroSection } from '../components/blocks/hero-section-1';
import { BoltIcon, CurrencyDollarIcon, LayersIcon } from '../components/icons';
import { EarlyAccessDialog } from '../components/EarlyAccessDialog';
import { Button } from '../components/ui/button';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-card-background border border-card-border p-8 rounded-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
        <div className="text-accent w-12 h-12 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-card-text-primary mb-2">{title}</h3>
        <p className="text-card-text-secondary">{description}</p>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="flex-grow">
            {/* Hero Section */}
            <HeroSection />
            
            {/* Features Section */}
            <section id="features" className="container mx-auto px-4 py-16 md:py-24">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">Why Choose SCUBE?</h2>
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
            <section id="about" className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">About SCUBE AI</h2>
                    <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                        Founded by a team of passionate AI researchers and engineers, SCUBE is on a mission to democratize artificial intelligence for businesses of all sizes. We believe in building autonomous systems that not only enhance productivity but also unlock new avenues for innovation. Our commitment is to create AI that is reliable, ethical, and transformative.
                    </p>
                </div>
            </section>
            
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto bg-card-background border border-card-border p-8 md:p-12 rounded-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-card-text-primary mb-4">Ready to Transform Your Business?</h2>
                    <p className="text-base md:text-lg text-card-text-secondary mb-8">
                        Let's talk about how SCUBE's AI agents can be tailored to your specific needs.
                    </p>
                    <div className="flex justify-center">
                        <EarlyAccessDialog>
                            {/* FIX: Removed style prop and used classes for gradient background. The Button component from react-aria-components does not accept a style prop. */}
                            <Button
                                className="inline-block whitespace-nowrap font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-500 to-green-400 text-primary-foreground"
                            >
                                Schedule a Free Consultation
                            </Button>
                        </EarlyAccessDialog>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;