import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")

  function handleSumbit(e){
    e.preventDefault()

    const newTask = {text, category}
    onTaskFormSubmit(newTask)

    setText("")
    setCategory("")
  }

  const categories = ["Code", "Food", "Money", "Misc"]

  const catOptions = categories.map(cat => {return <option value={cat}>{cat}</option>})

  return (
    <form className="new-task-form" onSubmit={handleSumbit}>
      <label htmlFor="details">
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label htmlFor="category">
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
