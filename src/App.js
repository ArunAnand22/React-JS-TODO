import './App.css'
import { useState } from 'react';

function App() {

  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      {/* Input section */}
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={()=>setTodos([...toDos,{id:Date.now(), text: toDo,status: false}])}></i>
      </div>
      {/* Input section end */}
      <div className="todos">
        { toDos.map((obj)=>{
          return(
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(obj);
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2 
              }))
            }}  value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            {/* Delete icon */}
            <i id={obj.id} className="fas fa-times"
            onClick={(e)=>{
              let index=toDos.findIndex(obj=>{
                return obj.id==e.target.id
              })
              if(index!=-1){
                toDos.splice(index,1);
                setTodos([...toDos])
              }
            }}
            ></i>
          </div>
        </div>
          )
        }) 
        }

        {
          toDos.map((obj)=>{
            if(obj.status){
              return(
                <>
                <h1>Checklist items</h1>
                <h4 style={{color:'#fff'}}>{obj.text}</h4>
                </>
              )
            }
            return null;
          })
        }

      </div>
    </div>
  );
}

export default App;
