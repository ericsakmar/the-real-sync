import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
