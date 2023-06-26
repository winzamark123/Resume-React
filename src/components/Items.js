import "./Items.css";
import { useState, useRef, useEffect, useCallback } from 'react';
import PlaceHolderCharacter from "../assets/PlaceHolderCharacter.png";
import GameObject from "./GameObject.js";

const Items = ({x, y}) => {

    const Resume = new GameObject({
        x: 0,
        y: 0,
        sprite_size: 32,
        src: PlaceHolderCharacter
    });

    console.log(Resume);

    const Education = new GameObject({
        x: 1,
        y: 1,
        sprite_size: 32,
        src: "../assets/PlaceHolderMap.png"
    });

    console.log(Education.src)

    const Project_Camera = new GameObject({
        x: 2,
        y: 2,
        sprite_size: 32,
        src: "../assets/PlaceHolderMap.png"
    });

    const Project_Dollar = new GameObject({
        x: 3,
        y: 3,
        sprite_size: 32,
        src: "../assets/PlaceHolderMap.png"
    });

    const ThaiFlag = new GameObject({
        x: 4,
        y: 4,
        sprite_size: 32,
        src: "../assets/PlaceHolderMap.png"
    });




    return (
        <div className="items-container">
            <img className="resume-img-item" src={Resume.src} alt="Resume" />
            <img className="education-img-item" src={Education.src} alt="Education" />
            <img className="project-camera-img-item" src={Project_Camera.src} alt="Project_Camera" />
            <img className="project-dollar-img-item" src={Project_Dollar.src} alt="Project_Dollar" />
            <img className="thai-flag-img-item" src={ThaiFlag.src} alt="ThaiFlag" />
        </div>
    )
}

export default Items;