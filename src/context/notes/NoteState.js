import NoteContext from "./NoteContext";
import { useState } from 'react';

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);

    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgxODQ1YTA1ZDc4YWI5ODFkZTgyYTAwIn0sImlhdCI6MTc0NjQyMTE2Nn0.7ZfUd9OwMEd7HswcAswlZv8jPMk7mWApQyyZjoEwHpQ'
            }
        });
        const json = await response.json();
        setNotes(json);
    }

    const addNote = async ({ title, description, tag }) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgxODQ1YTA1ZDc4YWI5ODFkZTgyYTAwIn0sImlhdCI6MTc0NjQyMTE2Nn0.7ZfUd9OwMEd7HswcAswlZv8jPMk7mWApQyyZjoEwHpQ'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        setNotes(notes.concat(json));
    }

    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgxODQ1YTA1ZDc4YWI5ODFkZTgyYTAwIn0sImlhdCI6MTc0NjQyMTE2Nn0.7ZfUd9OwMEd7HswcAswlZv8jPMk7mWApQyyZjoEwHpQ'
            }
        });
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
        const json = await response.json();
        console.log(json);
    }

    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjgxODQ1YTA1ZDc4YWI5ODFkZTgyYTAwIn0sImlhdCI6MTc0NjQyMTE2Nn0.7ZfUd9OwMEd7HswcAswlZv8jPMk7mWApQyyZjoEwHpQ'
            },
            body: JSON.stringify({ title, description, tag })
        });
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let i = 0; i < newNotes.length; i++) {
            const element = newNotes[i];
            if (element._id === id) {
                newNotes[i].title = title;
                newNotes[i].description = description;
                newNotes[i].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
        const json = await response.json();
        console.log(json);
    }

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;