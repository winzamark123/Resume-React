import './App.scss';
import Home from './pages/Home';
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
  const [loading, setLoading] = useState(false);

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

  // Loading Animation
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  function NotFound() {
    const navigate = useNavigate();
    navigate('/');
    return null;
  }


  return (
    <div className="app_container">
      <div ref={cursorRef} id="cursor" style={{ left: `${cursorX - 10}px`, top: `${cursorY - 10}px` }}></div>

      {loading ? (
        <div className="load_container">
          <div className={`load_container_section`} ></div>
          <div className={`load_container_section`} >
            <div class="load_container_section_logo">
              <hr /><hr /><hr /><hr />
            </div>
          </div>
          <div className={`load_container_section`} ></div>
        </div>)
        :
        (<div className="nothing"></div>)}


      <Router>
        <Routes>
          <Route path="/" element={<Home cursorRef={cursorRef} />} />
          <Route path="/resume" element={<Resume cursorRef={cursorRef} />} />
          <Route path="/projects" element={<Projects cursorRef={cursorRef} />} />
          <Route path="/contact" element={<Contact cursorRef={cursorRef} />} />
          <Route path="*" element={<NotFound cursorRef={cursorRef} />} />
        </Routes>
      </Router>




    </div>

  );
}

export default App;
