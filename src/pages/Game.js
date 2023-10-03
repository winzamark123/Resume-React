import { useEffect, useState } from 'react';
import './Game.scss';
import Map from '../components/Map';
import Character from '../components/Character';

const Game = ({cursorRef}) => {
    return (
        <div className="game_container">
            <div className="frame">
                <Map cursorRef={cursorRef}/>
            </div>
            <div className="game_container_right">
                <p>Scroll Down ↓</p>
            </div>
            <div className="game_container_text">
                <div className="game_container_text_floor1"></div>
                <div className="game_container_text_floor2"></div>
                <div className="game_container_text_floor3"></div>
                <div className="game_container_text_floor4"></div>
                <div className="game_container_text_floor5"></div>
            </div>
        </div>
    )
}

export default Game; 