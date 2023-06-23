import "./Map.css"

const Map = ({ x, y }) => {
    // 0 = wall
    // 1 = grass 
    // 2 = player
    // mapRef.current.style.transform = `translate3d(${-x * pixelSizeNumber}px, ${-y * pixelSizeNumber}px, 0 )`;
    const pixelSizeNumber = 2;



    var map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    return (
        <div className="map-container">
            <div className="map-pixelart"
                style={{ transform: `translate3d(${-x * pixelSizeNumber}px, ${-y * pixelSizeNumber}px, 0)` }} >
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
