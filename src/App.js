import './App.css';
import Home from './pages/Home';
import Game from './pages/Game';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Home />
      <Game />
      {/* <Projects /> */}
      {/* <Contact /> */}
      
    </div>
  );
}

export default App;
