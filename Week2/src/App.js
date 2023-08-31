
import React from "react";
import './App.css';
import Nav  from './components/Nav.js';
import Promo from './components/Promo.js';
import Hello from './components/Hello.js'
import Example from './components/Example.js'
import Example1 from './components/Example1.js'
import Example3 from './components/Example3.js'
import Card from './components/Card.js'
import Btn from './components/Btn'
import ModeToggler from './components/ModeToggler';
import StateComponent from './components/StateComponent';
import RegisterForm from './components/RegisterForm';
import Main from './components/Main.js'
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';



function App() {
  const [fruits] = React.useState([
    {fruitName: 'apple', id:1},
    {fruitName: 'apple', id:2},
    {fruitName: 'plum', id:3},
    {fruitName: 'plum', id:4},
    {fruitName: 'plum', id:4},
    {fruitName: 'plum', id:4},
    {fruitName: 'plum', id:4},

]);

  return (
    <div>
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits}/>
      <FruitsCounter fruits={fruits}/>
    </div>

  );
  
};
export default App;




// function handleClick () {
//   let randomNum = Math.floor(Math.random() * 3) + 1
//   console.log(randomNum)
//   let userInput = prompt('type a number');
//   alert(`Computer number: ${randomNum}, your guess ${userInput}`)
// }

// return (
//   <div>
//     <h1>Task: Add a button and handle a click event</h1>
//   <button onClick={handleClick}>Guess the number between 1 and 3</button>
//   </div>
// );
