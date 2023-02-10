import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import router from '../router';

const Navbar = () => {
  return (
    <Router>
      <Routes>
        {
          router.map((route, i) => {
              return (
                  <Route
                      key={i}
                      path={route.path}
                      element={<route.component />}
                  />
              );
          })
        }
      </Routes>
    </Router>
  )
}

export default Navbar