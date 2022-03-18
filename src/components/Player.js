import { useState, useContext } from "react";
import PlayIcon from "./PlayIcon";
import LoadingIcon from "./LoadingIcon";
import AppContext from "../AppContext";

function Player({ version }) {
  const [isLoading, setIsLoading] = useState(false);
  const [src, setSrc] = useState();
  const dropbox = useContext(AppContext);

  const handleDownload = () => {
    setIsLoading(true);

    dropbox
      .filesDownload({
        path: `/${version.name}/${version.version}/${version.version}.mp3`
      })
      .then(res => res.result.fileBlob)
      .then(blob => {
        var downloadUrl = URL.createObjectURL(blob);
        setSrc(downloadUrl);
        setIsLoading(false);
      });
  };

  const showPlayer = src !== undefined;
  const showButton = !showPlayer;

  return (
    <>
      {showButton && (
        <button onClick={handleDownload} disabled={isLoading}>
          {isLoading ? <LoadingIcon /> : <PlayIcon />}
        </button>
      )}

      {showPlayer && (
        <audio className="player" controls src={src} autoPlay></audio>
      )}
    </>
  );
}

export default Player;
