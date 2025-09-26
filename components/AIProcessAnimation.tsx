
import React from 'react';
import { CogIcon, GlobeIcon, BuildingBlocksIcon, MailIcon, DocumentIcon, SparklesIcon } from './icons';

interface IconBoxProps {
    children: React.ReactNode;
    className?: string;
    label?: string;
    isLarge?: boolean;
}

const IconBox: React.FC<IconBoxProps> = ({ children, className = '', label, isLarge = false }) => {
    const sizeClasses = isLarge ? 'w-28 h-28 md:w-36 md:h-36' : 'w-16 h-16 md:w-20 md:h-20';
    const iconSizeClasses = isLarge ? 'w-12 h-12 md:w-16 md:h-16' : 'w-8 h-8 md:w-10 md:h-10';

    return (
        <div className={`relative flex flex-col items-center justify-center ${className}`}>
            <div className={`
                ${sizeClasses}
                bg-black/30 border border-brand-green/30 rounded-2xl
                flex items-center justify-center backdrop-blur-sm
                transition-all duration-500 shadow-glow-green animate-glowing hover:shadow-glow-green-light
            `}>
                <div className={`text-brand-green ${iconSizeClasses}`}>
                    {children}
                </div>
            </div>
            {label && <span className="mt-3 text-sm text-gray-300">{label}</span>}
        </div>
    );
};

const AIProcessAnimation: React.FC = () => {
    return (
        <div className="w-full max-w-2xl mx-auto h-96 relative mt-16 lg:mt-0">
             {/* Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00F0B8" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00F0B8" stopOpacity="1" />
                        <stop offset="100%" stopColor="#00F0B8" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d="M 25% 60% C 25% 30%, 35% 25%, 50% 25%" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 50% 25% L 75% 25%" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 75% 25% C 90% 25%, 95% 30%, 95% 60%" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 50% 60% L 50% 85%" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 75% 60% L 75% 85%" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Nodes */}
            <IconBox isLarge className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" label="AI CORE">
                <div className="text-4xl font-bold">AI</div>
            </IconBox>
            
            <IconBox className="absolute top-0 left-1/2 -translate-x-1/2" label="Analysis Process...">
                <CogIcon />
            </IconBox>
            
            <div className="absolute top-1/4 left-[75%] -translate-x-1/2 flex items-center p-2 space-x-2 bg-black/30 border border-brand-green/30 rounded-xl backdrop-blur-sm animate-pulse-slow shadow-glow-green">
                <IconBox className="!w-12 !h-12"><GlobeIcon /></IconBox>
                <IconBox className="!w-12 !h-12"><BuildingBlocksIcon /></IconBox>
                <IconBox className="!w-12 !h-12"><MailIcon /></IconBox>
            </div>
            
            <IconBox className="absolute bottom-0 left-1/4 -translate-x-1/2" label="Input">
                <DocumentIcon />
            </IconBox>

            <IconBox className="absolute bottom-0 right-1/4 translate-x-1/2" label="Output">
                <SparklesIcon />
            </IconBox>
        </div>
    );
};

export default AIProcessAnimation;