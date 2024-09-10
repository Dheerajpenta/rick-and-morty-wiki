// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// css imports
import "./SearchBar.css";

// interface for props
interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
}

export default function SearchBar(props: SearchBarProps): JSX.Element {
  const { search, setSearch } = props;
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        placeholder="Search for a character..."
        title="search"
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
}
