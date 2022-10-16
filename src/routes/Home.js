import Movies from "../components/Movies.js";



function Home() {       

    var ilikes = [ 
        {id:1, 이름:"게임", 이미지:"그림"},
        {id:2, 이름:"게임2", 이미지:"그림2"},
        {id:3, 이름:"게임3", 이미지:"그림3"},
        {id:4, 이름:"게임4", 이미지:"그림4"}
    ]       

    return ( 
       <div> 
            {ilikes.map((item) => (            
            
            <Movies 
                key={item.id}
                id={item.id}
                이름={item.이름}
                이미지={item.이미지}                 
            />         
            ))}     
        </div>
    );
}

export default Home;