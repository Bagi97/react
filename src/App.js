import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const imesajta = 'Lista korisnika';
 

function App() {
  return (
    <div className="App">
      <Header />

      <Main ime={imesajta}   />

      <Footer/>

    </div>
  );
}

export default App;
