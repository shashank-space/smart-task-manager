function TaskInput({
  inputValue,
  setInputValue,
  category,
  setCategory,
  priority,
  setPriority,
  duration,
  setDuration,
  dueDate,
  setDueDate,
  addTask,
}) {
  return (
    <div className="task-input-container">

      <input
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) =>
          setInputValue(e.target.value)
        }
      />

      <div className="task-options">

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>Study</option>
          <option>Work</option>
          <option>Personal</option>
        </select>

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="number"
          placeholder="Hours"
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value)
          }
        />

        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
        />

      </div>

      <button
        className="add-btn"
        onClick={addTask}
      >
        Add Task
      </button>

    </div>
  );
}

export default TaskInput;