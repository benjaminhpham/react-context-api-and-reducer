import React, { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";
import { useNavigate } from "react-router-dom";

export const initialState = {
  tasks: [
    {
      id: 1,
      title: "running errands",
      createdBy: "ben",
    },
    {
      id: 2,
      title: "do chores ",
      createdBy: "john",
    },
    {
      id: 3,
      title: "study react",
      createdBy: "dan",
    },
  ],
};

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const displayTasks = () => {
    dispatch({ type: "display_tasks" });
  };

  const addTask = (task) => {
    dispatch({ type: "add_task", payload: task });
  };

  const editTask = (task) => {
    dispatch({ type: "edit_task", payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: "delete_task", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        editTask,
        displayTasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
