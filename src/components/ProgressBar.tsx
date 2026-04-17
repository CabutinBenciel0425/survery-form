import { useRef } from "react";
import { questions } from "../data/questions";

type ProgressBarTypes = {
  pageNumber: number;
  MAX_PAGENUMBER: number;
};

function ProgressBar({ pageNumber, MAX_PAGENUMBER }: ProgressBarTypes) {
  const progressPercent = (pageNumber / MAX_PAGENUMBER) * 100;

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className="h-3/12 px-10 flex items-center justify-center flex-col w-full gap-5">
      <div
        className="relative border-2 border-gray-300 w-[90%] h-5 rounded-xl overflow-hidden lg:w-[70% xl:w-290"
        ref={ref}
      >
        <div
          className="absolute bg-survey-filled h-full rounded-lg transition-all duration-200 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <div className="flex flex-row items-center justify-between w-full px-2 md:w-[80%] lg:w-[70% xl:w-290">
        <span>
          {questions.sections.map((q, idx) =>
            idx + 1 === pageNumber ? q.title : "",
          )}
        </span>
        <span>{progressPercent.toFixed(0)}%</span>
      </div>
    </div>
  );
}

export default ProgressBar;
