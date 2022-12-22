import React, { useState } from "react";
import { useGlobal } from "../context/TaskContext";
import Task from "./Task";

export default function TaskList() {
  const { tasks } = useGlobal();
  const [searchTasks, setSearchTask] = useState(tasks);

  const handleChange = (e) => {
    const searchTitle = e.target.value;
    const foundTasks = tasks?.filter((task) =>
      task.title.toLowerCase().includes(searchTitle)
    );
    setSearchTask(foundTasks);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button>Search</button>
      {searchTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}
