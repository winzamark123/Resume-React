import "./Resume.scss"
import ResumePDF from '../assets/ResumePage-Assets/Cheng_Teeranade_Resume.pdf'
import ResumeBG from '../assets/ResumePage-Assets/ResumeTable.png'
import highlightResumeBG from '../assets/ResumePage-Assets/ResumeTableHighlight.png'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Resume = ({ cursorRef }) => {

    const [showResume, setShowResume] = useState(false);
    const [bgImage, setBgImage] = useState(ResumeBG);

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

                case "resume_container_item":
                    setBgImage(highlightResumeBG);
                    cursorRef.current.style.width = "100px";
                    cursorRef.current.style.height = "100px";
                    cursorRef.current.style.border = "3px solid #16a085";
                    break;

                default:
                    setBgImage(ResumeBG);
                    cursorRef.current.style.width = "100px";
                    cursorRef.current.style.height = "100px";
                    cursorRef.current.style.border = "3px solid #16a085";
            }
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
            <div className="resume_container"
                style={{
                    transform: "translate3d(0, 0, 0)",
                    willChange: "transform",
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: "center",
                    height: "100vh",
                    imageRendering: "pixelated",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    transition: "0.5s"
                }}
            >
                <div className="resume_container_item"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleResumeToggle}
                    id="resume_container_item"
                >
                </div>
            </div>


            <div className="resume_back"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a className="resume_back_icon" href="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="4x" />
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