import React from "react";
import { useLocation, useParams } from "react-router-dom";


function About() {
    
    const location = useLocation();
    console.log(location);
    
    return (

        <h1>About component 상세페이지!</h1>
    )
}

export default About;