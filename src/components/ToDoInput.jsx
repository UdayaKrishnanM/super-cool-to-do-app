import { useState } from "react"

export function ToDoInput (props) {

    const {handleAddInput} = props

    const [inputValue, setInputValue] = useState('')

    return (
        <div className="input-container">
            <input value ={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} placeholder = "Add task"/>

            <button onClick={() => {
                if(!inputValue) {return}
                handleAddInput(inputValue)
                setInputValue('')
            }}>
                <i className = "fa-solid fa-plus"/>
            </button>
        </div>
    )
}