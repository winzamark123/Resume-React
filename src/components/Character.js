import "./Character.scss"
import { useState, useRef, useEffect, useCallback } from 'react';
import FrogCharacter from '../assets/Pixel Art Characters/Main Characters/Ninja Frog/Idle (32x32).png'
import NinjaCharacter from '../assets/Pixel Art Characters/Main Characters/Mask Dude/Idle (32x32).png'
import PinkCharacter from '../assets/Pixel Art Characters/Main Characters/Pink Man/Idle (32x32).png'
import VirtualCharacter from '../assets/Pixel Art Characters/Main Characters/Virtual Guy/Idle (32x32).png'


const Character = ({ characterName, initPos }) => {
    var speed = 3;
    const characterImages = {
        "Frog": FrogCharacter,
        "Ninja": NinjaCharacter,
        "Pink": PinkCharacter,
        "Virtual": VirtualCharacter
    };

    const characterRef = useRef(null);

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [facing, setFacing] = useState("down");
    const [walking, setWalking] = useState(false);
    var [heldDirectionsArray, setHeldDirectionsArray] = useState([]);

    useEffect(() => {
        if (initPos) {
            setX(initPos.x);
            setY(initPos.y);
        }
    }, [initPos]);

    const directions = {
        left: "left",
        right: "right"
    }

    return (
        <div className="character">
            <div ref={characterRef} className="character_container" facing={facing} walking={walking}>
                <img src={characterImages[characterName]} className="character_container_spritesheet" alt="" />
            </div>
        </div>
    );
}
export default Character;