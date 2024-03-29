// // TaskList.js
// import React from 'react';

// function TaskList() {
//   return (
//     <div>
//       <h2>Task List</h2>
//       {/* Task list items will be rendered here */}
//       <ul>
//         {tasks.map((task,index) => (
//             <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange=
//         )
//         }
//       </ul>
//     </div>
//   );
// }

// export default TaskList;

// TaskList.js

// import React from 'react';
// import Task from './Task'; // Assuming you have a Task component

// function TaskList({ tasks }) {
//   return (
//     <div>
//       <h2>Tasks</h2>
//       <ul>
//         {tasks.map(task => (
//           <Task key={task.id} task={task} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskList;

// TaskList.js

import React from 'react';
import Task from './Task';

function TaskList({ tasks, onTaskCompletion }) {
  return (
    <ul>
      {tasks.map(task => (
        <Task key={task.id} task={task} onTaskCompletion={onTaskCompletion} />
      ))}
    </ul>
  );
}

export default TaskList;

