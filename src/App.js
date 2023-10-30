import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecipeItem from "./components/RecipeItem.js";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipesData, setRecipesData] = useState([]);
  const [error, setError] = useState(false);
  const APP_ID = "63079b58";
  const APP_KEY = "da4636088867e34eb4625f3703088c66";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${inputValue}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const searchRecipe = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const promise = await response.json();
      setRecipesData(promise.hits);
      setLoading(false);
    } catch (TypeError) {
      setError(true);
    }
  };

  function handleChange(searchTerm) {
    setInputValue(searchTerm);
  }
  console.log(recipesData);

  return (
    <>
      <main>
        <Header />
        <Hero handleChange={handleChange} searchRecipe={searchRecipe} />
      </main>
      {!loading && !error ? (
        <section>
          {recipesData.length > 1 &&
            recipesData.map((item, index) => {
              return <RecipeItem key={index} item={item} />;
            })}
        </section>
      ) : (
        <section>
          <div class="loader"></div>
        </section>
      )}
      <footer>
        <h1>
          Culinary
          <img src="https://i.imgur.com/9ktUf68.jpg" alt="plate" />
          Navigator
        </h1>
        {"@"}
        2023 Productions
      </footer>
    </>
  );
}

export default App;
