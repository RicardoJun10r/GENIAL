import './ModalSimples.css';

const ModalSimples = ({ setModal, opcao, formulario }) => {

    if(opcao === 'armazem') // MODAL ( SIMPLES ) PARA ARMAZÉNS
    {
        return(
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                        setModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1 style={{color: 'white', fontSize: '1.5em'}}>Preencha os valores abaixo:</h1>
                </div>

                <div className="body">
                    {formulario}
                </div>
            </div>
        )
    }

    else if(opcao === 'produto') // MODAL ( SIMPLES ) PARA PRODUTOS
    {
        return(
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                        setModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1 style={{color: 'white', fontSize: '1.5em'}}>Preencha os valores abaixo:</h1>
                </div>

                <div className="body">
                    {formulario}
                </div>
            </div>
        )
    }

}

export default ModalSimples;