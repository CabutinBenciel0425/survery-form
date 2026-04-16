import { type SectionsType } from "../data/questions";
import SurveyQuestion from "./SurveyQuestion";

type SurveySectionTypes = {
  section: SectionsType;
};

function SurveySection({ section }: SurveySectionTypes) {
  return (
    <div className="py-5 px-10">
      <h2>{section.title}</h2>
      {section.questions.map((sec) => (
        <SurveyQuestion questionData={sec} key={sec.id} />
      ))}
    </div>
  );
}

export default SurveySection;
