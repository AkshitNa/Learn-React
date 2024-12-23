import { useState, useEffect } from "react";
import HideButton from "./HideButton";
import TaskInput from "./TaskInput";
import Card from "./Card";

const Task = () => {

  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("light");

  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: "", name: "", marks: "" });
  const [originalId, setOriginalId] = useState(null);

  const [visible, setVisible] = useState(true);

  //We are loading the tasks and theme from localStorage when the component first mount
  useEffect(() => {

    const storedTasks = localStorage.getItem("tasks"); //tasks is JavaScriptObject

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); //Storing as JSON Object
    }

    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
    }

  }, []);

  //We are saving our tasks into localStorage whenever the task list changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //We are saving our current theme to localStorage and apply it to the document
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
  }, [theme]);

  //Setting Functions::

  //Delete Task
  const deleteTask = (id) => {
    setTasks((prevTasks) => 
      prevTasks.filter((task) => task.id !== id));
  };

  //Change-Theme
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      (prevTheme === "light" ? "dark" : "light"));
  };

  //addOrUpdateTask [Tricky]
  const addOrUpdateTask = () => {
   
    //Fill all the input fields
    if (!currentTask.id || !currentTask.name || !currentTask.marks) {
      alert("Please fill out all fields!");
      return;
    }

    //If Edit button is clicked 
    if (isEditing) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === originalId
            ? { ...currentTask, date: new Date().toLocaleString() }
            : task
        )
      );
      setIsEditing(false);
      setOriginalId(null);
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...currentTask, date: new Date().toLocaleString() },
      ]);
    }

    setCurrentTask({ id: "", name: "", marks: "" }); //Clear all the fields
  };


  //EditTask [Tricky]
  const editTask = (task) => {
    setCurrentTask(task);
    setOriginalId(task.id);
    setIsEditing(true);
  };

 
  return (
    <div className={`min-h-screen transition-all ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

      <div className="flex justify-start p-4">

      <div className="container">
        <HideButton visible={visible} toggleVisibility={setVisible} />
      </div>

      <button
          className=" text-white w-40 px-1.5 rounded-2xl bg-indigo-500 hover:bg-indigo-600 transition-all"
          onClick={toggleTheme}
      >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>

      </div>

      {/* Input Fields and Tasks */}
      <TaskInput
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        addOrUpdateTask={addOrUpdateTask}
        isEditing={isEditing}
      />

      {/* Cards with Edit and Delete */}
      {visible && (
        <Card tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      )}
    </div>
  );
};

export default Task;
