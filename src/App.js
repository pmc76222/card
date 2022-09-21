import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";



function App() {

  const [game,setGame] = useState("");
  const [soo,setSoo] =useState(0);
  const [won, setWon] = useState([]);
  
  
  useEffect(() => {
    fetch(
      `
      https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD`
    )
     .then((response) => response.json())
     .then((json) => document.getElementById("demo").innerHTML = json[0].basePrice
     //console.log(json[0])
     );   
      
  },[])
     
  
  return (
    

    <div>  
      <nav class="navbar navbar-expand-sm bg-primary navbar-dark fixed-top">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>     
          <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">coding</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">github</a></li>
              <li><a class="dropdown-item" href="#">react</a></li>
              <li><a class="dropdown-item" href="#">game</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">finance</a>
          </li>  
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Like</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">game</a></li>
              <li><a class="dropdown-item" href="#">ani</a></li>
              <li><a class="dropdown-item" href="#">books</a></li>
            </ul>
          </li>
          </ul>       
        </div>
      </nav>
        <div class="container-fluid p-5 bg-primary text-white text-center">
        <h1>Hello My World!</h1>
        <p>뭐 해볼래?</p> 
        </div>
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm-3">
              <h2>Like</h2>
                <p onMouseEnter={() => setGame("game")}>{game}!</p>
                <p>구글채신기술ㅋ</p>
                <p>그림</p>
                <p>글쓰기</p>
                <p>시</p>
                <p>달</p>
                <p>메모</p>
                <p>돈벌기.장사.재테크</p>
                <p>유튜브</p>
                <p>인스타</p>
                <p>생산자.크리에이터</p>
                <p>망상하기</p>

            </div>
            <div class="col-sm-3">
              <h2>Coding</h2>
              <p onMouseEnter={() => setSoo((current) => current +1)}>{soo}</p>
            </div>
            <div class="col-sm-3">
              <h2>Books</h2>
            </div>
            <div class="col-sm-3">
              <h2>finance</h2>
              <p>Exchange Rate</p>
              <p id="demo">Fetch a file to change this text.</p>
            </div>
          </div>
        </div>    
        
    </div>
  );
}

export default App;

