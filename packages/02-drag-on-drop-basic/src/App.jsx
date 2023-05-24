import { useState } from 'react'
import { TitleComponent } from './components/TitleComponent'
import { DragAndDropComponent } from './components/DragAndDropComponent'

import './App.css'

function App() {

  return (
    <main className="main">
      <TitleComponent/>
      <DragAndDropComponent/>
    </main>
  )
}

export default App
