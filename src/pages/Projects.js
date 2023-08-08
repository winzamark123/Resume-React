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

const CarouselItem = ({ order, title, descrip, style }) => {

    const isEven = Number(order) % 2 === 0;

    return (
        <div className="projects_container_carousel_item" data-order={order} style={style}>
            <div className={`projects_container_carousel_item_left_${isEven ? 'even' : 'odd'}`}
                style={isEven ? {} : style}
            >
                <div className="projects_container_carousel_item_left_text"
                    style={isEven ? { display: "flex" } : { display: "none" }}
                >
                    <h1>{title}</h1>
                    <p>{descrip}</p>
                </div>
            </div>
            <div className={`projects_container_carousel_item_right_${isEven ? 'even' : 'odd'}`}
                style={isEven ? style : {}}
            >
                <div className="projects_container_carousel_item_right_text"
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
                    <CarouselItem order={1} title="ImageGPT" style={backgroundImageStyles[0]} />
                    <CarouselItem order={2} title="TASA Website" style={backgroundImageStyles[1]} />
                    <CarouselItem order={3} title="Finance Automation" style={backgroundImageStyles[2]} />
                </div>
            </div>
        </div>

    )
}

export default Projects