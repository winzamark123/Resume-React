import "./Map.scss"

const NavLinks = {
    "Resume": "/resume",
    "Projects": "/projects",
    "Contact": "/contact",
}

const Map = ({ cursorRef }) => {

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

    const handleClick = (e) => {
        e.preventDefault();
        console.log("clicked");


    }

    return (
        <div className="map-container">
            <div className="map-pixelart">
                <div className="floor" id="floor1"></div>
                <div className="floor" id="floor2">
                    <a className="floor_hover"
                        href={NavLinks["Resume"]}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        id="door"
                    >
                        <div className="floor_hover_inside" ></div>
                    </a>
                </div>
                <div className="floor" id="floor3">
                    <a className="floor_hover"
                        href={NavLinks["Projects"]}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        id="livingRoom">

                        <div className="floor_hover_inside" ></div>
                    </a>
                </div>
                <div className="floor" id="floor4"></div>
                <div className="floor" id="floor5">
                    <a className="floor_hover"
                        href={NavLinks["Contact"]}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        id="painting">
                        <div className="floor_hover_inside" ></div>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Map;
