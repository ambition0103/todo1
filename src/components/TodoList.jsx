import Todo from './Todo';

function TodoList({ todos, isActive, setTodos }) {
  return (
    <div>
      {/* 리턴안에는 무조건 큰 태그 하나로 감싸야됨 */}
      <h4>{isActive === true ? "해야할것" : "한것들"}</h4>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            // <div
            //   style={{
            //     border: "1px solid black",
            //   }}
            //   key={item.id}
            // >
            //   <h5>{item.title}</h5>
            //   <p>{item.contents}</p>
            //   <button>{isActive ? "완료" : "취소"}</button>
            //   <button>삭제</button>
            // </div>
            <Todo item={item} isActive={isActive} setTodos={setTodos}/>
          );
        })}
    </div>
  );
}

export default TodoList;
