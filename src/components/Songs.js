import { Link } from "react-router-dom";
import useSongs from "../hooks/useSongs";
import LoadingIndicator from "./LoadingIndicator";

function Songs() {
  const { isLoading, data: songs } = useSongs();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div className="song-actions">
        <Link to="/songs/new">
          <button className="button-main">New Song</button>
        </Link>
      </div>

      <ul className="songs-list">
        {songs.map(s => (
          <li key={s.id}>
            <Link to={`/songs/${s.name}`}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Songs;
