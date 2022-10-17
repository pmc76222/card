import Movies from "../components/Movies.js";
import Masonry from 'react-masonry-css';

function Home() {       

    var ilikes = [ 
        {id:1, 이름:"게임", 이미지:"그림"},
        {id:2, 이름:"게임2", 이미지:"그림2"},
        {id:3, 이름:"게임3", 이미지:"그림3"},
        {id:4, 이름:"게임4", 이미지:"그림4"}
    ]       

    const breakpointColumnsObj = {
        default: 5,
        1100: 3,
        700: 2,
        500: 1
    };
   
    return ( 
       <div> 
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
                {ilikes.map((item) => (                 
                        
                <Movies 
                    key={item.id}
                    id={item.id}
                    이름={item.이름}
                    이미지={item.이미지}                 
                />         
                ))}  
            </Masonry>   
        </div>
    );
}

export default Home;