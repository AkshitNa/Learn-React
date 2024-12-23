const TaskInput = ({ currentTask, setCurrentTask, addOrUpdateTask, isEditing }) => {
  
  return (

    <div className="border border-gray-300 rounded-lg shadow-lg w-2/3 mx-auto mt-10 p-5 bg-white">
      
      <h1 className="text-center text-2xl font-semibold mb-5 text-gray-800">
        {isEditing ? "Edit Mode" : "Add Task"}
      </h1>

      <div className="flex space-x-4 mb-5">

        <input
          type="text"
          placeholder="ID"
          value={currentTask.id}
          onChange={(e) =>
            setCurrentTask({ ...currentTask, id: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-lg w-1/4"
        />

        <input
          type="text"
          placeholder="Name"
          value={currentTask.name}
          onChange={(e) =>
            setCurrentTask({ ...currentTask, name: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-lg w-1/4"
        />

        <input
          type="number"
          placeholder="Marks"
          value={currentTask.marks}
          onChange={(e) =>
            setCurrentTask({ ...currentTask, marks: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-lg w-1/4"
        />

        <button
          onClick={addOrUpdateTask}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
        >
          {isEditing ? "Update" : "Add"}
        </button>

      </div>

    </div>
  );
};

export default TaskInput;
