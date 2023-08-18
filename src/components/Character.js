import "./Character.scss"
import { useState, useRef, useEffect, useCallback } from 'react';
import FrogCharacter from '../assets/Pixel Art Characters/Main Characters/Ninja Frog/Idle (32x32).png'
import NinjaCharacter from '../assets/Pixel Art Characters/Main Characters/Mask Dude/Idle (32x32).png'
import PinkCharacter from '../assets/Pixel Art Characters/Main Characters/Pink Man/Idle (32x32).png'
import VirtualCharacter from '../assets/Pixel Art Characters/Main Characters/Virtual Guy/Idle (32x32).png'


const Character = ({ characterName, initPos }) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [facing, setFacing] = useState("down");
    const [walking, setWalking] = useState(false);
    const characterRef = useRef(null);
    var speed = 3;

    const characterImages = {
        "Frog": FrogCharacter,
        "Ninja": NinjaCharacter,
        "Pink": PinkCharacter,
        "Virtual": VirtualCharacter
    };

  

    useEffect(() => {
        //Initialize Position at the Start of Render
        if (initPos) {
            setX(initPos.x);
            setY(initPos.y);
        }

        function moveCharacterX(mouseX) {
            setX((currentX) => {
                if (mouseX < currentX) {
                    setFacing("left");
                    setWalking(true);
                    return currentX - speed;
                } else if (mouseX > currentX) {
                    setFacing("right");
                    setWalking(true);
                    return currentX + speed;
                }

                return currentX;
            });
        }

        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            moveCharacterX(mouseX);
        }

        //Move Character based on Mouse 
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [initPos, speed]);

    useEffect(() => {
        console.log("Updated x:", x);
    }, [x]);


    return (
        <div className="character" style={{ left: `${x}px`, top: `${y}px` }}>
            <div ref={characterRef} className={`character_container ${facing} ${walking ? 'walking' : ''}`}>
                <img src={characterImages[characterName]} className="character_container_spritesheet" alt="" />
            </div>
        </div>
    );
}
export default Character;