export const taskReducer = (state, action) => {
  switch (action.type) {
    case "display_tasks":
      return {
        state,
      };
    case "add_task":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "edit_task":
      const editedTask = action.payload;
      const updatedTasks = state.tasks?.map((task) => {
        if (task.id === editedTask.id) {
          return (task = editedTask);
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    case "delete_task":
      const id = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id),
      };
    default:
      return state;
  }
};
