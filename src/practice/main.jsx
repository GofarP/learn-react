import { createRoot } from "react-dom/client";
import PracticeOne from "./PracticeOne";
import {StrictMode } from "react"
import Container from "./Container";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Container>
            <PracticeOne/>
        </Container>
    </StrictMode>
)