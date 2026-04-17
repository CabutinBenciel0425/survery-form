import { useState } from "react";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";
import { questions } from "./data/questions";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import Button from "./components/Button";
import ThankYouPage from "./components/ThankYouPage";

function App() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isDone, setIsDone] = useState<boolean>(false);

  const TOTAL_PAGES = questions.sections.length;
  const MAX_PAGENUMBER = TOTAL_PAGES;
  const MIN_PAGENUMBER = 1;

  const isNextDisabled = pageNumber === MAX_PAGENUMBER;
  const isPrevDisabled = pageNumber === MIN_PAGENUMBER;

  return (
    <div className="w-full h-full flex flex-col text-survey-text font-semibold text-sm items-center justify-start lg:text-lg relative">
      {!isDone ? (
        <>
          <ProgressBar
            pageNumber={pageNumber}
            MAX_PAGENUMBER={MAX_PAGENUMBER}
          />
          <Form pageNumber={pageNumber} />

          <div className="w-full flex items-center justify-between px-10 mt-6">
            {/* Prev button */}
            <Button
              className={`${isPrevDisabled ? "cursor-not-allowed text-gray-500" : "cursor-pointer"} active:scale-97`}
              disabled={isPrevDisabled}
              onClick={() =>
                setPageNumber((prev) => Math.max(prev - 1, MIN_PAGENUMBER))
              }
            >
              <HiArrowCircleLeft className="text-survey-border text-6xl xl:text-8xl" />
            </Button>

            {/* Next or Submit button */}
            {!isNextDisabled ? (
              <Button
                className="cursor-pointer active:scale-97"
                onClick={() =>
                  setPageNumber((prev) => Math.min(prev + 1, MAX_PAGENUMBER))
                }
              >
                <HiArrowCircleRight className="text-survey-border text-6xl xl:text-8xl" />
              </Button>
            ) : (
              <Button
                className="transition-all duration-200 ease-in bg-survey-submit text-survey-bg text-2xl xl:text-3xl px-3 py-1 cursor-pointer rounded-md active:scale-97 hover:bg-survey-submit-hover active:bg-survey-submit-hover"
                onClick={() => setIsDone(true)}
              >
                Submit
              </Button>
            )}
          </div>
        </>
      ) : (
        <ThankYouPage />
      )}
    </div>
  );
}

export default App;
