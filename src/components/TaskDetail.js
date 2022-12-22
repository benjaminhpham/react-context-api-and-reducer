import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGlobal } from "../context/TaskContext";

export default function TaskDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { tasks, deleteTask, editTask } = useGlobal();
  const foundTask = tasks.find((task) => task.id === Number(id));
  const handleDeleteTask = () => {
    deleteTask(foundTask.id);
    navigate("/tasks");
  };
  return (
    <div>
      <h3>{foundTask.title}</h3>
      <h3>{foundTask.createdBy}</h3>
      <button onClick={editTask}>
        <Link to={`/tasks/${id}/edit`}>Edit</Link>
      </button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}
