
import './App.css';
import AddList from './Components/AddItem/AddList';
import DisplayList from './Components/DisplayList/DisplayList';
import { useState, useEffect } from 'react';
import { addTodo, getToDos, delToDo, updateToDo } from './api/todo';

function App() {

  const [toDos, setToDOs] = useState([])

  const onSubmitToDo = (title, done) => {
    // console.log(title)
    addTodo(title, done).then((value) => {
      if (value.success) {
        setToDOs((toDo) => [...toDo, value.data])
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

  return (
    <div className="App">
      <div className="wrapper">

        <AddList onSubmitToDo={onSubmitToDo} />
        <div className="listWrapper">
          {toDos && toDos.map((toDo) => {
            return <DisplayList toDo={toDo} onDeleteToDo={onDeleteToDo} onUpdateToDo={onUpdateToDo} />

          })}



        </div>

      </div>

    </div>
  );
}

export default App;
