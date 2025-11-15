import { useState } from 'react'
import './App.css'

function App() {

  const [counter, incrementer] = useState(0);
  const decrement = () =>{
    incrementer(counter-1);
  }
  const increment = () =>{
    incrementer(counter+3);
    incrementer(counter+2);
    incrementer(counter+1);
    incrementer(counter+0);
  }
  return (
    <>
      <h1>Making my first React application - Counter</h1>
      <h3>Current value of counter: {counter}</h3>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
    </>
  )
}

export default App
