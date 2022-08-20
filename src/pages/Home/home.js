import './home.css';
import armazenLogo from "../../assets/warehouse.png";
import Container from 'react-bootstrap/esm/Container';

function Home() {

    return(
        <Container>
            <div>
                <div>
                    <h2><img src={armazenLogo} alt='ArmazenLogo' className='ArmazenLogo' /> Genial</h2>
                </div>
                <div className='container'>
                    <h3>Main</h3>  
                </div>
            </div>
        </Container>
    )
}

export default Home;