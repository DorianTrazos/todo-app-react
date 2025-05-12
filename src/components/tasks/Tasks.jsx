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
          <button>DELETE</button>
        </div>
      ))}
    </div>
  );
};

const completeTask = (id, tasks, setTasks) => {
  //Buscar la tarea para completar
  // Cambias de true/false
  //Actualizas las tareas
};

const deleteTasks = (id, tasks, setTasks) => {
  //Buscar la tarea para completar
  // Eliminas la tarea
  //Actualizas las tareas
};

export default Tasks;
