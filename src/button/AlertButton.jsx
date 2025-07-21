import  "./style.css"
export default function AlertButton({text,message}){
    function handleClick(e){
        console.info(e)
        alert(message);
    }

    return (
        <button className="button-click" onClick={handleClick}>{text}</button>
    )
}