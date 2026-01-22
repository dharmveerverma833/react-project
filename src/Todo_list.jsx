import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Todo_list() {
  const [todos, setTodos] = useState([{task: "sample task", id:uuidv4(),isDone: false}]);
  const[newTodo, setNewTodo] = useState("");

  let newAdd =() =>{
    setTodos((prevTodos) =>{
     return [...prevTodos, {task:newTodo , id: uuidv4(), isDone:false }]
    });
    // console.log(todos);
    setNewTodo("");
  }
  
  let addNew = (e) =>{
    setNewTodo(e.target.value);
  }
  let deleteTodo = (id)=> {
    setTodos((prevTodos)=>todos.filter((prevTodos) =>prevTodos.id != id));
    // console.log(copy);
  }
    
  let markIsDoneAll = () =>{
     setTodos((prevTodos) =>(
     prevTodos.map((todo) => {
      return({...todo, 
      isDone: true,
    });
     })
     ));
     console.log(todos);
  }
  
  let markAsDone = (id) =>{
    
    setTodos((prevTodos) =>(
     prevTodos.map((todo) => {
      if(todo.id == id){
      return({...todo, 
      isDone: true,
    });
    }else
    return todo;
     })
     ));
    //  console.log(todos);
  
  };

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
       todos.map((todo) =>(
        <li key={todo.id}>
          <span style={todo.isDone? {textDecoration : "line-through"}:{}}>
            {todo.task}
            </span>
          &nbsp; &nbsp;
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          &nbsp; &nbsp;
          <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
          </li>
       ))      
      }
      </ul>
      <button onClick={markIsDoneAll}>Mark As Done</button>
    </div>
    </>
  )
}

export default Todo_list;