import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Task List</Link>
        </li>
        <li>
          <Link to="/add">Add More Task</Link>
        </li>
      </ul>
    </div>
  );
}
