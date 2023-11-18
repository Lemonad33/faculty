import "./ClassRowContainer.css";

const ClassRowContainer = ({ onCLASSROWContainerClick }) => {
  return (
    <div className="class-row" onClick={onCLASSROWContainerClick}>
      <div className="class-row-child" />
      <div className="csc-04132">CSC 0413</div>
      <div className="div180">2</div>
      <div className="cs-elective-14">CS Elective 1 (LEC)</div>
      <div className="w-600p-">W 6:00P - 8:00P F2F GV 306</div>
      <img className="xlsx-icon1" alt="" src="/xlsx1.svg" />
      <img className="group-icon" alt="" src="/group.svg" />
    </div>
  );
};

export default ClassRowContainer;
