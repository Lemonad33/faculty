import { useCallback } from "react";
import PrintFormContainer from "../components/PrintFormContainer";
import { useNavigate } from "react-router-dom";
import "./GRADINGSHEETMODULEREPORTG.css";

const GRADINGSHEETMODULEREPORTG = () => {
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
    <div className="grading-sheet-module-report-g">
      <img className="plm-cover-5-icon" alt="" src="/plm-cover-41@2x.png" />
      <div className="grading-sheet-module-report-g-child" />
      <img className="bg-background-icon" alt="" src="/bg-background.svg" />
      <div className="student-row-grade11">
        <div className="div22">1</div>
        <div className="div23">2020-00000</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 1</div>
      </div>
      <div className="student-row-grade12">
        <div className="div22">2</div>
        <div className="div23">2020-00001</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 2</div>
      </div>
      <div className="student-row-grade13">
        <div className="div22">3</div>
        <div className="div23">2020-00002</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 3</div>
      </div>
      <div className="student-row-grade14">
        <div className="div22">4</div>
        <div className="div23">2020-00003</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 4</div>
      </div>
      <div className="student-row-grade15">
        <div className="div22">5</div>
        <div className="div23">2020-00004</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 5</div>
      </div>
      <div className="student-row-grade16">
        <div className="div22">6</div>
        <div className="div23">2020-00005</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 6</div>
      </div>
      <div className="student-row-grade17">
        <div className="div22">7</div>
        <div className="div23">2020-00006</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 7</div>
      </div>
      <div className="student-row-grade18">
        <div className="div22">8</div>
        <div className="div23">2020-00007</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 8</div>
      </div>
      <div className="student-row-grade19">
        <div className="div22">9</div>
        <div className="div23">2020-00008</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 9</div>
      </div>
      <div className="student-row-grade20">
        <div className="div22">10</div>
        <div className="div23">2020-00009</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 10</div>
      </div>
      <div className="student-row-grade21">
        <div className="div22">11</div>
        <div className="div23">2020-00010</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 11</div>
      </div>
      <div className="student-row-grade22">
        <div className="div22">12</div>
        <div className="div23">2020-00011</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 12</div>
      </div>
      <div className="student-row-grade23">
        <div className="div22">13</div>
        <div className="div23">2020-00012</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 13</div>
      </div>
      <div className="student-row-grade24">
        <div className="div22">14</div>
        <div className="div23">2020-00013</div>
        <div className="div24">4</div>
        <div className="bscs">BSCS</div>
        <div className="student-name-1">STUDENT NAME 14</div>
      </div>
      <div className="grading-sheet-module-report-g-item" />
      <div className="div64">1 / 2023</div>
      <div className="termay">TERM/AY</div>
      <div className="div65">2</div>
      <div className="units">UNITS</div>
      <div className="cs-elective-1">CS Elective 1 (LEC)</div>
      <div className="subject-title">SUBJECT TITLE</div>
      <div className="csc-0413">CSC 0413</div>
      <div className="course-code1">COURSE CODE</div>
      <div className="metadata">
        <div className="metadata-child" />
        <div className="count">COUNT</div>
        <div className="student-no">STUDENT NO.</div>
        <div className="year">YEAR</div>
        <div className="college">COLLEGE</div>
        <div className="student-name">STUDENT NAME</div>
        <div className="remarks">REMARKS</div>
        <div className="final-grade">FINAL GRADE</div>
      </div>
      <img className="image-10-icon" alt="" src="/image-10@2x.png" />
      <div className="grading-sheet-module-report-g-inner" />
      <PrintFormContainer />
      <div className="side-bar-menu3">
        <img
          className="side-bar-menu-child11"
          alt=""
          src="/rectangle-5565.svg"
        />
        <img
          className="plm-logo-with-header-1-icon4"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1ImageClick}
        />
        <div className="link30">
          <img
            className="sign-in-squre-icon4"
            alt=""
            src="/sign-in-squre1.svg"
          />
        </div>
        <div className="side-bar-menu-child12" />
        <div className="side-bar-menu-child13" />
        <div className="side-bar-menu-child14" />
        <div className="side-bar-menu-child15" />
        <div className="frame-div">
          <div className="link31" onClick={onLinkContainer1Click}>
            <img
              className="systemdashboard-line-icon3"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link31" onClick={onLinkContainer2Click}>
            <img
              className="systemdashboard-line-icon3"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link31" onClick={onLinkContainer3Click}>
            <img
              className="systemdashboard-line-icon3"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link31" onClick={onLinkContainer4Click}>
            <img
              className="folder-search-icon3"
              alt=""
              src="/folder-search1.svg"
            />
          </div>
          <div className="link31" onClick={onLinkContainer5Click}>
            <img
              className="systemdashboard-line-icon3"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link36">
            <img
              className="systemdashboard-line-icon3"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link37" onClick={onLinkContainer7Click}>
          <img
            className="systemdashboard-line-icon3"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GRADINGSHEETMODULEREPORTG;
