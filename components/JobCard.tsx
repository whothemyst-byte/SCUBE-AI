import React from 'react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, location, type, description }) => {
  return (
    <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:border-violet-purple transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-dark-charcoal">{title}</h3>
          <span className="bg-violet-purple/10 text-violet-purple text-xs font-semibold px-3 py-1 rounded-full border border-violet-purple/30">{type}</span>
        </div>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-6">
        <Link 
          to="/signup"
          className="w-full text-center inline-block bg-sunset-pink text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gradient-to-r from-electric-blue to-mint-green hover:text-dark-charcoal"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;