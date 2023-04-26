import { useEffect, useState } from "react";
import "./styles.css";
import NewToDoForm from "./NewToDoForm";
import ToDoList from "./ToDoList";

export default function App(){

  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos))
  }, [toDos]);

  const addToDo = (title) => {
    setToDos((currentTodos) => {
      return([...currentTodos, { id: crypto.randomUUID(), title, completed: false}])

    }
    )
  };


const toggleToDo = (id, completed) => {
  setToDos(currentTodos => {
    return ( currentTodos.map(toDo => {
      if (toDo.id === id){
        return {...toDo, completed}
      }
      return toDo;
    }))
  })
};

const deleteToDo = (id) =>{
  setToDos(currentTodos => {
    return currentTodos.filter(toDos => toDos.id !== id)
  })
};

  return (
    <>
      <NewToDoForm onSubmit={addToDo} />
    <h1 className="header">Todo List</h1>
      <ToDoList toDos={toDos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
    </>

  )
}
