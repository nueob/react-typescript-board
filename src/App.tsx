import React from 'react';
import {Routes, Route} from 'react-router-dom';
import * as S from './styles/App';

import Test from './components/Test';
import PostList from './components/PostList';
import Navbar from './components/Navbar';

function App() {
  return (
    <S.AppContainer>
      <Navbar />
      <S.Emoji>
        <S.Span>
          <span>👩‍💻 개발 블로그</span>
        </S.Span>
      </S.Emoji>
      <Routes>
        <Route path='/' element={<PostList />}></Route>
        <Route path='/test' element={<Test />}></Route>
      </Routes>
    </S.AppContainer>
  );
}

export default App;
