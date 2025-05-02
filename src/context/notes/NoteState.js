import NoteContext from "./NoteContext";
import { useState } from 'react';

const NoteState = (props) => {
    const s1 = {
        name: "Owais",
        class: "7C",
    };
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                name: "Owais Yosuf",
                class: "9F",
            });
        }, 1000);
    };
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;