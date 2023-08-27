import './App.scss';
import Home from './pages/Home';
import Game from './pages/Game';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { useEffect, useState, useRef } from 'react';


function App() {

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const cursorRef = useRef(null);

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
      <div ref={cursorRef} id="cursor" style={{ left: `${cursorX - 10}px`, top: `${cursorY - 10}px` }}></div>

      {/* <Home /> */}
      {/* <Game cursorRef={cursorRef}/> */}
      <Resume cursorRef={cursorRef} />
      <Projects cursorRef={cursorRef} />
      {/* <Contact /> */}

    </div>
  );
}

export default App;
