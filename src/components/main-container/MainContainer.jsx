import { useState } from 'react';
import { v4 } from 'uuid';
import Filter from '../filter/Filter';
import Form from '../form/Form';
import Tasks from '../tasks/Tasks';

const MainContainer = () => {
  const [tasks, setTasks] = useState([
    {
      id: v4(),
      taskName: 'Buy a house',
      completed: false
    }
  ]);

  const [filterActive, setFilterActive] = useState('all');

  const tasksLeft = getItemsLeft(tasks);

  // filtrar
  const filteredTasks = filterTasks(tasks, filterActive);

  return (
    <>
      <Form
        tasks={tasks}
        setTasks={setTasks}
      />
      <Tasks
        tasks={filteredTasks}
        setTasks={setTasks}
      />
      <p>{tasksLeft}</p>
      <Filter setFilterActive={setFilterActive} />
    </>
  );
};

const filterTasks = (tasks, filterActive) => {
  if (filterActive === 'all') return tasks;
  if (filterActive === 'active') return tasks.filter(task => !task.completed);
  if (filterActive === 'completed') return tasks.filter(task => task.completed);
};

const getItemsLeft = tasks => {
  if (tasks.length === 0) {
    return 'No Tasks';
  }

  const itemsLeft = tasks.filter(task => !task.completed).length;

  console.log(itemsLeft);

  if (itemsLeft === 0) {
    return 'All tasks completed!';
  }

  return `Items left: ${itemsLeft}`;
};

export default MainContainer;
