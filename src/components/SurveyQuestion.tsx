import { type FieldErrors, type UseFormRegister } from "react-hook-form";
import type {
  FormValues,
  QuestionsType,
  SectionsType,
} from "../data/questions";

type SurveyQuestionType = {
  questionData: QuestionsType;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  section: SectionsType;
};

function SurveyQuestion({
  questionData,
  register,
  errors,
  section,
}: SurveyQuestionType) {
  if (!questionData) return null;

  switch (questionData.type) {
    case "input":
      return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
          <label
            htmlFor={`q-${questionData.id}`}
            className="sm:w-2/4 mb-3 text-xl"
          >
            {questionData.text}
          </label>
          <div className="sm:w-2/4 flex md:w-3/4">
            <input
              type="text"
              id={`q-${questionData.id}`}
              className="w-full border rounded-sm wkoutline-none px-2 py-0.5"
              {...register(
                `q${section.id}_${questionData.id.toString()}` as keyof FormValues,
                {
                  required: true,
                },
              )}
            />
          </div>
          {errors[
            `q${section.id}_${questionData.id.toString()}` as keyof FormValues
          ] && (
            <span className="text-red-600 font-bold text-sm mt-1">
              This field is required *
            </span>
          )}
        </div>
      );
    case "radio":
      return (
        <>
          <p className="mb-3 text-xl">{questionData.text}</p>
          <div className="flex gap-4 flex-wrap items-center justify-between md:justify-start md:gap-10">
            {questionData.options?.map((opt) => (
              <div key={opt} className="flex gap-1">
                {" "}
                <input
                  type="radio"
                  id={`${questionData.id}-${opt}`}
                  {...register(
                    `q${section.id}_${questionData.id.toString()}` as keyof FormValues,
                    {
                      required: true,
                    },
                  )}
                />
                <label htmlFor={`${questionData.id}-${opt}`}>{opt}</label>
              </div>
            ))}
          </div>
          {errors[
            `q${section.id}_${questionData.id.toString()}` as keyof FormValues
          ] && (
            <span className="text-red-600 font-bold text-sm mt-2 block">
              This field is required *
            </span>
          )}
        </>
      );
    case "select":
      return (
        <div className="w-full flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10">
            <label
              htmlFor={`q-${questionData.id}`}
              className="sm:w-2/4 mb-3 text-xl"
            >
              {questionData.text}
            </label>
            <div className="sm:w-2/4 flex md:w-3/4">
              <select
                id={`q-${questionData.id}`}
                className="w-full border rounded-sm"
                {...register(
                  `q${section.id}_${questionData.id.toString()}` as keyof FormValues,
                  {
                    required: true,
                  },
                )}
              >
                {" "}
                {questionData.options?.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          {errors[
            `q${section.id}_${questionData.id.toString()}` as keyof FormValues
          ] && (
            <span className="text-red-600 font-bold text-sm mt-2">
              This field is required *
            </span>
          )}
        </div>
      );
    case "checkbox":
      return (
        <div>
          <p className="mb-3 text-xl">{questionData.text}</p>
          <div className="flex gap-4 items-center justify-start flex-wrap">
            {questionData.options?.map((opt) => (
              <div key={opt} className="flex gap-1">
                {" "}
                <input
                  type="checkbox"
                  id={`${questionData.id}-${opt}`}
                  value={opt}
                  {...register(
                    `q${section.id}_${questionData.id.toString()}` as keyof FormValues,
                    {
                      required: true,
                    },
                  )}
                />
                <label htmlFor={`${questionData.id}-${opt}`}>{opt}</label>
              </div>
            ))}
          </div>
          {errors[
            `q${section.id}_${questionData.id.toString()}` as keyof FormValues
          ] && (
            <span className="text-red-600 font-bold text-sm mt-2 block">
              This field is required *
            </span>
          )}
        </div>
      );

    default:
      return <div>Unknown question type</div>;
  }
}

export default SurveyQuestion;
