import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';

// 型定義
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

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
      <button onClick={onClickFetchData}>
        データ取得
      </button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
