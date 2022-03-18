import { Navigate } from "react-router-dom";

import useAuthUrl from "../hooks/useAuthUrl";
import useIsAuthenticated from "../hooks/useIsAuthenticated";

function Login() {
  const isAuthenticated = useIsAuthenticated();
  const { data: authUrl } = useAuthUrl();

  return (
    <div>
      {isAuthenticated ? (
        <Navigate to="/songs" />
      ) : (
        <div className="song-actions">
          <a href={authUrl}>
            <button className="button-main">Sign In</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Login;
