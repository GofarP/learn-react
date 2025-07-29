import { useRef, useState } from "react";

export default function TimerCounter() {
    const [renderCount, setRenderCount] = useState(0);
    const clickCount = useRef(0);


    const handleClick = () => {
        clickCount.current++
        setRenderCount(renderCount+1)
    }

    return(
        <div>
            <p>Jumlah klik (disimpan di ref):{clickCount.current}</p>
            <p>Jumlah klik (disimpan di state):{renderCount}</p>

            <button onClick={handleClick}>Klik Saya</button>
        </div>
    )
};
