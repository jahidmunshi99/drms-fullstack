"use client";

import { createContext, useState } from "react";
import initialTasks from "../data/todo";

export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showActiveTask, setShowActiveTask] = useState(true);
  const [repeat, setRepeat] = useState(false);
  const [tasksList, setTasksList] = useState(initialTasks);

  const handleShowAddTaskModal = () => {
    setShowAddTask(true);
  };

  const onSaveTask = () => {
    setShowAddTask(false);
  };

  const handleShowTasks = () => {
    setShowActiveTask(!showActiveTask);
  };

  const handleSaveNewTask = (data) => {
    const description = "";
    const categoryId = {
      name: "fiverr",
    };
    const newTodo = { ...data, repeat, description, categoryId };
    setTasksList((prev) => [...prev, newTodo]);
    onSaveTask();
  };

  const value = {
    handleShowAddTaskModal,
    showAddTask,
    handleSaveNewTask,
    showActiveTask,
    handleShowTasks,
    setRepeat,
    repeat,
    tasksList,
    // functions
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
