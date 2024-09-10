import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  it("should render the current page and total pages", () => {
    const { getByText } = render(
      <Pagination currentPage={3} setcurrentPage={() => {}} pages={5} />
    );

    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("/")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
  });

  it("should call setcurrentPage with the previous page when Previous button is clicked", () => {
    const setcurrentPage = vi.fn();
    const { getByText } = render(
      <Pagination currentPage={3} setcurrentPage={setcurrentPage} pages={5} />
    );

    fireEvent.click(getByText("Previous"));
    expect(setcurrentPage).toHaveBeenCalledWith(2);
  });

  it("should not call setcurrentPage when Previous button is clicked on the first page", () => {
    const setcurrentPage = vi.fn();
    const { getByText } = render(
      <Pagination currentPage={1} setcurrentPage={setcurrentPage} pages={5} />
    );

    fireEvent.click(getByText("Previous"));
    expect(setcurrentPage).not.toHaveBeenCalled();
  });

  it("should call setcurrentPage with the next page when Next button is clicked", () => {
    const setcurrentPage = vi.fn();
    const { getByText } = render(
      <Pagination currentPage={3} setcurrentPage={setcurrentPage} pages={5} />
    );

    fireEvent.click(getByText("Next"));
    expect(setcurrentPage).toHaveBeenCalledWith(4);
  });

  it("should not call setcurrentPage when Next button is clicked on the last page", () => {
    const setcurrentPage = vi.fn();
    const { getByText } = render(
      <Pagination currentPage={5} setcurrentPage={setcurrentPage} pages={5} />
    );

    fireEvent.click(getByText("Next"));
    expect(setcurrentPage).not.toHaveBeenCalled();
  });
});
