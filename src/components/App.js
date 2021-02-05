import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [category, setCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)


  const allTasks = tasks.filter(task => {
    if (category === "All") {
      return true
    } else if (category) {
      return task.category === category
    }
  })

  const onHandleDelete = (text) => {
    let newTasks = [...tasks]
    newTasks = newTasks.filter(task =>{return task.text !== text})
    setTasks(newTasks)
  }

  const addNewTask = (task) => {
    const newTasks = [task,...tasks]
    setTasks(newTasks)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        currentCategory={category}
        categories={CATEGORIES} 
        setCategory={setCategory}
        />
      <NewTaskForm onTaskFormSubmit={addNewTask}/>
      <TaskList 
        tasks={allTasks}
        onHandleDelete={onHandleDelete}/>
    </div>
  );
}

export default App;
