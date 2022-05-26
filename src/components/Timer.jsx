import React from 'react'
import { useEffect } from 'react'
export default function Timer() {


    const [counter,setCounter] = React.useState(0);
    
    useEffect(()=>{

    const interval=setInterval(()=>{
   
    setCounter((p)=>{
        if(p<5){
            return p+1;
        }else{
            clearInterval(interval);
            return p
        }
    })
},1000)
return ()=>{
    clearInterval(interval)
}
    },[])
  
    return (
        <div>
        <div>clean up function</div>
        count is :{counter}
        </div>
      )
  
 
}