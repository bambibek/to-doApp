import './editItem.css'
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react'
function EditItem({ cancelEdit, editToDo, onSubmitEditTitle }) {


    const [editItem, setEditItem] = useState(editToDo.title)

    const handleInputChange = (event) => {
        setEditItem(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        onSubmitEditTitle(editToDo._id, editItem)
    }


    console.log(editItem)
    return <div className="editTest">
        <form >
            <input className="input inputEdit" value={editItem} type="text" placeholder="enter new List item." onChange={handleInputChange} />
            <button onClick={cancelEdit} className="cancelBtn"><AiOutlineClose /></button>
            <button className="subEditBtn" onClick={handleSubmit}>submit</button>

        </form>

    </div>
}

export default EditItem


