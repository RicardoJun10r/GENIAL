import CriarArmazem from "./Criar/CriarArmazem.js";
import EditarArmazem from "./Editar/EditarArmazem.js";
import DeletarArmazem from "./Deletar/DeletarArmazem.js";
import CriarProduto from "./Criar/CriarProduto.js";
import EditarProduto from "./Editar/EditarProduto.js";
import DeletarProduto from "./Deletar/DeletarProduto.js";

const Forms = ({ opcao , index, setModal, modal }) => {

    if(opcao === 'armazem')
    {
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
    else
    {
        if(index === 0)
        {
            return(
                <div>
                    <CriarProduto setModal={setModal} modal={modal} />
                </div>
            )
        }
        if(index === 1)
        {
            return(
                <div>
                    <EditarProduto setModal={setModal} modal={modal} />
                </div>
            )
        }
        if(index === 2)
        {
            return(
                <div>
                    <DeletarProduto setModal={setModal} modal={modal} />
                </div>
            )
        }
    }
    

}

export default Forms;