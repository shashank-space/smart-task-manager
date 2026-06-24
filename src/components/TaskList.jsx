import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
  updateTask,
}) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        No tasks found
      </div>
    );
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          updateTask={updateTask}
        />
      ))}

    </div>
  );
}

export default TaskList;