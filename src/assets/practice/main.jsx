import { createRoot } from "react-dom/client";
import PracticeOne from "./PracticeOne";
import {StrictMode } from "react"

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <PracticeOne/>
    </StrictMode>
)