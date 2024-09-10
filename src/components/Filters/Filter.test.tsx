import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Filter from "./Filters";

describe("Filter Component", () => {
  it("renders correctly with all select options", () => {
    const { container } = render(
      <Filter
        status=""
        setStatus={() => {}}
        species=""
        setSpecies={() => {}}
        gender=""
        setGender={() => {}}
        setcurrentPage={() => {}}
      />
    );

    // Verify select elements and their options
    const statusSelect = container.querySelector(
      'select[name="status-selector"]'
    );
    const speciesSelect = container.querySelector(
      'select[name="species-selector"]'
    );
    const genderSelect = container.querySelector(
      'select[name="gender-selector"]'
    );

    expect(statusSelect).toBeInTheDocument();
    expect(speciesSelect).toBeInTheDocument();
    expect(genderSelect).toBeInTheDocument();

    // Verify options for status
    const expectedStatusOptions = ["Status", "Alive", "Dead", "Unknown"];
    const statusOptions = statusSelect
      ? Array.from((statusSelect as HTMLSelectElement).options)
      : [];
    const statusOptionsTexts = statusOptions.map((option) =>
      option.text.trim()
    );

    expectedStatusOptions.forEach((expectedOption) => {
      expect(statusOptionsTexts).toContain(expectedOption);
    });

    // Verify options for species
    const expectedSpeciesOptions = [
      "Species",
      "Human",
      "Alien",
      "Humanoid",
      "Poopybutthole",
      "Mythological",
      "Animal",
      "Robot",
      "Cronenberg",
      "Disease",
      "Planet",
      "Unknown",
    ];
    const speciesOptions = speciesSelect
      ? Array.from((speciesSelect as HTMLSelectElement).options)
      : [];
    const speciesOptionsTexts = speciesOptions.map((option) =>
      option.text.trim()
    );
    expectedSpeciesOptions.forEach((expectedOption) => {
      expect(speciesOptionsTexts).toContain(expectedOption);
    });

    // Verify options for gender
    const expectedGenderOptions = [
      "Gender",
      "Female",
      "Male",
      "Genderless",
      "Unknown",
    ];
    const genderOptions = genderSelect
      ? Array.from((genderSelect as HTMLSelectElement).options)
      : [];
    const genderOptionsTexts = genderOptions.map((option) =>
      option.text.trim()
    );
    expectedGenderOptions.forEach((expectedOption) => {
      expect(genderOptionsTexts).toContain(expectedOption);
    });
  });

  it("updates the status correctly and resets currentPage", () => {
    const setStatusMock = vi.fn();
    const setcurrentPageMock = vi.fn();
    render(
      <Filter
        status=""
        setStatus={setStatusMock}
        species=""
        setSpecies={() => {}}
        gender=""
        setGender={() => {}}
        setcurrentPage={setcurrentPageMock}
      />
    );

    fireEvent.change(screen.getByText(/status/i).closest("select")!, {
      target: { value: "alive" },
    });

    expect(setStatusMock).toHaveBeenCalledWith("alive");
    expect(setcurrentPageMock).toHaveBeenCalledWith(1);
  });

  it("updates the species correctly and resets currentPage", () => {
    const setSpeciesMock = vi.fn();
    const setcurrentPageMock = vi.fn();
    render(
      <Filter
        status=""
        setStatus={() => {}}
        species=""
        setSpecies={setSpeciesMock}
        gender=""
        setGender={() => {}}
        setcurrentPage={setcurrentPageMock}
      />
    );

    fireEvent.change(screen.getByText(/species/i).closest("select")!, {
      target: { value: "Human" },
    });

    expect(setSpeciesMock).toHaveBeenCalledWith("Human");
    expect(setcurrentPageMock).toHaveBeenCalledWith(1);
  });
});
