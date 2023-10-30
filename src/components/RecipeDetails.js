import "./RecipeDetails.css";

function RecipeDetails({ item, toggleDetails }) {
  return (
    <div className="recipe-details">
      <div className="container">
        <div className="title">
          <h1>{item.recipe.label}</h1>
          <p>
            Meal Type:{" "}
            {item.recipe.mealType.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </p>

          <div className="ingredients">
            <h1>
              Ingredients{" "}
              <small>
                {"  "}
                {item.recipe.yield} Servings
              </small>
            </h1>

            <ul>
              {item.recipe.ingredientLines.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="digest">
          <h1>Dietary Information</h1>
          {item.recipe.digest.map((item, index) => (
            <span key={index}>
              <b>{item.label}: </b>
              {item.total}
              <small>
                <b>{item.unit}</b>
              </small>
            </span>
          ))}
        </div>
      </div>
      <div className="btn-container">
        <button className="see-less" onClick={() => toggleDetails()}>
          Close
        </button>
        <button className="see-more">
          <a href={item.recipe.url} target="_blank" rel="noreferrer">
            See Instructions
          </a>
        </button>
      </div>
    </div>
  );
}

export default RecipeDetails;
