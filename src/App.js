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
      setCursorX(event.clientX + window.scrollX);
      setCursorY(event.clientY + window.scrollY);

    }



    document.addEventListener("mousemove", handleCursor);

    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [cursorX, cursorY]);


  return (
    <div className="App">
      {/* <NavBar /> */}
      <div id="cursor" style={{ left: `${cursorX - 10}px`, top: `${cursorY - 10}px` }}></div>

      <Home />
      <Game />
      <Projects />
      {/* <Contact /> */}

    </div>
  );
}

export default App;
