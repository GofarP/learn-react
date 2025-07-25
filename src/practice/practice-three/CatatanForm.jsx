import { useState } from "react";

export default function CatatanForm({ onSubmit }) {
    const [catatan, setCatatan] = useState("")
    const [empty, setEmpty] = useState(false)
    
    function handleChange(e) {
        setCatatan(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault();
        if (catatan === '') {
            setEmpty(true)
        } else {
            onSubmit(catatan)
            setEmpty(false)
            setCatatan("")
        }
    }

    return (
        <>
            <h1>Create Catatan</h1>
            <form>
                <input value={catatan} className="px-1 py-1 border 
                border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" focus onChange={handleChange} />

                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ml-3" onClick={handleClick}>Add</button>
                {empty && (
                    <p className="text-red-500 mt-2">Catatan Tidak Boleh Kosong</p>
                )}
            </form>
        </>
    )
};
