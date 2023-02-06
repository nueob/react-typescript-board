import React from 'react';
import logo from './logo.svg';
import './App.css';

import posts from './assets/posts.json';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <div className="usEmoji">
        <span>👩‍💻 개발 블로그</span>
      </div>
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
