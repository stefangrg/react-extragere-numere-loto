import { useState } from 'react';
import './App.css';
import Number from './Components/Number';
import gray from './img/gray.png';
import blue from './img/blue.png';
import brown from './img/brown.png';
import green from './img/green.png';
import purple from './img/purple.png';
import red from './img/red.png';
import yellow from './img/yellow.png';


function App() {

  // Array of all images
  const colors = [blue,brown,green,purple,red,yellow];
  
  // Numbers state
  const [numbers,setNumbers] = useState([
    {
      id:1,
      number:"?",
      color:gray,
    },
    {
      id:2,
      number:"?",
      color:gray,
    },
    {
      id:3,
      number:"?",
      color:gray,
    },
    {
      id:4,
      number:"?",
      color:gray,
    },
    {
      id:5,
      number:"?",
      color:gray,
    },
    {
      id:6,
      number:"?",
      color:gray,
    },
  ]);

  // Return random number between min (included) and max (included)
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Roll numbers onClick callback
  const roll = function(fiveNumbers) {

      setNumbers((oldstate) => {
        const newState = [...oldstate];
        for (let i = 0; i < newState.length; i++) {
          const element = newState[i];
          if(i === 5 && fiveNumbers){
            element.color = gray
            element.number = null;
          }else{
            element.color = getRandomImage();
            element.number = randomNumberInRange(1,49);
          }
          
        }
        return newState;
      });

  }

  // Return number image
  const getRandomImage = function(){
    return colors[randomNumberInRange(0,colors.length-1)];
  }

  return (
    <main className="main">
      <div className="container">
        <div className="App">
              <h2 className='heading'>EXTRAGE NUMERE LA LOTO</h2>
              <div className="numbers_container">
                {numbers.map((i) => 
                  {
                    if(i.number) return <Number key={i.id} image={i.color} number={i.number}/>
                    else return null;
                  }
                )}
                </div>
              <div className="buttons_container">
                <button type='button' onClick={() => {roll(false)}} className="button green">Extrage 6 numere</button>
                <button type='button' onClick={() => {roll(true)}} className="button orange">Extrage 5 numere</button>
              </div>

          </div>
      </div>
    </main>
  );
}

export default App;
