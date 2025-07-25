import { useState } from "react";

export default function CatatanList({ catatans = [], onDelete, onEdit }) {

    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    // catatans=[
    //     "Catatan 1",
    //     "Catatan 2",
    //     "Catatan 3",
    //     "Catatan 4",
    //     "Catatan 5",
    // ]

    return (
        <>
            <h1>List Catatan</h1>
            <ul className="space-y-3">
                {catatans.map((catatan, index) => (
                    <li
                        key={index}
                        className="flex items-center bg-white shadow-sm rounded-xl px-4 py-3"
                    >
                        {editIndex === index ? (
                            <>
                                <input type="text"
                                    className="flex-1 border border-gray-300 rounded px-2 py-1"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />

                                <button className="ml-3 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                    onClick={() => {
                                        onEdit(index, editValue);
                                        setEditIndex(null)
                                    }}>
                                        Update
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="flex-1">{catatan}</span>
                                <button className="px-3 py-1 ml-3 bg-yellow-500 text-white rounded hover:bg-yellow-600" onClick={() => {
                                    setEditIndex(index)
                                    setEditValue(catatan)
                                }}>
                                    Edit
                                </button>

                                <button className="px-3 py-1 ml-3 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => {
                                    if(window.confirm("Apakah anda yakin ingin menghapus catatan ini?")){
                                        onDelete(index)
                                    }
                                }}>
                                    Delete
                                </button>

                            </>
                        )}

                    </li>
                ))}
            </ul>

        </>
    )
};
