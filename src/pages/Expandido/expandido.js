import './expandido.css';
import React, {Component} from 'react';
import armazenLogo from "../../assets/warehouse.png";
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';


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
                        <h3> Armazém Genial</h3>

                        <Card className='blackText'>
                            <Card.Header as="h5">Armazen 1</Card.Header>
                            <Card.Body>
                                <Card.Title >Armazen do ricfardo</Card.Title>
                                <Card.Text>
                                <h1>Primeiro item</h1>
                                <div>
                                    <h4>Segundo item</h4>
                                </div>
                                <div>
                                    <h4>Terceito item</h4>
                                </div>
                                <div>
                                    <h5>Quarto item</h5>
                                </div>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                                    
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Expandido;