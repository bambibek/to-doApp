
import './App.css';
import AddList from './Components/AddItem/AddList';
import DisplayList from './Components/DisplayList/DisplayList';
import { useState } from 'react';
import { addTodo } from './api/todo';

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

  return (
    <div className="App">
      <div className="wrapper">

        <AddList onSubmitToDo={onSubmitToDo} />
        <div className="listWrapper">
          {toDos && toDos.map((toDo) => {
            return <DisplayList toDo={toDo} />

          })}



        </div>

      </div>

    </div>
  );
}

export default App;
