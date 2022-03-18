import { useContext } from "react";
import { useQuery } from "react-query";

import AppContext from "../AppContext";

const useFile = path => {
  const dropbox = useContext(AppContext);

  const query = useQuery(
    ["files", path],
    async () => {
      const res = await dropbox.filesDownload({ path });
      const blob = res.result.fileBlob;
      const downloadUrl = URL.createObjectURL(blob);

      return downloadUrl;
    },
    {
      enabled: Boolean(dropbox && path),
      refetchOnWindowFocus: false
      // TODO maybe something with staleTime?
    }
  );

  return query;
};

export default useFile;
