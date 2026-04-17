import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { type FormValues, type SectionsType } from "../data/questions";
import SurveyQuestion from "./SurveyQuestion";

type SurveySectionTypes = {
  section: SectionsType;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

function SurveySection({ section, register, errors }: SurveySectionTypes) {
  return (
    <div className=" mt-5 px-10 flex flex-col gap-8">
      {section.questions.map((sec) => (
        <div className="border-b border-b-gray-300 py-5" key={sec.id}>
          <SurveyQuestion
            questionData={sec}
            key={sec.id}
            register={register}
            errors={errors}
            section={section}
          />
        </div>
      ))}
    </div>
  );
}

export default SurveySection;
