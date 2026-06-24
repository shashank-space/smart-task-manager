import { useState } from "react";

function TaskItem({
  task,
  deleteTask,
  toggleComplete,
  updateTask,
}) {
  const [editing, setEditing] =
    useState(false);

  const [newText, setNewText] =
    useState(task.text);

  const saveEdit = () => {
    if (!newText.trim()) return;

    updateTask(task.id, newText);
    setEditing(false);
  };

  const getPriorityClass = () => {
    if (task.priority === "High")
      return "high-priority";

    if (task.priority === "Medium")
      return "medium-priority";

    return "low-priority";
  };

  return (
    <div
      className={`task-card ${
        task.completed
          ? "completed"
          : ""
      }`}
    >
      <div className="task-left">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            toggleComplete(task.id)
          }
        />

        <div className="task-info">

          {editing ? (
            <input
              value={newText}
              onChange={(e) =>
                setNewText(
                  e.target.value
                )
              }
            />
          ) : (
            <>
              <h3>{task.text}</h3>

              <div className="task-meta">

                <span className="category">
                  {task.category}
                </span>

                <span
                  className={`priority-badge ${getPriorityClass()}`}
                >
                  {task.priority}
                </span>

              </div>

              <p>
                Duration:
                {" "}
                {task.duration || 0}
                h
              </p>

              <p>
                Due:
                {" "}
                {task.dueDate
                  ? new Date(
                      task.dueDate
                    ).toLocaleString()
                  : "No deadline"}
              </p>

            </>
          )}

        </div>
      </div>

      <div className="actions">

        {editing ? (
          <button
            className="edit-btn"
            onClick={saveEdit}
          >
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() =>
              setEditing(true)
            }
          >
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() =>
            deleteTask(task.id)
          }
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskItem;