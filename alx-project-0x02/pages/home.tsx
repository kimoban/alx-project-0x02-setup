import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '..@/components/common/Card';
import PostModal from '../components/common/PostModal';
import { PostData } from '../interfaces';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<PostData[]>([]);

  // Static posts (original cards)
  const staticPosts = [
    {
      title: "Getting Started",
      content: "Learn how to set up and configure your Next.js application with TypeScript and Tailwind CSS for modern web development."
    },
    {
      title: "Features",
      content: "Discover the powerful features included in this application, including routing, component architecture, and responsive design."
    },
    {
      title: "Documentation",
      content: "Access comprehensive documentation and guides to help you understand and extend the functionality of this application."
    },
    {
      title: "Performance",
      content: "This application is built with performance in mind, utilizing Next.js optimizations for fast loading and smooth user experience."
    },
    {
      title: "Customization",
      content: "Easily customize the appearance and behavior of components using the flexible design system and configuration options."
    },
    {
      title: "Community",
      content: "Join our growing community of developers and contributors who are building amazing applications with Next.js and React."
    }
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = (newPost: PostData) => {
    setUserPosts(prev => [...prev, newPost]);
  };
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to the Home Page
          </h1>
          <button
            onClick={handleOpenModal}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Add New Post
          </button>
        </div>
        
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-600 mb-4">
            This is the home page of our Next.js application. Here you can find the main content and navigation to other sections of the site.
          </p>
          <p className="text-gray-600">
            Feel free to explore the navigation links above to visit different pages of our application.
          </p>
        </div>
        
        {/* Display user posts count if any */}
        {userPosts.length > 0 && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 font-medium">
              {userPosts.length} user-created post{userPosts.length !== 1 ? 's' : ''} added!
            </p>
          </div>
        )}
        
        {/* Card Components Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Static posts */}
          {staticPosts.map((post, index) => (
            <Card
              key={`static-${index}`}
              title={post.title}
              content={post.content}
              isUserCreated={false}
            />
          ))}
          {/* User-created posts */}
          {userPosts.map((post, index) => (
            <Card
              key={`user-${index}`}
              title={post.title}
              content={post.content}
              isUserCreated={true}
            />
          ))}
        </div>
      </main>
      
      {/* Post Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;
