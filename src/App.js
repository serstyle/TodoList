import React, { useState } from 'react';

const Todo = ({todo, index, completeTodo, deleteTodo}) =>{
  return(
    <div style={{textDecoration: todo.completed? 'line-through': ''}}>
      {todo.text}
      <div>
        <button onClick={()=> completeTodo(index)}>
          Complete
        </button>
        <button onClick={()=>deleteTodo(index)}>X</button>
      </div>
    </div>
  )
}

const TodoForm = ({addTodo}) =>{
  const [value, setValue] = useState('');
  const handleSubmit = e =>{
    e.preventDefault();
    if(!value){
      return
    }
    addTodo(value);
    setValue('')
  }
  return(
    <form onSubmit={handleSubmit}>
      <input 
      type='text'
      placeholder='add Todo ...'
      value = {value}
      onChange={(e) => setValue(e.target.value)}
        />
    </form>
  )
}

const App = () =>{
  const [todos, setTodo] = useState([
    {
      text:'Todo 1',
      completed: false
    },
    {
      text:'Todo 3',
      completed: false
    },
    {
      text:'Todo 2',
      completed: false
    }
  ])

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodo(newTodos)
  }
  const completeTodo = (i) =>{
    const newTodos = [...todos];
    newTodos[i].completed = true;
    setTodo(newTodos);
  }
  const deleteTodo = (index)=>{
    // // also use splice like that :
    // const newTodo = [...todos];
    // newTodo.splice(index, 1);
    // //filter with
    const newTodo = todos.filter((todo, i) =>{
     return i !== index ? todo: null
    })
    setTodo(newTodo)
  }
  return(
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, i)=>(
          <Todo key={i} index={i} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
