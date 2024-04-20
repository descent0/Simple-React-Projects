
import { useState } from 'react';
import './App.css'
import Start from './Components/start';
import GamePlay from './Components/GamePlay';

function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePlay=()=>{
    setIsGameStarted(!isGameStarted);
    console.log(isGameStarted);
  }
  return(
    <>
    {
      isGameStarted?<GamePlay/>:<Start 
      toggle={toggleGamePlay}
      />
}
    </>
  );
}

export default App
