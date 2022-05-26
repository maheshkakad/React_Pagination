import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

const Todosaxios = () => {

const [page ,setPage] = useState(1)
const [totalCount, setTotalCount]= useState(0)
const [todos, setTodos] = useState([]);
const [limit, setLimit] =useState(5)

useEffect(() => {
  const getTodo =async () => {
    let res = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`);
    // console.log(res.data)
    setTodos(res.data);
    setTotalCount(Number(res.headers["x-total-count"]));
  };
  getTodo();
}, [page, limit])

const setButton = (index) => () =>
  setTodos((todos) => todos.filter((totos, i) => i !== index));





  return (
    <div>
         <button disabled={page<=1} onClick={() => setPage(page-1)}> {`<`} </button>
    <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
    </select>
    <button disabled ={totalCount < page*5} onClick={() => setPage(page+1)}> {`>`} </button>
    
      {todos.map((todo,index) => {
        console.log(todo)
      return <div style={{  display:"flex", width:"60%", justifyContent:"space-between",margin:"auto",lineHeight:"8 0px"}}>
      
        <div key={todo.id}>{todo.id} {` : `} { todo.value }</div>
        <input type="checkbox"  />
        <div> <button style={{backgroundColor:"teal" , borderRadius:"5px",width:"100px",height:"40px",color:"white" }} onClick={setButton(index)}>Delete</button></div>
       </div>
      })}

    </div>
  )
}

export default Todosaxios