import React, { useEffect, useState } from "react";
import { fetchTasks, createTask, deleteTask } from "../../api";
import TaskForm from "../taskForm/TaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetchTasks(token);
      setTasks(response.data);
    };
    getTasks();
  }, [token]);

  const handleDelete = async (id) => {
    await deleteTask(id, token);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleCreate = async (newTask) => {
    const response = await createTask(newTask, token);
    setTasks([...tasks, response.data]);
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      <TaskForm onCreate={handleCreate} />
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
