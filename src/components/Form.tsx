import { questions } from "../data/questions";
import SurveySection from "./SurveySection";

function Form() {
  return (
    <form>
      {questions.sections.map((section) => (
        <SurveySection section={section} key={section.id} />
      ))}
    </form>
  );
}

export default Form;
