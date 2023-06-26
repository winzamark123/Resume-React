import "./Map.css"
import RoomMap from "../assets/RoomMap.png";

const Map = ({ x, y }) => {
    // 0 = wall
    // 1 = grass 
    const speed = 1;
    const tileSize = 32; // or whatever size your tiles should be
    const mapSize = 1024;
    const mapTiles = mapSize / tileSize;

    var map = new Array(mapTiles).fill(new Array(mapTiles).fill(0));

    // var map = [
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    //     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    // ];

    return (
        <div className="map-container">
            <div className="map-pixelart"
                style={{ transform: `translate3d(${-x * speed}px, ${-y * speed}px, 0)` }} >
                {
                    map.map((row, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {
                                row.map((tile, tileIndex) => (
                                    <div
                                        key={tileIndex}
                                    // className={`tile ${tile === 0 ? 'floor' : 'wall'}`}
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
