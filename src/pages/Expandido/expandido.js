import './expandido.css';
import React, {Component} from 'react';
import armazenLogo from "../../assets/warehouse.png";
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Expandido() {

    return(
        <Container>
            <div>
                <div>
                    <h2><img src={armazenLogo} alt='ArmazenLogo' className='ArmazenLogo' /> Genial</h2>
                </div>

                <div className='container'>
                    <div className='container_branco'>
                        <h1>Armazém Genial</h1>
                
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Expandido;