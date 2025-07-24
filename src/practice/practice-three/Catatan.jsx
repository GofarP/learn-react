import { useImmer } from "use-immer";
import CatatanList from "./CatatanList";
import CatatanForm from "./CatatanForm";

export default function Catatan() {
    const [catatans, setCatatan]=useImmer([]);
    const [search, setSearch]=useImmer([]);

    function handleSubmit(catatan){
        setCatatan(draft=>{
            draft.push(catatan)
        })
    }

    function handleDelete(index){
        setCatatan(draft=>{
            draft.splice(index,1)
        })
    }

    function handleShowIndex(index){
        alert(`clicking on ${index+1}`)
    }

    function handleEdit(index, newText){
        setCatatan(draft=>{
            draft[index]=newText;
        })
    }

    function handleChange(e){
        setSearch(e.target.value)
    }

    return (
        <div>
            <CatatanForm onSubmit={handleSubmit}/>
            <CatatanList 
            catatans={catatans} 
            onDelete={handleDelete} 
            onShow={handleShowIndex} 
            onEdit={handleEdit}
            
            />
        </div>
    )
};
