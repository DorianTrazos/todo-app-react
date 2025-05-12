import { useState } from 'react';
import { v4 } from 'uuid';
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

export default MainContainer;
