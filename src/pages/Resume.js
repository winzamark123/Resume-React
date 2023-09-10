import "./Resume.scss"
import ResumePDF from '../assets/ResumePage-Assets/Cheng_Teeranade_Resume.pdf'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Resume = ({ cursorRef }) => {

    const [showResume, setShowResume] = useState(false);

    const handleMouseEnter = (event) => {
        if (cursorRef.current) {
            const targetID = event.target.id;
            switch (targetID) {
                case "back_BTN":
                    cursorRef.current.style.width = "100px";
                    cursorRef.current.style.height = "100px";
                    cursorRef.current.style.border = "3px solid #E2684A";
                    cursorRef.current.style.cursor = "none";
                    break;

                case "download_BTN":
                    cursorRef.current.style.width = "100px";
                    cursorRef.current.style.height = "100px";
                    cursorRef.current.style.border = "3px solid #16a085";
                    cursorRef.current.style.cursor = "none";
                    break;
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


    const handleResumeToggle = () => {
        setShowResume(!showResume);
    }


    return (
        <div className="resume">
            <div className="resume_title">
                <span>Take a look at my </span>
                <h1>Resume!</h1>
            </div>
            <div className="resume_container">
                <div className="resume_container_item"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleResumeToggle}
                >
                </div>
            </div>

            <div className="resume_back"
                id="back_BTN"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a className="resume_back_icon" href="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="4x" beat />
                </a>

            </div>

            <div className={`resume_popup_${showResume ? "show" : ""}`}>
                <iframe
                    title="ResumePDF"
                    src={ResumePDF}
                    frameborder="0"
                    width="100%"
                    height="100%"
                ></iframe>
                <div className="resume_popup_show_download">
                    <btn
                        id="back_BTN"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleResumeToggle}
                    >←Lets go Back!
                    </btn>
                    <a
                        id="download_BTN"
                        href={ResumePDF}
                        download={ResumePDF}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >Download Here!</a>
                </div>
            </div>
        </div >

    )
}

export default Resume; 