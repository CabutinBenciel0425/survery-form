import { type SectionsType } from "../data/questions";
import SurveyQuestion from "./SurveyQuestion";

type SurveySectionTypes = {
  section: SectionsType;
};

function SurveySection({ section }: SurveySectionTypes) {
  return (
    <div className="py-5 px-10 flex flex-col gap-8">
      {section.questions.map((sec) => (
        <div className="border-b border-b-gray-300 py-5" key={sec.id}>
          <SurveyQuestion questionData={sec} key={sec.id} />
        </div>
      ))}
    </div>
  );
}

export default SurveySection;
