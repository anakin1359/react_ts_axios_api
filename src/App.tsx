import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';
import { TodoType } from "./types/todo"
import { Text } from './Text';

function App() {
  const jsonPUrl = "https://jsonplaceholder.typicode.com/todos"
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>(jsonPUrl).then((res) => {
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <Text color='red' fontSize='20px'/>
      <button onClick={onClickFetchData}>
        データ取得
      </button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default App;
