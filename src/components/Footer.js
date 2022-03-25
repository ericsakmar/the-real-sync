import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "../hooks/useIsAuthenticated";
import useLogOut from "../hooks/useLogOut";

function Footer() {
  const isAuthenticated = useIsAuthenticated();
  const logOut = useLogOut();

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut.mutate(undefined, {
      onSuccess: () => {
        navigate("/");
      }
    });
  };

  return (
    <footer className="footer">
      {isAuthenticated && (
        <p>
          <button className="footer-button" onClick={handleLogOut}>
            Log out
          </button>
        </p>
      )}

      <p className="footer-text">
        Powered by <a href="https://www.dropbox.com/home">Dropbox</a>.
      </p>

      <p className="footer-text">
        Created by{" "}
        <a href="https://github.com/ericsakmar/the-real-sync">Eric Sakmar</a>.
      </p>
    </footer>
  );
}

export default Footer;
