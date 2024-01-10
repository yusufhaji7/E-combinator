// Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
 // Import the CSS file for styling

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post. ' },
    // Add more blog posts as needed
  ];

  return (
    <div className="blog-container flex flex-wrap space-x-4 space-y-8">
      <h2 className="w-full text-3xl font-bold mb-4">Latest Blogs</h2>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-articles w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 hover:shadow-lg transition duration-300 ease-in-out">
          {/* Use Link to create clickable links to individual blog posts */}
          <Link to={`/blog/${post.id}`} className="block">
            <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 transition duration-300 ease-in-out">{post.title}</h3>
          </Link>
          <p className="text-gray-600">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
