
import './Movies.css';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Movies({id,이름,이미지}) { 
    
    console.log(id,이름,이미지);
    
    return(        
        <div key={id}>
        <figure class='fig'>   
        <Link to="/about" state={{id,이름,이미지}}>   
        <img class='card' src={이미지} alt={이름}/>         
        <figcaption class='font'>{이름}</figcaption>
        </Link> 
        </figure>      
        </div>         
    )   
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    이름: PropTypes.string.isRequired,
    이미지: PropTypes.string.isRequired
}

export default Movies;
