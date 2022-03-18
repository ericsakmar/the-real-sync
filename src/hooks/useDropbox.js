import { useEffect, useState } from "react";

const getAccessToken = () => {
  const localAccessToken = window.localStorage.getItem("accessToken");

  if (localAccessToken && localAccessToken !== "null") {
    return localAccessToken;
  }

  const params = new URLSearchParams(window.location.hash.replace("#", ""));
  const urlAccessToken = params.get("access_token");

  return urlAccessToken;
};

const storeAccessToken = accessToken => {
  window.localStorage.setItem("accessToken", accessToken);
};

export const useDropbox = () => {
  const [dbx, setDbx] = useState();

  useEffect(() => {
    const accessToken = getAccessToken();
    storeAccessToken(accessToken);

    var dbx = accessToken
      ? new window.Dropbox.Dropbox({
          accessToken,
          clientId: process.env.REACT_APP_DROPBOX_CLIENT_ID
        })
      : new window.Dropbox.Dropbox({
          clientId: process.env.REACT_APP_DROPBOX_CLIENT_ID
        });

    setDbx(dbx);
  }, []);

  return dbx;
};
