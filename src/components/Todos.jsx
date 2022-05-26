
import React, { useEffect, useState } from 'react'




const Todos = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] =useState("");
   

    const saveInfo =() => {
        
    fetch("http://localhost:8080/todos", {
        method:"POST",
        headers:{
            "content-type": "application/json",
        },
        body: JSON.stringify({
            value:newTodo,
            isCompleted: false,
        }),
    })
    .then((r) => r.json())
    .then((d) => {
        setTodos([...todos, d])
        setNewTodo("")

      console.log(d)
    });

    };
     
  

  useEffect(() => {

    fetch("http://localhost:8080/todos")
  .then((r) => r.json())
  .then((d) => {
    setTodos(d)
    console.log(d)
  });

  },[]);
  
  
  return (
    <div>Todos
        <div>
           <div>
            <input style={{ width: "250px" ,height:"40px",borderRadius:"10px"}} type="text" value={newTodo} onChange={({ target }) => setNewTodo(target.value)} />
            <button onClick={saveInfo}>+</button>
           </div>
            {todos.map((todo) => (
              <>
                {/* <div key={todo.id}>{todo.value}</div> */}
               
                </>
            ))}
        </div>
    </div>
  )
};

export default Todos