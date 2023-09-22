import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.scss';
import Game from './Game';

const Home = ({ cursorRef }) => {

    const handleMouseEnter = (event) => {
        if (cursorRef.current) {
            const targetID = event.target.id;
            switch (targetID) {
                default:
                    cursorRef.current.style.width = "100px";
                    cursorRef.current.style.height = "100px";
                    cursorRef.current.style.border = "3px solid #16a085";
            }

            // cursorRef.current.style.width = "100px";
            // cursorRef.current.style.height = "100px";
            // cursorRef.current.style.border = "3px solid #16a085";
        }
    }


    const handleMouseLeave = () => {
        if (cursorRef.current) {
            cursorRef.current.style.width = "30px";
            cursorRef.current.style.height = "30px";
            cursorRef.current.style.border = "2px solid white";
        }
    }

    const listItems = ["Software Engineer",
        "Full-Stack Developer",
        "Anime Addict",
        "CEO of my own Company"];

    const [currIndex, setCurrIndex] = useState(0);
    const [animateTextWidth, setAnimateTextWidth] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrIndex(currIndex => (currIndex + 1) % listItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [listItems]);

    // Update margin on string length change
    useEffect(() => {
        // Customize this calculation according to your needs
        const newWidth = listItems[currIndex].length * 40; // for example
        setAnimateTextWidth(newWidth);
    }, [currIndex, listItems]);

    const widthStyle = { width: `${animateTextWidth + 80}px` };




    return (
        <div className="home">

            <div className="home_body">
                <div className="home_body_left">
                    <div className="home_body_left_title">
                        <div className="home_body_left_title_animate">
                            <div className="home_body_left_title_animate_text" > Aspiring </div>
                            <ul className="home_body_left_title_animate_list">
                                <li className="home_body_left_title_animate_list_item">Software Engineer</li>
                                <li className="home_body_left_title_animate_list_item">Full-Stack Developer</li>
                                <li className="home_body_left_title_animate_list_item">App Developer</li>
                                <li className="home_body_left_title_animate_list_item">CEO of my own Company</li>
                            </ul>
                        </div>
                        <h1 className='home_body_left_title_name_firstName'> Teeranade </h1>
                        <h2 className='home_body_left_title_name_lastName'> CHENG</h2>
                    </div>

                    <div className="socials_container">
                        <ul className="socials_container_list"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <li className="socials_container_list_item">
                                <a href="https://www.instagram.com/winzamark12/">
                                    <FontAwesomeIcon icon={faInstagram} size="4x" />
                                </a>
                            </li>
                            <li className="socials_container_list_item">
                                <a href="https://github.com/winzamark123">
                                    <FontAwesomeIcon icon={faGithub} size="4x" />
                                </a>
                            </li>
                            <li className="socials_container_list_item">
                                <a href="https://www.linkedin.com/in/teeranade-cheng-68ab28253/">
                                    <FontAwesomeIcon icon={faLinkedin} size="4x" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Game cursorRef={cursorRef} />
        </div>
    );
}

export default Home;

