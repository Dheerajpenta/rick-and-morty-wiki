// css
import "./Pagination.css";

// interface for props
interface PaginationProps {
  currentPage: number;
  setcurrentPage: (currentPage: number) => void;
  pages: number;
}

export default function Pagination(props: PaginationProps): JSX.Element {
  const { currentPage, setcurrentPage, pages } = props;

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => {
          if (currentPage > 1) {
            setcurrentPage(currentPage - 1);
          }
        }}
      >
        Previous
      </button>
      <span>{currentPage}</span>/<span>{pages}</span>
      <button
        className="pagination-button"
        onClick={() => {
          if (currentPage < pages) {
            setcurrentPage(currentPage + 1);
          }
        }}
      >
        Next
      </button>
    </div>
  );
}
