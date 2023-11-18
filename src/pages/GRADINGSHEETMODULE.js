import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ClassRowContainer from "../components/ClassRowContainer";
import "./GRADINGSHEETMODULE.css";

const GRADINGSHEETMODULE = () => {
  const navigate = useNavigate();

  const onCLASSROWContainerClick = useCallback(() => {
    navigate("/grading-sheet-module-class");
  }, [navigate]);

  const onPlmLogoWithHeader1ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='plmCover4Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='plmCover4Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    navigate("/profile-module");
  }, [navigate]);

  const onLinkContainer3Click = useCallback(() => {
    navigate("/class-assignment-module");
  }, [navigate]);

  const onLinkContainer4Click = useCallback(() => {
    navigate("/search-class-assignment-module");
  }, [navigate]);

  const onLinkContainer5Click = useCallback(() => {
    navigate("/grading-sheet-module");
  }, [navigate]);

  const onLinkContainer7Click = useCallback(() => {
    navigate("/change-password-module");
  }, [navigate]);

  return (
    <div className="grading-sheet-module">
      <div className="plm-cover-44" />
      <div className="grading-sheet-module-child" />
      <div className="grading-sheet-module-item" />
      <div className="class">CLASS</div>
      <div className="section">SECTION</div>
      <div className="schedule">SCHEDULE</div>
      <div className="subject-title1">SUBJECT TITLE</div>
      <div className="classlist">CLASSLIST</div>
      <div className="ay-sem-group">
        <div className="ay-sem1">{`AY. & SEM:`}</div>
        <div className="frame-child1" />
        <div className="st-semester2">
          <span className="st-semester-txt-container1">
            <span className="span3">{`2023 -2023  `}</span>
            <span className="st-semester3">{`1st Semester `}</span>
          </span>
        </div>
        <div className="search-button3">
          <div className="search-button-child1" />
          <div className="search2">SEARCH</div>
        </div>
        <img
          className="systemarrow-down-s-line-icon18"
          alt=""
          src="/systemarrowdownsline.svg"
        />
      </div>
      <div className="aysem-title">
        <div className="aysem-title-child" />
        <div className="grading-sheet-for-container">
          <b className="grading-sheet">GRADING SHEET</b>
          <span className="span4">{` `}</span>
          <span className="for">for</span>
          <span className="st-semester4">
            {` `}
            <span className="st-semester5">2023-2024 1st SEMESTER</span>
          </span>
        </div>
      </div>
      <div className="class-row-parent">
        <ClassRowContainer
          onCLASSROWContainerClick={onCLASSROWContainerClick}
        />
        <ClassRowContainer
          onCLASSROWContainerClick={onCLASSROWContainerClick}
        />
        <ClassRowContainer
          onCLASSROWContainerClick={onCLASSROWContainerClick}
        />
        <ClassRowContainer
          onCLASSROWContainerClick={onCLASSROWContainerClick}
        />
        <ClassRowContainer
          onCLASSROWContainerClick={onCLASSROWContainerClick}
        />
        <ClassRowContainer
          onCLASSROWContainerClick={onCLASSROWContainerClick}
        />
        <ClassRowContainer
          onCLASSROWContainerClick={onCLASSROWContainerClick}
        />
        <ClassRowContainer
          onCLASSROWContainerClick={onCLASSROWContainerClick}
        />
      </div>
      <div className="encoding-of-grades">ENCODING OF GRADES</div>
      <div className="side-bar-menu7">
        <img
          className="side-bar-menu-child31"
          alt=""
          src="/rectangle-5565.svg"
        />
        <img
          className="plm-logo-with-header-1-icon8"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1ImageClick}
        />
        <div className="link62">
          <img
            className="sign-in-squre-icon8"
            alt=""
            src="/sign-in-squre1.svg"
          />
        </div>
        <div className="side-bar-menu-child32" />
        <div className="side-bar-menu-child33" />
        <div className="side-bar-menu-child34" />
        <div className="side-bar-menu-child35" />
        <div className="link-parent4">
          <div className="link63" onClick={onLinkContainer1Click}>
            <img
              className="systemdashboard-line-icon7"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link63" onClick={onLinkContainer2Click}>
            <img
              className="systemdashboard-line-icon7"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link63" onClick={onLinkContainer3Click}>
            <img
              className="systemdashboard-line-icon7"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link63" onClick={onLinkContainer4Click}>
            <img
              className="folder-search-icon7"
              alt=""
              src="/folder-search1.svg"
            />
          </div>
          <div className="link63" onClick={onLinkContainer5Click}>
            <img
              className="systemdashboard-line-icon7"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link68">
            <img
              className="systemdashboard-line-icon7"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link69" onClick={onLinkContainer7Click}>
          <img
            className="systemdashboard-line-icon7"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GRADINGSHEETMODULE;
