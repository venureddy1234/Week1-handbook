// src/Posts.js
import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],      // Step 5
      hasError: false // optional
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  }


  componentDidMount() {
    this.loadPosts();
  }

 
  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2>All Blog Posts</h2>
        {posts.map(post => (
          <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

  
  componentDidCatch(error, info) {
    alert("An error occurred while rendering the component.");
    console.error("Render Error:", error, info);
  }
}

export default Posts;
