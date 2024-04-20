import NumberSelector from "./NumberSelector";
import GenerateRandomDice from "./RollDice";
import TotalScores from "./TotalScores";
import { MyContext } from "../Contexts";
import { useState } from "react";

export default function GamePlay(){
    const [diceNumber, setDiceNumber] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [score,setScore]=useState(0);
    const contextValue = {
        diceNumber,
        setDiceNumber,
        selectedNumber,
        setSelectedNumber,
        score,
        setScore,
      };
    return(
        <>
        <MyContext.Provider value={contextValue}>
        <div className="flex flex-col justify-center items-center">
        <main className="flex flex-row justify-between pl-20 pr-20 w-screen">
           <TotalScores/>
           <NumberSelector/>
        </main>
        <GenerateRandomDice/>
        </div>
        </MyContext.Provider>
        </>
    );
}