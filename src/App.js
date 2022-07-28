
import Todo from'./components/todo/Todo';
import {useState} from "react"
import Input from './components/input/Input'
import List from './components/list/List';


function App() {

  const [todos, setTodos] = useState([ 1, "nmadur"])



  return (
    <div className="App container">
      <ul className='mt-5'>
        <Input array = {todos}  />

        <List>
          {
            todos.map( el => (
              <Todo heading = {el} />
            ))
          }
        </List>
      </ul>

    </div>

  );



}

export default App;
