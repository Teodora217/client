import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((res) => res.json())
      .then((data) => {
        const result = Object.keys(data).map((id) => ({ id, ...data[id] }));
        setTodos(result);
        setIsLoading(false);
      });
  }, []);

  const onTodoAdd = () => {
    const lastId = Number(todos[todos.length - 1].id);
    const text = prompt("Task name");
    const newTask = { id: lastId + 1, text, isCompleted: false };
    setTodos((state) => [newTask, ...state]);
  };

  const toggleToDoStatus = (id) => {
    setTodos((state) =>
      state.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  return (
    <div>
      <Header />

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={onTodoAdd}>
              + Add new Todo
            </button>
          </div>

          <div className="table-wrapper">
            {IsLoading ? (
              <Loading />
            ) : (
              <TodoList todos={todos} toggleToDoStatus={toggleToDoStatus} />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
