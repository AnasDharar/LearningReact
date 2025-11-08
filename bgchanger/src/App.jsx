import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('bg-gray-500');
  function changecolor(x){
    setColor(x);
  }
  return (
    <>
      <div className={`${color} justify-center items-center w-screen h-screen flex`}>
        <div className='p-3 border-2 border-black rounded-md bg-gray-800 shadow-amber-50 shadow-md'>
          <button className='p-4 bg-red-500 m-4 shadow-2xl rounded-2xl text-white' onClick={() => changecolor('bg-red-500')}>Red</button>
          <button className='p-4 bg-green-500 m-4 shadow-2xl rounded-2xl text-white' onClick={() => changecolor('bg-green-500')}>Green</button>
          <button className='p-4 bg-blue-500 m-4 shadow-2xl rounded-2xl text-white' onClick={() => changecolor('bg-blue-500')}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
