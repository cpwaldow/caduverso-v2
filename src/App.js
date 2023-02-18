import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobremim' element={<About />} />
        <Route path='*' element={<div>página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
