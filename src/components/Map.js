import "./Map.scss"
import { useState, useEffect } from 'react';
import RoomMap_Contact from "../assets/RoomMap_Contact.png";
import RoomMap_Projects from "../assets/RoomMap_Projects.png";
import RoomMap_Resume from "../assets/RoomMap_Resume.png";
import RoomMap from "../assets/RoomMap.png";

const NavLinks = {
    "Resume": "/resume",
    "Projects": "/projects",
    "Contact": "/contact",
}

const Map = ({ cursorRef }) => {

    const [bgImage, setBgImage] = useState(RoomMap);




    const handleMouseEnter = (event) => {

        const targetID = event.target.id;

        switch (targetID) {
            case "door":
                setBgImage(RoomMap_Resume);
                break;

            case "livingRoom":
                setBgImage(RoomMap_Projects);
                break;

            case "painting":
                setBgImage(RoomMap_Contact);
                break;

            default:
                setBgImage(RoomMap);
                break;
        }


        if (cursorRef.current) {
            cursorRef.current.style.width = "100px";
            cursorRef.current.style.height = "100px";
            cursorRef.current.style.border = "3px solid #16a085";
        }
    }



    const handleMouseLeave = () => {
        setBgImage(RoomMap);

        if (cursorRef.current) {
            cursorRef.current.style.width = "30px";
            cursorRef.current.style.height = "30px";
            cursorRef.current.style.border = "2px solid white";
        }
    }

    useEffect(() => {
        const images = [RoomMap_Contact, RoomMap_Projects, RoomMap_Resume, RoomMap];
        images.forEach(img => {
            new Image().src = img;
        });
    }, []);

    
    return (
        <div className="map-container" >
            <div className="map-pixelart"
                style={{
                    transform: "translate3d(0, 0, 0)",
                    willChange: "transform",
                    backgroundImage: `url(${bgImage})`,
                    backgroundPosition: "top center",
                    width: "100%",
                    height: "100%",
                    imageRendering: "pixelated",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    transition: "0.5s",
                }}
            >
                <div className="floor" id="floor1"></div>
                <div className="floor" id="floor2">
                    <a className="floor_hover"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        id="door"
                        href={NavLinks["Resume"]}
                    >
                    </a>
                </div>
                <div className="floor" id="floor3">
                    <a className="floor_hover"
                        href={NavLinks["Projects"]}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        id="livingRoom">

                    </a>
                </div>
                <div className="floor" id="floor4"></div>
                <div className="floor" id="floor5">
                    <a className="floor_hover"
                        href={NavLinks["Contact"]}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        id="painting">
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Map;
