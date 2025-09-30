import React from 'react';
import { CheckCircleIcon, BoltIcon, LayersIcon, UserGroupIcon } from '../components/icons';
import { EarlyAccessDialog } from '../components/EarlyAccessDialog';
import { Button } from '../components/ui/button';

const PricingTier: React.FC<{
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  icon: React.ReactNode;
}> = ({ name, price, description, features, cta, isPopular = false, icon }) => (
  <div className={`
    relative bg-card-background border border-card-border p-8 rounded-2xl
    transition-all duration-300 flex flex-col
    ${isPopular ? 'border-accent shadow-glow-accent lg:scale-105 transform hover:-translate-y-2' : 'transform hover:border-accent hover:-translate-y-2'}
  `}>
    {isPopular && (
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-accent text-white px-3 py-1 text-sm font-bold rounded-full">
        MOST POPULAR
      </div>
    )}
    <div className="text-accent w-12 h-12 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-card-text-primary mb-2">{name}</h3>
    <p className="text-card-text-secondary mb-6">{description}</p>
    <div className="text-4xl font-bold text-card-text-primary mb-6">{price} <span className="text-base font-normal text-card-text-secondary">/ month</span></div>
    <ul className="space-y-4 text-card-text-secondary mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircleIcon className="w-5 h-5 text-mint-green mr-3 flex-shrink-0 mt-1" />
          <span className="text-card-text-primary">{feature}</span>
        </li>
      ))}
    </ul>
    <EarlyAccessDialog>
        {/* FIX: Removed style prop and used classes for gradient background. The Button component from react-aria-components does not accept a style prop. */}
        <Button
          className={`
            w-full mt-auto
            ${isPopular ? 'hover:opacity-80 bg-gradient-to-r from-blue-500 to-green-400 text-primary-foreground' : 'bg-white/10 text-text-primary hover:bg-white/20'}
          `}
        >
          {cta}
        </Button>
    </EarlyAccessDialog>
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
          Choose Your Plan
        </h1>
        <p className="text-lg text-text-secondary">
          Start automating today with a plan that fits your needs. Simple, transparent pricing to help you scale.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        <PricingTier
          icon={<BoltIcon />}
          name="Starter"
          price="$99"
          description="For individuals and small teams getting started with AI automation."
          features={[
            '1 AI Agent',
            'Up to 1,000 tasks/month',
            'Standard Integrations',
            'Email Support'
          ]}
          cta="Get Started"
        />
        <PricingTier
          icon={<LayersIcon />}
          name="Pro"
          price="$299"
          description="For growing businesses that need more power and customization."
          features={[
            '5 AI Agents',
            'Up to 10,000 tasks/month',
            'Advanced Integrations',
            'Priority Email & Chat Support',
            'API Access'
          ]}
          cta="Sign Up Now"
          isPopular
        />
        <PricingTier
          icon={<UserGroupIcon />}
          name="Enterprise"
          price="Custom"
          description="For large organizations with specific needs and high-volume usage."
          features={[
            'Unlimited AI Agents',
            'Unlimited tasks',
            'Custom Integrations',
            'Dedicated Account Manager',
            'Onboarding & Training'
          ]}
          cta="Contact Sales"
        />
      </div>
    </div>
  );
};

export default PricingPage;