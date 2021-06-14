import React from 'react';
import './App.css'

import { Connector } from 'mqtt-react-hooks';
import Status from './components/Status';
import Button from './components/Button'

export default function App() {
  return (
    <Connector brokerUrl="192.168.0.14:1884">
      <div className='App'>
        <Status />
        <Button />
      </div>
    </Connector>
  );
}
