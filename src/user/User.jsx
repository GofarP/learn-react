import { useImmerReducer } from "use-immer";
import UserForm from "./UserForm";
import "./Style.css";
import UserList from "./UserList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
    const [state, dispatch] = useImmerReducer(userReducer, {
        users: [],
        editUser: null,
    });

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get("https://gofarputraperdana.my.id/api/user");
                dispatch({ type: "SET_USERS", payload: res.data.data });
            } catch (err) {
                console.error("Gagal memuat user", err);
            }finally{
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);


    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://gofarputraperdana.my.id/api/users/${id}`)
            dispatch({ type: "DELETE_USER", payload: id });
        } catch (err) {
            console.error("Gagal menghapus user", err);
        }
    }

    function userReducer(draft, action) {
        switch (action.type) {
            case "SET_USERS":
                draft.users = action.payload;
                break;
            case "ADD_USER":
                draft.users.unshift(action.payload);
                break;
            case "SET_EDIT_USER":
                draft.editUser = action.payload;
                break;
            case "DELETE_USER":
                draft.users = draft.users.filter((u) => u.id !== action.payload);
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <UserForm onSubmit={() => { }} editUser={state.editUser} />
            <UserList users={state.users}
                onEdit={(user) => dispatch({ type: "SET_EDIT_USER", payload: user })}
                onDelete={handleDelete} loading={loading} />
        </div>
    );
}
