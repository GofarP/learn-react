import { useState } from "react";

export default function CatatanForm({onSubmit}) {
    const [catatan, setCatatan]=useState("");

    function handleChange(e){
        setCatatan(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
        onSubmit(catatan);
        setCatatan('');
    }

    return (
        <>
            <h1>Create Task</h1>
            <form>
                <input value={catatan} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </form>
        </>
    )
};
