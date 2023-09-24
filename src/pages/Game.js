import { useEffect, useState } from 'react';
import './Game.scss';
import Map from '../components/Map';
import Character from '../components/Character';

const Game = ({cursorRef}) => {
    return (
        <div className="game_container">
            <div className="frame">
                <Map cursorRef={cursorRef}/>
                {/* <Character characterName={characterNames[0]} initPos={initPos[characterNames[0]]} /> */}
            </div>
            <div className="game_container_right">
                <p>Scroll Down ↓</p>
            </div>
        </div>
    )
}

export default Game; 