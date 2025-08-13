import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(1); // Starts from 1 to match screenshot
  const [rupees, setRupees] = useState('');
  const [converted, setConverted] = useState('');

  const increment = () => {
    setCount(prev => prev + 1);
    alert("Hello! You clicked increment.");
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = () => {
    alert("Welcome");
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  const handleConvert = (e) => {
    e.preventDefault();
    const value = parseFloat(rupees);
    if (isNaN(value) || value <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const euro = value * 80; // Matches your alert: 80 * 80 = 6400
    alert(`Converting to Euro Amount is ${euro}`);
    setConverted(`€${euro}`);
  };

  return (
    <div style={{ margin: "20px", textAlign: "center", lineHeight: "2.5em" }}>
      <h2>{count}</h2>

      <button onClick={increment}>Increment</button><br />
      <button onClick={decrement}>Decrement</button><br />
      <button onClick={sayWelcome}>Say welcome</button><br />
      <button onClick={handleClick}>Click on me</button><br />

      <h3 style={{ color: 'green', fontWeight: 'bold', fontSize: '28px' }}>
        Currency Convertor!!!
      </h3>

      <form onSubmit={handleConvert}>
        <label>Amount:</label><br />
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        /><br />

        <label>Currency:</label><br />
        <input type="text" value="Euro" disabled /><br />

        <button type="submit">Submit</button>
      </form>

      {converted && <p>Converted: {converted}</p>}
    </div>
  );
}

export default App;
