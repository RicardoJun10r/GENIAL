import './home.css';
import React, {Component} from 'react';
import armazenLogo from "../../assets/warehouse.png";
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactModal from 'react-modal-resizable-draggable';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }


    render() {
        return (
            
            <div className="App">
                <button onClick={this.openModal}>
                    Open modal
                </button>

                <ReactModal 
                    initWidth={800} 
                    initHeight={400} 
                    onFocus={() => console.log("Modal is clicked")}
                    className={"my-modal-custom-class"}
                    onRequestClose={this.closeModal} 
                    isOpen={this.state.modalIsOpen}>

                    <h3>My Modal</h3>
                    <div className="body">
                        <p>This is the modal 1&apos;s body.</p>
                    </div>
                    <button onClick={this.closeModal}>
                        Close modal
                    </button>
                </ReactModal>

                <br></br>
                <div className="modal2">
                <button onClick={this.openModal}>
                    Open modal 2
                </button>

                <ReactModal 
                    initWidth={800} 
                    initHeight={400} 
                    onFocus={() => console.log("Modal is clicked")}
                    className={"my-modal-custom-class"}
                    onRequestClose={this.closeModal} 
                    isOpen={this.state.modalIsOpen}>
                    
                    <h3>My Modal</h3>
                    <div className="body">
                        <p>This is the modal 2&apos;s body.</p>
                    </div>
                    <button onClick={this.closeModal}>
                        Close modal
                    </button>
                </ReactModal>
                </div>
            </div>
            
            /*
            * Codigo antigo 

            function Home() {

                return(
                    <Container>
                        <div>
                            <div>
                                <h2><img src={armazenLogo} alt='ArmazenLogo' className='ArmazenLogo' /> Genial</h2>
                            </div>
                            <div className='modal'>
                                <Modal.Dialog>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>Modal body text goes here.</p>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="secondary">Close</Button>
                                        <Button variant="primary">Save changes</Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </div>

                            <br></br>

                            <div className='modal'>
                                <Modal.Dialog>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>Modal 2 body text goes here.</p>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="secondary">Close</Button>
                                        <Button variant="primary">Save changes</Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </div>
                        </div>
                
                    </Container>
                )
            }

                export default Home;

            */

        );
    }
}

export default Home;