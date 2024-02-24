import "./App.css";
import { ChangeEvent, FC, useState } from "react";
import { ITask } from "./Interface";
import TodoList from "./components/TodoList";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setToDO] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "Task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { task: task, deadline: deadline };
    setToDO([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  const deleteTask = (taskName: string): void => {
    setToDO(
      todo.filter((todo) => {
        return todo.task !== taskName;
      })
    );
  };

  return (
    <div className="App">
      <h1>To Do App </h1>
      <div className="header">
        <input
          type="text"
          placeholder="Task"
          name="Task"
          value={task}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Deadline (in days)"
          name="Deadline"
          value={deadline}
          onChange={handleChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todo.map((individual: ITask, key: number) => {
          return (
            <TodoList key={key} todo={individual} deleteTask={deleteTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
