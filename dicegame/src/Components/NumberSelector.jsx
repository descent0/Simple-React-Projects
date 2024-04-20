import { useContext, useState } from "react"
import Numbers from "./Numbers"
import { MyContext } from "../Contexts";

const NumberSelector = () => {
    const { diceNumber,
        setDiceNumber,
        selectedNumber,
        setSelectedNumber,
        score,
        setScore,
    
    }=useContext(MyContext);
      

    const numberSetterFunction = (number) => {
        setSelectedNumber(number);
    }

    return (
        <>
            <div className="flex w-[552px] h-[138px] justify-evenly items-center">
                <Numbers onClick={() => numberSetterFunction(1)} number={1} isSelected={selectedNumber === 1} />
                <Numbers onClick={() => numberSetterFunction(2)} number={2} isSelected={selectedNumber === 2} />
                <Numbers onClick={() => numberSetterFunction(3)} number={3} isSelected={selectedNumber === 3} />
                <Numbers onClick={() => numberSetterFunction(4)} number={4} isSelected={selectedNumber === 4} />
                <Numbers onClick={() => numberSetterFunction(5)} number={5} isSelected={selectedNumber === 5} />
                <Numbers onClick={() => numberSetterFunction(6)} number={6} isSelected={selectedNumber === 6} />
            </div>
        </>
    
    );
}

export default NumberSelector
