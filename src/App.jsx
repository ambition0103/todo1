import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {


  //todos: todo라는 객체를 여러개 가지고 있는 배열!
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      {/* <header>헤더입니다.</header> */}
      <Header>헤어입니다.</Header>
      <main
        style={{
          padding: "20px",
          backgroundColor: "#ceedd7",
        }}
      >
        {/* 인풋을 만들어 입력하는 부분 */}
        {/* <section>
          제목 : <input />
          내용 : <input />
          <button>추가</button>
        </section> */}
        <Input setTodos={setTodos} />


        {/* 투두리스트 출력하는 부분 */}
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </main>
      <footer>푸터입니다.</footer>
    </div>
  );
}

export default App;


const initialState = [
    {
      title: "제목1",
      contents: "내용1",
      isDone: false,
      id: uuidv4(),
    },
    {
      title: "제목2",
      contents: "내용2",
      isDone: true,
      id: uuidv4(),
    },
    {
      title: "제목",
      contents: "내용3",
      isDone: false,
      id: uuidv4(),
    },
  ]