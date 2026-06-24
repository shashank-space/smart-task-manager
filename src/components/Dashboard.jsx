function Dashboard({ tasks }) {
  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = tasks.length - completed;

  const totalHours = tasks.reduce(
    (sum, task) => sum + Number(task.duration || 0),
    0
  );

  return (
    <div className="dashboard">
      <div className="stat-card">
        <h2>{tasks.length}</h2>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card">
        <h2>{completed}</h2>
        <p>Completed</p>
      </div>

      <div className="stat-card">
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>

      <div className="stat-card">
        <h2>{totalHours}</h2>
        <p>Planned Hours</p>
      </div>
    </div>
  );
}

export default Dashboard;