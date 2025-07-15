import Todo from "./todo.jsx"

export default function  TodoList(){
    return(
        <ul>
            <Todo isCompleted={true} text="Learn Html"/>
            <Todo isCompleted={true} text="Learn Css"/>
            <Todo isCompleted={true} text="Learn Javascript"/>
            <Todo isCompleted={false} text="Learn ReactJS"/>
            <Todo isCompleted={false} text="Learn Nothing" isDeleted={true}/>
        </ul>
    )
}