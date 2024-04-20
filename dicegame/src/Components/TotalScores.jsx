import { useContext } from "react";
import { MyContext } from "../Contexts";


const TotalScores = () => {
  const { diceNumber,
    setDiceNumber,
    selectedNumber,
    setSelectedNumber,
    score,
    setScore,}=useContext(MyContext);
  
  return (
    <div className="flex flex-col justify-center items-center w-[135px] h-[151px]" >
        <h1 className="text-[100px] font-medium">{score}</h1>
        <p className="text-[24px] font-medium">Total Scores</p>
    </div>
  )
}

export default TotalScores
