import Section from './Section';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
}

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => setBlogPosts(data))
      .catch(err => console.error('Failed to fetch articles:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <Section id="blog">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-2">
            Latest <span className="text-accent italic">Insights</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            Thoughts, tutorials, and insights on technology, mathematics, and design.
          </p>
        </div>
        <Link to="/blog" className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
          View all posts <ArrowRight size={16} />
        </Link>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {blogPosts.map((post) => (
          <motion.article 
            key={post.id}
            variants={itemVariants}
            className="group flex flex-col bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
          >
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={12} />
                  {post.author}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors mt-auto"
              >
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
