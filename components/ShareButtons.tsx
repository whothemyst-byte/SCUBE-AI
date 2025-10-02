import React from 'react';
import { Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { toast } from 'sonner';
import { FacebookIcon } from './icons';
import { Button } from './ui/button';

interface ShareButtonsProps {
  title: string;
  url: string;
  excerpt: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url, excerpt }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedExcerpt}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success('Link copied to clipboard!');
      })
      .catch(err => {
        toast.error('Failed to copy link.');
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="flex items-center gap-4 mt-12 py-8 border-t border-card-border">
      <p className="font-semibold text-text-primary">Share this post:</p>
      <div className="flex items-center gap-2">
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <Button variant="outline" size="icon">
            <Twitter className="h-4 w-4" />
          </Button>
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
          </Button>
        </a>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <Button variant="outline" size="icon">
            <FacebookIcon className="h-4 w-4" />
          </Button>
        </a>
        <Button variant="outline" size="icon" onPress={copyLink} aria-label="Copy link">
          <LinkIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
