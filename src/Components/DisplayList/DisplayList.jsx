import './displayList.css'
import { MdDeleteForever } from "react-icons/md"
import { BiCheck } from "react-icons/bi"
function DisplayList({ toDo }) {

    return <div>
        <div className="myList">
            <div>
                <p className="myTask">{toDo.title}</p>
                <p className="listDate">{toDo.createdAt}</p>
            </div>

            <div>
                <button className="statBtn"><BiCheck className="styleIcon" /></button>
                <button className="delBtn"><MdDeleteForever className="styleIcon" /></button>
            </div>
        </div>
    </div>
}

export default DisplayList