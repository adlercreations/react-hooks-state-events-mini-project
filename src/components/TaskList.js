import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <div key={task.text} onClick={() => deleteTask(task.text)}>
          <Task text={task.text} category={task.category} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
