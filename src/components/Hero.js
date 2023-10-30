import { useAuth0 } from "@auth0/auth0-react";
import "./Hero.css";

function Hero({ handleChange, searchRecipe }) {
  const { loginWithPopup, isAuthenticated } = useAuth0();
  function handleInput(e) {
    const { value } = e.target;
    handleChange(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchRecipe();
  }

  return (
    <article className="hero">
      <div className="hero-text">
        <h1>
          Where Taste Meets Technology - Find, Cook, Enjoy and Share the
          Goodness
        </h1>
        <p>
          Cooking is the art, science, and craft of preparing food for
          consumption through the application of heat. It encompasses a wide
          range of techniques, tools, and ingredients to transform raw
          ingredients into edible, flavorful, and visually appealing dishes.
        </p>
      </div>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Recipe..."
            onChange={handleInput}
          />
          <button>
            Search <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      ) : (
        <div className="message">
          <span className="material-symbols-outlined">lunch_dining</span>
          <h1>Sign in to search</h1>
          <button className="login" onClick={() => loginWithPopup()}>
            Login
          </button>
        </div>
      )}
    </article>
  );
}

export default Hero;
