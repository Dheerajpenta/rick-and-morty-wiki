// libraries
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// components
import CharacterList from "./CharacterList";

// constants
const characterList = [
  {
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
  },
];

// test cases
test("checks that character-list div has no children and is empty", () => {
  // Render your component or the specific HTML structure
  const { container } = render(<CharacterList characterList={[]} />);

  // Get the div element by class name using querySelector
  const characterListElement = container.querySelector(".character-list");

  // Check that the element is not null
  expect(characterListElement).not.toBeNull();

  // Check that the element is empty and has no children
  expect(characterListElement).toBeEmptyDOMElement();
});
test("checks that character-list contains the CharacterItem component", () => {
  // Render the parent component
  const { container } = render(<CharacterList characterList={characterList} />);

  // Get the character-list div by class name
  const characterListElement = container.querySelector(".character-list");

  // Check that the element is not null (it exists)
  expect(characterListElement).not.toBeNull();

  // Check that the character-list contains the child character-card component
  const characterCard1 = screen.getByTestId(1);
  expect(characterCard1).toBeInTheDocument();
});
