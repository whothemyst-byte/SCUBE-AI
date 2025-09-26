import React from 'react';
import { Link } from 'react-router-dom';
// FIX: Replaced non-existent `FastForwardIcon` and `ScaleIcon` with existing icons `BoltIcon` and `LayersIcon` from `../components/icons` to resolve import errors.
import { CheckIcon, BoltIcon, LayersIcon, UserGroupIcon } from '../components/icons';

const PricingTier: React.FC<{
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  isPopular?: boolean;
  icon: React.ReactNode;
}> = ({ name, price, description, features, cta, ctaLink, isPopular = false, icon }) => (
  <div className={`
    relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg
    transition-all duration-300 flex flex-col
    ${isPopular ? 'border-brand-green shadow-glow-green-light lg:scale-105 transform hover:-translate-y-2' : 'transform hover:border-brand-green/50 hover:-translate-y-2'}
  `}>
    {isPopular && (
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-green text-brand-dark px-3 py-1 text-sm font-bold rounded-full">
        MOST POPULAR
      </div>
    )}
    <div className="text-brand-green w-12 h-12 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <div className="text-4xl font-bold text-white mb-6">{price} <span className="text-base font-normal text-gray-400">/ month</span></div>
    <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon className="w-5 h-5 text-brand-green mr-3 flex-shrink-0 mt-1" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      to={ctaLink}
      className={`
        w-full text-center font-bold py-3 px-4 rounded-lg transition-all mt-auto
        ${isPopular ? 'bg-brand-green text-brand-dark hover:bg-opacity-80' : 'bg-white/10 text-white hover:bg-white/20'}
      `}
    >
      {cta}
    </Link>
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Choose Your Plan
        </h1>
        <p className="text-lg text-gray-300">
          Start automating today with a plan that fits your needs. Simple, transparent pricing to help you scale.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        <PricingTier
          // FIX: Replaced non-existent `FastForwardIcon` with `BoltIcon`.
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
          ctaLink="/signup"
        />
        <PricingTier
          // FIX: Replaced non-existent `ScaleIcon` with `LayersIcon`.
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
          ctaLink="/signup"
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
          ctaLink="/signup"
        />
      </div>
    </div>
  );
};

export default PricingPage;