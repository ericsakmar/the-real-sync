import { useParams, Link } from "react-router-dom";
import useVersions from "../hooks/useVersions";
import Version from "./Version";
import LoadingIndicator from "./LoadingIndicator";

function Song() {
  const { name } = useParams();
  const { isLoading, data: versions = [] } = useVersions(name);

  return (
    <>
      <h2>{name}</h2>

      <div className="song-actions">
        <Link to={`/songs/${name}/new-version`}>
          <button type="button" className="button-main">
            New Version
          </button>
        </Link>
      </div>

      {isLoading && <LoadingIndicator />}

      {versions.map((v, i) => (
        <Version version={v} key={v.version} isLatest={i === 0} />
      ))}
    </>
  );
}

export default Song;
