import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from 'components/Menu';
import Error from './pages/Error';
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';
import Post from 'pages/Post';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='sobremim' element={<About />} />
          <Route path='posts/:id' element={<Post />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
