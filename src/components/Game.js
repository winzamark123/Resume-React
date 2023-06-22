
import FrogCharacter from '../assets/Pixel Art Characters/Main Characters/Ninja Frog/Idle (32x32).png'
import { useState, useRef, useEffect, useCallback } from 'react';
import './Game.css';
import Map from './Map';
import Character from './Character';

const Game = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (
        <div className="game-container">
            <div className="frame">
                <Map x={x} y={y} />
                <Character x={x} y={y} setX={setX} setY={setY} />

            </div>
        </div>
    )
}

export default Game; 