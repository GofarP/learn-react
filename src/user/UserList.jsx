import { useState } from "react";

export default function UserList({ users, onEdit, onDelete, loading }) {
    const [search, setSearch] = useState("");

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="flex justify-end mb-5">
                <input
                    type="text" placeholder="Cari pengguna..."
                    className="w-full sm:w-auto max-w-sm border border-purple-500 focus:ring-0 focus:outline-0 rounded px-3 py-2"
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
                        ) : (
                            users.map((user, index) => (
                                <tr key={user.id || index} className="bg-purple-50">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="flex gap-4 justify-center">
                                        <button
                                            onClick={() => onEdit(user)}
                                            className="mt-3 mb-3 px-4 py-2 rounded-md bg-yellow-300 text-black font-semibold hover:bg-yellow-400 transition-colors"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => onDelete(user.id)}
                                            className="mt-3 mb-3 px-4 py-2 rounded-md bg-red-300 text-black font-semibold hover:bg-red-400 transition-colors"
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
