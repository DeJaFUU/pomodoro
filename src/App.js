import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [time, setTime] = React.useState({
    second: '00',
    minute: '25',
    counter: 0
  })
  const [active, setActive] = React.useState(false)

  return (
    <div className="App">
      <h1> Pomodoro Clock</h1>
      <span>{time.minute}:{time.second}</span>
      <button>Start</button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
}

export default App;
