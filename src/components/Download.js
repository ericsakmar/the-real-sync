import { useState, useContext } from "react";
import LoadingIcon from "./LoadingIcon";
import DownloadIcon from "./DownloadIcon";
import AppContext from "../AppContext";

function Download({ version }) {
  const [isLoading, setIsLoading] = useState(false);
  const dropbox = useContext(AppContext);

  const handleDownload = () => {
    setIsLoading(true);

    dropbox
      .filesDownload({
        path: `/${version.name}/${version.version}/${version.version}.zip`
      })
      .then(res => res.result.fileBlob)
      .then(blob => {
        var downloadUrl = URL.createObjectURL(blob);
        var downloadButton = document.createElement("a");
        downloadButton.setAttribute("href", downloadUrl);
        downloadButton.setAttribute("download", `${version.version}.zip`);
        downloadButton.click();
        setIsLoading(false);
      });
  };

  return (
    <button onClick={handleDownload} disabled={isLoading}>
      {isLoading ? <LoadingIcon /> : <DownloadIcon />}
    </button>
  );
}

export default Download;
