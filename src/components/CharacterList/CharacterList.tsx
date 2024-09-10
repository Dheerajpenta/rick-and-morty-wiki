// components imports
import CharacterCard from "../CharacterCard/CharacterCard";

// css imports
import "./CharacterList.css";

// interfaces imports
import { Character } from "../../interfaces";

interface CharacterListProps {
  characterList: Character[];
}

export default function CharacterList(props: CharacterListProps): JSX.Element {
  const { characterList } = props;
  return (
    <div className="character-list">
      {characterList.map((character: Character) => {
        return (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
          ></CharacterCard>
        );
      })}
    </div>
  );
}
