import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const mapped = itemsToDisplay.map((item) => {
    return <Item key={item.id} name={item.name} category={item.category} />
  })

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {mapped}
      </ul>
    </div>
  );
}

export default ShoppingList;
