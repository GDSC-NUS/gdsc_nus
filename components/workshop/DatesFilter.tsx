import clsx from "clsx";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { DatesContext } from "./Workshop";

export type DateFilterProps = {
  setFiltered: React.Dispatch<React.SetStateAction<string[]>>;
};

export interface DateFilterInterface extends JSX.Element {}

export default function DateFilter({
  setFiltered,
}: DateFilterProps): DateFilterInterface {
  const workshopDates = useContext(DatesContext);
  const [filteredDate, setFilteredDate] = useState<string>('');
  useEffect(() => {
    setFiltered(filteredDate);
  }, [filteredDate, setFiltered]);

  const ToggleDate = (date: string): void => {
    setFilteredDate(date);
  };

  return (
    <div className="flex h-fit w-full flex-col flex-wrap items-center px-5 md:flex-row">
      {workshopDates.map((date) => (
        <button
          key={date}
          onClick={() => ToggleDate(date)}
          className={clsx(
            "text-md m-2 rounded-full px-5 py-1 font-bold",
            filteredDate === date
              ? "bg-gray-600 text-white"
              : "bg-blue-100"
          )}
        >
          {date}
        </button>
      ))}
      <div className="flex-grow"></div>
      <button
        onClick={() => {
          setFilteredDate('');
        }}
        className="m-2 rounded-full bg-red-600 px-5 py-1 text-white"
      >
        Clear
      </button>
    </div>
  );
}
