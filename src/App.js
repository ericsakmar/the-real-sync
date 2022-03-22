import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useDropbox } from "./hooks/useDropbox";
import Login from "./components/Login";
import AppContext from "./AppContext";
import Songs from "./components/Songs";
import NewSong from "./components/NewSong";
import Song from "./components/Song";
import NewVersion from "./components/NewVersion";
import Footer from "./components/Footer";

function App() {
  const queryClient = new QueryClient();
  const dropbox = useDropbox();
  const isAuthenticated = dropbox && dropbox.auth && dropbox.auth.accessToken;

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={dropbox}>
        <BrowserRouter>
          <div className="app">
            <header className="header">
              <h1>The Real Sync</h1>

              {isAuthenticated && (
                <div>
                  <Link to="/songs">Songs</Link>
                </div>
              )}
            </header>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/songs/new" element={<NewSong />} />
              <Route path="/songs/:name" element={<Song />} />
              <Route path="/songs/:name/new-version" element={<NewVersion />} />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
