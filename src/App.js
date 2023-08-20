import './App.css';
import Home from './pages/Home';
import Game from './pages/Game';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { useEffect, useState } from 'react';


function App() {

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const handleCursor = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
    }
  })


  return (
    <div className="App">
      {/* <NavBar /> */}
      <div id="cursor" style={{ left: `${cursorX}px`, right: `${cursorY}` }}></div>
      <Home />
      <Game />
      <Projects />
      {/* <Contact /> */}

    </div>
  );
}

export default App;
