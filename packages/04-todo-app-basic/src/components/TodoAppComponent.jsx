import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TodoFormComponent } from './TodoFormComponent'


export function TodoAppComponent () {
  const [todos, setTodos] = useState([])
  const [todoEdit, setTodoEdit] = useState(null)
  
  const createTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      title: todo.title,
      completed: todo.completed  
    }
        
    setTodos(prevState =>(
      [
        newTodo,        
        ...todos
      ]
    ))
  }
  
  const editTask = (todo) => {
    setTodoEdit(todo)
  }
  
  const updateTodo = (todo) => {
    const newTodos = todos.map( item => item.id === todo.id ? todo : item)
    setTodos(newTodos)
  }
  
  const deleteTask = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  
  const handleChandeCompleted = (event) => {
    console.log(event.target.checked, event.target.getAttribute('data-id'))
    const id = event.target.getAttribute('data-id')
    const newTodos = todos.map(item => item.id === id ? {...item, completed: !item.completed} : item)
    console.log(newTodos)
    setTodos(newTodos)
  }
  
  return (
    <>
      <h1>TodoApp Component</h1>
      
      <section className="todo-container">
        <TodoFormComponent
          todoEdit={todoEdit}
          createTodo={createTodo}
          updateTodo={updateTodo}
        />
        
        <div className="list-todos">
          {
            todos && (
              todos.map( todo => (
                <div className="todo" key={todo.id}>
                  <input type="checkbox" onChange={handleChandeCompleted} data-id={todo.id}/>
                  <p className={`todo-title ${todo.completed ? 'todo-completed' : ''} `}>{todo.title}</p>
                  <div className="btn-container">
                    <button className="btn btn-edit" onClick={() => editTask(todo)}>Edit</button>
                    <button className="btn btn-delete" onClick={() => deleteTask(todo.id)}>Delete</button>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </section>
    </>
  )
}