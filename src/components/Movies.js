
import './Movies.css';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";



function Movies({id,이름,이미지}) { 
    
    console.log(id,이름,이미지);
    
    return(
        <div key={id}>
        <Link to="/about" state={{id,이름,이미지}}>            
        <h1>{이름}</h1>
        <h2>{이미지}</h2>
        </Link>       
        </div>  
    ) 
  
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    이름: PropTypes.string.isRequired,
    이미지: PropTypes.string.isRequired
}

export default Movies;
