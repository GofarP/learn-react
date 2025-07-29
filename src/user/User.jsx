import { useImmerReducer } from "use-immer";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import UserForm from "./UserForm";
import UserList from "./UserList";
import "./Style.css";

export default function User() {
    const [state, dispatch] = useImmerReducer(userReducer, {
        users: [],
        editUser: null,
    });

    const [loading, setLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [error, setError]=useState(false);

    const fetchUsers = async (page = 1, limit = perPage) => {
        setLoading(true);
        try {
            const res = await axios.get(
                `https://gofarputraperdana.my.id/api/user?page=${page}&limit=${limit}`
            );
            dispatch({ type: "SET_USERS", payload: res.data.data });
            setPageCount(res.data.last_page || 1);
        } catch (err) {
            setError(true)
            console.error("Gagal memuat user", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(currentPage + 1, perPage);
    }, [currentPage, perPage]);


    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(
                `https://gofarputraperdana.my.id/api/users/${id}`
            );
            if (res.status === 200 || res.status === 204) {
                dispatch({ type: "DELETE_USER", payload: id });
                alert("Berhasil dihapus!");
                fetchUsers(currentPage + 1);
            }
        } catch (err) {
            console.error("Gagal menghapus user", err);
            alert("Gagal menghapus user.");
        }
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    function userReducer(draft, action) {
        switch (action.type) {
            case "SET_USERS":
                draft.users = action.payload;
                break;
            case "ADD_USER":
                draft.users.unshift(action.payload);
                break;
            case "UPDATE_USER":
                const index = draft.users.findIndex((u) => u.id === action.payload.id);
                if (index !== -1) draft.users[index] = action.payload;
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
            <UserForm
                editUser={state.editUser}
                dispatch={dispatch}
                onSubmit={() => fetchUsers(currentPage + 1)}
                onClearEditUser={() =>
                    dispatch({ type: "SET_EDIT_USER", payload: null })
                }
            />
            <UserList
                users={state.users}
                loading={loading}
                onError={error}
                onEdit={(user) =>
                    dispatch({ type: "SET_EDIT_USER", payload: user })
                }
                onDelete={handleDelete}
                perPage={perPage}
                setPerPage={setPerPage}
            />
            <div className="flex justify-end mt-4 mb-4 mr-4 overflow-x-auto">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageChange}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    containerClassName="flex justify-end gap-2 mt-4 mb-4"
                    pageClassName="border border-gray-300 rounded-md overflow-hidden"
                    pageLinkClassName="block w-full h-full px-4 py-2 text-center cursor-pointer hover:bg-gray-200"
                    activeClassName="bg-purple-700 text-white font-bold"
                    activeLinkClassName="block w-full h-full px-4 py-2"
                    previousClassName="border border-gray-300 rounded-md overflow-hidden"
                    previousLinkClassName="block w-full h-full px-4 py-2 text-center cursor-pointer hover:bg-gray-200"
                    nextClassName="border border-gray-300 rounded-md overflow-hidden"
                    nextLinkClassName="block w-full h-full px-4 py-2 text-center cursor-pointer hover:bg-gray-200"
                />

            </div>
        </div>
    );
}
