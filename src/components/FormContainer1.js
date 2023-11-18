import { useMemo } from "react";
import "./FormContainer1.css";

const FormContainer1 = ({ courseCodeTop }) => {
  const header1Style = useMemo(() => {
    return {
      top: courseCodeTop,
    };
  }, [courseCodeTop]);

  return (
    <div className="header-1" style={header1Style}>
      <div className="header-1-child" />
      <div className="class-code1">Class Code</div>
      <div className="course-code-container">
        <p className="course-code3">{`Course Code `}</p>
        <p className="course-code3">{`& Section`}</p>
      </div>
      <div className="course-title1">Course Title</div>
      <div className="class-schedule1">Class Schedule</div>
      <div className="credits1">Credits</div>
    </div>
  );
};

export default FormContainer1;
