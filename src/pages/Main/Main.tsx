/* libraries */
import { useState, useEffect } from "react";

// component imports
import Filters from "../../components/Filters/Filters";
import SearchBar from "../../components/Searchbar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import CharacterList from "../../components/CharacterList/CharacterList";

// css imports
import "./Main.css";

// interfaces
import { fetchedData } from "../../interfaces";

export default function Main(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [currentPage, setcurrentPage] = useState<number>(1);
  const [fetchedData, updateFetchedData] = useState<fetchedData>({
    info: {
      count: 0,
      pages: 1 /* when count is 0 or no character found we want to show pages 1/1 */,
      next: "",
      prev: "",
    },
    results: [],
  });
  const {
    info = {
      count: 0,
      pages: 1 /* when count is 0 or no character found we want to show pages 1/1 */,
      next: "",
      prev: "",
    },
    results: characterList = [],
  } = fetchedData;

  const { count, pages } = info;

  const api = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    setLoading(true); /* initializing loader */

    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();

    setLoading(false); /* stopping loader */
  }, [api]);

  if (loading) {
    /* returing loading element while loading */
    return (
      <div className="d-flex justify-content-center align-items-center loader">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main">
        <Filters
          status={status}
          setStatus={setStatus}
          species={species}
          setSpecies={setSpecies}
          gender={gender}
          setGender={setGender}
          setcurrentPage={setcurrentPage}
        />
        <div className="main-body">
          <SearchBar search={search} setSearch={setSearch} />
          <span>Count: {count}</span>
          <CharacterList characterList={characterList} />
          <Pagination
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
            pages={pages}
          />
        </div>
      </div>
    );
  }
}
