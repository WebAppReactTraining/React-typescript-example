import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import { strict } from "assert";
import { string } from "prop-types";
import Context from './Context';
const sum = (a: number, b: number): number => {
  return a + b;
};

type FormElem = React.FormEvent<HTMLFormElement>;
//type references another type

interface Itodo {
  text:string
  complete: boolean
}
//interface creates new tpes
export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<Itodo[]>([]);
  
  const handleSubmit = (e:FormElem):void =>{
    e.preventDefault();
    addTodo(value);
    setValue('');
  }
  const addTodo =(text:string) =>{
    const newTodos:Itodo[] = [...todos, { text:text, complete:false}]
    setTodos(newTodos);
  }
  const completeTodo = (index:number):void =>{
    const newTodos:Itodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }
  const deleteTodo = (index:number):void =>{
    const newTodos:Itodo[] =[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required/>
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((todo:Itodo,index:number)=>{
            return (
              <Fragment key={index}>
                <div style={{textDecoration: todo.complete ?"line-through":""}}>{todo.text}
                <input type="button" value={todo.complete ? "Incomplete":"Complete"} onClick={()=>completeTodo(index)}/> 
                <input type="button" value="X" onClick={()=>deleteTodo(index)}/>
                </div>
                <div><h1>Context App</h1></div>
                <Context/>
              </Fragment>
            );
        })}
      </section>
    </Fragment>
  );
}
const root = document.getElementById("app-root");

ReactDom.render(<App />, root);
