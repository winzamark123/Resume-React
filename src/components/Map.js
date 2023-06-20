import "./Map.css"
import PlaceHolderMap from '../assets/PlaceHolderMap.png';
import PlaceHolderMap2 from '../assets/PlaceHolderMap2.png';

const Map = () => {
    // 0 = wall
    // 1 = grass 
    // 2 = player

    const pixelSize = 32;

    var map = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1]
    ];

    return (
        <div className="map-container">
            <div className="map-pixelart">
                <h1>Map</h1>
                <img src={PlaceHolderMap} alt="" />
                <img src={PlaceHolderMap2} alt="" />
            </div>
        </div>
    );
}
export default Map;