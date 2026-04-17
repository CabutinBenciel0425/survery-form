import type { QuestionsType } from "../data/questions";

type SurveyQuestionType = {
  questionData: QuestionsType;
};

function SurveyQuestion({ questionData }: SurveyQuestionType) {
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
              className="w-full border rounded-sm outline-none px-2 py-0.5"
            />
          </div>
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
                  name={questionData.id.toString()}
                  id={`${questionData.id}-${opt}`}
                />
                <label htmlFor={`${questionData.id}-${opt}`}>{opt}</label>
              </div>
            ))}
          </div>
        </>
      );
    case "select":
      return (
        <div className="w-full flex flex-row">
          <label
            htmlFor={`q-${questionData.id}`}
            className="w-7/12 mb-3 text-xl"
          >
            {questionData.text}
          </label>
          <div className="w-5/12 flex items-center">
            <select id={`q-${questionData.id}`} className="border rounded-sm">
              {" "}
              {questionData.options?.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
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
                <input type="checkbox" id={`${questionData.id}-${opt}`} />
                <label htmlFor={`${questionData.id}-${opt}`}>{opt}</label>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return <div>Unknown question type</div>;
  }
}

export default SurveyQuestion;
