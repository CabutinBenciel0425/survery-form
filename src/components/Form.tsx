import { questions } from "../data/questions";
import SurveySection from "./SurveySection";

function Form({ pageNumber }: { pageNumber: number }) {
  return (
    <form className="w-[90%] h-8/12 relative overflow-x-hidden xl:w-300 z-10">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(pageNumber - 1) * 100}%)` }}
      >
        {questions.sections.map((section) => (
          <div key={section.id} className="w-full shrink-0 h-full">
            <SurveySection section={section} />
          </div>
        ))}
      </div>
    </form>
  );
}

export default Form;
