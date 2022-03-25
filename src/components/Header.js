import { Link } from "react-router-dom";
import useIsAuthenticated from "../hooks/useIsAuthenticated";

function Header() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <header className="header">
      <h1>The Real Sync</h1>

      {isAuthenticated && (
        <div>
          <Link to="/songs">Songs</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
