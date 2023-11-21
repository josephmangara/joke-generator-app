
import './App.css';
import React, { useState, useEffect } from 'react';
import Randomjoke from './components/Randomjoke';
import Footer from './components/Footer';

function App() {
  const [jokes, setJokes] = useState([]);


  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/ten')
      .then(response => response.json())
      .then(data => {
        setJokes(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  }, []);

  return (
    <div>
      <h1>Chuckle Charm</h1>
      <p>Welcome to the World Of Fun and Comedy. Crack your ribs with laughter</p>
      <ol>
        
          {jokes.map((joke, index) => (
          <li key={index}>
            <p>Setup: {joke.setup}</p>
            <p>Punchline: {joke.punchline}</p>
            <hr />
          </li>
        ))}
       
      </ol>
    <Randomjoke />
    <Footer />
    </div>
  );
}

export default App;
