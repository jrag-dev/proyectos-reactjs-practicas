import { useState, useEffect } from 'react'


const initialState = {
  id: null,
  title: '',
  completed: false  
}

export function TodoFormComponent ({ todoEdit, createTodo, updateTodo }) {
  
  const [form, setForm] = useState(initialState)
  
  useEffect(() => {
    if (todoEdit) {
      setForm(todoEdit)
    } else {
      setForm(initialState)
    }
  }, [todoEdit])
  
  const handleChanceTitle = (event) => {
    console.log({
      ...form,
      title: event.target.value
    })
    setForm({
      ...form,
      title: event.target.value
    })
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    
    if (form.title === '' ) return
    
    if (!todoEdit) {
      createTodo(form)
    } else {
      updateTodo(form)
    }
  
    setForm(initialState)
  }
  
  return (
    <form className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        className="form-input"
        onChange={handleChanceTitle}
        value={form.title}
      />
      <button
        className="btn-form"
      >Create</button>
    </form>
  )
}