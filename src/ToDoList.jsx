import React from 'react'
import "./styles.css";
import ToDoItem from './ToDoItem';



const ToDoList = ({toDos, toggleToDo, deleteToDo}) => {
  return (
    <ul className="list">
    {toDos.length === 0 && "No Todos"}
    {toDos.map(toDo => {
      return (
        <ToDoItem {...toDo} key={toDo.id} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
      )
    })}

    </ul>
  )
}

export default ToDoList
