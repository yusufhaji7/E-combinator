// Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import Development from '../assets/dev.png';
import Investor from '../assets/investor.webp';
import Services from './Services'; // Import the Services component


const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.', image: `${Development}` },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.', image: `${Investor}` },
    // Add more blog posts as needed
  ];

  return (
    <div>
      {/* Render the Services component */}
      <Services />

      <div className="blog-container flex flex-wrap space-x-4 space-y-8" style={{ marginTop: '20px' }}>
        <h2 className="w-full text-3xl font-bold mb-4">Latest Blogs</h2>
        {blogPosts.map((post) => (
          <Link
          to={`/blog/${post.id}`}
          className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/4 p-0 mb-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          style={{ marginBottom: '20px' }}
        >
            <img src={post.image} alt={post.title} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
            <div className="p-4 bg-white border border-t-0 border-gray-200 border-solid">
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 transition duration-300 ease-in-out">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;