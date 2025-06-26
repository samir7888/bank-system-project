
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import { useEffect } from "react";

interface Props {
  meta: {
    page: number;
    limit: number;
    total: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
const PaginationComponent = ({ meta }: Props) => {
  const [searchParam, setSearchParam] = useSearchParams();
  useEffect(() => {
    if (searchParam.get("page") === "1") {
        searchParam.delete("page");
        setSearchParam(searchParam);
    }
  }, [searchParam]);
  return (
    <nav
      aria-label="Pagination Navigation"
      className="flex justify-between pt-8"
    >
      
      <ul className="flex items-center space-x-1">
        <li>
          <Button onClick={() => {
              const currentPage = meta.page;
              if (currentPage > 1) {
                searchParam.set("page", String(currentPage - 1));
                setSearchParam(searchParam);
              }else{
                searchParam.delete("page");
                setSearchParam(searchParam);
              }
            }} type="button" disabled={!meta.hasPreviousPage}>
            <ChevronLeft />
            Previous
          </Button>
        </li>

        <li>
          <Button
            type="button"
            disabled={!meta.hasNextPage}
            onClick={() => {
              const currentPage = meta.page;
              if (currentPage < meta.total) {
                searchParam.set("page", String(currentPage + 1));
                setSearchParam(searchParam);
              }
            }}
          >
            Next
            <ChevronRight />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;
