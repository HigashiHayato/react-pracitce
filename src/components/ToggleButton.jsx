import { useState } from "react";

const ToggleButton = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(preveState => !preveState)
    }
    return (
        <button onClick={toggle}>
            {open ? "OPEN" : "CLOSE"}
        </button>
    );
};

export default ToggleButton;
