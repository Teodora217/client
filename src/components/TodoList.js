import Todo from "./Todo";
export default function TodoList({ todos, toggleToDoStatus }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} toggleToDoStatus={toggleToDoStatus} />
        ))}
      </tbody>
    </table>
  );
}
