import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Todo_list() {
  const [todos, setTodos] = useState([{task: "sample task", id:uuidv4()}]);
  const[newTodo, setNewTodo] = useState("");

  let newAdd =() =>{
    setTodos([...todos,{task:newTodo , id: uuidv4()}]);
    console.log(todos);
    setNewTodo("");
    
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
       todos.map((todos) =>(
        <li key={todos.id} >{todos.task}</li>
       ))      
      }
      </ul>
    </div>
    </>
  )
}

export default Todo_list;