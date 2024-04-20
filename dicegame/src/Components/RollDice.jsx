import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Contexts";

const GenerateRandomDice = () => {
  const {
    diceNumber,
    setDiceNumber,
    selectedNumber,
    setSelectedNumber,
    score,
    setScore,
    isselectedNumberActive,
    setSelectedNumberActive,
  } = useContext(MyContext);
  const [isRolling, setIsRolling] = useState(false);

  const DiceImages = {
    0: "/public/dicegame/dice_1.png",
    1: "/public/dicegame/dice_1.png",
    2: "/public/dicegame/dice_2.png",
    3: "/public/dicegame/dice_3.png",
    4: "/public/dicegame/dice_4.png",
    5: "/public/dicegame/dice_5.png",
    6: "/public/dicegame/dice_6.png",
  };

  const rollDice = async () => {
    setIsRolling(true);
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    return new Promise((resolve) => {
      setTimeout(() => {
        setIsRolling(false);
        setDiceNumber(randomNumber);
        resolve();
      }, 1000);
    
    });
  };

  useEffect(() => {
    const scoreCalculator = () => {
      if(selectedNumber!=0){
      if (diceNumber === selectedNumber) {
        setScore((score) => score + 100);
      } else {
        setScore((score) => score - 50);
      }
    }
  };
  if(!isRolling){
    scoreCalculator();
  }
  }, [isRolling]);

  const scoreResetter = () => {
    setScore(0);
  };

  return (
    <div className="w-[270px] h-[400px] p-10 flex flex-col justify-center items-center space-y-3">
      <img
        id="dice"
        className={isRolling ? "animate-spin duration-75" : ""}
        onClick={!isRolling&&selectedNumber!=0 ? rollDice : null}
        src={DiceImages[diceNumber]}
        alt={`Dice ${diceNumber}`}
      />
      <p>Click On the Dice to Roll</p>
      <button
        onClick={scoreResetter}
        className="border-2 border-black text-black pl-2 pr-2 rounded-md"
      >
        Reset Score
      </button>
    </div>
  );
};

export default GenerateRandomDice;
