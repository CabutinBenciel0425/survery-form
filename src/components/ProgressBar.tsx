import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { questions } from "../data/questions";

type ProgressBarTypes = {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

function ProgressBar({ pageNumber, setPageNumber }: ProgressBarTypes) {
  const TOTAL_PAGES = questions.sections.length;
  const MAX_PAGENUMBER = TOTAL_PAGES;
  const MIN_PAGENUMBER = 1;
  const isNextDisabled = pageNumber === MAX_PAGENUMBER;
  const isPrevDisabled = pageNumber === MIN_PAGENUMBER;
  const progressPercent = (pageNumber / MAX_PAGENUMBER) * 100;

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className="h-3/12 px-20 flex items-center justify-center flex-col w-[60%] gap-5">
      <div
        className="relative border-2 border-gray-300 w-full h-5 rounded-xl overflow-hidden"
        ref={ref}
      >
        <div
          className="absolute bg-survey-border h-full rounded-lg transition-all duration-200 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <div className="flex flex-row items-center justify-between w-full px-2">
        <span>
          {questions.sections.map((q, idx) =>
            idx + 1 === pageNumber ? q.title : "",
          )}
        </span>
        <span>{progressPercent.toFixed(0)}%</span>
      </div>
      <div className="flex gap-5">
        <button
          className={`${isPrevDisabled ? "cursor-not-allowed text-gray-500" : "cursor-pointer"} `}
          disabled={isPrevDisabled}
          onClick={() =>
            setPageNumber((prev) => Math.max(prev - 1, MIN_PAGENUMBER))
          }
        >
          Previous
        </button>
        <button
          className={`${isNextDisabled ? "cursor-not-allowed text-gray-500" : "cursor-pointer"} `}
          disabled={isNextDisabled}
          onClick={() =>
            setPageNumber((prev) => Math.min(prev + 1, MAX_PAGENUMBER))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
