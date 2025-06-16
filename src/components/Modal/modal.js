import './modal.css'
import React from "react";

export const Modal = ({ open, close, children }) => {

    const ref = React.useRef();

    React.useEffect(() => {
        if (open) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [open]);

    return (
        <dialog ref={ref} onCancel={close} className="modal-container">
            <button onClick={close} className="modal-close-button">&times;</button>
            {children}
        </dialog>
    )
}
