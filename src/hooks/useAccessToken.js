import { useQuery } from "react-query";

const storeAccessToken = accessToken => {
  window.localStorage.setItem("accessToken", accessToken);
};

const getAccessToken = async () => {
  const localAccessToken = window.localStorage.getItem("accessToken");

  if (
    localAccessToken &&
    localAccessToken !== "null" &&
    localAccessToken !== "undefined"
  ) {
    // side effect!!
    storeAccessToken(localAccessToken);
    return localAccessToken;
  }

  const params = new URLSearchParams(window.location.hash.replace("#", ""));
  const urlAccessToken = params.get("access_token");

  // side effect!!
  storeAccessToken(urlAccessToken);
  return urlAccessToken;
};

export const useAccessToken = () => {
  const accessToken = useQuery("access-token", () => getAccessToken());
  return accessToken;
};
