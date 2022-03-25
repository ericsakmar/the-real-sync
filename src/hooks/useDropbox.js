import { useEffect, useState } from "react";
import { useAccessToken } from "./useAccessToken";

export const useDropbox = () => {
  const [dbx, setDbx] = useState();
  const { data: accessToken } = useAccessToken();

  useEffect(() => {
    var dbx = accessToken
      ? new window.Dropbox.Dropbox({
          accessToken,
          clientId: process.env.REACT_APP_DROPBOX_CLIENT_ID
        })
      : new window.Dropbox.Dropbox({
          clientId: process.env.REACT_APP_DROPBOX_CLIENT_ID
        });

    setDbx(dbx);
  }, [accessToken]);

  return dbx;
};
