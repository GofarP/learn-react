import { useEffect, useState } from "react";
import axios from "axios";

export default function UserForm({ onSubmit, editUser, onClearEditUser }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setName(editUser ? editUser?.name : '');
        setEmail(editUser ? editUser?.email : '');
        setPassword("");
        setPasswordConfirmation("");
    }, [editUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res;
            if (editUser) {
                res = await axios.put(`https://gofarputraperdana.my.id/api/users/${editUser.id}`, {
                    name,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                });
                alert("User berhasil diupdate");
                onClearEditUser();
                onSubmit();

            } else {
                // CREATE USER
                res = await axios.post("https://gofarputraperdana.my.id/api/users", {
                    name,
                    email,
                    password,
                    password_confirmation: passwordConfirmation,
                });
                alert("Sukses menambah data baru");
                onSubmit();
            }

            // Reset form & error
            setErrors({});
            setEmail("");
            setName("");
            setPassword("");
            setPasswordConfirmation("");
        } catch (e) {
            const validationErrors = e.response?.data?.errors || {};
            const formattedErrors = {};

            for (const key in validationErrors) {
                const val = validationErrors[key];
                formattedErrors[key] = Array.isArray(val) ? val : [val];
            }

            setErrors(formattedErrors);
        }
    };

    return (
        <div className="min-h-screen w-full bg-blue-500 flex items-center justify-center">
            <form className="flex flex-col gap-5 w-full max-w-md px-5" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-white text-lg font-semibold tracking-wider">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-2 px-3 rounded w-full border border-white bg-white focus:outline-none focus:ring-0 focus:border-transparent"
                    />
                    {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email[0]}</p>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="name" className="text-white text-lg font-semibold tracking-wider">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="py-2 px-3 rounded w-full border border-white bg-white focus:outline-none focus:ring-0 focus:border-transparent"
                    />
                    {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name[0]}</p>}
                </div>

                <div className="flex flex-row gap-4">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="password" className="text-white text-lg font-semibold tracking-wider mb-1 whitespace-nowrap">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="py-2 px-3 rounded border border-white bg-white focus:outline-none focus:ring-0 focus:border-transparent"
                        />
                        {errors.password && <p className="text-red-300 text-sm mt-1">{errors.password[0]}</p>}
                    </div>

                    <div className="flex flex-col flex-1">
                        <label htmlFor="password_confirmation" className="text-white text-lg font-semibold tracking-wider mb-1 whitespace-nowrap">
                            Password Confirm
                        </label>
                        <input
                            type="password"
                            id="password_confirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            className="py-2 px-3 rounded border border-white bg-white focus:outline-none focus:ring-0 focus:border-transparent"
                        />
                        {errors.password_confirmation && (
                            <p className="text-red-300 text-sm mt-1">{errors.password_confirmation[0]}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <button
                        type="submit"
                        className="mt-4 w-full bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-100 transition"
                    >
                        {editUser ? "Update" : "Submit"}
                    </button>
                   {editUser && (
                        <button type="button" onClick={onClearEditUser} 
                        className="mt-2 w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition">
                            Cancel Delete
                        </button>
                   )}
                </div>
            </form>
        </div>
    );
}
