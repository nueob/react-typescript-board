import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">홈</Link>
      </div>
      <div>
        <Link to="/test">테스트</Link>
      </div>
    </nav>
  )
}

export default Navbar