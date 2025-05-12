const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <input
            type='checkbox'
            id={task.id}
          />
          <label htmlFor={task.id}>{task.taskName}</label>
          <button>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
