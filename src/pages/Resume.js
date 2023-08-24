import "./Resume.scss"
import { useState, useRef, useEffect, useCallback } from 'react';

const Resume = ({ cursorRef }) => {
    const [showResume, setShowResume] = useState(false);

    const handleMouseEnter = () => {
        if (cursorRef.current) {
            cursorRef.current.style.width = "100px";
            cursorRef.current.style.height = "100px";
            cursorRef.current.style.border = "3px solid #16a085";
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
            <div className="resume_container">
                <div className="resume_container_item" 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick = {handleResumeToggle}
                > 
                </div>

                <div className={`resume_container_item_${showResume ? "show" : ""}`}>

                </div>
            </div>
        </div>

    )
}

export default Resume; 