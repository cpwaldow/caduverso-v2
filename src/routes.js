import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from 'components/Menu';
import Error from './pages/Error';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobremim' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
