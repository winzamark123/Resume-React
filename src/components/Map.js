import "./Map.css"
import PlaceHolderMap from '../assets/PlaceHolderMap.png';
import PlaceHolderMap2 from '../assets/PlaceHolderMap2.png';

const Map = () => {
    // 0 = wall
    // 1 = grass 
    // 2 = player

    const pixelSize = 32;

    var map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    return (
        <div className="map-container">
            <div className="map-pixelart">
                {
                    map.map((row, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {
                                row.map((tile, tileIndex) => (
                                    <div
                                        key={tileIndex}
                                        className={`tile ${tile === 0 ? 'floor' : 'wall'}`}
                                    ></div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Map;
