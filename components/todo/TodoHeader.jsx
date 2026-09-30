import { CiLight } from "react-icons/ci";

import TodoActionsBar from "./TodoActionsBar";
const TodoHeader = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 space-y-5">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center">
              <CiLight className="text-sky-400 text-3xl" />
            </div>

            <div className="">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                My Day
              </div>
              <p className="text-white font-medium mt-2">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <TodoActionsBar />
      </div>{" "}
    </div>
  );
};

export default TodoHeader;
