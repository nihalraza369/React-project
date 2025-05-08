import React, { useState, useEffect, useCallback, useRef } from 'react';

function App() {
  // State variables to track time and whether the timer is running 
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useRef to store the interval id so that it can be cleared later
  const intervalRef = useRef(null);

  // useCallback for starting and stopping the timer, memoizing the function
  const toggleTimer = useCallback(() => {
    if (isRunning) {
      // If timer is running, stop it
      clearInterval(intervalRef.current);
    } else {
      // If timer is stopped, start it
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    setIsRunning(prev => !prev); // Toggle the state
  }, [isRunning]);

  // useEffect to clear the interval when the component is unmounted
  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current); // Clear interval if component unmounts
    };
  }, []);

  // Reset the timer when the reset button is clicked
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current); // Clear any existing interval
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'fantasy', fontSize: '80px',color: 'black' }}>
      <h1>Timer App:</h1>
      
      <p style={{ fontSize: '50px', margin: '30px', backgroundColor: 'gray', padding: '40px', borderRadius: '10px', color: 'white' }}>
        Time: <span style={{ color: "black" }}>{time}</span> seconds
      </p>
      

      <div>
        <button onClick={toggleTimer} style={{ marginRight: '10px',fontSize:'50px', backgroundColor: isRunning ? 'red' : 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px'}}>
          {isRunning ? 'Stop' : 'Start'} Timer
        </button>
        <button onClick={resetTimer} style={{ backgroundColor: 'red',fontSize:'50px', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px' }}>
          Reset Timer
        </button>
      </div>
    </div>
  );
}

export default App;
