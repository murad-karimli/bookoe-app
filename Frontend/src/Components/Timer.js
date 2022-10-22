import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {initialHours,initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [ hours, setHours ] = useState(initialHours);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0&&hours===0) {
                    clearInterval(myInterval)
                } 
                if(minutes === 0&&hours!==0)
                {
                    setHours(hours-1)
                    setMinutes(59)
                    setSeconds(59)
                }
                else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div className=''>
        { minutes === 0 && seconds === 0
            ? null
            : <h1 className=''> <span className='text-6xl text-[#FFA500] rounded-xl p-2 px-[22px] text-center border-[1px] border-solid border-[#bbb] shadow-lg shadow-[#888] mx-4 w-36'>{hours}</span><span className=' rounded-xl text-6xl text-[#FFA500] p-2 text-center border-[1px] border-solid border-[#bbb] shadow-lg shadow-[#888] mx-4'>{minutes}</span><span className='rounded-xl text-6xl text-[#FFA500] p-2 text-center border-[1px] border-solid border-[#bbb] mx-4 shadow-lg shadow-[#888]'>{seconds < 10 ?  `0${seconds}` : seconds}</span></h1> 
        }
        </div>
    )
}

export default Timer;