import React from 'react';
import { Link } from 'react-router-dom';

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Blog Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel gravida velit, sit amet eleifend urna.',
      slug: 'blog-post-1',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      content: 'Sed tempus, lacus ut facilisis efficitur, ligula turpis ultricies lorem, vitae tincidunt felis.',
      slug: 'blog-post-2',
    },
    {
      id: 3,
      title: 'Blog Post 3',
      content: 'In hac habitasse platea dictumst. Mauris vitae felis at neque bibendum aliquet.',
      slug: 'blog-post-3',
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
              <Link to={`/blog/${post.slug}`} className="mt-4 text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;