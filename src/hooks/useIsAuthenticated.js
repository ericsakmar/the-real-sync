import { useContext } from "react";

import AppContext from "../AppContext";

const useIsAuthenticated = () => {
  const dropbox = useContext(AppContext);
  return dropbox && dropbox.auth && dropbox.auth.accessToken;
};

export default useIsAuthenticated;
