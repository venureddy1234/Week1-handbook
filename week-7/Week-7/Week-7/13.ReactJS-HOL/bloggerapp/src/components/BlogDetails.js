import React from 'react';

const BlogDetails = () => {
  const blogs = [
    {
      id: 1,
      title: 'React Learning',
      author: 'Stephen Biz',
      content: 'Welcome to learning React!'
    },
    {
      id: 2,
      title: 'Installation',
      author: 'Schewzdenier',
      content: 'You can install React from npm.'
    }
  ];

  return (
    <div className="column">
      <h2>Blog Details</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {blogs.length > 0 ? (
          blogs.map(blog => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p><strong>{blog.author}</strong></p>
              <p>{blog.content}</p>
            </li>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </ul>
    </div>
  );
};

export default BlogDetails;
