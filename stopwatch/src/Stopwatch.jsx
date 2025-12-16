import React, {useState, useEffect, useRef} from 'react';
function stopwatch()
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
function start()
{
setisRunning(true);
starttimeref.current=Date.now()-elapsedtime;
}
function stop()
{
setisRunning(false);
}
function reset()
{
    elapsedtime(0);
    setisRunning(false);
}
function format()
{
    let hour = Math.floor(elapsedtime/(1000*60*60));
    let min = Math.floor(elapsedtime/(1000*60));
    let sec = Math.floor((elapsedtime/1000)%60);
    let mili = Math.floor((elapsedtime%10000)/10);
    hour = String(hour).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    mili = String(mili).padStart(2, "0");
return '${min}:${sec}:${mili}';
}
return(
    <div className = "Stopwatch">
        <div className="Display">{format}</div>
        <div className="Controls">
            <button className="start-button" onClick ={start}>Start</button>
            <button className="start-button" onClick ={stop}></button>
            <button className="start-button" onClick ={reset}></button>
                    </div>
    </div>
);
 }
export default stopwatch