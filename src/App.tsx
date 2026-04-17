import { useState } from "react";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";
import { questions, type FormValues } from "./data/questions";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import Button from "./components/Button";
import ThankYouPage from "./components/ThankYouPage";
import { useForm } from "react-hook-form";

function App() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [showErrors, setShowErrors] = useState<boolean>(false);

  const TOTAL_PAGES = questions.sections.length;
  const MAX_PAGENUMBER = TOTAL_PAGES;
  const MIN_PAGENUMBER = 1;

  const isNextDisabled = pageNumber === MAX_PAGENUMBER;
  const isPrevDisabled = pageNumber === MIN_PAGENUMBER;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const handleNext = () => {
    setShowErrors(false);
    setPageNumber((prev) => Math.min(prev + 1, MAX_PAGENUMBER));
  };

  const handlePrev = () => {
    setShowErrors(false);
    setPageNumber((prev) => Math.max(prev - 1, MIN_PAGENUMBER));
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    setIsDone(true);
  };

  const onInvalid = () => {
    setShowErrors(true);
  };

  return (
    <div className="w-full h-full flex flex-col text-survey-text font-semibold text-sm items-center justify-start lg:text-lg relative">
      {!isDone ? (
        <form
          onSubmit={handleSubmit(onSubmit, onInvalid)}
          className="w-full h-full flex flex-col items-center justify-start overflow-hidden"
        >
          <ProgressBar
            pageNumber={pageNumber}
            MAX_PAGENUMBER={MAX_PAGENUMBER}
          />
          <div className="flex-1 overflow-y-auto w-[90%] xl:w-300 overflow-x-hidden">
            <Form
              pageNumber={pageNumber}
              register={register}
              errors={showErrors ? errors : {}}
            />
          </div>

          <div className="w-[90%] flex items-center justify-between px-10 mt-6 mb-6 xl:w-300 flex-shrink-0">
            {/* Prev button */}
            <Button
              className={`${isPrevDisabled ? "cursor-not-allowed text-gray-500" : "cursor-pointer active:scale-97"} `}
              disabled={isPrevDisabled}
              onClick={handlePrev}
            >
              <HiArrowCircleLeft
                className={`text-survey-border text-6xl xl:text-8xl ${isPrevDisabled ? "opacity-40" : "opacity-100"}`}
              />
            </Button>

            {/* Next or Submit button */}
            {!isNextDisabled ? (
              <Button
                className="cursor-pointer active:scale-97"
                onClick={handleNext}
              >
                <HiArrowCircleRight className="text-survey-border text-6xl xl:text-8xl" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="transition-all duration-200 ease-in bg-survey-submit text-survey-bg text-2xl xl:text-3xl px-3 py-1 cursor-pointer rounded-md active:scale-97 hover:bg-survey-submit-hover active:bg-survey-submit-hover"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      ) : (
        <ThankYouPage />
      )}
    </div>
  );
}

export default App;
