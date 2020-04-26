import React from 'react';
import logo from './logo.svg';
import './App.css';

//note :
// - component like function
// - props like parameter

//new component
// function Greeting(){
//   return <h1> Hello Messi </h1>
// }

//new component with props
function Greeting(props){
  // return <h1> Hello {props.name}, {props.age} </h1>
  return <h1> Hello {props.name}, your number is <Bio number={props.number}/> </h1>
}

function Bio(props){
  return <span> {props.number} </span>
}

//default component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* call component */}
        {/* <Greeting/> */}

        {/* call component with props*/}
        <Greeting name="Suarez" number="9"/>
        <Greeting name="Griezmann" number="17"/>

    </header>
    </div>
  );
}

export default App;
