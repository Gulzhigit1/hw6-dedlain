const initialState = {
    posts: [],
    filteredPosts: [],
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_POSTS':
        return { ...state, posts: action.payload, filteredPosts: action.payload };
      case 'FILTER_POSTS':
        return {
          ...state,
          filteredPosts: state.posts.filter(post =>
            post.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            post.body.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
      default:
        return state;
    }
  };
  
 
  export const setPosts = (posts) => ({ type: 'SET_POSTS', payload: posts });
  export const filterPosts = (searchTerm) => ({ type: 'FILTER_POSTS', payload: searchTerm });
  
  export default postsReducer;
  