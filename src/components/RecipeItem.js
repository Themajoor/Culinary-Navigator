import { useState } from "react";
import "./RecipeItems.css";
import RecipeDetails from "./RecipeDetails";

function RecipeItem({ item }) {
  const [showMore, setShowMore] = useState(false);

  function toggleDetails() {
    setShowMore((prevState) => !prevState);
  }
  return (
    <>
      <div className="recipe-item">
        <img src={item.recipe.image} alt="" />
        <h3>{item.recipe.label}</h3>
        <button onClick={() => toggleDetails()}>Read More</button>
      </div>
      {showMore && <RecipeDetails item={item} toggleDetails={toggleDetails} />}
    </>
  );
}

export default RecipeItem;
