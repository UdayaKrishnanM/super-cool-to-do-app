

export function ToDoCard (props) {

    const { toDo, handleDelete, toDoIndex, handleModify } = props



    return (
        <div className="card todo-item">
            <p>
                {toDo.input}
            </p>
            <div className="todo-buttons">
                <button disabled ={toDo.complete} onClick={() =>{
                    handleModify(toDoIndex)
                }} >
                    <h6>Done</h6>
                </button>

                <button onClick={() => {
                    handleDelete(toDoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>

        </div>
    )


}