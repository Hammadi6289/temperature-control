import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const decreaseTemperature = () => {
    if (temperatureValue === -10) return;
    const newTemp = temperatureValue - 1;
    setTemperatureValue(newTemp);
    if (newTemp < 15) {
      setTemperatureColor('cold');
    }
  };

  const increaseTemperature = () => {
    if (temperatureValue === 28) return;
    const newTemp = temperatureValue + 1;
    setTemperatureValue(newTemp);
    if (newTemp >= 15) {
      setTemperatureColor('hot');
    }
  };

  const handlePowerOff = () => {
    alert('POWER OFF');
  };

  return (
    <div className="app-container">
      <div className="power-button-container">
        <button className="power-button" onClick={handlePowerOff}>
          Power
        </button>
      </div>
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={decreaseTemperature}>-</button>
        <button onClick={increaseTemperature}>+</button>
      </div>
    </div>
  );
};

export default App;
