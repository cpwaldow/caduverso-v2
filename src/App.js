import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobremim' element={<About />} />
        <Route path='*' element={<div>página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
