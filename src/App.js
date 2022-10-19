import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Pad from './Pad/Pad'

function App() {
  const audioClips = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

  const [volume, setVolume] = React.useState(0.25);
  const [recording, setRecording] = React.useState('');
  return (
    <div className='misc min-vh-100 text-dark' id='drum-machine'>
      <div className='text-center' id='display'>
        <h2 style={{fontSize: '4rem'}}>Drum Machine</h2>
        <div class="pad">
          {audioClips.map((clip) => (
            <Pad key={clip.id} clip={clip} volume={volume} setRecording={setRecording} />
          ))}
        </div>
        <br />
        <h4 style={{fontSize:'2rem'}}>Volume</h4>
        <input 
          type='range'  
          onChange={(e) => setVolume(e.target.value)} 
          step='0.05' 
          value={volume} 
          max='1' 
          min='0' 
          className='w-50'
          />
        <h3 className='text-white'>{recording}</h3>
      </div>
    </div>
  );
}

export default App;
