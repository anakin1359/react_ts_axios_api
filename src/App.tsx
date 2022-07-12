import axios from 'axios';
import './App.css';

function App() {
  const jsonPUrl = "https://jsonplaceholder.typicode.com/todos"
  const onClickFetchData = () => {
    axios.get(jsonPUrl).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>
        データ取得
      </button>
    </div>
  );
}

export default App;
