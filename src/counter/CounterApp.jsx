import { useState } from "react";
import Counter from "./Counter.jsx"

export default function CounterApp() {
    const [show2, setShow2] = useState(true);

    function handleChange(e) {
        setShow2(e.target.checked)
    }

    return (
        <div>
            {/* defend counter */}
            {show2 ? <Counter name="2" /> : <Counter name="1" />}
            {show2 ? <Counter name="2" /> : <p>Hilang</p>}
            <div>
                {show2 ? (
                    <div>
                        <Counter name="3" />
                    </div>
                ) : (
                    <section>
                        <Counter name="4" />
                    </section>
                )}
            </div>
            <div>
                {!show2 && <Counter name="5"/>}
                {show2 && <Counter name="6"/>}
            </div>

            <div>
                {show2 ? <Counter key="7" name="8"/> : <Counter key="8" name="7"/> }
            </div>
            <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2

        </div>
    )
}