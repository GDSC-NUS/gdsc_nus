import clsx from "clsx";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { TagsContext } from "./Workshop";

export type TagFilterProps = {
  setFiltered: React.Dispatch<React.SetStateAction<string[]>>;
};

export interface TagFilterInterface extends JSX.Element {}

export default function TagFilter({
  setFiltered,
}: TagFilterProps): TagFilterInterface {
  const workshopTags = useContext(TagsContext);
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  useEffect(() => {
    setFiltered(filteredTags);
  }, [filteredTags, setFiltered]);

  const ToggleTag = (tag: string): void => {
    if (!filteredTags.includes(tag)) {
      setFilteredTags((prevTags) => [...prevTags, tag]);
    } else {
      setFilteredTags((prevTags) => prevTags.filter((t) => t !== tag));
    }
  };

  return (
    <div className="flex h-fit w-full flex-col flex-wrap items-center px-5 md:flex-row">
      {workshopTags.map((tag) => (
        <button
          key={tag}
          onClick={() => ToggleTag(tag)}
          className={clsx(
            "text-md m-2 rounded-full px-5 py-1 font-bold",
            filteredTags.includes(tag)
              ? "bg-gray-600 text-white"
              : "bg-blue-100"
          )}
        >
          {tag}
        </button>
      ))}
      <div className="flex-grow"></div>
      <button
        onClick={() => {
          setFilteredTags([]);
        }}
        className="m-2 rounded-full bg-red-600 px-5 py-1 text-white"
      >
        Clear
      </button>
    </div>
  );
}
