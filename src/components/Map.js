import "./Map.scss"

const Map = () => {

    return (
        <div className="map-container">
            <div className="map-pixelart">
                <div className="floor" id="floor1"></div>
                <div className="floor" id="floor2">
                    <div className="floor_hover" id = "door">

                    </div>
                </div>
                <div className="floor" id="floor3">
                    <div className="floor_hover" id = "livingRoom">

                    </div>
                </div>
                <div className="floor" id="floor4"></div>
                <div className="floor" id="floor5">
                    <div className="floor_hover" id = "painting">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Map;
