import './App.css';
import Home from './pages/Home';
import Game from './pages/Game';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Home />
      <Game />
    </div>
  );
}

export default App;
