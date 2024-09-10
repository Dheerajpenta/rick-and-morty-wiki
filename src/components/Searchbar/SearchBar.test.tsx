import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  it("renders correctly", () => {
    render(<SearchBar search="" setSearch={() => {}} />);
    expect(
      screen.getByPlaceholderText(/search for a character.../i)
    ).toBeInTheDocument();
    expect(screen.getByTitle("search")).toBeInTheDocument();
  });

  it("displays the correct input value based on search prop", () => {
    render(<SearchBar search="test" setSearch={() => {}} />);
    expect(screen.getByDisplayValue("test")).toBeInTheDocument();
  });

  it("calls setSearch with the correct value on input change", () => {
    const setSearchMock = vi.fn();
    render(<SearchBar search="" setSearch={setSearchMock} />);

    const inputElement = screen.getByPlaceholderText(
      /search for a character.../i
    );
    fireEvent.change(inputElement, { target: { value: "new search" } });

    expect(setSearchMock).toHaveBeenCalledWith("new search");
  });
});
