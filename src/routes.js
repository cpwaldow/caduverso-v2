import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from 'components/Menu';
import Error from './pages/Error';
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route path='/' element={<Home />} />
          <Route path='/sobremim' element={<About />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
