import { useState } from "react";

export default function UserList({ users, onEdit, onDelete, loading, perPage, setPerPage, onError }) {
    const [search, setSearch] = useState("");

    return (
        <div className="min-h-screen bg-white p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-5">
                <select
                    className="border border-purple-500 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                    value={perPage}
                    onChange={(e) => setPerPage(parseInt(e.target.value))}
                >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <input
                    type="text"
                    placeholder="Cari pengguna..."
                    className="w-full sm:w-auto max-w-sm border border-purple-500 focus:ring-2 focus:ring-purple-300 focus:outline-none rounded px-3 py-2 transition"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full text-sm text-gray-800">
                    <thead className="bg-purple-600 text-white">
                        <tr>
                            <th className="px-4 py-3 text-center">No.</th>
                            <th className="px-4 py-3 text-center">Name</th>
                            <th className="px-4 py-3 text-center">Email</th>
                            <th className="px-4 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-center">
                        {loading ? (
                            <tr>
                                <td colSpan="4" className="py-4">Memuat data...</td>
                            </tr>
                        ) : users.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="py-4">Tidak ada data</td>
                            </tr>
                        ) : onError?(
                            <tr>
                                <td colSpan="4" className="py-4">Error mengambil Data Pengguna</td>
                            </tr>
                        ) : (
                            users.map((user, index) => (
                                <tr key={user.id || index} className="bg-purple-50 hover:bg-purple-100 transition">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="flex gap-2 justify-center py-2">
                                        <button
                                            onClick={() => onEdit(user)}
                                            className="px-4 py-2 rounded-md bg-yellow-300 text-black font-semibold hover:bg-yellow-400 transition-colors"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => onDelete(user.id)}
                                            className="px-4 py-2 rounded-md bg-red-300 text-black font-semibold hover:bg-red-400 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
