import type { QuestionsType } from "../data/questions";
import React from "react";

type SurveyQuestionType = {
  questionData: QuestionsType;
};

function SurveyQuestion({ questionData }: SurveyQuestionType) {
  console.log(questionData);
  if (!questionData) return null;

  switch (questionData.type) {
    case "input":
      return (
        <>
          <label htmlFor={`q-${questionData.id}`}>{questionData.text}</label>
          <input type="text" id={`q-${questionData.id}`} />
        </>
      );
    case "radio":
      return (
        <>
          <p>{questionData.text}</p>
          {questionData.options?.map((opt) => (
            <React.Fragment key={opt}>
              {" "}
              {/* ← key goes here, not on input/label */}
              <input
                type="radio"
                name={questionData.id.toString()}
                id={`${questionData.id}-${opt}`}
              />
              <label htmlFor={`${questionData.id}-${opt}`}>{opt}</label>
            </React.Fragment>
          ))}
        </>
      );
    case "select":
      return (
        <>
          <label htmlFor={`q-${questionData.id}`}>{questionData.text}</label>
          <select id={`q-${questionData.id}`}>
            {" "}
            {/* ← add id to match label */}
            {questionData.options?.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </>
      );
    case "checkbox":
      return (
        <>
          <p>{questionData.text}</p>
          {questionData.options?.map((opt) => (
            <React.Fragment key={opt}>
              {" "}
              {/* ← key goes here */}
              <input type="checkbox" id={`${questionData.id}-${opt}`} />
              <label htmlFor={`${questionData.id}-${opt}`}>{opt}</label>
            </React.Fragment>
          ))}
        </>
      );

    default:
      return <div>Unknown question type</div>;
  }
}

export default SurveyQuestion;
