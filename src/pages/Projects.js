import "./Projects.scss"
import tasaBG from "../assets/ProjectsPage-Assets/TASA-bg.png"
import imageGPTBG from "../assets/ProjectsPage-Assets/NewImageGPT-bg.png"
import financeAutoBG from "../assets/ProjectsPage-Assets/FinanceAuto-bg.png"

const backgroundImageStyles = [
    {
        backgroundImage: `url(${imageGPTBG})`,
        backgroundSize: "120%",
        backgroundPosition: "50% 50%"
    },
    {
        backgroundImage: `url(${tasaBG})`,
        backgroundSize: "180%",
        backgroundPosition: "50% 100%"
    },
    {
        backgroundImage: `url(${financeAutoBG})`,
        backgroundSize: "170%",
        backgroundPosition: "5% 50%"
    }
];

const itemLabels = [
    {
        title: "ImageGPT",
        descrip: "ImageGPT: An advanced GPT-3 model trained to convert visual data into actionable text content, enabling dynamic queries on image-derived contexts.",
        backgroundImageStyles: `${backgroundImageStyles[0]}`,
        marginLeft: "150px"
    },

    {
        title: "TASA Website",
        descrip: "A website for the Thai American Student Association at UCSD, built with React and Firebase.",
        backgroundImageStyles: `${backgroundImageStyles[1]}`,
        marginLeft: "200px"
    },

    {
        title: "Finance Automation",
        descrip: "A Python script that automates the process of organizing financial data from multiple sources to be represented in one easy to read spreadsheet.",
        backgroundImageStyles: `${backgroundImageStyles[2]}`
    }


]

const CarouselItem = ({ order, projectStyles, style }) => {

    const isEven = Number(order) % 2 === 0;
    const { title, descrip } = projectStyles;

    return (
        <div className="projects_container_carousel_item" data-order={order} style={style}>
            <div className={`projects_container_carousel_item_left_${isEven ? 'even' : 'odd'}`}
                style={isEven ? {} : style}
            >
                <div className="projects_container_carousel_item_text"
                    style={isEven ? { display: "flex" } : { display: "none" }}
                >
                    <h1>{title}</h1>
                    <p>{descrip}</p>
                </div>

            </div>
            <div className={`projects_container_carousel_item_right_${isEven ? 'even' : 'odd'}`}
                style={isEven ? style : {}}
            >
                <div className="projects_container_carousel_item_text"
                    style={isEven ? { display: "none" } : { display: "flex" }}
                >
                    <h1>{title}</h1>
                    <p>{descrip}</p>
                </div>

            </div>
        </div>
    );
}







const Projects = ({ cursorRef }) => {

    const handleMouseEnter = (event) => {
        if (cursorRef.current) {
            const targetID = event.target.id;
            switch (targetID) {
                default:
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

    return (
        <div className="projects">
            <div className="projects_container">
                <div className="projects_container_carousel">
                    <div className="projects_container_carousel_floor" id="floor1">
                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[0]["title"]} //id = ImageGPT
                            style={{ marginLeft: "10vw" }}
                        ></div>

                    </div>

                    <div className="projedcts_container_carousel_floor" id="floor2">
                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[1]["title"]}
                            style={{ marginLeft: "12vw" }}
                        ></div>
                    </div>
                    <div className="projects_container_carousel_floor" id="floor3">

                    </div>
                    <div className="projects_container_carousel_floor" id="floor4">
                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[2]["title"]}
                            style={{ marginLeft: "50vw" }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="projects_title">
                <span>Some of my not so cool </span>
                <h1>Projects</h1>
            </div>
            <div className="projects_items">
                
            </div>
        </div>

    )
}

export default Projects