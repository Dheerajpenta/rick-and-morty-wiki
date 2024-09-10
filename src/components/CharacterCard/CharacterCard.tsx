// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// css imports
import "./CharacterCard.css";

// interface
interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export default function Card(props: CharacterCardProps): JSX.Element {
  const { id, name, status, species, gender, image } = props;
  return (
    <div data-testid={id} className="character-card">
      <div className="character-image">
        <img src={image} alt="image-of-a-character" />
      </div>
      <div className="character-details">
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Status: <span className={status}>{status}</span>
          {/* created a class with name which matches the value of status to show colours like green (Alive), red (Dead) */}
        </p>
        <p>
          Species: <span>{species}</span>
        </p>
        <p>
          Gender: <span>{gender}</span>
        </p>
      </div>
      <a href={`/character/${id}`}>
        View Character <FontAwesomeIcon className="fa-lg" icon={faArrowRight} />
      </a>
    </div>
  );
}
