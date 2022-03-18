import { useContext } from "react";
import { useQuery } from "react-query";

import AppContext from "../AppContext";

const useAuthUrl = () => {
  const dropbox = useContext(AppContext);

  const query = useQuery(
    "authUrl",
    () => dropbox.auth.getAuthenticationUrl(process.env.REACT_APP_URL),
    { enabled: dropbox !== null && dropbox !== undefined }
  );

  return query;
};

export default useAuthUrl;
