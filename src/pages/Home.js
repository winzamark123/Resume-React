import { useState, useEffect } from 'react';
import './Home.scss';

const Home = () => {

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
        const newWidth= listItems[currIndex].length * 40; // for example
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
                            <ul className = "home_body_left_title_animate_list">
                                <li className = "home_body_left_title_animate_list_item">Software Engineer</li>
                                <li className = "home_body_left_title_animate_list_item">Full-Stack Developer</li>
                                <li className = "home_body_left_title_animate_list_item">CEO of my own Company</li>
                                <li className = "home_body_left_title_animate_list_item">Anime Addict</li>
                            </ul>
                        </div>
                        <h1 className='home_body_left_title_name_firstName'> Teeranade </h1>
                        <h2 className='home_body_left_title_name_lastName'> CHENG</h2>
                    </div>
                </div>
                <div className="home_body_right">
                </div>
            </div>
        </div>
    );
}

export default Home;
//Just trying out Commits gg
