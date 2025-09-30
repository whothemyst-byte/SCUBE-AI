
import React from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon, ChevronRightIcon } from '../components/icons';
import { AnimatedGroup } from '../components/ui/animated-group';
import Header from '../components/Header';

const AgentCard: React.FC<{
    id: string;
    Icon: React.FC<{ className?: string }>;
    name: string;
    description: string;
    tags: string[];
}> = ({ id, Icon, name, description, tags }) => (
    <div className="bg-card-background border border-card-border p-8 rounded-2xl group transition-all duration-300 transform hover:-translate-y-2 hover:border-accent hover:shadow-glow-accent">
        <Link to={`/agent/${id}`} className="flex flex-col h-full">
            <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                        <Icon className="w-8 h-8 text-accent" />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-card-text-primary mb-2">{name}</h3>
                <p className="text-card-text-secondary text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border border-card-border bg-card-background text-card-text-secondary">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-accent font-semibold">
                <span>View Details</span>
                <ChevronRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </Link>
    </div>
);


const OurAgentsPage: React.FC = () => {
    const agents = [
        {
            id: 'whatsapp-sales-assistant',
            Icon: WhatsAppIcon,
            name: 'WhatsApp Sales Assistant',
            description: 'Turn conversations into conversions, 24/7. Our AI assistant handles inquiries, qualifies leads, and books appointments directly through WhatsApp.',
            tags: ['Sales', 'Support', 'Lead Gen'],
        }
    ];

    return (
        <>
            <Header />
            <AnimatedGroup 
                className="flex-grow container mx-auto px-4 py-16 md:py-24"
                variants={{
                    container: {
                        visible: { transition: { staggerChildren: 0.1 } }
                    },
                    item: {
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }
                }}
            >
                <>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
                        Meet Our Autonomous Agents
                    </h1>
                    <p className="text-lg text-text-secondary">
                        Specialized AI assistants designed to automate specific business functions, saving you time and driving growth.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {agents.map(agent => (
                        <AgentCard key={agent.id} {...agent} />
                    ))}
                </div>
                </>
            </AnimatedGroup>
        </>
    );
};

export default OurAgentsPage;
