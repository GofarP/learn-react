import { useRef } from "react";
import  "./style.css"
export default function AlertButton({text,message}){
    const counter=useRef(0);

    function handleClick(e){
        console.info(e)
        alert(`${message} ${counter.current++}`);
    }

    return (
        <button className="button-click" onClick={handleClick}>{text}</button>
    )
}