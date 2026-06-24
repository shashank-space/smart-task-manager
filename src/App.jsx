import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import TaskInput from "./components/TaskInput";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("Study");

  const [priority, setPriority] = useState("Medium");
  const [duration, setDuration] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      category,
      priority,
      duration,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, newTask]);

    setInputValue("");
    setDuration("");
    setDueDate("");
    setPriority("Medium");
    setCategory("Study");
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: newText,
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Completed"
        ? task.completed
        : !task.completed;

    const matchesSearch =
      task.text
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return (
      matchesFilter &&
      matchesSearch
    );
  });

  return (
    <div className="app">
      <div className="overlay">

        <div className="hero">
          <h1 className="title">
            Task Manager
          </h1>

          <p className="subtitle">
            Plan • Track • Complete
          </p>
        </div>

        <Dashboard tasks={tasks} />

        <TaskInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          category={category}
          setCategory={setCategory}
          priority={priority}
          setPriority={setPriority}
          duration={duration}
          setDuration={setDuration}
          dueDate={dueDate}
          setDueDate={setDueDate}
          addTask={addTask}
        />

        <input
          className="search-box"
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          updateTask={updateTask}
        />

      </div>
    </div>
  );
}

export default App;