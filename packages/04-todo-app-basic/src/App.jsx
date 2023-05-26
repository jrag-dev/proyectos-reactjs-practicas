import { useState } from 'react'
import { TodoAppComponent } from './components/TodoAppComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoAppComponent/>
  )
}

export default App
