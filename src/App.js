import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useDropbox } from "./hooks/useDropbox";
import Login from "./components/Login";
import AppContextProvider from "./AppContextProvider";
import Songs from "./components/Songs";
import NewSong from "./components/NewSong";
import Song from "./components/Song";
import NewVersion from "./components/NewVersion";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const queryClient = new QueryClient();
  // const dropbox = useDropbox();
  // const isAuthenticated = dropbox && dropbox.auth && dropbox.auth.accessToken;

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <BrowserRouter>
          <div className="app">
            <Header />

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
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default App;
