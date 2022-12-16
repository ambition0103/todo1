import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

//구조분해할당? 
function Input({ setTodos }) {

  const [ title, setTitle ] = useState("");
  const [ contents, setContents ] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault(); //새로고침 방지

    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    //지금 세팅 된 타이들과 컨텐트를 투두스에 넣어주는 작업
    setTodos((prev) => {
      return [...prev, newTodo]; //이전값은 그대로하면서 새로운 뉴투두값 더해죵
    });
  };


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };



  return (
    <section>
      <form onSubmit={handleSubmitClick}>
      제목 : <input value={title} onChange={handleTitleChange} />
      내용 : <input value={contents} onChange={handleContentsChange} />
      <button>추가</button>
      </form>
    </section>
  );
}

export default Input;
