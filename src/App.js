import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid='md' className='machine'>
      <Row>
        <Col className='drum'>
          <p className='sound'>Q</p>
        </Col>
        <Col className='drum'>
          <p className='sound'>W</p>
        </Col>
        <Col className='drum'>
          <p className='sound'>E</p>
        </Col>
      </Row>
      <Row>
        <Col className='drum'>
          <p className='sound'>A</p>
        </Col>
        <Col className='drum'>
          <p className='sound'>S</p>
        </Col>
        <Col className='drum'>
          <p className='sound'>D</p>
        </Col>
      </Row>
      <Row>
        <Col className='drum'>
          <p className='sound'>Z</p>
        </Col>
        <Col className='drum'>
          <p className='sound'>X</p>
        </Col>
        <Col className='drum'>
          <p className='sound'>C</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
