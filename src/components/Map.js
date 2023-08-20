import "./Map.scss"

const Map = () => {

    return (
        <div className="map-container">
            <div className="map-pixelart">
                <div className="floor" id="floor1"></div>
                <div className="floor" id="floor2">
                    <div className="floor_door">
                        
                    </div>
                </div>
                <div className="floor" id="floor3"></div>
                <div className="floor" id="floor4"></div>
                <div className="floor" id="floor5"></div>
            </div>
        </div>
    );
}
export default Map;
