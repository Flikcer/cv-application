import "./App.css";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import logo from "./print.png";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="app--container">
      <section ref={componentRef}>
        <img
          className="printPageButton"
          onClick={handlePrint}
          src={logo}
          alt="print icon"
        />

        <h1 className="cv--title">Editable CV App Template</h1>
        <br />

        <Personal />
        <Education />
        <Experience />
      </section>
    </div>
  );
}

export default App;
