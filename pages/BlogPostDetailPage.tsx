import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import { blogPosts } from '../data/blogPosts';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { AnimatedGroup } from '../components/ui/animated-group';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ShareButtons } from '../components/ShareButtons';

const generateUnsplashSrcSet = (url: string) => {
  try {
    const urlObj = new URL(url);
    const baseUrl = `${urlObj.origin}${urlObj.pathname}`;
    const sizes = [400, 600, 800, 1200, 1600];
    return sizes
      .map(size => {
        const params = new URLSearchParams(urlObj.search);
        params.set('w', String(size));
        params.set('auto', 'format');
        params.set('q', '75');
        params.set('fit', 'crop');
        return `${baseUrl}?${params.toString()} ${size}w`;
      })
      .join(', ');
  } catch (e) {
    return '';
  }
};

interface Heading {
  id: string;
  level: number;
  text: string;
}

const BlogPostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [contentWithIds, setContentWithIds] = useState('');

  useEffect(() => {
    if (!post) return;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content;

    // --- Process Headings for ToC ---
    const headingElements = tempDiv.querySelectorAll('h2, h3');
    const newHeadings: Heading[] = [];

    headingElements.forEach((heading, index) => {
      const text = heading.textContent || '';
      // A simple slugify function
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') + `-${index}`;
      const level = parseInt(heading.tagName.substring(1), 10);
      
      heading.setAttribute('id', id);
      
      newHeadings.push({ id, level, text });
    });
    setHeadings(newHeadings);
    
    // --- Process Images for Lazy Loading ---
    const imageElements = tempDiv.querySelectorAll('img');
    imageElements.forEach(img => {
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
    });
    
    setContentWithIds(tempDiv.innerHTML);

  }, [post]);


  if (!post) {
    return (
      <>
        <Helmet>
            <title>Post Not Found | SCUBE AI</title>
            <meta name="description" content="The blog post you are looking for could not be found." />
        </Helmet>
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

  const srcSet = generateUnsplashSrcSet(post.imageUrl);

  return (
    <>
      <Helmet>
        <title>{`${post.title} | SCUBE AI Blog`}</title>
        <meta name="description" content={post.excerpt} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:site_name" content="SCUBE AI Blog" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.imageUrl} />
      </Helmet>
      <Header />
      <div className="flex-grow container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-3">
            <AnimatedGroup preset="slide">
              <article>
                <header className="mb-12 text-center max-w-4xl mx-auto">
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
                  srcSet={srcSet}
                  sizes="(max-width: 896px) 90vw, 896px"
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-2xl mb-12"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />

                <div className="max-w-4xl mx-auto">
                  <div
                    className="text-xl text-text-secondary leading-loose space-y-6 [&_p]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_a]:text-accent hover:[&_a]:underline"
                    dangerouslySetInnerHTML={{ __html: contentWithIds }}
                  />

                  <ShareButtons 
                    title={post.title}
                    url={window.location.href}
                    excerpt={post.excerpt}
                  />
                </div>
              </article>
            </AnimatedGroup>
          </div>

          <aside className="hidden lg:block lg:col-span-1">
            {headings.length > 1 && (
              <div className="sticky top-28">
                <h3 className="font-bold text-text-primary mb-4">On this page</h3>
                <ul className="space-y-2 border-l-2 border-card-border">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className={`block border-l-2 -ml-0.5 border-transparent py-1 text-sm text-text-secondary hover:text-accent hover:border-accent ${heading.level === 3 ? 'pl-8' : 'pl-4'}`}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

        </div>
      </div>
    </>
  );
};

export default BlogPostDetailPage;