import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import ButtonFunc from './components/ButtonFunc'
import Students from './components/Students'

function App() {
  return (
    <div >
     {/* <Button startCount={3} >Like</Button>
     <ButtonFunc startCount={5}>Dislike</ButtonFunc> */}
     <Students />
    </div>
  );
}

export default App;
