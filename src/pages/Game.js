import { useEffect, useState } from 'react';
import './Game.scss';
import Map from '../components/Map';
import Character from '../components/Character';
import Item from '../components/Items';

const Game = () => {
    var [x, setX] = useState(0);
    var [y, setY] = useState(-13);

    const [characterNames] = useState(["Frog", "Ninja", "Pink", "Virtual"]);
    const [activeCharacterIndex, setActiveCharacterIndex] = useState(0);

    const initPos = {
        "Frog": { x: 0, y: 0 },
        "Ninja": { x: 0, y: 100 },
        "Pink": { x: 0, y: 200 },
        "Virtual": { x: 0, y: 300 },
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 38) {
                setActiveCharacterIndex(activeCharacterIndex => ((activeCharacterIndex - 1) % characterNames.length) < 0 ? 0 : (activeCharacterIndex - 1) % characterNames.length);
                console.log(activeCharacterIndex);
            }

            if (e.keyCode === 40) {
                if (e.keyCode === 40) {
                    setActiveCharacterIndex(activeCharacterIndex => activeCharacterIndex < characterNames.length - 1 ? activeCharacterIndex + 1 : activeCharacterIndex);
                }

                console.log(activeCharacterIndex);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }

    }, [activeCharacterIndex, characterNames.length]);

    return (
        <div className="game_container">
            <div className="frame">
                <Map />
                <Character characterName={characterNames[0]} initPos={characterNames[0]} />
            </div>
            <div className="game_container_right">
                <p>Scroll Down ↓</p>
            </div>
        </div>
    )
}

export default Game; 