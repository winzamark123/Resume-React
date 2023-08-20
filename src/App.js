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
  const cursor = document.querySelector(".custom-cursor");

  useEffect(() => {
    const handleCursor = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
    }

    // document.addEventListener("mousemove", (e) => {
    //   cursor.style.left = `${e.clientX}px`;
    //   cursor.style.top = `${e.clientY}px`;
    // });

    document.addEventListener("mousemove", handleCursor);

    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, []);


  return (
    <div className="App">
      {/* <NavBar /> */}
      <div className="cursor_container">
        <div id="cursor" style={{ left: `${cursorX}px`, top: `${cursorY}` }}></div>
      </div>
      <Home />
      <Game />
      <Projects />
      {/* <Contact /> */}

    </div>
  );
}

export default App;
