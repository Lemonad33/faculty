import { useCallback } from "react";
import FormContainer1 from "../components/FormContainer1";
import { useNavigate } from "react-router-dom";
import "./CLASSASSIGNMENTMODULE.css";

const CLASSASSIGNMENTMODULE = () => {
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
    <div className="class-assignment-module">
      <div className="plm-cover-45" />
      <div className="class-assignment-module-child" />
      <div className="class-assignment-module-item" />
      <FormContainer1 />
      <div className="class-assignment-module-inner" />
      <div className="st-semester-sy2">1st Semester SY. 2023-2024</div>
      <div className="student-row-grade-container">
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
        <div className="student-row-grade40">
          <div className="div111">20223</div>
          <div className="csc-01231-411">CSC 0123.1-4</div>
          <div className="cs-elective-211">CS Elective 2 (Lab)</div>
          <div className="div112">3</div>
          <div className="com-lab-411">COM LAB 4</div>
          <div className="m-600p-11">M 6:00p - 9:00p F2F</div>
        </div>
      </div>
      <div className="print-button2">
        <div className="print-button-inner" />
        <div className="print2">
          <span className="print-txt2">
            <span>PRINT</span>
            <span className="span5">{` `}</span>
          </span>
        </div>
        <img className="print-icon2" alt="" src="/print-icon.svg" />
      </div>
      <div className="current-class-assignment">CURRENT CLASS ASSIGNMENT</div>
      <div className="side-bar-menu8">
        <img
          className="side-bar-menu-child36"
          alt=""
          src="/rectangle-5565.svg"
        />
        <img
          className="plm-logo-with-header-1-icon9"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1ImageClick}
        />
        <div className="link70">
          <img
            className="sign-in-squre-icon9"
            alt=""
            src="/sign-in-squre1.svg"
          />
        </div>
        <div className="side-bar-menu-child37" />
        <div className="side-bar-menu-child38" />
        <div className="side-bar-menu-child39" />
        <div className="side-bar-menu-child40" />
        <div className="link-parent5">
          <div className="link71" onClick={onLinkContainer1Click}>
            <img
              className="systemdashboard-line-icon8"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link71" onClick={onLinkContainer2Click}>
            <img
              className="systemdashboard-line-icon8"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link71" onClick={onLinkContainer3Click}>
            <img
              className="systemdashboard-line-icon8"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link71" onClick={onLinkContainer4Click}>
            <img
              className="folder-search-icon8"
              alt=""
              src="/folder-search1.svg"
            />
          </div>
          <div className="link71" onClick={onLinkContainer5Click}>
            <img
              className="systemdashboard-line-icon8"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link76">
            <img
              className="systemdashboard-line-icon8"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link77" onClick={onLinkContainer7Click}>
          <img
            className="systemdashboard-line-icon8"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CLASSASSIGNMENTMODULE;
