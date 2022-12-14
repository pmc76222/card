import React from "react";
import { useLocation } from "react-router-dom";
import './About.css';


function About() {
    
    const location = useLocation();
    const { id, 이름, 이미지} = location.state;    
    console.log(location);    
    return (
        <div>
        <img src={이미지} alt={이름}/>
        <h1>{id} 상세페이지!{id}</h1>
        <h1>{이름}</h1>        
        </div>
    )
}

export default About;