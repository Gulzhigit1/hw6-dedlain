import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPosts } from '../redux/reducer';

const FindThing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(filterPosts(value));
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Текст" 
        value={searchTerm}
        onChange={handleSearch} 
      />
      <button onClick={() => dispatch(filterPosts(searchTerm))}>
        Искать
      </button>
    </div>
  );
};

export default FindThing;
