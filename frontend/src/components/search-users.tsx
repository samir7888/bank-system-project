import { useEffect, useState } from "react";
import Input from "./ui/Input";
import { useSearchParams } from "react-router-dom";
import { cn } from "../lib/utils";
import { Search } from "lucide-react";

interface SearchUserProps {
  className?: string;
  placeholder?: string;
}
const SearchUser = ({
  className,
  placeholder = "search here",
}: SearchUserProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const debouncedSearch = useDebounce(search, 600);
  useEffect(() => {
    if (debouncedSearch) {
      searchParams.set("search", debouncedSearch);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams, { replace: true });
  }, [search, searchParams, setSearchParams, debouncedSearch]);
  return (
    <div className="flex items-center">
      <div className={cn("relative", className)}>
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={placeholder}
          className="pl-8"
          value={search}
          onChange={(e) => setSearch(e.target.value.trim())}
        />
      </div>
    </div>
  );
};

export default SearchUser;

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
