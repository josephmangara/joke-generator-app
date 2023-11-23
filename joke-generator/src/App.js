
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Randomjoke from './components/Randomjoke';
import Likebutton from './components/Likebutton';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';

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
    <div className='body'>
      <Header />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        <Route path='/About-us' element={<Aboutus/>}></Route>
      </Routes>
      <p>Welcome to the World Of Fun and Comedy. Crack your ribs with laughter</p>
      <ol>
          {jokes.map((joke, index) => (
          <li key={index}>
            <p>Setup: {joke.setup}</p>
            <p>Punchline: {joke.punchline}</p>
            <br />
          </li>
        ))}      
      </ol>
    <Randomjoke /><br />
    <Likebutton />
    <Footer />
    </div>
  );
}

export default App;
