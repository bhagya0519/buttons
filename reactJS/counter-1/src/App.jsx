import { useState } from 'react'
import './App.css';

function App() {

  const [counter, setCounter]  = useState(0)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <div class="app" >
    <div class="counter">
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      </div>

      <button className='btn'
      onClick={addValue}
      >Add value </button> 
      <br />
      <button className='btn'
      onClick={removeValue}
      >remove value </button>
    </div>
  )
}

export default App