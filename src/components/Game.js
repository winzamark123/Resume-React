import { useEffect, useState } from 'react';
import './Game.css';
import Map from './Map';
import Character from './Character';
import Item from './Items';

const Game = () => {
    var [x, setX] = useState(0);
    var [y, setY] = useState(0);

    // const leftLimit = -125;
    // const rightLimit = 130;
    // const topLimit = -35;
    // const bottomLimit = 35;

    // useEffect(() => {

    //     if (x < leftLimit) {
    //         setX(leftLimit);
    //     };

    //     if (x > rightLimit) {
    //         setX(rightLimit);
    //     };

    //     if (y < topLimit) {
    //         setY(topLimit);
    //     };

    //     if (y > bottomLimit) {
    //         setY(bottomLimit);
    //     };

    // }, [x, y, leftLimit, rightLimit, topLimit, bottomLimit]);

    return (
        <div className="game-container">
            <div className="frame">
                <Map x={x} y={y} />
                <Character x={x} y={y} setX={setX} setY={setY} />
                {/* <Item x={x} y={y} /> */}
            </div>
        </div>
    )
}

export default Game; 