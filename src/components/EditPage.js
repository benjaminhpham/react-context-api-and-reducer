import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobal } from "../context/TaskContext";

export default function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, editTask } = useGlobal();
  const foundTask = tasks.find((task) => task.id === Number(id));
  const [editedTask, setEditedTask] = useState({
    id: Number(id),
    title: foundTask.title,
    createdBy: foundTask.createdBy,
  });

  const validateForm = () => {
    if (editedTask.title !== "" && editedTask.createdBy !== "") {
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(editedTask);
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
            value={editedTask.title}
            onChange={handleChange}
          />
          <label>Created By: </label>
          <input
            type="text"
            name="createdBy"
            placeholder="Created By..."
            value={editedTask.createdBy}
            onChange={handleChange}
          />
          <button type="submit" disabled={validateForm()}>
            Edit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
