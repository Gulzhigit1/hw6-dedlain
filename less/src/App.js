import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setPosts } from './redux/reducer';
import FindThing from './components/FindThing'; 
import Carts from './components/Carts';      

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(setPosts(response.data));
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div>
      <h1>Товары</h1>
      <FindThing />  
      <Carts />     
    </div>
  );
};

export default App;


