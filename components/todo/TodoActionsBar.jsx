"use client";
import React, { useContext } from "react";
import { TodoContext } from "../../providers/TodoProvider";
import Button from "../common/Button";
const TodoActionsBar = () => {
  const { handleShowAddTaskModal, handleShowTasks, showActiveTask } =
    useContext(TodoContext);
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() => {
          handleShowAddTaskModal();
        }}
        className="px-4 hover:text-sky-500 "
      >
        Add New
      </Button>
      <Button
        className={`px-4 hover:text-sky-500 ${
          !showActiveTask ? "text-sky-500 bg-red-400" : ""
        }`}
        onClick={() => {
          handleShowTasks();
        }}
      >
        Active
      </Button>

      <Button
        className={`px-4 hover:text-sky-500 ${
          showActiveTask ? "text-white bg-red-400" : ""
        }`}
        onClick={() => {
          handleShowTasks();
        }}
      >
        Completed
      </Button>
    </div>
  );
};

export default TodoActionsBar;
