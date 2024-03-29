// import React, { useState } from 'react';
// import TaskList from './TaskList';
// import AddTaskForm from './AddTaskForm';

// function App() {
//   //const [tasks, setTasks] = useState([]);

//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Task 1', completed: false },
//     { id: 2, title: 'Task 2', completed: true },
//     { id: 3, title: 'Task 3', completed: false },
//   ]);


//   const handleAddTask = (title) => {
//     const newTask = { title, completed: false };
//     setTasks([...tasks, newTask]);
//   };

//   const handleTaskCompletion = (index) => {
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <h1>Task Manager</h1>
//       <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} />
//       <AddTaskForm onAddTask={handleAddTask} />
//     </div>
//   );
// }

// export default App;


// App.js

import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    // Your tasks data...
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false }
  ]);

  // const handleTaskCompletion = (taskId) => {
  //   // Implement logic to update the completion status of the task with taskId
  //   // Example: Find the task with taskId in the tasks array and toggle its completion status
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index].completed = !updatedTasks[index].completed;
  //   setTasks(updatedTasks);
  // };

  const handleTaskCompletion = (taskId) => {
    // Find the index of the task with taskId
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
      // Create a copy of the tasks array
      const updatedTasks = [...tasks];
      // Toggle the completion status of the task at the found index
      updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
      // Update the tasks state with the modified array
      setTasks(updatedTasks);
    }
  };

  const handleAddTask = (title) => {
    const newTask = { id: tasks.length + 1, title, completed: false };
    setTasks([...tasks, newTask]);
  };
  

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} />
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
