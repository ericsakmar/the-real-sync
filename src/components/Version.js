import format from "date-fns/format";

import Player from "./Player";
import Download from "./Download";

const formatDate = date => format(date, "LLL do 'at' K':'mm aaa");

function Version({ version, isLatest }) {
  return (
    <div className="version">
      <div className="version-details">
        <div className="version-name">
          <div>{version.summary}</div>
          {isLatest ? <div className="version-tag">latest</div> : ""}
        </div>

        <div className="version-created-by">
          by {version.createdBy} on {formatDate(version.timestamp)}
        </div>

        <p>{version.notes}</p>
      </div>

      <div className="version-actions">
        <Download version={version} />
        <div className="version-player">
          <Player version={version} />
        </div>
      </div>
    </div>
  );
}

export default Version;
