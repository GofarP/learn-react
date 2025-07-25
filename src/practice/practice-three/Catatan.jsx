    import { useImmerReducer } from "use-immer";
    import CatatanForm from "./CatatanForm";
    import CatatanList from "./CatatanList";

    export default function Catatan() {
        
        const [catatans, dispatch] = useImmerReducer(catatanReducer, []);

        function handleSubmit(catatan) {
            dispatch({ type: 'TAMBAH_CATATAN', catatan })
        }

        function handleEdit(id, catatan) {
            dispatch({ type: 'EDIT_CATATAN', id, catatan })
        }


        function handleDelete(id) {
            dispatch({ type: 'DELETE_CATATAN',id })
        }



        function catatanReducer(draft, action) {
            switch (action.type) {
                case 'TAMBAH_CATATAN':
                    draft.push(action.catatan)
                    break;
                case 'EDIT_CATATAN': {
                    const index = draft.findIndex(catatan => catatan.id === action.id);

                    if (index !== -1) {
                        draft[index].catatan = action.catatan
                    }

                    break;

                }

                case 'DELETE_CATATAN': {
                    const index = draft.findIndex(catatan => catatan.id === action.id);
                    if (index !== -1) {
                        draft.splice(index, 1)
                    }
                }

                default:
                    break;
            }
        }

        return (
            <div>
                <CatatanForm onSubmit={handleSubmit} />
                <CatatanList catatans={catatans} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
        )
    };
