

export function Header(props) {

    const {toDos} = props
    
    const toDoLength = toDos.length

    const isToDoPlural = toDoLength !==1 ? 'tasks' : 'task' 


  return (
    <header>
            <h1 className="text-gradient">You have {toDoLength} {isToDoPlural}.</h1>
    </header>
  )

}
