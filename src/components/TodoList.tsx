import { ITask } from "../Interface";

interface Props {
  todo: ITask;
  deleteTask(taskName: string): void;
}

const TodoList = ({ todo, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{todo.task}</span>
        <span>{todo.deadline}</span>
      </div>
      <button
        onClick={() => {
          deleteTask(todo.task);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoList;
