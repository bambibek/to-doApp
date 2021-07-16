
import './App.css';
import AddList from './Components/AddItem/AddList';
import DisplayList from './Components/DisplayList/DisplayList';
import { useState, useEffect } from 'react';
import { addTodo, getToDos, delToDo, updateToDo, getToDosById, updateTitleById } from './api/todo';
import EditItem from './Components/EditItem/EditItem';

function App() {

  const [toDos, setToDOs] = useState([])
  const [showEdit, setShowEdit] = useState(false)
  const [editToDo, setEditToDO] = useState({})

  // Submit function for addition of todo list 
  const onSubmitToDo = (title, done) => {
    // console.log(title)
    addTodo(title, done).then((value) => {
      if (value.success) {
        setToDOs((toDo) => [...toDo, value.data])
      }
    })
  }

  //submit function for editTitle 
  const onSubmitEditTitle = (id, title) => {
    updateTitleById(id, title).then((value) => {
      if (value.success) {
        setToDOs((editToDo) => {
          return editToDo.map((editedVal) => editedVal._id === value.data._id ? value.data : editedVal)
        })
        setShowEdit(false)
      }
    })
  }

  useEffect(() => {

    getToDos().then((value) => {
      if (value.success) {
        setToDOs(value.data)
      }
    })

  }, []);

  const onDeleteToDo = (id) => {
    delToDo(id).then((value) => {
      if (value.success) {

        // setToDOs((toDo) => [...toDo,])
        setToDOs((state) => state.filter(t => t._id !== value.data._id))
      }
    })
  }

  const onUpdateToDo = (id) => {
    updateToDo(id).then((value) => {
      if (value.success) {
        setToDOs((toDo) => {
          return toDo.map((val) => val._id === value.data._id ? value.data : val)
        })
      }

    })
  }

  function onEdit(id) {

    getToDosById(id).then((value) => {
      if (value.success) {
        setEditToDO(value.data)
        setShowEdit(true)
      }
    })
  }

  const cancelEdit = () => {
    setShowEdit(false)
  }


  // const [isDisplayed, setIsDisplayed] = useState(false)
  return (
    <div className="App">
      <div className={`wrapper ${ showEdit ? "blur" : "" }`}>

        <AddList onSubmitToDo={onSubmitToDo} />

        <div className="listWrapper">

          {toDos && toDos.map((toDo) => {
            return <DisplayList key={toDo._id} toDo={toDo} onDeleteToDo={onDeleteToDo} onUpdateToDo={onUpdateToDo} onEdit={onEdit} />

          })}

        </div>

      </div>
      {showEdit && <EditItem cancelEdit={cancelEdit} editToDo={editToDo} onSubmitEditTitle={onSubmitEditTitle} />}
    </div>
  );
}

export default App;
