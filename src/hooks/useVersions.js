import { useContext } from "react";
import { useQuery } from "react-query";
import parse from "date-fns/parse";
import isAfter from "date-fns/isAfter";

import AppContext from "../AppContext";

const parseTimestamp = version => {
  const [_, raw] = version.split("_");
  const timestamp = parse(raw, "yyyy-MM-dd-HH-mm", new Date());
  return timestamp;
};

const useVersion = songName => {
  const dropbox = useContext(AppContext);

  const query = useQuery(
    ["songs", songName, "versions"],
    async () => {
      const res = await dropbox.filesListFolder({ path: `/${songName}` });
      const versions = res.result.entries;

      const metadataTasks = versions.map(v =>
        dropbox
          .filesDownload({ path: `/${songName}/${v.name}/metadata.json` })
          .then(res => res.result.fileBlob)
          .then(blob => new Response(blob))
          .then(res => res.json())
      );

      const metadata = await Promise.all(metadataTasks);

      return metadata
        .map(md => ({
          ...md,
          timestamp: parseTimestamp(md.version)
        }))
        .slice()
        .sort((a, b) => isAfter(b.timestamp, a.timestamp));
    },
    {
      enabled: dropbox !== null && dropbox !== undefined
    }
  );

  return query;
};

export default useVersion;
