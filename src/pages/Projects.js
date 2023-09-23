import "./Projects.scss"
import tasaBG from "../assets/ProjectsPage-Assets/TASA-bg.png"
import imageGPTBG from "../assets/ProjectsPage-Assets/NewImageGPT-bg.png"
import financeAutoBG from "../assets/ProjectsPage-Assets/FinanceAuto-bg.png"
import nutriHealthBG from "../assets/ProjectsPage-Assets/NutriHealth.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


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
        backgroundImage: `url(${nutriHealthBG})`,
        backgroundSize: "90%",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat"
    },
    {
        backgroundImage: `url(${financeAutoBG})`,
        backgroundSize: "160%",
        backgroundPosition: "5% 50%",
        backgroundRepeat: "no-repeat"
    }
];

const itemLabels = [
    {
        title: "<ImageGPT/>",
        descrip: "ImageGPT: An adaptation of GPT-3 framework, modeled and trained to convert visual data into actionable and describable text content, enabling dynamic queries on image-derived contexts. Users can upload different Images of PDFs, text messages, etc, and ask questions directly with our chatbot.",
        link: "https://github.com/hdjekso/imageGPT",
        linkType: "Github: ",
        tools: "OpenAI GPT 3.5 API | React.js | Tesseract | MySQL",
        backgroundImageStyles: `${backgroundImageStyles[0]}`,
    },

    {
        title: "<TASA Website/>",
        descrip: "A website for the Thai American Student Association at UCSD, built with Plain HTML and CSS deployed using Firebase. The Website's purpose is to showcase the Thai American Student Association which exists in UC-Davis.",
        link: "https://tasa-ucdavis.com",
        linkType: "Website: ",
        tools: "HTML | CSS | Javascript | Firebase",
        backgroundImageStyles: `${backgroundImageStyles[1]}`,
    },

    {
        title: "<NutriHealth.AI/>",
        descrip: "AI for Food System - Hackathon Winner: Application Market Ready. We proposed a solution to autonomously manage the nutritional diets of individuals, effectively minimizing the need for continual user input. To visually encapsulate our concept and showcase its feasibility, we crafted a compelling UI/UX prototype using tools like Figma and Balsamiq.",
        link: "https://tinyurl.com/NutriHealthAI123",
        linkType: "Figma: ",
        tools: "Figma | Balsamiq ",
        backgroundImageStyles: `${backgroundImageStyles[2]}`
    },
    {
        title: "<Finance Automation/>",
        descrip: "A Python-based automation solution designed to consolidate financial data from diverse sources, facilitating its representation in a streamlined and comprehensible spreadsheet format. The program is set on a private server which runs monthly, updating the users about their current spending habits and choices.",
        link: "https://github.com/winzamark123/FinanceAutomation",
        linkType: "Github: ",
        tools: "Python3 | gspread | Panda | Numpy",
        backgroundImageStyles: `${backgroundImageStyles[3]}`
    }


]









const Projects = ({ cursorRef }) => {
    const [filterSetting, setFilterSetting] = useState("none");
    const [selectedCarousel, setSelectedCarousel] = useState(null);

    const CarouselItem = ({ order, projectStyles, style }) => {

        const isEven = Number(order) % 2 === 0;
        const { title, descrip, link, tools, linkType } = projectStyles;

        return (
            <div className="projects_items_show_item" data-order={order} style={style}>
                <div className={`projects_items_show_item_left_${isEven ? 'even' : 'odd'}`}
                    style={isEven ? {} : style}
                >
                    <div className="projects_items_show_item_text"
                        style={isEven ? { display: "flex" } : { display: "none" }}
                    >
                        <h1>{title}</h1>
                        <p>{descrip}</p>
                        <div className="projects_items_show_item_text_creds"
                            id="projects_items_show_item_text_credsID"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="projects_items_show_item_text_creds_tools">
                                <span>
                                    {"Developer Tools: "}
                                </span>
                                {`${tools}`}
                            </span>
                            <div className="projects_items_show_item_text_creds_link"
                            >
                                <span>
                                    {linkType}
                                </span>
                                <a href={link}>
                                    {link}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`projects_items_show_item_right_${isEven ? 'even' : 'odd'}`}
                    style={isEven ? style : {}}
                >
                    <div className="projects_items_show_item_text"
                        style={isEven ? { display: "none" } : { display: "flex" }}
                    >
                        <h1>{title}</h1>
                        <p>{descrip}</p>
                        <div className="projects_items_show_item_text_creds"
                            id="projects_items_show_item_text_credsID"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="projects_items_show_item_text_creds_tools">
                                <span>
                                    {"Developer Tools: "}
                                </span>
                                {`${tools}`}
                            </span>
                            <div className="projects_items_show_item_text_creds_link"
                            >
                                <span>
                                    {linkType}
                                </span>
                                <a href={link}>
                                    {link}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

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
            console.log(targetID);
            switch (targetID) {

                case "projects_back_BTN":
                    cursorRef.current.style.width = "100px";
                    cursorRef.current.style.height = "100px";
                    cursorRef.current.style.border = "3px solid #E2684A";
                    break;

                case "projects_items_show_backContainer_backBTN":
                    cursorRef.current.style.width = "100px";
                    cursorRef.current.style.height = "100px";
                    cursorRef.current.style.border = "3px solid #E2684A";
                    break;

                case "projects_items_show_item_text_credsID":
                    cursorRef.current.style.width = "100px";
                    cursorRef.current.style.height = "100px";
                    cursorRef.current.style.border = "3px solid #E2684A";
                    break;

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



    const handleProjectsToggle = (item, index) => {
        if (selectedCarousel && index === selectedCarousel.index) {
            setSelectedCarousel(null);
            setFilterSetting("none");
        } else {
            setSelectedCarousel({ ...item, index });
            setFilterSetting('blur(5px) contrast(130%)');
        }
    }

    return (
        <div className="projects" style={{ "--filterSettings": filterSetting }}
            onMouseEnter={handleMouseLeave}
        >
            <div className="projects_container">
                <div className="projects_container_carousel">
                    <div className="projects_container_carousel_floor" id="projectsPage_floor1">
                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[0]["title"]} //id = ImageGPT
                            style={{ marginLeft: "10vw", backgroundPosition: "41% 27%" }}
                            onClick={() => handleProjectsToggle(itemLabels[0], 0)}
                        ></div>

                    </div>

                    <div className="projects_container_carousel_floor" id="projectsPage_floor2">
                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[1]["title"]}
                            style={{ marginLeft: "12vw", backgroundPosition: "1% 48%" }}
                            onClick={() => handleProjectsToggle(itemLabels[1], 1)}
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
                            onClick={() => handleProjectsToggle(itemLabels[2], 2)}
                        ></div>

                        <div className="projects_container_carousel_floor_hover"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            id={itemLabels[3]["title"]}
                            style={{ backgroundPosition: "20% 25%" }}
                            onClick={() => handleProjectsToggle(itemLabels[3], 3)}
                        ></div>
                    </div>
                </div>
            </div>


            <div className="projects_title">
                <span>Some of my really cool</span>
                <h1>Projects</h1>
            </div>

            {selectedCarousel ? "" : <div className="projects_back"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a className="projects_back_icon" href="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="4x" id="projects_back_BTN" />
                </a>

            </div>}

            <div className={`projects_items_${selectedCarousel ? "show" : ""}`}>
                {selectedCarousel && carouselItems[selectedCarousel.index]}
                {selectedCarousel &&
                    (
                        <div className="projects_items_show_backContainer">
                            <btn
                                className="projects_items_show_backContainer_backBTN"
                                id="projects_items_show_backContainer_backBTN"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleProjectsToggle(itemLabels[selectedCarousel.index], selectedCarousel.index)}
                            >←Lets go Back!
                            </btn>
                        </div>


                    )}
            </div>
        </div>

    )
}

export default Projects