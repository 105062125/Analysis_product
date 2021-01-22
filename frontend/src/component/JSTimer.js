import React from 'react';


function JSTimer() {
  return (
    <header>
      <div>
        <p>Timer: JS time is {new Date().toLocaleTimeString()}.</p>
      </div>
    </header>
  );
}

setInterval(JSTimer, 1000);

export default JSTimer;