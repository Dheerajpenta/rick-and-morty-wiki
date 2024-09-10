// css imports
import "./Filters.css";

// interface for props
interface FiltersProps {
  status: string;
  setStatus: (status: string) => void;
  species: string;
  setSpecies: (species: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  setcurrentPage: (currentPage: number) => void;
}

export default function Filter(props: FiltersProps) {
  const {
    status,
    setStatus,
    species,
    setSpecies,
    gender,
    setGender,
    setcurrentPage,
  } = props;
  return (
    <div className="filters">
      <select
        name="status-selector"
        className="select-box"
        defaultValue={status}
        onChange={(event) => {
          setStatus(event.target.value);
          setcurrentPage(
            1
          ); /* starting with new page when ever filters are applied, because some filters might not have more than 1 page */
        }}
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="species-selector"
        className="select-box"
        defaultValue={species}
        onChange={(event) => {
          setSpecies(event.target.value);
          setcurrentPage(
            1
          ); /* starting with new page when ever filters are applied, because some filters might not have more than 1 page */
        }}
      >
        <option value="">Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="Mythological">Mythological</option>
        <option value="Animal">Animal</option>
        <option value="Robot">Robot</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Disease">Disease</option>
        <option value="Planet">Planet</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="gender-selector"
        className="select-box"
        defaultValue={gender}
        onChange={(event) => {
          setGender(event.target.value);
          setcurrentPage(
            1
          ); /* starting with new page when ever filters are applied, because some filters might not have more than 1 page */
        }}
      >
        <option value="">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
