import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default MainRoutes;
