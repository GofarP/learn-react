import Note from "./Note";
import { useContext, useMemo, useState } from "react";
import { NotesContext } from "./NoteContext";

export default function NoteList(){
    const notes=useContext(NotesContext);
    const [search, setSearch]=useState('')
    const searchInput=useRef(null);

    const filteredNotes=useMemo(()=>{
        console.log('Filtering notes');
        return notes.filter(note=>note.text.includes(search));
    },[notes, search])

    function handleSearch(){
        console.info('Search:',searchInput.current.value);
        setSearch(searchInput.current.value);
    }

    return(
        <div>
            <input ref={searchInput} placeholder="Search" type="text" />
            <button onClick={handleSearch}>Search</button>
            <ul>        
                {filteredNotes.map(note=>(
                    <li key={note.id}>
                        <Note note={note}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}