import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FiRepeat } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { TodoContext } from "../../providers/TodoProvider";

const AddtaskModal = () => {
  const { handleSaveNewTask, setRepeat, repeat } = useContext(TodoContext);
  const [notification, setNotification] = useState(false);
  const dateRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dueDate = watch("dueDate");
  const reminder = watch("reminder");

  // const handleTask = (data) => {
  //   onSaveTask();
  //   const newTodo = { ...data, repeat };
  //   console.log(newTodo);
  //   const update = initialTasks.push(newTodo);
  //   console.log(update);
  // };

  return (
    <div className="mx-auto bg-[#252423] border border-[#3a3a3a] rounded-lg overflow-hidden scrollbar-none shadow-lg mt-4 lg:mt-2">
      <form action="" onSubmit={handleSubmit(handleSaveNewTask)}>
        {/* <!-- Input Area --> */}
        <div className="flex items-center gap-4 px-5 py-4">
          {/* <!-- Circle --> */}
          <button className="w-5 h-5 rounded-full border-2 border-sky-500 hover:bg-sky-500/10 transition"></button>

          {/* <!-- Input --> */}
          <input
            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400"
            placeholder={"Add a task"}
            {...register("title", { required: true })}
          />
        </div>

        {/* <!-- Divider --> */}
        <div className="border-t border-[#3a3a3a]"></div>

        {/* <!-- Footer --> */}
        <div className="flex items-center justify-between px-5 py-2">
          {/* <!-- Left Icons --> */}
          <div className="flex items-center gap-6 text-gray-400">
            {/* <!-- Calendar --> */}

            <div className="relative inline-block">
              <input
                type="date"
                {...register("dueDate")}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

              <SlCalender
                className={`text-lg pointer-events-none ${
                  dueDate && "text-sky-500"
                }`}
              />
            </div>

            {/* <!-- Bell --> */}
            <button
              type="button"
              onClick={() => setRepeat((prev) => !prev)}
              className={`transition ${
                repeat ? "text-sky-500" : "text-gray-400"
              }`}
            >
              <IoMdNotificationsOutline className="text-xl" />
            </button>

            {/* <!-- Repeat --> */}
            <div className="relative inline-block">
              <input
                type="date"
                {...register("reminder")}
                className="absolute inset-0 opacity-0 cursor-pointer hover:text-white transition"
              />
              <FiRepeat
                className={`text-lg pointer-events-none ${
                  reminder && "text-sky-500"
                }`}
              />
            </div>
          </div>

          {/* <!-- Right Button --> */}
          <button
            type="submit"
            className="border border-gray-600 px-4 py-1 text-gray-300 rounded hover:bg-gray-700 hover:text-sky-500 transition cursor-pointer"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddtaskModal;
