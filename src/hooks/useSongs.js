import { useContext } from "react";
import { useQuery } from "react-query";

import AppContext from "../AppContext";

const useSongs = () => {
  const dropbox = useContext(AppContext);

  const query = useQuery(
    "songs",
    () =>
      dropbox
        .filesListFolder({ path: "" })
        .then(res => res.result.entries)
        .then(songs =>
          songs.slice().sort((a, b) => a.name.localeCompare(b.name))
        ),
    {
      enabled:
        dropbox !== null &&
        dropbox !== undefined &&
        dropbox.auth.getAccessToken() !== undefined,
      initialData: []
    }
  );

  return query;
};

export default useSongs;
