import React, { useState, useEffect } from 'react';


function Timer() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.text()).then(data => {
      data = JSON.parse(data);
      setCurrentTime(data.time);
    })
  }, []);

  return (
    <header>
      <div>
        <p>Timer: API time is {currentTime}.</p>
        <p>Timer: JS time is {new Date().toLocaleTimeString()}.</p>
      </div>
    </header>
  );
}


export default Timer;