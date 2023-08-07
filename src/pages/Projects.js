import "./Projects.scss"
import tasaBG from "../assets/Projects-BG/TASA-bg.png"
import imageGPTBG from "../assets/Projects-BG/NewImageGPT-bg.png"
import financeAutoBG from "../assets/Projects-BG/FinanceAuto-bg.png"

const CarouselItem = ({ order, style }) => {

    const isEven = Number(order) % 2 === 0;

    return (
        <div className="projects_container_carousel_item" data-order={order} style={style}>
            <div className={`projects_container_carousel_item_left_${isEven ? 'even' : 'odd'}`}
                style={isEven ? {} : style}
            >
            </div>
            <div className={`projects_container_carousel_item_right_${isEven ? 'even' : 'odd'}`}
                style={isEven ? style : {}}
            >

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
                    <CarouselItem order={1} style={{ backgroundImage: `url(${imageGPTBG})`, backgroundSize: "120%", backgroundPosition: "50% 50%", }} />
                    <CarouselItem order={2} style={{ backgroundImage: `url(${tasaBG})`, backgroundSize: "180%", backgroundPosition: "50% 100%" }} />
                    <CarouselItem order={3} style={{ backgroundImage: `url(${financeAutoBG})`, backgroundSize: "170%", backgroundPosition: "5% 50%", backgroundRepeat: "no-repeat", }} />
                </div>
            </div>
        </div>

    )
}

export default Projects