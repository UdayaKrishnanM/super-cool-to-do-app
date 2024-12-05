import { ToDoCard } from "./ToDoCard";

export function ToDoList(props) {

    const { toDos, selectedTab, handleDelete, handleModify } = props

    const tab = 'All'

    const fileredToDoList = selectedTab === 'All' ? toDos :
            selectedTab ==='Completed' ? toDos.filter(val => val.complete) :
            toDos.filter(val => !val.complete)


    return (
        <>
            {
                fileredToDoList.map((toDo, toDoIndex) => {
                    return (
                        <ToDoCard 
                            handleModify = {handleModify} 
                            handleDelete = {handleDelete} 
                            key = {toDoIndex} 
                            toDoIndex = {toDos.findIndex(val => val.input == toDo.input)} 
                            toDo = {toDo} 
                        />
                    )
                })
            }

        </>
    )
}