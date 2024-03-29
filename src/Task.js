// // Task.js

// import React from 'react';

// function Task({ task }) {
//   return (
//     <li>
//       <input
//         type="checkbox"
//         checked={task.completed}
//         onChange={() => {
//           // Handle task completion status change
//         }}
//       />
//       <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
//         {task.title}
//       </span>
//     </li>
//   );
// }

// export default Task;

// Task.js

import React from 'react';

function Task({ task, onTaskCompletion }) {
  const handleCheckboxChange = () => {
    // Call the onTaskCompletion function passed from TaskList component
    onTaskCompletion(task.id); // Pass the task ID to identify the task
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange} // Call handleCheckboxChange when checkbox is clicked
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
    </li>
  );
}

export default Task;
