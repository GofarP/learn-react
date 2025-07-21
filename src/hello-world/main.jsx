import {createRoot} from "react-dom/client"
import HelloWorld from "./HelloWorld"
import { StrictMode } from "react"
import Container from "./Container"
import TodoList from "../todolist/Todolist"
import Table from "../table/Table"
import AlertButton from "../button/AlertButton"
import MyButton from "../button/MyButton"
import Toolbar from "../button/Toolbar"
import SearchForm from "../form/SearchForm"
import SayHelloForm from "../form/SayHelloForm"


createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Container>
            <HelloWorld/>
            <TodoList/>
            <Table/>
            <AlertButton text="Click me" message="im clicked"/>
            <MyButton text="hit me" onSmash={()=>alert('You Hit Me')}/>
            <MyButton text="hit me again" onSmash={()=>alert('You Hit Me Again')}/>
            <Toolbar
                onClick={(e)=>{
                    e.stopPropagation();
                    alert('You click toolbar')
                }}
            />

            <SearchForm/>

            <SayHelloForm/>

        </Container>
    </StrictMode>
)
