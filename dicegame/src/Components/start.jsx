import React from 'react'

export default function Start({toggle}){
    return(
        <div className='flex justify-center items-center h-screen'>
         <div className='w-[1000px] h-[522px] flex flex-row justify-center items-center'>
         <div className='w-[649px] h-full'>
            <img src="/public/dicegame/dices 1.png" alt="" />
         </div>
        
        <div className='w-[528px] flex flex-col items-center justify-center'>
            <div className='h-[100px] w-full text-7xl font-extrabold'>
Dice Game 
            </div>
            <button onClick={toggle} className='h-[44px] w-[220px] text-white bg-black rounded-lg duration-700 hover:bg-white hover:border-black hover:border-2 hover:text-black'>Play Now</button>
        
        </div>
    </div>
    </div>
    );
   
}