import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

function Notes() {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.length === 0 && "No notes to display"}
            {notes.map((note) => {
                return (
                    <div className="col-md-3" key={note._id}>
                        <div className="card my-3" key={note._id}>
                            <div className="card-body">
                                <h5 className="card-title">{note.title}</h5>
                                <p className="card-text">{note.description}</p>
                                <p className="card-text"><small className="text-muted">{note.tag}</small></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Notes
