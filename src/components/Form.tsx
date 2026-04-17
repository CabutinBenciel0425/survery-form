import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { questions, type FormValues } from "../data/questions";
import SurveySection from "./SurveySection";

type FormPropsType = {
  pageNumber: number;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

function Form({ pageNumber, register, errors }: FormPropsType) {
  return (
    <div className="w-full h-fit relative z-10 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(pageNumber - 1) * 100}%)` }}
      >
        {questions.sections.map((section) => (
          <div key={section.id} className="w-full shrink-0 h-fit">
            <SurveySection
              section={section}
              register={register}
              errors={errors}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
