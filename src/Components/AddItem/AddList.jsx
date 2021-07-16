import './addList.css'
import { useState } from 'react'

function AddList({ onSubmitToDo }) {

    const [input, setInput] = useState("");

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(input)
        onSubmitToDo(input, false)
    }

    return <div>
        <form onSubmit={handleSubmit} >
            <input value={input} className="input" type="text" onChange={handleInputChange} placeholder="What's your plan today?" />
        </form>
    </div>
}

export default AddList
