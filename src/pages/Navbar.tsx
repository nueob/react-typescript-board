import * as S from '../styles/Navbar';

const Navbar = () => {
  return (
    <S.Navbar>
      <S.StyledLink to="/">홈</S.StyledLink>
      <S.StyledLink to="/post">포스트</S.StyledLink>
      <S.StyledLink to="/test">테스트</S.StyledLink>
    </S.Navbar>
  )
}

export default Navbar