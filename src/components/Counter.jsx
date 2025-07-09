 "use client"
import React from "react";
import {useState,useEffect} from "react";

export default function Counter () {
    const [counter,setCounter]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCounter((current_counter)=>
                {
                return current_counter + 1;
            })
         }, 1000)
        
            return ()=>clearInterval(interval)
        },[])
    

    return(
        <main>
            
          <h2>{counter}</h2>
        </main>
        
    );
}