import './App.scss';
import Home from './pages/Home';
import Game from './pages/Game';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { useEffect, useState, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";


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

  function NotFound() {
    const navigate = useNavigate();
    navigate('/');
    return null;
  }

  return (
    <>
      <div ref={cursorRef} id="cursor" style={{ left: `${cursorX - 10}px`, top: `${cursorY - 10}px` }}></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home cursorRef={cursorRef} />} />
          <Route path="/resume" element={<Resume cursorRef={cursorRef} />} />
          <Route path="/projects" element={<Projects cursorRef={cursorRef} />} />
          <Route path="/contact" element={<Contact cursorRef={cursorRef} />} />
          <Route path="*" element={<NotFound cursorRef={cursorRef} />} />
        </Routes>
      </Router>
    </>
  );
  // <div className="App">
  {/* <NavBar /> */ }


  {/* <Home /> */ }
  {/* <Game cursorRef={cursorRef} /> */ }
  {/* <Resume cursorRef={cursorRef} /> */ }
  {/* <Projects cursorRef={cursorRef} /> */ }
  {/* <Contact /> */ }

  {/* </div> */ }
}

export default App;
