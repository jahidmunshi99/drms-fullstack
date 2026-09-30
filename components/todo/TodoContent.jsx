"use client";
import React, { useContext } from "react";
import { TodoContext } from "../../providers/TodoProvider";
import AddTaskModal from "../todo/AddtaskModal";
import TodoHeader from "./TodoHeader";

const TodoContent = ({ todoList }) => {
  const { showAddTask } = useContext(TodoContext);
  return (
    <div>
      <TodoHeader />

      <div
        className={`transition-all duration-300 ease-out ${
          showAddTask
            ? "translate-y-0 scale-100 opacity-100"
            : "-translate-y-10 scale-95 opacity-0 hidden"
        }`}
      >
        <AddTaskModal />
      </div>

      {todoList}
    </div>
  );
};

export default TodoContent;
