// BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Extract the blog post ID from route parameters

  // Fetch blog content based on the ID (you may fetch from an API or use hard-coded data)
  const blogContent = {
    1: { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
    2: { title: 'Second Blog Post', content: 'This is the content of the second blog post. this is additional content' },
    // Add more blog posts as needed
  }[id];

  if (!blogContent) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-post-container">
      <h2>{blogContent.title}</h2>
      <p>{blogContent.content}</p>
    </div>
  );
};

export default BlogPost;
