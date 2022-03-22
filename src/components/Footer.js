import { useDropbox } from "../hooks/useDropbox";

function Footer() {
  const dropbox = useDropbox();
  const isAuthenticated = dropbox && dropbox.auth && dropbox.auth.accessToken;

  const handleLogOut = () => {
    //
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
