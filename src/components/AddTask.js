import React, { useState } from "react";
import { useGlobal } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const navigate = useNavigate();
  const { tasks, addTask } = useGlobal();
  const [task, setTask] = useState({
    id: 0,
    title: "",
    createdBy: "",
  });

  const validateForm = () => {
    if (task.title !== "" && task.createdBy !== "") {
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      id: tasks[tasks.length - 1].id + 1,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      id: 0,
      title: "",
      createdBy: "",
    });
    navigate("/tasks");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            value={task.title}
            onChange={handleChange}
          />
          <label>Created By: </label>
          <input
            type="text"
            name="createdBy"
            placeholder="Created By..."
            value={task.createdBy}
            onChange={handleChange}
          />
          <button type="submit" disabled={validateForm()}>
            Add
          </button>
        </fieldset>
      </form>
    </div>
  );
}
