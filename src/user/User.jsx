import { useImmerReducer } from "use-immer";
import UserForm from "./UserForm";
import "./Style.css";
import UserList from "./UserList";

export default function User() {
    const [user, dispatch] = useImmerReducer(useImmerReducer, []);

    function handleSubmit(user) {

    }

    function handleEdit(id, user) {

    }

    function handleDelete(id) {

    }

    function userReducer(draft, action) {
        switch (action.type) {
            case 'ADD_USERS':
                break;
            case 'EDIT_USERS':
                break;
            case 'DELETE_USERS':
                break;
        }
    }

    return (
        <div>
            <UserForm/>
            <UserList/>
        </div>
    )
};
