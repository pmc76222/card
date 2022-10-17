import Movies from "../components/Movies.js";
import Masonry from 'react-masonry-css';

function Home() {       

    var ilikes = [ 
        {id:1, 이름:"히로쓰 가옥", 이미지:'images/hiro.jpg'},
        {id:2, 이름:"카우보이 비밥", 이미지:'images/cowboy.jpg'},
        {id:3, 이름:"영화보일러", 이미지:'images/boil.jpg'},
        {id:4, 이름:"8월의 크리스마스", 이미지:'images/oct.jpg'},
        {id:5, 이름:"오산상회", 이미지:'images/osan.jpg'},
        {id:6, 이름:"여수", 이미지:'images/yeosu.jpg'},
        {id:7, 이름:"여수밤바다", 이미지:'images/yeosunight.jpg'}
        
    ]       

    const breakpointColumnsObj = {
        default: 5,
        1100: 3,
        700: 2,
        500: 2
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