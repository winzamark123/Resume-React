import "./Projects.scss"
import tasaBG from "../assets/Projects-BG/TASA-bg.png"
import imageGPTBG from "../assets/Projects-BG/NewImageGPT-bg.png"
import financeAutoBG from "../assets/Projects-BG/FinanceAuto-bg.png"

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

const itemLabelStyles = [
    {
        title: "ImageGPT",
        descrip: "ImageGPT: An advanced GPT-3 model trained to convert visual data into actionable text content, enabling dynamic queries on image-derived contexts.",
        backgroundImageStyles: `${backgroundImageStyles[0]}`
    },

    {
        title: "TASA Website",
        descrip: "A website for the Thai American Student Association at UCSD, built with React and Firebase.",
        backgroundImageStyles: `${backgroundImageStyles[1]}`
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

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects_container">
                <div className="projects_container_text">
                    <span>Some of my not so cool </span>
                    <h1>Projects</h1>
                </div>
                <div className="projects_container_carousel">
                    <CarouselItem order={1} projectStyles={itemLabelStyles[0]} style={backgroundImageStyles[0]} />
                    <CarouselItem order={2} projectStyles={itemLabelStyles[1]} style={backgroundImageStyles[1]} />
                    <CarouselItem order={3} projectStyles={itemLabelStyles[2]} style={backgroundImageStyles[2]} />
                </div>
            </div>
        </div>

    )
}

export default Projects