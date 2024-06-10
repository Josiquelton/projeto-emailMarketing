import './App.css'
import Flores from "./assets/flores.jpg";
import Buque from "./assets/buque.jpeg";
import Love1 from "./assets/namorados1.jpg";
import Love2 from "./assets/namorados2.jpeg";
import Love3 from "./assets/namorados3.jpg";
import Love4 from "./assets/namorados4.jpeg";


function App() {
  return (
    
      <>
      {/* inicio do codigo */}
      <div className="App">
        <div className='flower'>
        <img src={Flores} alt='flores'/>
        <h1>VALENTINES<br/> DAY</h1>
        <p>________________________</p>
        <h5>Hoje eu só tenho a agradecer<br/> 
          por ter do meu lado a melhor<br/> pessoa do mundo. 
          <br/>Feliz Dia dos Namorados!</h5>
          <p></p>
          <img src={Buque} alt='buque' id="bouquet"/>
              <p></p>
            <h1>Momentos Especiais<br/> com seu Amor</h1>
              {/* Imagens */}
              <ul className='slider'>
                <li className='slide-item'>
                <img src={Love1} alt='Love1'/>
                </li>
                <li className='slide-item' >
                <img src={Love2} alt='Love2'/>
                </li>
                <li className='slide-item'>
                <img src={Love3} alt='Love3'/>
                </li>
                <li className='slide-item'>
                <img src={Love4} alt='Love4'/>
                </li>
              </ul>
              <footer>
                <div className='footer'>
                  <h2>Email:momentosespeciais@hotmail.com</h2>
                </div>
              </footer>
        </div>
        
      </div>
      </>
    
  );
}

export default App;


