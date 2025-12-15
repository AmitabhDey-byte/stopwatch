import React, {useState, useEffect, useRef} from 'react';
function Stopwatch()
{
const[isRunning, setisRunning] = useState(false);
const[elapsedtime, setelapsedtime] = useState(0);
const intervalidref = useRef(null);
const starttimeref = useRef(0);
useEffect(() =>
{
    if(isRunning){
        intervalidref.current = setinterval(()=>
        {
            setelapsedtime(Date.now() - starttimeref.current);

        }, 10);

    }
    return()=>
    {
        clearInterval(intervalidref.current);
    }
},[isRunning]);

 }
export default Stopwatch