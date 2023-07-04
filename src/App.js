import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

function App() {

  const [mode , setMode] = useState('light');

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40';

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
        
        <Navbar title="PlaywithText" mode ={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
          <Textform heading="Enter your text below in the box ..." mode={mode}/>
        </div>
    </> );
}

export default App;
