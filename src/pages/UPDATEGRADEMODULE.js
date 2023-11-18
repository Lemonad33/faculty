import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./UPDATEGRADEMODULE.css";

const UPDATEGRADEMODULE = () => {
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
    <div className="update-grade-module">
      <div className="subject">SUBJECT:</div>
      <div className="subjects">
        <div className="subjects-child" />
        <div className="cs-elective-11">CS Elective 1 (LEC)</div>
        <img
          className="systemarrow-down-s-line-icon15"
          alt=""
          src="/systemarrowdownsline.svg"
        />
      </div>
      <div className="search-button1">
        <div className="search-button-item" />
        <div className="search1">SEARCH</div>
      </div>
      <div className="search-button2">
        <div className="search-button-inner" />
        <div className="update-grades">UPDATE GRADES</div>
      </div>
      <div className="student-no2">STUDENT NO.:</div>
      <div className="student-nos">
        <div className="student-nos-child" />
        <div className="div108">2020-00000</div>
        <img
          className="systemarrow-down-s-line-icon16"
          alt=""
          src="/systemarrowdownsline.svg"
        />
      </div>
      <img className="bg-background-icon2" alt="" src="/bg-background2.svg" />
      <div className="student-row-grade-wrapper">
        <div className="student-row-grade39">
          <div className="cs-elective-12">CS ELECTIVE 1 (LEC)</div>
          <div className="div109">2020-00000</div>
          <div className="div110">4</div>
          <div className="bscs28">BSCS</div>
          <div className="student-name-16">STUDENT NAME 1</div>
          <div className="student-row-grade-child26" />
          <img
            className="systemarrow-down-s-line-icon17"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-child27" />
        </div>
      </div>
      <div className="metadata2">
        <div className="metadata-inner" />
        <div className="subject1">SUBJECT</div>
        <div className="student-no3">STUDENT NO.</div>
        <div className="year2">YEAR</div>
        <div className="college2">COLLEGE</div>
        <div className="student-name2">STUDENT NAME</div>
        <div className="remarks2">REMARKS</div>
        <div className="grade">GRADE</div>
      </div>
      <div className="side-bar-menu5">
        <img
          className="side-bar-menu-child21"
          alt=""
          src="/rectangle-5565.svg"
        />
        <img
          className="plm-logo-with-header-1-icon6"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1ImageClick}
        />
        <div className="link46">
          <img
            className="sign-in-squre-icon6"
            alt=""
            src="/sign-in-squre1.svg"
          />
        </div>
        <div className="side-bar-menu-child22" />
        <div className="side-bar-menu-child23" />
        <div className="side-bar-menu-child24" />
        <div className="side-bar-menu-child25" />
        <div className="link-parent2">
          <div className="link47" onClick={onLinkContainer1Click}>
            <img
              className="systemdashboard-line-icon5"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link47" onClick={onLinkContainer2Click}>
            <img
              className="systemdashboard-line-icon5"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link47" onClick={onLinkContainer3Click}>
            <img
              className="systemdashboard-line-icon5"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link47" onClick={onLinkContainer4Click}>
            <img
              className="folder-search-icon5"
              alt=""
              src="/folder-search1.svg"
            />
          </div>
          <div className="link47" onClick={onLinkContainer5Click}>
            <img
              className="systemdashboard-line-icon5"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link52">
            <img
              className="systemdashboard-line-icon5"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link53" onClick={onLinkContainer7Click}>
          <img
            className="systemdashboard-line-icon5"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
      <div className="plm-cover-42" />
    </div>
  );
};

export default UPDATEGRADEMODULE;
