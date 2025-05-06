import React from 'react'
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const { note, updateNote } = props;
    const context = React.useContext(NoteContext);
    const { deleteNote } = context;
    return (
        <div className="col-md-3" key={note._id}>
            <div className="card my-3" key={note._id}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash-can mx-2" onClick={() => deleteNote(note._id)}></i>
                        <i className="fa-regular fa-pen-to-square mx-2" onClick={() => updateNote(note)}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text"><small className="text-muted">{note.tag}</small></p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
