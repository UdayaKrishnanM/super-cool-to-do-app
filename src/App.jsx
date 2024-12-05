import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ToDoList } from "./components/ToDoList";
import { ToDoInput } from "./components/ToDoInput";
import { useState, useEffect } from "react";

function App() {

    // const toDos = [
    // { input: "Go to the GYM", complete: true }, 
    // { input: "Clean the Car", complete: false }, 
    // { input: "Dry the clothes", complete: false }, 
    // { input: "Buy medicines", complete: false }
    // ]

    const [toDos, setToDos] = useState([
      // {
      //   input: "Go to the GYM", complete: true
      // },
      // {
      //   input: "Clean the car", complete: false
      // }
    ])


    const [selectedTab, setSelectedTab] = useState('Open')


    function handleAddInput(newToDo) {
      const newValue = [...toDos, {input: newToDo, complete: false}]
      setToDos(newValue)
      handleSave(newValue)
    }

    function handleSave(currentToDos){
      localStorage.setItem("to-do-app", JSON.stringify({ toDos: currentToDos}))
    }


    function handleDelete(index){

      let newToDoList = toDos.filter((val, valIndex) => {
        return valIndex !== index
        }
      )
      setToDos(newToDoList)
      handleSave(newToDoList)
    }

    function handleModify(index){
      let newToDoList = [...toDos]
      let completedToDo = toDos[index]
      completedToDo['complete'] = true
      newToDoList[index] = completedToDo
      setToDos(newToDoList)
      handleSave(newToDoList)

    }

    useEffect(() => {

      if(!localStorage || !localStorage.getItem('to-do-app')){
        return 
      }
      let db = JSON.parse(localStorage.getItem('to-do-app'))
      setToDos(db.toDos)

    }, [])


  return (
    <>
      <Header toDos = {toDos}/>
      <Tabs toDos = {toDos} selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} />
      <ToDoList handleModify = {handleModify} handleDelete = {handleDelete} toDos = {toDos} selectedTab = {selectedTab} />
      <ToDoInput handleAddInput = {handleAddInput} />

    </>
  )
}

export default App
