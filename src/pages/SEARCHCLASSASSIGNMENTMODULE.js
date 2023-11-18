import { useCallback } from "react";
import FormContainer1 from "../components/FormContainer1";
import { useNavigate } from "react-router-dom";
import "./SEARCHCLASSASSIGNMENTMODULE.css";

const SEARCHCLASSASSIGNMENTMODULE = () => {
  const navigate = useNavigate();

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
    <div className="search-class-assignment-module">
      <div className="plm-cover-41" />
      <div className="search-class-assignment-module-child" />
      <div className="search-class-assignment-module-item" />
      <FormContainer1 courseCodeTop="334px" />
      <div className="search-class-assignment-module-inner" />
      <div className="st-semester-sy1">1st Semester SY. 2023-2024</div>
      <div className="ay-sem-parent">
        <div className="ay-sem">{`AY. & SEM:`}</div>
        <div className="frame-inner" />
        <div className="st-semester">
          <span className="st-semester-txt-container">
            <span className="span">{`2023 -2023  `}</span>
            <span className="st-semester1">{`1st Semester `}</span>
          </span>
        </div>
        <div className="search-button">
          <div className="search-button-child" />
          <div className="search">SEARCH</div>
        </div>
        <img
          className="systemarrow-down-s-line-icon"
          alt=""
          src="/systemarrowdownsline.svg"
        />
      </div>
      <div className="student-row-grade-parent">
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade">
          <div className="div">20223</div>
          <div className="csc-01231-4">CSC 0123.1-4</div>
          <div className="cs-elective-2">CS Elective 2 (Lab)</div>
          <div className="div1">3</div>
          <div className="com-lab-4">COM LAB 4</div>
          <div className="m-600p-">M 6:00p - 9:00p F2F</div>
        </div>
      </div>
      <div className="print-button">
        <div className="print-button-child" />
        <div className="print">
          <span className="st-semester-txt-container">
            <span>PRINT</span>
            <span className="span1">{` `}</span>
          </span>
        </div>
        <img className="print-icon" alt="" src="/print-icon.svg" />
      </div>
      <div className="search-class-assignment">SEARCH CLASS ASSIGNMENT</div>
      <div className="side-bar-menu2">
        <img
          className="side-bar-menu-child6"
          alt=""
          src="/rectangle-5565.svg"
        />
        <img
          className="plm-logo-with-header-1-icon3"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1ImageClick}
        />
        <div className="link22">
          <img
            className="sign-in-squre-icon3"
            alt=""
            src="/sign-in-squre1.svg"
          />
        </div>
        <div className="side-bar-menu-child7" />
        <div className="side-bar-menu-child8" />
        <div className="side-bar-menu-child9" />
        <div className="side-bar-menu-child10" />
        <div className="link-container">
          <div className="link23" onClick={onLinkContainer1Click}>
            <img
              className="systemdashboard-line-icon2"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link23" onClick={onLinkContainer2Click}>
            <img
              className="systemdashboard-line-icon2"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link23" onClick={onLinkContainer3Click}>
            <img
              className="systemdashboard-line-icon2"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link23" onClick={onLinkContainer4Click}>
            <img
              className="folder-search-icon2"
              alt=""
              src="/folder-search1.svg"
            />
          </div>
          <div className="link23" onClick={onLinkContainer5Click}>
            <img
              className="systemdashboard-line-icon2"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link28">
            <img
              className="systemdashboard-line-icon2"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link29" onClick={onLinkContainer7Click}>
          <img
            className="systemdashboard-line-icon2"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SEARCHCLASSASSIGNMENTMODULE;
