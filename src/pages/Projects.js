import "./Projects.scss"
import tasaBG from "../assets/ProjectsPage-Assets/TASA-bg.png"
import imageGPTBG from "../assets/ProjectsPage-Assets/NewImageGPT-bg.png"
import financeAutoBG from "../assets/ProjectsPage-Assets/FinanceAuto-bg.png"
import tempBG from "../assets/PlaceHolderMap.png"

import { useState } from "react"

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
    },
    {
        backgroundImage: `url(${tempBG})`,
        backgroundSize: "100%",
        backgroundPosition: "50% 50%"
    }
];

const itemLabels = [
    {
        title: "ImageGPT",
        descrip: "ImageGPT: An advanced GPT-3 model trained to convert visual data into actionable text content, enabling dynamic queries on image-derived contexts.",
        backgroundImageStyles: `${backgroundImageStyles[0]}`,
        height: "100vh"
        // marginLeft: "150px"
    },

    {
        title: "TASA Website",
        descrip: "A website for the Thai American Student Association at UCSD, built with React and Firebase.",
        backgroundImageStyles: `${backgroundImageStyles[1]}`,
        // marginLeft: "200px"
    },

    {
        title: "Finance Automation",
        descrip: "A Python script that automates the process of organizing financial data from multiple sources to be represented in one easy to read spreadsheet.",
        backgroundImageStyles: `${backgroundImageStyles[2]}`
    },
    {
        title: "Temp",
        descrip: "temp descrip",
        backgroundImageStyles: `${backgroundImageStyles[3]}`
    }


]

const CarouselItem = ({ order, projectStyles, style }) => {

    const isEven = Number(order) % 2 === 0;
    const { title, descrip } = projectStyles;

    return (
        <div className="projects_items_item" data-order={order} style={style}>
            <div className={`projects_items_item_left_${isEven ? 'even' : 'odd'}`}
                style={isEven ? {} : style}
            >
                <div className="projects_items_item_text"
                    style={isEven ? { display: "flex" } : { display: "none" }}
                >
                    <h1>{title}</h1>
                    <p>{descrip}</p>
                </div>

            </div>
            <div className={`projects_items_item_right_${isEven ? 'even' : 'odd'}`}
                style={isEven ? style : {}}
            >
                <div className="projects_items_item_text"
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
    const [showCarousel, setShowCarousel] = useState("")
    const [selectedCarousel, setSelectedCarousel] = useState(null)

    const carouselItems = itemLabels.map((item, index) => (
        <CarouselItem
            key={index}
            order={index}
            projectStyles={item}
            style={backgroundImageStyles[index]}
        />
    ));

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



    const handleProjectsToggle = (item) => {
        setShowCarousel(!showCarousel);

        console.log(selectedCarousel);

        if (selectedCarousel && item.index === selectedCarousel.index) {
            setSelectedCarousel(null);
        } else {
            setSelectedCarousel(item);
        }
    }

    return (
        <div className="projects">
            <div className="projects_container">
                <div className="projects_container_carousel">
                    <div className="projects_container_carousel_floor" id="projectsPage_floor1">
                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[0]["title"]} //id = ImageGPT
                            style={{ marginLeft: "10vw", backgroundPosition: "41% 27%" }}
                            onClick={() => handleProjectsToggle(itemLabels[0])}
                        ></div>

                    </div>

                    <div className="projects_container_carousel_floor" id="projectsPage_floor2">
                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[1]["title"]}
                            style={{ marginLeft: "12vw", backgroundPosition: "1% 48%" }}
                            onClick={() => handleProjectsToggle(itemLabels[1])}
                        ></div>
                    </div>
                    <div className="projects_container_carousel_floor" id="projectsPage_floor3">

                    </div>
                    <div className="projects_container_carousel_floor" id="projectsPage_floor4">
                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[2]["title"]}
                            style={{ marginLeft: "43vw", backgroundPosition: "100% 25%" }}
                            onClick={() => handleProjectsToggle(itemLabels[2])}
                        ></div>

                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[3]["title"]}
                            style={{ backgroundPosition: "20% 25%" }}
                            onClick={() => handleProjectsToggle(itemLabels[3])}
                        ></div>
                    </div>
                </div>
            </div>


            <div className="projects_title">
                <span>Some of my not so cool </span>
                <h1>Projects</h1>
            </div>

            <div className={`projects_items_${showCarousel ? "show" : ""}`}>
                {/* {selectedCarousel &&
                    <CarouselItem
                        key={selectedCarousel.title}
                        order={itemLabels.findIndex(item => item.title === selectedCarousel.title)}
                        projectStyles={selectedCarousel}
                        style={backgroundImageStyles[itemLabels.findIndex(item => item.title === selectedCarousel.title)]}
                    />
                } */}

                {selectedCarousel && carouselItems[selectedCarousel.index]}


            </div>
        </div>

    )
}

export default Projects