const Tasks = ({ tasks, setTasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <input
            type='checkbox'
            id={task.id}
            checked={task.completed}
            onChange={() => {
              completeTask(task.id, tasks, setTasks);
            }}
          />
          <label htmlFor={task.id}>{task.taskName}</label>
          <button
            onClick={() => {
              deleteTasks(task.id, tasks, setTasks);
            }}
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
};

const completeTask = (id, tasks, setTasks) => {
  const taskFound = tasks.find(task => task.id === id);
  taskFound.completed = !taskFound.completed;

  setTasks([...tasks]);
};

const deleteTasks = (id, tasks, setTasks) => {
  const taskUpdated = tasks.filter(task => task.id !== id);

  setTasks(taskUpdated);
};

export default Tasks;
