
import React from 'react';
import { CheckCircleIcon, PlayCircleIcon, WhatsAppIcon } from '../components/icons';
import { AnimatedGroup } from '../components/ui/animated-group';
import { EarlyAccessDialog } from '../components/EarlyAccessDialog';
import { Button } from '../components/ui/button';
import Header from '../components/Header';

const agentData = {
    id: 'whatsapp-sales-assistant',
    name: 'WhatsApp Sales Assistant',
    tagline: 'Your AI-powered sales rep that never sleeps.',
    Icon: WhatsAppIcon,
    longDescription: 'The WhatsApp Sales Assistant is a fully autonomous agent designed to integrate seamlessly with your business\'s WhatsApp channel. It engages potential customers in natural, human-like conversations, answers frequently asked questions, gathers lead information, and can even schedule demos or appointments in your calendar. Free up your sales team to focus on closing deals while our AI handles the top of the funnel.',
    demoVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    images: [
        'placeholder1',
        'placeholder2',
        'placeholder3',
    ],
    features: [
        { name: '24/7 Lead Capture', description: 'Never miss a lead, no matter the time of day. The agent is always on.' },
        { name: 'Instantaneous Replies', description: 'Engage customers immediately with instant, accurate responses to their queries.' },
        { name: 'Smart FAQ Handling', description: 'Train the AI on your business data to handle common questions effortlessly.' },
        { name: 'Seamless CRM Integration', description: 'Automatically log new leads and conversations into your existing CRM system.' },
        { name: 'Appointment Booking', description: 'Connects to your calendar (Google, Calendly) to book meetings without manual intervention.' },
    ],
};

const AgentDetailPage: React.FC = () => {

    return (
        <>
            <Header />
            <AnimatedGroup 
                className="flex-grow container mx-auto px-4 py-16 md:py-24"
                variants={{
                    container: {
                        visible: { transition: { staggerChildren: 0.15 } }
                    },
                    item: {
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 100 } }
                    }
                }}
            >
                <>
                {/* Hero */}
                <section className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-block bg-accent/10 p-4 rounded-xl border border-accent/20 mb-6">
                        <agentData.Icon className="w-12 h-12 text-accent" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
                        {agentData.name}
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary mb-8">
                        {agentData.tagline}
                    </p>
                    <p className="text-base text-text-secondary max-w-2xl mx-auto mb-8">
                        {agentData.longDescription}
                    </p>
                    <EarlyAccessDialog>
                        {/* FIX: Pass children to Button component explicitly */}
                        <Button
                            className="inline-block whitespace-nowrap font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-500 to-green-400 text-primary-foreground"
                        >
                            Get Early Access
                        </Button>
                    </EarlyAccessDialog>
                </section>

                {/* Demo Video */}
                <section className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-center text-text-primary mb-8">See It In Action</h2>
                    <div className="relative aspect-video bg-card-background border border-card-border rounded-2xl overflow-hidden flex items-center justify-center group cursor-pointer shadow-lg">
                        {/* Placeholder for video */}
                        <div className="absolute inset-0 bg-black/50 z-10"></div>
                        <p className="absolute z-20 text-text-primary text-xl font-bold">Demo Video Coming Soon</p>
                        <PlayCircleIcon className="w-24 h-24 text-white/50 group-hover:text-white transition-colors absolute z-20"/>
                    </div>
                </section>

                {/* Features */}
                <section className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold text-center text-text-primary mb-12">Core Features</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {agentData.features.map(feature => (
                            <div key={feature.name} className="flex gap-4">
                                <CheckCircleIcon className="w-8 h-8 text-mint-green flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-text-primary">{feature.name}</h3>
                                    <p className="text-text-secondary">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Image Gallery */}
                <section className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-text-primary mb-12">Product Showcase</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {agentData.images.map((img, index) => (
                            <div key={index} className="aspect-[9/16] bg-card-background border border-card-border rounded-2xl flex items-center justify-center p-4">
                                <p className="text-card-text-secondary">Screenshot {index + 1}</p>
                            </div>
                        ))}
                    </div>
                </section>
                </>
            </AnimatedGroup>
        </>
    );
};

export default AgentDetailPage;
