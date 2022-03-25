import { useDropbox } from "./hooks/useDropbox";
import AppContext from "./AppContext";

function AppContextProvider({ children }) {
  const dropbox = useDropbox();

  return <AppContext.Provider value={dropbox}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
