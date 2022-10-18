import React from "react";
import CriarArmazem from "./Criar/CriarArmazem.js";
import EditarArmazem from "./Editar/EditarArmazem.js";
import DeletarArmazem from "./Deletar/DeletarArmazem.js";

const Forms = ({ index }) => {

    if(index === 0)
    {
        return(
            <div>
                <CriarArmazem />
            </div>
        )
    }
    if(index === 1)
    {
        return(
            <div>
                <EditarArmazem />
            </div>
        )
    }
    if(index === 2)
    {
        return(
            <div>
                <DeletarArmazem />
            </div>
        )
    }

}

export default Forms;