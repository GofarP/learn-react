import { useState } from "react";

export default function Counter(){
    const [newCounter, setnewCounter]=useState(0)
    return(
        <div>
            <button onClick={()=>{
                setnewCounter(newCounter => newCounter+1)
                setnewCounter(newCounter => newCounter+1)
                setnewCounter(newCounter => newCounter+1)
            }}>Increment +3</button>

            <h1>Counter: {newCounter} </h1>
        </div>
    )
}