// library imports
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// css imports
import "./CharacterProfile.css";

// interface imports
import { Character, OriginData } from "../../interfaces";

// interfaces
interface CharacterProfileProps {
  episodes: string[];
}

export default function CharacterProfile(
  props: CharacterProfileProps
): JSX.Element {
  const { id } = useParams();
  const { episodes } = props;

  const [loading, setLoading] = useState<boolean>(false);
  const [fetchedData, updateFetchedData] = useState<Character>({
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: { name: "", url: "" },
    location: { name: "", url: "" },
    image: "",
    episode: [],
    url: "",
    created: "",
  });
  const [originData, updateOriginData] = useState<OriginData>({
    id: 0,
    name: "",
    type: "",
    dimension: "",
    residents: [],
    url: "",
    created: "",
  });
  const [episodesFeatured, updateEpisodesFeatured] = useState<string>("");
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  const { name, status, species, type, gender, location, image } = fetchedData;
  const {
    name: originName,
    type: originType,
    dimension,
    residents,
  } = originData;

  useEffect(() => {
    setLoading(true); /* initializing loader */

    (async function () {
      const data: Character = await fetch(api).then((res) => res.json());
      updateFetchedData(data);

      /* logic to render episodes fetched from the episodes array passed as props */
      const episodeLinkLength = "https://rickandmortyapi.com/api/episode/"
        .length;
      const episodesFeatured = data.episode.map((episode: string) => {
        const episodeId = episode.slice(episodeLinkLength);
        return episodes[
          Number(episodeId) - 1
        ]; /* array indexing starts from 0 and episodes from 1 */
      });
      updateEpisodesFeatured(episodesFeatured.join(", "));

      /* fetching origin data */
      const originData = await fetch(data.origin.url).then((res) => res.json());
      updateOriginData(originData);
    })();

    setLoading(false); /* stopping loader */
  }, [api, episodes]);
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
      <div className="character-profile">
        <div className="character-profile-image">
          <img src={image} alt="" />
        </div>
        <div>
          <p>
            Name: <span>{name}</span>
          </p>
          <p>
            Status: <span className={status}>{status}</span>
          </p>
          <p>
            Species: <span>{species}</span>
          </p>
          <p>
            Type: <span>{type ? type : "-"}</span>
          </p>
          <p>
            Gender: <span>{gender}</span>
          </p>
          <p>
            Origin-Name: <span>{originName ? originName : "-"}</span>
          </p>
          <p>
            Origin-Type: <span>{originType ? originType : "-"}</span>
          </p>
          <p>
            Origin-Dimension: <span>{dimension ? dimension : "-"}</span>
          </p>
          <p>
            Origin-Total-Residents: <span>{residents.length}</span>
          </p>
          <p>
            Location: <span>{location && location.name}</span>
          </p>
          <p>
            Episodes-Featured: <span>{episodesFeatured}</span>
          </p>
        </div>
      </div>
    );
  }
}
