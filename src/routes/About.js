import React from "react";
import { useLocation, useParams } from "react-router-dom";


function About() {
    
    const location = useLocation();
    const { id, 이름, 이미지} = location.state;    
    console.log(location);    
    return (
        <>
        <h1>{id} 상세페이지!{id}</h1>
        <h1>{이름}</h1>
        <h1>{이미지}</h1>
        </>
    )
}

export default About;