
import FrogCharacter from '../assets/Pixel Art Characters/Main Characters/Ninja Frog/Idle (32x32).png'
import { useState, useRef, useEffect, useCallback } from 'react';
import './Game.css';
import Map from './Map';
import Character from './Character';

const Game = () => {
    return (
        <div className="frame">
            <Map />
            <Character />

        </div>
    )
}

export default Game; 