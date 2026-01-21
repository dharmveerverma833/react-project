import React, { useState } from 'react'

function Todo_list() {
  const [todos, setTodos] = useState(["miss"]);
  const[newTodo, setNewTodo] = useState("");

  let newAdd =() =>{
    setTodos([...todos, newTodo]);
    console.log(todos);
    
  }
  let addNew = (e) =>{
    setNewTodo(e.target.value);
  }

  return (
    <>
    <div>
      <input type="text" value={newTodo} onChange={addNew} placeholder='Add new task' />
      <br /> <br />
      <button onClick={newAdd}>Add Task</button>
      <br/>
      <h3>Todo Tasks</h3>
      <hr />
      <ul>
      {
       todos.map((todos =>(
        <li>{todos}</li>
       )))      
      }
      </ul>
    </div>
    </>
  )
}

export default Todo_list;