import { useState } from "react";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";

function App() {
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <div className="w-full h-full flex flex-col text-survey-text font-semibold text-xl items-center justify-start">
      <ProgressBar pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <Form />
    </div>
  );
}

export default App;
