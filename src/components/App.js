import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTasks = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  )

  function handleDelete(taskText) {
    setTasks(tasks.filter((task) => task.text !== taskText))
  }

  function handleAdd(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleSelectedCategory(category) {
    setSelectedCategory(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAdd} />
      <TaskList tasks={filteredTasks} deleteTask={handleDelete}/>
    </div>
  );
}

export default App;
