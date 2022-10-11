import './expandido.css';
import React, {Component} from 'react';
import armazenLogo from "../../assets/warehouse.png";
import martelo from "../../assets/martelo.png";
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Expandido() {

    return(
        <Container>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <Col xs={12} md={8}>
                        <h2><img src={armazenLogo} alt='ArmazenLogo' className='ArmaLogoCad' /> Genial</h2>
                    </Col>
                </Row>

                <div className='container'>
                    <div className='container_branco'>
                        <Card className='blackText color_Card'>
                            <Card.Header as="h5">Armazen do ricfardo</Card.Header>
                                <Card.Body>
                                    {/*<Card.Title >Armazen do ricfardo</Card.Title>*/}
                                    <Card.Text>
                                        <h4>Chave de fenda</h4>
                                        <div>
                                            <h4>Copo</h4>
                                            <img src={armazenLogo} alt='ArmazenLogo' /> 
                                        </div>
                                        <div>
                                            <h4>Garrafa</h4>
                                        </div>
                                        <div>
                                            <h4>Caneca</h4>
                                            <img src={martelo} alt='ImgMartelo' width={60} /> 
                                        </div>
                                    </Card.Text>
                                    <Link exact to="/home" className='link'>
                                        <Button variant="primary">Voltar</Button>
                                    </Link>
                                </Card.Body>
                        </Card>             
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Expandido;