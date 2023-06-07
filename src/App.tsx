import React from 'react';
import logo from './logo.svg';
import * as S from './styles/App';

import posts from './assets/posts.json';
import PostList from './components/PostList';

function App() {
  return (
    <S.AppContainer>
      <div>
        <S.Emoji>
          <div>
            <S.Span>
              <span>👩‍💻 개발 블로그</span>
            </S.Span>
          </div>
        </S.Emoji>
        <PostList posts={posts}/>
      </div>
    </S.AppContainer>
  );
}

export default App;
