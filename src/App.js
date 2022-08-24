
import React from 'react';
import './App.css';
import Header from './Header';
import Module from './Modules';
import Nav from './Navigation';
import Foot from './Footer';




function App() {
  return (
    <div className="App">
     <Header />
     <hr></hr>
   <Nav /> 
   <hr></hr>
   <Module />
    <Foot />
    </div>
    
  );
}

export default App;
