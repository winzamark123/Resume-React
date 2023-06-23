import "./Items.css";
import { useState, useRef, useEffect, useCallback } from 'react';
import GameObject from "./GameObject.js";

const Items = () => {

    const Resume = new GameObject({
        x: 0,
        y: 0,
        sprite_size: 32,
        src: "./assets/PlaceHolderMap.png"
    });

    const Education = new GameObject({
        x: 1,
        y: 1,
        sprite_size: 32,
        src: "./assets/PlaceHolderMap.png"
    });

    const Project_Camera = new GameObject({
        x: 2,
        y: 2,
        sprite_size: 32,
        src: "./assets/PlaceHolderMap.png"
    });

    const Project_Dollar = new GameObject({
        x: 3,
        y: 3,
        sprite_size: 32,
        src: "./assets/PlaceHolderMap.png"
    });

    const ThaiFlag = new GameObject({
        x: 4,
        y: 4,
        sprite_size: 32,
        src: "./assets/PlaceHolderMap.png"
    });




    return (
        <div className="item">
            <img className="resume-img-item" src={Resume.src} alt="Resume" />
            <img className="education-img-item" src={Education.src} alt="Education" />
            <img className="project-camera-img-item" src={Project_Camera.src} alt="Project_Camera" />
            <img className="project-dollar-img-item" src={Project_Dollar.src} alt="Project_Dollar" />
            <img className="thai-flag-img-item" src={ThaiFlag.src} alt="ThaiFlag" />
        </div>
    )
}

export default Items;