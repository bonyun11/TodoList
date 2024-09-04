import Header from './component/Header';
import Search from './component/Search';
import Todolist from './component/Todolist';
import './App.css';
import { useState } from 'react';

const App= () => {
  const [todos,setTodos] = useState("")

  const getTodos = ( todo ) => {
    console.log(todo)
    setTodos(todo)
  }

  return (
    <div className="App">
      <Header/>
      <Search getTodos={getTodos}/>
      <Todolist todos={todos}/>
    </div>
  );
}

export default App;
