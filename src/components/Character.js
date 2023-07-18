import "./Character.css"
import { useState, useRef, useEffect, useCallback } from 'react';
import FrogCharacter from '../assets/Pixel Art Characters/Main Characters/Ninja Frog/Idle (32x32).png'
import NinjaCharacter from '../assets/Pixel Art Characters/Main Characters/Mask Dude/Idle (32x32).png'
import PinkCharacter from '../assets/Pixel Art Characters/Main Characters/Pink Man/Idle (32x32).png'
import VirtualCharacter from '../assets/Pixel Art Characters/Main Characters/Virtual Guy/Idle (32x32).png'


const Character = ({ characterName, initPos, isActive, activeCharacterIndex }) => {

    const characterImages = {
        "Frog": FrogCharacter,
        "Ninja": NinjaCharacter,
        "Pink": PinkCharacter,
        "Virtual": VirtualCharacter
    };

    var speed = 3;

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

    const keys = {
        37: directions.left,
        39: directions.right,
    }

    const placeCharacter = useCallback(() => {
        // var pixelSizeNumber = parseInt(pixelSize);
        const currentDirection = heldDirectionsArray[0];

        if (currentDirection === directions.right) {
            setX(x => x + speed);
        }
        if (currentDirection === directions.left) {
            setX(x => x - speed);
        }

        setFacing(currentDirection); //set facing to the current direction
        setWalking(currentDirection ? true : false); //set walking to true if the current direction is anything other than null

        // mapRef.current.style.transform = `translate3d(${-x * pixelSizeNumber}px, ${-y * pixelSizeNumber}px, 0 )`;
        characterRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }, [x, directions, setX, setFacing, setWalking, heldDirectionsArray]);

    const step = useCallback(() => {
        placeCharacter();
    }, [placeCharacter]);

    useEffect(() => {
        window.requestAnimationFrame(step);
    }, [step]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // console.log(e.keyCode);
            var dir = keys[e.keyCode];
            if (dir && heldDirectionsArray.indexOf(dir) === -1 && isActive) {
                //might have to change this line as the array is being expanded from the front 
                setHeldDirectionsArray((prev) => [dir, ...prev]);
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [heldDirectionsArray, keys]);

    useEffect(() => {
        const handleKeyUp = (e) => {
            var dir = keys[e.keyCode];
            var index = heldDirectionsArray.indexOf(dir);
            if (index > -1 && isActive) {
                setHeldDirectionsArray((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
            }
        }

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };


    }, [heldDirectionsArray, keys]);





    return (
        <div className="character-container">
            <div ref={characterRef} className="character" facing={facing} walking={walking}>
                <img src={characterImages[characterName]} className="character_spritesheet" alt="" />
                <img src={characterImages[characterName]} className="character_spritesheet" alt="" />
                <img src={characterImages[characterName]} className="character_spritesheet" alt="" />
                <img src={characterImages[characterName]} className="character_spritesheet" alt="" />
            </div>
        </div>
    );
}
export default Character;