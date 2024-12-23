const Card = ({ tasks, editTask, deleteTask }) => {
  return (
    <div className="w-3/4 mx-auto mt-10 p-5">
      <h1 className="text-center text-2xl font-bold mb-5">Task List</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-300 shadow-lg rounded-lg p-5 bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
              <span className="block mb-2">
                <strong>ID:</strong> {task.id}
              </span>
              <span className="block mb-2">
                <strong>Name:</strong> {task.name}
              </span>
              <span className="block mb-2">
                <strong>Marks:</strong> {task.marks}
              </span>
              <span className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
                <strong>Date:</strong> {task.date}
              </span>
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                onClick={() => editTask(task)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
