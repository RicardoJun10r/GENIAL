import React from "react";
import CriarArmazem from "./Criar/CriarArmazem.js";
import EditarArmazem from "./Editar/EditarArmazem.js";
import DeletarArmazem from "./Deletar/DeletarArmazem.js";

const Forms = ({ index, setModal, modal }) => {

    if(index === 0)
    {
        return(
            <div>
                <CriarArmazem setModal={setModal} modal={modal} />
            </div>
        )
    }
    if(index === 1)
    {
        return(
            <div>
                <EditarArmazem setModal={setModal} modal={modal} />
            </div>
        )
    }
    if(index === 2)
    {
        return(
            <div>
                <DeletarArmazem setModal={setModal} modal={modal} />
            </div>
        )
    }

}

export default Forms;