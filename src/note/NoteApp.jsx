import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

let id = 0;

const initialNotes = [
    { id: id++, text: 'Learn HTML', done: false },
    { id: id++, text: 'Learn CSS', done: false },
    { id: id++, text: 'Learn Javascript', done: false },
    { id: id++, text: 'Learn React', done: false },
];


export default function NoteApp() {

    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);


    return (
        <div>
            <NotesContext.Provider value={{notes}}>
                <NotesDispatchContext value={dispatch}>
                </NotesDispatchContext>
            </NotesContext.Provider>
        </div>
    )
}