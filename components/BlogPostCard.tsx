import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { type BlogPost } from '../data/blogPosts';

const optimizeUnsplashUrl = (url: string, width: number) => {
  try {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    params.set('w', String(width));
    params.set('auto', 'format');
    params.set('q', '75');
    params.set('fit', 'crop');
    urlObj.search = params.toString();
    return urlObj.toString();
  } catch (e) {
    return url;
  }
};

export const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <Link 
      to={`/blog/${post.slug}`} 
      className="group flex flex-col overflow-hidden rounded-2xl bg-card-background border border-card-border hover:border-accent transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="overflow-hidden">
        <img
          src={optimizeUnsplashUrl(post.imageUrl, 600)}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-sm font-semibold text-accent mb-2">{post.category}</p>
          <h3 className="text-xl font-bold text-card-text-primary mb-3 line-clamp-2">{post.title}</h3>
          <p className="text-card-text-secondary text-sm line-clamp-3">{post.excerpt}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={post.authorAvatar} alt={post.authorName} />
                    <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-sm text-card-text-primary">{post.authorName}</p>
                    <p className="text-xs text-card-text-secondary">{post.publishDate}</p>
                </div>
            </div>
            <div className="flex items-center text-sm font-semibold text-accent">
              Read More
              <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </div>
      </div>
    </Link>
  );
};