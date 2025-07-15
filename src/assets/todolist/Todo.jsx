export default function Todo({text, isCompleted, isDeleted=false}){
    if(isDeleted){
        return null
    }
    else{
       return(
            // <li>
            //     {isCompleted ? <del>{text}</del> : text }
            // </li>
            <li>
                {text} {isCompleted && 'v'}
            </li>
       )
    }
}