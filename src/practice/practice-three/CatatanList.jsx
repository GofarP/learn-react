import { useState } from "react";

export default function CatatanList({ catatans = [], onDelete, onShow, onEdit }) {
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    function deleteItem(index) {
        onDelete(index);
    }

    function showItem(index) {
        onShow(index);
    }

    function startEdit(index) {
        setEditIndex(index);
        setEditValue(catatans[index]);
    }

    function saveEdit() {
        onEdit(editIndex, editValue);
        setEditIndex(null);
        setEditValue("");
    }

    return (
        <>
            <h1>List Catatan</h1>
            <ul>
                {catatans.map((catatan, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />
                                <button onClick={saveEdit}>Simpan</button>
                            </>
                        ) : (
                            <>
                                {catatan}
                                <button onClick={() => showItem(index)}>Show</button>
                                <button onClick={() => startEdit(index)}>Edit</button>
                                <button onClick={() => deleteItem(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
