import React from "react";
import { useGlobal } from "../context/TaskContext";
import { Link } from "react-router-dom";

export default function Task({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.createdBy}</p>
      <button>
        {" "}
        <Link to={`/tasks/${task.id}`}>Details</Link>
      </button>
    </div>
  );
}
