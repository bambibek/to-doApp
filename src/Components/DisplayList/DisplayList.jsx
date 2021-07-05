import './displayList.css'
import { MdDeleteForever } from "react-icons/md"
import { BiCheck, BiTime } from "react-icons/bi"
function DisplayList({ toDo, onDeleteToDo, onUpdateToDo }) {

    return <div>
        <div className="myList">
            <div>
                <p className={toDo.done ? "onComplete myTask" : "myTask"}>{toDo.title}</p>
                <p className="listDate">{toDo.createdAt}</p>
            </div>

            <div>
                <button onClick={() => onUpdateToDo(toDo._id)} className="statBtn"> {toDo.done ? <BiCheck className="styleIcon" /> : <BiTime className="styleIcon" />} </button>
                <button onClick={() => onDeleteToDo(toDo._id)} className="delBtn"><MdDeleteForever className="styleIcon" /></button>
            </div>
        </div>
    </div>
}

export default DisplayList