import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Info } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { type FormData } from '../../types';
import { supabase } from '../../lib/supabase';
import { CheckCircleIcon } from '../icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { DialogTitle, DialogDescription } from '../ui/dialog';


interface EarlyAccessFormCardProps {
  onClose: () => void;
  className?: string;
}

export const EarlyAccessFormCard: React.FC<EarlyAccessFormCardProps> = ({ onClose, className }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.phone) {
      setError('Please fill in all required fields.');
      setStatus('error');
      return;
    }
    setError('');
    setStatus('submitting');
    
    try {
      const { error: supabaseError } = await supabase
        .from('early_access_submissions')
        .insert([{ name: formData.name, email: formData.email, phone: formData.phone, company: formData.company }]);

      if (supabaseError) {
        setStatus('error');
        setError(supabaseError.message || `An unknown error occurred.`);
        return;
      }
      
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setError(err.message || 'An unexpected error occurred. Please try again.');
    }
  };

  const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  if (status === 'success') {
    return (
      <div className={cn("relative w-full max-w-lg rounded-xl bg-background p-6 shadow-xl text-center", className)}>
        <CheckCircleIcon className="w-20 h-20 text-accent mx-auto mb-6" />
        <DialogTitle asChild>
          <h2 className="text-2xl font-bold text-text-primary mb-4">You're on the list!</h2>
        </DialogTitle>
        <DialogDescription asChild>
          <p className="text-text-secondary mb-8">
              Thank you for registering, {formData.name}. We'll be in touch soon.
          </p>
        </DialogDescription>
        <Button onPress={onClose}>
            Done
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      className={cn("relative w-full max-w-lg rounded-xl bg-background p-6 shadow-xl", className)}
    >
      <div className="flex items-center justify-between">
        <DialogTitle asChild>
            <motion.h3 variants={FADE_IN_VARIANTS} className="text-xl font-semibold text-foreground">
              Get Early Access
            </motion.h3>
        </DialogTitle>
        <Button variant="ghost" size="icon" onPress={onClose} aria-label="Close">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <DialogDescription asChild>
        <motion.p variants={FADE_IN_VARIANTS} className="mt-2 text-sm text-muted-foreground">
          Register now for the next drop of our AI Agent.
        </motion.p>
      </DialogDescription>
      

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <motion.div variants={FADE_IN_VARIANTS} className="grid w-full items-center gap-1.5">
            <div className="flex items-center gap-1">
                <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-3 w-3 cursor-pointer text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Please enter your full legal name.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        </motion.div>
        <motion.div variants={FADE_IN_VARIANTS} className="grid w-full items-center gap-1.5">
            <div className="flex items-center gap-1">
                <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-3 w-3 cursor-pointer text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>We'll use this to contact you about your early access.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
        </motion.div>
        <motion.div variants={FADE_IN_VARIANTS} className="grid w-full items-center gap-1.5">
            <div className="flex items-center gap-1">
                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-3 w-3 cursor-pointer text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Used for verification and important updates.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" required />
        </motion.div>
        <motion.div variants={FADE_IN_VARIANTS} className="grid w-full items-center gap-1.5">
            <div className="flex items-center gap-1">
                <Label htmlFor="company">About your company / need <span className="text-red-500">*</span></Label>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Info className="h-3 w-3 cursor-pointer text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Briefly describe your business and what you hope to automate.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <Textarea id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Tell us what you'd like to automate..." required />
        </motion.div>
        
        {status === 'error' && <p className="text-red-400 text-sm">{error}</p>}

        <motion.div variants={FADE_IN_VARIANTS} className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="ghost" onPress={onClose}>
            Cancel
          </Button>
          <Button type="submit" isDisabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Register for Early Access'}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};