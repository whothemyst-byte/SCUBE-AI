import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { blogPosts } from '../data/blogPosts';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { AnimatedGroup } from '../components/ui/animated-group';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { supabase } from '../lib/supabase';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

interface Comment {
  id: string;
  created_at: string;
  author_name: string;
  content: string;
  post_slug: string;
}

const timeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
};

const CommentSection: React.FC<{ slug: string }> = ({ slug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchComments = async () => {
    setLoading(true);
    setFetchError(null);
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_slug', slug)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching comments:', error.message);
      toast.error("Could not load comments.");
      setFetchError("We couldn't load comments. This could be a configuration issue or a temporary network problem. Please check back later.");
    } else {
      setComments(data as Comment[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !content.trim()) {
      toast.error("Please fill in both your name and comment.");
      return;
    }

    setIsSubmitting(true);
    const { data, error } = await supabase
      .from('comments')
      .insert([{ post_slug: slug, author_name: authorName, content: content }])
      .select();

    setIsSubmitting(false);

    if (error) {
      toast.error("Failed to post comment. Please try again.");
      console.error("Error posting comment:", error.message);
    } else if(data) {
      toast.success("Comment posted successfully!");
      setComments([data[0] as Comment, ...comments]);
      setAuthorName('');
      setContent('');
    }
  };

  return (
    <div className="mt-16 pt-12 border-t border-card-border">
      <h2 className="text-3xl font-bold text-text-primary mb-8">Comments ({!fetchError ? comments.length : '–'})</h2>
      
      <form onSubmit={handleSubmit} className="mb-12 bg-card-background border border-card-border p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-card-text-primary">Leave a Reply</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-1.5">
            <Label htmlFor="authorName">Name</Label>
            <Input 
              id="authorName" 
              placeholder="Your Name" 
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="space-y-1.5 mb-4">
          <Label htmlFor="content">Comment</Label>
          <Textarea 
            id="content" 
            placeholder="Write your comment here..." 
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="text-right">
          <Button type="submit" isDisabled={isSubmitting}>
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </Button>
        </div>
      </form>

      <div className="space-y-8">
        {loading ? (
          <p className="text-text-secondary text-center py-8">Loading comments...</p>
        ) : fetchError ? (
          <div className="text-center py-8 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="font-semibold text-destructive">Could Not Load Comments</p>
            <p className="text-text-secondary text-sm mt-2 px-4">{fetchError}</p>
          </div>
        ) : comments.length === 0 ? (
          <p className="text-text-secondary text-center py-8">No comments yet. Be the first to share your thoughts!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 items-start">
              <Avatar className="h-12 w-12 border">
                <AvatarFallback>{comment.author_name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-text-primary">{comment.author_name}</p>
                  <p className="text-xs text-text-secondary">{timeAgo(comment.created_at)}</p>
                </div>
                <p className="text-text-secondary leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


const BlogPostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="flex-grow container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-text-secondary mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedGroup preset="slide">
            <article>
              <header className="mb-12 text-center">
                <Link to="/blog" className="text-accent font-semibold text-sm hover:underline mb-4 inline-block">
                  &larr; Back to all posts
                </Link>
                <p className="text-accent font-bold uppercase tracking-widest">{post.category}</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight my-4">
                  {post.title}
                </h1>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <Avatar>
                    <AvatarImage src={post.authorAvatar} alt={post.authorName} />
                    <AvatarFallback>{post.authorName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-text-primary">{post.authorName}</p>
                    <p className="text-sm text-text-secondary">{post.publishDate}</p>
                  </div>
                </div>
              </header>

              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12"
              />

              <div
                className="text-xl text-text-secondary leading-loose space-y-6 [&_p]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_a]:text-accent hover:[&_a]:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </AnimatedGroup>
          {post.slug && <CommentSection slug={post.slug} />}
        </div>
      </div>
    </>
  );
};

export default BlogPostDetailPage;