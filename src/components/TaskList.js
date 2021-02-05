import React from "react";
import Task from "./Task"

function TaskList({tasks, onHandleDelete}) {


  function handleDelete(text) {
    onHandleDelete(text)
  }

  const taskItems = tasks.map (task => {
    return <Task key={task.text} task={task} onDeleteTask={handleDelete}/>
  })
  
  return (
    <div className="tasks">
      {taskItems}
    </div>
  );
}

export default TaskList;
