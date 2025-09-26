import React from 'react';
import JobCard from '../components/JobCard';

const jobs = [
    {
        title: 'Senior AI Engineer',
        location: 'Remote, Global',
        type: 'Full-time',
        description: 'Lead the development of our next-generation autonomous AI agents. Strong background in machine learning, NLP, and software architecture required.',
    },
    {
        title: 'Frontend Developer (React)',
        location: 'Remote, US/EU',
        type: 'Full-time',
        description: 'Craft beautiful and intuitive user interfaces for our AI platforms. Expertise in React, TypeScript, and modern web technologies is a must.',
    },
    {
        title: 'Product Manager, AI Platforms',
        location: 'New York, NY',
        type: 'Full-time',
        description: 'Define the roadmap and strategy for our core AI products. Collaborate with engineering, design, and sales to deliver world-class solutions.',
    },
    {
        title: 'UX/UI Designer',
        location: 'Remote, Global',
        type: 'Contract',
        description: 'Design elegant and user-centric experiences for complex AI systems. A strong portfolio demonstrating your design process is essential.',
    },
];


const CareersPage: React.FC = () => {
    return (
        <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                    Join Our Team
                </h1>
                <p className="text-lg text-gray-300">
                    We're looking for passionate individuals to help us build the future of AI. If you're excited about creating transformative technology, we want to hear from you.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
                {jobs.map((job, index) => (
                    <JobCard
                        key={index}
                        title={job.title}
                        location={job.location}
                        type={job.type}
                        description={job.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default CareersPage;