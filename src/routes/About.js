import React from "react";
import { useLocation } from "react-router-dom";


function About() {
    
    const location = useLocation();
    const { id, 이름, 이미지} = location.state;    
    console.log(location);    
    return (
        <>
        <h1>{id} 상세페이지!{id}</h1>
        <h1>{이름}</h1>
        <img src={이미지} alt={이름}/>
        </>
    )
}

export default About;