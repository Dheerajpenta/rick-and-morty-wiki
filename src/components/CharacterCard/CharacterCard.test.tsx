// libraries
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// components
import CharacterCard from "./CharacterCard";

// constants
const character = {
  id: 1,
  name: "dheeraj",
  status: "Alive",
  species: "human",
  gender: "male",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  type: "type",
  location: {
    name: "location",
    url: "url",
  },
  origin: {
    name: "origin",
    url: "url",
  },
  episode: ["episode1", "episode2"],
  url: "url",
  created: "created",
};

// character name test cases
test("character name is displayed", () => {
  // Render your component or the specific HTML structure
  render(
    <CharacterCard
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      image={character.image}
    />
  );

  // get html element by text
  const name = screen.getByText("Name:");

  // check if the element is displayed and the text content is correct
  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent("Name: dheeraj");
});

// character status test cases
test("character status is displayed", () => {
  // Render your component or the specific HTML structure
  render(
    <CharacterCard
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      image={character.image}
    />
  );

  // get html element by text
  const name = screen.getByText("Status:");

  // check if the element is displayed and the text content is correct
  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent("Status: Alive");
});
test("character status class is applied", () => {
  // Render your component or the specific HTML structure
  render(
    <CharacterCard
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      image={character.image}
    />
  );

  // get html element by text
  const name = screen.getByText("Alive");

  // check if the element is displayed and the class is applied
  expect(name).toBeInTheDocument();
  expect(name).toHaveClass("Alive");
});

// character species test cases
test("character species is displayed", () => {
  // Render your component or the specific HTML structure
  render(
    <CharacterCard
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      image={character.image}
    />
  );

  // get html element by text
  const name = screen.getByText("Species:");

  // check if the element is displayed and the text content is correct
  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent("Species: human");
});

// character gender test cases
test("character gender is displayed", () => {
  // Render your component or the specific HTML structure
  render(
    <CharacterCard
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      image={character.image}
    />
  );

  // get html element by text
  const name = screen.getByText("Gender:");

  // check if the element is displayed and the text content is correct
  expect(name).toBeInTheDocument();
  expect(name).toHaveTextContent("Gender: male");
});

// character Image test cases
test("character image is dispalyed", () => {
  // Render your component or the specific HTML structure
  render(
    <CharacterCard
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      image={character.image}
    />
  );

  // get html element by alt text
  const image = screen.getByAltText("image-of-a-character") as HTMLImageElement;

  // check if the image is displayed and the src is correct
  expect(image).toBeInTheDocument();
  expect(image.src).toContain(
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  );
});
