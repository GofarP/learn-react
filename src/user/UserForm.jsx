import { useState } from "react";

export default function UserForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [empty, setEmpty] = useState(false);

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();

        if (email === '' || name === '') {
            setEmpty(true)
        } else {
            setEmpty(false)
            omSubmit?.({ email, name })
            setEmail("")
            setName("")
        }
    }

    return (
        <div className="min-h-screen w-full bg-blue-500 flex items-center justify-center">
            <form className="flex flex-col gap-5 w-full max-w-md px-5" onSubmit={handleClick}>
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

                </div>

                <div className="flex flex-col">
                    <label htmlFor="name" className="text-white text-lg font-semibold tracking-wider">
                        Name
                    </label>

                    <input type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="py-2 px-3 rounded w-full border border-white bg-white focus:outline-none focus:ring-0 focus:border-transparent" />
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
                    </div>


                </div>

                <div className="flex flex-col flex-1">
                    <button
                        className="mt-4 w-full bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-100 transition"
                    >
                        Submit
                    </button>
                </div>



            </form>
        </div>
    )
};
