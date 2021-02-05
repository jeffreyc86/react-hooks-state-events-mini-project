import React from "react";

function CategoryFilter({categories, setCategory, currentCategory }) {

  const categoryBtns = categories.map(category => {
    return (
    <button 
      key={category}
      value={category} 
      onClick={(e)=>setCategory(e.target.value)}
      className={category === currentCategory ? "selected" : null}
      >
      {category}
      </button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;
