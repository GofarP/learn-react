import { useImmer, useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useReducer } from "react";

let id = 0;

const initialNotes = [
    { id: id++, text: 'Learn HTML', done: false },
    { id: id++, text: 'Learn CSS', done: false },
    { id: id++, text: 'Learn Javascript', done: false },
    { id: id++, text: 'Learn React', done: false },
];


export default function NoteApp() {

    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

    function handleAddNote(text) {
        dispatch({
            type: 'ADD_NOTE',
            text: text
        })
    }

    function handleChangeNote(note) {
        dispatch({
            type: 'CHANGE_NOTE',
            id: note.id,
            text: note.text,
        })
    }

    function handleDeleteNote(note) {
        dispatch({
            type: 'DELETE_NOTE',
            id: note.id
        })
    }


    function notesReducer(draft, action) {
        switch (action.type) {
            case 'ADD_NOTE':
                draft.push({
                    id: id++, // pastikan id dideklarasikan di luar reducer
                    text: action.text,
                    done: false,
                });
                break;

            case 'CHANGE_NOTE': {
                const index = draft.findIndex(note => note.id === action.id);
                if (index !== -1) {
                    draft[index] = {
                        ...draft[index],
                        text: action.text,
                        done: action.done
                    };
                }
                break;
            }

            case 'DELETE_NOTE': {
                const index = draft.findIndex(note => note.id === action.id);
                if (index !== -1) {
                    draft.splice(index, 1);
                }
                break;
            }

            default:
                // do nothing
                break;
        }
    }

    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAddNote={handleAddNote} />
            <NoteList notes={notes}
                onChange={handleChangeNote}
                onDelete={handleDeleteNote}
            />
        </div>
    )
}