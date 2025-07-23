import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';
import { getStaticProps } from 'next';

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data: PostProps[] = await response.json();
        // Limit to first 12 posts for better display
        setPosts(data.slice(0, 12));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Posts Page
        </h1>
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-600 mb-4">
            Welcome to the posts page! Here you can view posts fetched from JSONPlaceholder API.
          </p>
          <p className="text-gray-600 mb-4">
            Each post displays the title, content, user ID, and post ID in a beautifully designed card layout.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading posts...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Posts;
