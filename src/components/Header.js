import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./Header.css";

function Header() {
  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setShowGreeting(true);
      const timer = setTimeout(() => {
        setShowGreeting(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isAuthenticated]);

  return (
    <header>
      {showGreeting && (
        <div className="greeting">
          <span className="material-symbols-outlined">check_circle</span>
          <h1>Succesfully Logged In</h1>
          <p>Welcome {user?.name}</p>
        </div>
      )}

      <nav className="header">
        <h1>
          Culinary
          <img src="https://i.imgur.com/9ktUf68.jpg" alt="plate" />
          Navigator
        </h1>
        {!isAuthenticated ? (
          <div className="btn-container">
            <button className="login" onClick={() => loginWithPopup()}>
              Login
            </button>
          </div>
        ) : (
          <div className="btn-container">
            <button className="logout" onClick={() => logout()}>
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
