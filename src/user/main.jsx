import { createRoot } from "react-dom/client";
import { StrictMode } from 'react'
import User from "./User";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <User/>
    </StrictMode>
)