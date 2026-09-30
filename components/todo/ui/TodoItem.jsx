"use client";

import { useContext, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { TodoContext } from "../../../providers/TodoProvider";
const TodoItem = ({ tasksList }) => {
  const { showActiveTask } = useContext(TodoContext);
  const [isFevorite, setIsFevorite] = useState(false);

  const showData = showActiveTask
    ? tasksList.filter((task) => !task.isCompleted)
    : tasksList.filter((task) => task.isCompleted);

  const handleFevorite = () => {
    setIsFevorite(!isFevorite);
  };
  return (
    <div className="space-y-2">
      {showData.map((task, index) => (
        <div
          key={index}
          className="rounded-md shadow border border-zinc-300 dark:border-slate-800 hover:bg-[#3B3A39] bg-white dark:bg-slate-950 hover:text-slate-100 transition cursor-pointer px-5 py-2"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button className="w-5 h-5 rounded-full border-2 border-sky-500 mt-1 cursor-pointer "></button>
              <div>
                <h3
                  className={`font-medium text-md capitalize dark:text-white ${
                    task.isCompleted && "line-through"
                  }`}
                >
                  {task?.title}
                </h3>

                <p className="text-[10pt] text-slate-400 mt-1 flex gap-3 items-center capitalize">
                  <span>{task?.categoryId?.name}</span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <SlCalender /> {task?.dueDate}
                  </span>
                  <span>•</span>
                  <span>{task.repeat && <FiRepeat />}</span>
                </p>
              </div>
            </div>

            <span className="text-xl rounded-full text-yellow-400 cursor-pointer">
              {isFevorite ? (
                <FaStar
                  onClick={() => {
                    handleFevorite();
                  }}
                />
              ) : (
                <FaRegStar
                  onClick={() => {
                    handleFevorite();
                  }}
                />
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
