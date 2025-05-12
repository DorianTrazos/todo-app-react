import { useState } from 'react';
import { v4 } from 'uuid';
import Form from '../form/Form';
import Tasks from '../tasks/Tasks';

const MainContainer = () => {
  const [tasks, setTasks] = useState([
    {
      id: v4(),
      taskName: 'Buy a house',
      completed: true
    }
  ]);

  const [filterActive, setFilterActive] = useState('all');

  // filtrar
  const filteredTasks = filterTasks();

  return (
    <>
      <Form
        tasks={tasks}
        setTasks={setTasks}
      />
      <Tasks tasks={tasks} />
    </>
  );
};

const filterTasks = () => {};

export default MainContainer;
