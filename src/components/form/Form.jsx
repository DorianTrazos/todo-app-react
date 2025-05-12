import { v4 } from 'uuid';

const Form = ({ tasks, setTasks }) => {
  return (
    <form onSubmit={event => createNewTask(event, tasks, setTasks)}>
      <input
        type='text'
        name='bego'
      />
    </form>
  );
};

const createNewTask = (event, tasks, setTasks) => {
  event.preventDefault();

  console.log(event.target);

  const newTask = {
    id: v4(),
    // Accedo al value del input a través de su name
    taskName: event.target.bego.value,
    completed: false
  };

  // LO QUE YA TIENE + LA TAREA NUEVA
  setTasks([...tasks, newTask]);

  //REINICIA EL FORMULARIO
  event.target.reset();
};

export default Form;
