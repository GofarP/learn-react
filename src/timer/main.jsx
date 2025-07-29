import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Timer from "./Timer";
import TimerCounter from "./TimerCounter";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Timer/>
        <TimerCounter/>
    </StrictMode>
)