import Home from './pages/Home';
import About from './pages/About';

const paginas = window.location.pathname === '/' ? <Home /> : <About />;

function App() {
  return paginas;
}

export default App;
