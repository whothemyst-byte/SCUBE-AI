import React from 'react';
import { EarlyAccessDialog } from './EarlyAccessDialog';
import { Button } from './ui/button';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, location, type, description }) => {
  return (
    <div className="bg-card-background border border-card-border p-8 rounded-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-card-text-primary">{title}</h3>
          <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/30">{type}</span>
        </div>
        <p className="text-card-text-secondary mb-2">{location}</p>
        <p className="text-card-text-primary text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-6">
        <EarlyAccessDialog>
          {/* FIX: Pass children to Button component explicitly */}
          <Button 
            className="w-full bg-btn-secondary-bg text-btn-secondary-text font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-r from-electric-blue to-mint-green hover:text-dark-charcoal"
          >
            Apply Now
          </Button>
        </EarlyAccessDialog>
      </div>
    </div>
  );
};

export default JobCard;