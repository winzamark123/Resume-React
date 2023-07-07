import { useEffect, useState } from 'react';
import './Game.css';
import Map from './Map';
import Character from './Character';
import Item from './Items';

const Game = () => {
    var [x, setX] = useState(0);
    var [y, setY] = useState(-13);

    const [characterNames] = useState(["Frog", "Ninja", "Pink", "Virtual"]);
    const [activeCharacterIndex, setActiveCharacterIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 38) {
                setActiveCharacterIndex(activeCharacterIndex => (activeCharacterIndex - 1) % characterNames.length);
            }

            if (e.keyCode === 40) {
                setActiveCharacterIndex(activeCharacterIndex => (activeCharacterIndex + 1) % characterNames.length);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }

    }, [activeCharacterIndex, characterNames.length]);





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