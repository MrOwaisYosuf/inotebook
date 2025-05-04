import NoteContext from "./NoteContext";
import { useState } from 'react';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6811f48ce1c40b388a9cc39a",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is a Title",
            "description": "This is a description of the note",
            "tag": "General",
            "date": "2025-04-30T09:59:40.144Z",
            "__v": 0
        },
        {
            "_id": "681752247cb7f242e7be49c6",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is next Title",
            "description": "This is a description of the next note",
            "tag": "Personal",
            "date": "2025-05-04T11:40:20.233Z",
            "__v": 0
        },
        {
            "_id": "6811f48ce1c40b388a9cc39a",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is a Title",
            "description": "This is a description of the note",
            "tag": "General",
            "date": "2025-04-30T09:59:40.144Z",
            "__v": 0
        },
        {
            "_id": "681752247cb7f242e7be49c6",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is next Title",
            "description": "This is a description of the next note",
            "tag": "Personal",
            "date": "2025-05-04T11:40:20.233Z",
            "__v": 0
        },
        {
            "_id": "6811f48ce1c40b388a9cc39a",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is a Title",
            "description": "This is a description of the note",
            "tag": "General",
            "date": "2025-04-30T09:59:40.144Z",
            "__v": 0
        },
        {
            "_id": "681752247cb7f242e7be49c6",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is next Title",
            "description": "This is a description of the next note",
            "tag": "Personal",
            "date": "2025-05-04T11:40:20.233Z",
            "__v": 0
        },
        {
            "_id": "6811f48ce1c40b388a9cc39a",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is a Title",
            "description": "This is a description of the note",
            "tag": "General",
            "date": "2025-04-30T09:59:40.144Z",
            "__v": 0
        },
        {
            "_id": "681752247cb7f242e7be49c6",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is next Title",
            "description": "This is a description of the next note",
            "tag": "Personal",
            "date": "2025-05-04T11:40:20.233Z",
            "__v": 0
        },
        {
            "_id": "6811f48ce1c40b388a9cc39a",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is a Title",
            "description": "This is a description of the note",
            "tag": "General",
            "date": "2025-04-30T09:59:40.144Z",
            "__v": 0
        },
        {
            "_id": "681752247cb7f242e7be49c6",
            "user": "6811f44be1c40b388a9cc396",
            "title": "This is next Title",
            "description": "This is a description of the next note",
            "tag": "Personal",
            "date": "2025-05-04T11:40:20.233Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;