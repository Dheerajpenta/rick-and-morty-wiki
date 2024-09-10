// libraries imports
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// component imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// page imports
import Main from "./pages/Main/Main";
import CharacterProfile from "./pages/CharacterProfile/CharacterProfile";

// interface imports
import { Episode } from "./interfaces";

// App component logic
function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [episodes, updateEpisodes] = useState<string[]>([]);
  const api = "https://rickandmortyapi.com/api/episode";
  useEffect(() => {
    (async function () {
      setLoading(true); /* initializing loader */

      /* As we have to show episodes featured fetching all episodes data might be extensinve so pre-fetching the data and passing it to component */
      const episodes: string[] = [];
      let currentPage = 1;
      let totalPages = Number.MAX_VALUE;
      while (currentPage <= totalPages) {
        const episodesApi = `${api}?page=${currentPage}`;
        const data = await fetch(episodesApi).then((res) => res.json());
        totalPages = data.info.pages;
        data.results.forEach((episode: Episode) => {
          episodes.push(episode.name);
        });
        currentPage++;
      }
      updateEpisodes(episodes);

      setLoading(false); /* stopping loader */
    })();
  }, [api]);

  if (loading) {
    /* returing loading element while loading */
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="/character/:id"
            element={<CharacterProfile episodes={episodes} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
