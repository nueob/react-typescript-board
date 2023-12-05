import React from 'react';
import {Routes, Route} from 'react-router-dom';
import * as S from './styles/App';

import Test from './pages/Test';
import Home from './pages/Home';
import PostList from './pages/PostList';
import Navbar from './pages/Navbar';

function App() {
  return (
    <S.AppContainer>
      <S.Head>
        <S.Emoji>
          <S.H2>👩‍💻 개발 블로그</S.H2>
        </S.Emoji>
        <Navbar />
      </S.Head>
      <S.Body>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/post' element={<PostList />}></Route>
          <Route path='/test' element={<Test />}></Route>
        </Routes>
      </S.Body>
    </S.AppContainer>
  );
}

export default App;
