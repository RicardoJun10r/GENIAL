import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BgColorExample() {
  return (
    <div>
    <Container>
    <>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger'
      ].map((variant) => (
        <Row>
          <Col xs={6} md={4}>

          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>22/ 09/ 2021 </Card.Header>
            <Card.Body>
            <Link exact to="/expandido" className='link'>
              <Card.Title>{variant} Armazem Genial </Card.Title>
            </Link>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        
      ))}
    </>
    </Container>
    </div>
  );
}

export default BgColorExample;