import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import EditPage from "./components/EditPage";
import Task from "./components/Task";
import TaskDetail from "./components/TaskDetail";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/tasks/:id/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
