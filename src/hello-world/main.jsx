import {createRoot} from "react-dom/client"
import HelloWorld from "./HelloWorld"
import { StrictMode } from "react"
import Container from "./Container"
import TodoList from "../assets/todolist/Todolist"

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Container>
            <HelloWorld/>
            <TodoList/>
        </Container>
    </StrictMode>
)
