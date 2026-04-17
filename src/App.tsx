import { useState } from "react";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";
import { questions } from "./data/questions";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import Button from "./components/Button";

function App() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const TOTAL_PAGES = questions.sections.length;
  const MAX_PAGENUMBER = TOTAL_PAGES;
  const MIN_PAGENUMBER = 1;
  const isNextDisabled = pageNumber === MAX_PAGENUMBER;
  const isPrevDisabled = pageNumber === MIN_PAGENUMBER;

  return (
    <div className="w-full h-full flex flex-col text-survey-text font-semibold text-sm items-center justify-start lg:text-lg relative">
      <ProgressBar pageNumber={pageNumber} MAX_PAGENUMBER={MAX_PAGENUMBER} />
      <Form pageNumber={pageNumber} />
      <div className="absolute inset-0 flex items-baseline-last justify-between px-10 xl:items-center">
        <Button
          className={`${isPrevDisabled ? "cursor-not-allowed text-gray-500" : "cursor-pointer"} active:scale-97`}
          disabled={isPrevDisabled}
          onClick={() =>
            setPageNumber((prev) => Math.max(prev - 1, MIN_PAGENUMBER))
          }
        >
          <HiArrowCircleLeft
            className={`${isPrevDisabled ? "opacity-40" : "opacity-100"} transition-all duration-200 ease-in text-survey-border text-6xl xl:text-8xl`}
          />
        </Button>
        <Button
          className={`${isNextDisabled ? "cursor-not-allowed" : "cursor-pointer"} active:scale-97`}
          disabled={isNextDisabled}
          onClick={() =>
            setPageNumber((prev) => Math.min(prev + 1, MAX_PAGENUMBER))
          }
        >
          <HiArrowCircleRight
            className={`${isNextDisabled ? "opacity-40" : "opacity-100"} transition-all duration-200 ease-in text-survey-border text-6xl xl:text-8xl`}
          />
        </Button>
      </div>
    </div>
  );
}

export default App;
