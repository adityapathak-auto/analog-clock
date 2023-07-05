import React, { useEffect, useRef, useState } from "react";
import "./clock.scss";
import audioFile from './tick.mp3';


export const Clock = ()=>{
    const customI = "--i";
    const customH = "--h";
    const hShow = useRef();
    const mShow = useRef();
    const sShow = useRef();
    const clock = useRef();
    const [count,setCount] = useState(0);
    const [st,setSt] = useState(false);
    let int;

    

    const showClock = ()=>{

        let date = new Date();
        // console.log(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

       if(hShow.current && mShow.current && sShow.current){
        hShow.current.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
        mShow.current.style.transform = `rotate(${6 * minutes}deg)`;
        sShow.current.style.transform = `rotate(${6 * seconds}deg)`;
       } 
       playAudio()
}
    const playAudio = async()=>{
        const audio = new Audio(audioFile);
        audio.play();
       }
        
    

    return(<><div ref={clock} className="clock h-300 w-300 bg-slate-500 opacity-70 rounded-full text-white border-4 shadow-def text-26 font-bold flex justify-center items-center relative">
        <div className="needle hr" style={{[customH]:'60px'}} ref={hShow}><span className="bg-red-500"></span></div>
        <div className="needle mn" style={{[customH]:'80px'}} ref={mShow}><span className="bg-blue-400"></span></div>
        <div className="needle ss" style={{[customH]:'100px'}} ref={sShow}><span className="bg-green-400"></span></div>
        
        <ul className="font-serif list-disc ">
        <li style={{[customI]:'1'}}><span style={{customI:'1'}}>1</span></li>
        <li style={{[customI]:'2'}}><span style={{[customI]:'2'}}>2</span></li>
        <li style={{[customI]:'3'}}><span style={{[customI]:'3'}}>3</span></li>
        <li style={{[customI]:'4'}}><span style={{[customI]:'4'}}>4</span></li>
        <li style={{[customI]:'5'}}><span style={{[customI]:'5'}}>5</span></li>
        <li style={{[customI]:'6'}}><span style={{[customI]:'6'}}>6</span></li>
        <li style={{[customI]:'7'}}><span style={{[customI]:'7'}}>7</span></li>
        <li style={{[customI]:'8'}}><span style={{[customI]:'8'}}>8</span></li>
        <li style={{[customI]:'9'}}><span style={{[customI]:'9'}}>9</span></li>
        <li style={{[customI]:'10'}}><span style={{[customI]:'10'}}>10</span></li>
        <li style={{[customI]:'11'}}><span style={{[customI]:'11'}}>11</span></li>
        <li style={{[customI]:'12'}}><span style={{[customI]:'12'}}>12</span></li>
    </ul>

    
        

        

    
    </div>
    <button className="px-6 py-2 font-semibold text-sm bg-cyan-400 text-white rounded-full shadow-sm hover:bg-cyan-500" onClick={()=>{
        setCount((prev)=>prev+1);
        if(count < 1){
         int = setInterval(showClock,1000);
        }
        if(clock.current){
            clock.current.style.opacity = '100';
        }

        
    }}>Start</button>
    </>)
}