import './home.css';
import armazenLogo from "../../assets/warehouse.png";
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
            </div>
    
        </Container>
    )
}

export default Home;