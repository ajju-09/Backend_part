import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('orange');


  return (
    <div className="w-full h-screen duration-200" style = {{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor('orange')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-orange-400">Orange</button>
        <button onClick={() => setColor('lightblue')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-sky-200">lightBlue</button>
        <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-400">Green</button>
        <button onClick={() => setColor('yellow')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-yellow-400">Yellow</button>
        <button onClick={() => setColor('indigo')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-indigo-400">Indigo</button>
        <button onClick={() => setColor('violet')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-violet-400">Violet</button>
      </div>
    </div>
  </div>
  )
}

export default App
