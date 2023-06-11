import PlaceHolderMap from '../assets/PlaceHolderMap.png';
import PlaceHolderCharacter from '../assets/PlaceHolderCharacter.png';
import { useState, useRef, useEffect } from 'react';
import './Game.css';


const Game = () => {
    var pixelSize = 2;
    var speed = 1;

    const characterRef = useRef(null);
    const mapRef = useRef(null);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [facing, setFacing] = useState("down");
    const [walking, setWalking] = useState(false);

    var [heldDirectionsArray, setHeldDirectionsArray] = useState([]);

    const placeCharacter = () => {
        var pixelSizeNumber = parseInt(pixelSize);
        const currentDirection = heldDirectionsArray[0];
        if (currentDirection === "right") {
            setX(x => x + speed);
        }
        if (currentDirection === "left") {
            setX(x => x - speed);
        }
        if (currentDirection === "up") {
            setY(y => y - speed);
        }
        if (currentDirection === "down") {
            setY(y => y + speed);
        }
        
        setFacing(currentDirection); //set facing to the current direction
        setWalking(currentDirection ? true : false); //set walking to true if the current direction is anything other than null


        characterRef.current.style.transform = `translate(${x * pixelSizeNumber}px, ${y * pixelSizeNumber}px)`;
    }

    return (
        <div className="frame">
            <div ref = {mapRef} className="map-pixel-art">
                <img src={PlaceHolderMap} alt="" />
                <div ref = {characterRef} className="character" facing = {facing} walking = {walking}>
                    <img src={PlaceHolderCharacter} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Game; 