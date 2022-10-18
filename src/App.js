import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import useSound from 'use-sound';
function App() {
  const soundUrl = '/notes/Heater-1.mp3';

  const [playCev] = useSound(
    soundUrl,
    {volume: 0.25}
  )
  const handleClick = () => {
    playCev()
  }
  return (
    <Container fluid='md' className='machine' >
      <Row>
        <Col className='drum'>
          <button onClick={handleClick} type='button' className='sound'>Q</button>
        </Col>
        <Col className='drum'>
          <button type='button' className='sound'>W</button>
        </Col>
        <Col className='drum'>
          <button type='button' className='sound'>E</button>
        </Col>
      </Row>
      <div className='break'/>
      <Row>
        <Col className='drum'>
          <button type='button' className='sound'>A</button>
        </Col>
        <Col className='drum'>
          <button type='button' className='sound'>S</button>
        </Col>
        <Col className='drum'>
          <button type='button' className='sound'>D</button>
        </Col>
      </Row>
      <div className='break'/>
      <Row>
        <Col className='drum'>
          <button type='button' className='sound'>Z</button>
        </Col>
        <Col className='drum'>
          <button type='button' className='sound'>X</button>
        </Col>
        <Col className='drum'>
          <button type='button' className='sound'>C</button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
