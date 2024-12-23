import { useState } from "react";

const Task = () => {
  const [task, setTask] = useState([
    { id: 101, name: "Akshit", marks: 90 },
    { id: 102, name: "Saurab", marks: 60 },
    { id: 103, name: "Anjali", marks: 80 },
  ]);

  const deleteTask = (id) => {
    setTask(task.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="border border-gray-300 rounded-lg shadow-lg w-2/3 mx-auto mt-10 p-5 bg-white">
        
        <h1 className="text-center text-2xl font-semibold mb-5 text-gray-800">
          List
        </h1>

        <ul className="space-y-4">

          {task.map((item) => (
            <li
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              key={item.id}
            >
              <span className="text-gray-700">
                {item.id}  {item.name}  {item.marks}
              </span>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </button>
            </li>
          ))}

        </ul>
      </div>
    </>
  );
};

export default Task;
