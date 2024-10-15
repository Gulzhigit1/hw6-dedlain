import React from 'react';
import { useSelector } from 'react-redux';


const Carts = () => {
  const filteredPosts = useSelector(state => state.posts.filteredPosts);

  return (
    <ul>
      {filteredPosts.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Carts;