import { useCallback } from "react";
import ContainerHeaderCsc0413 from "../components/ContainerHeaderCsc0413";
import { useNavigate } from "react-router-dom";
import MessageAltDuotoneLine from "../components/MessageAltDuotoneLine";
import "./GRADINGSHEETMODULECLASS.css";

const GRADINGSHEETMODULECLASS = () => {
  const navigate = useNavigate();

  const onPRINTBUTTONContainerClick = useCallback(() => {
    navigate("/grading-sheet-module-report-gradeprint-gradesheet");
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
    <div className="grading-sheet-module-class">
      <img className="bg-background-icon1" alt="" src="/bg-background1.svg" />
      <div className="student-row-grade-group">
        <div className="student-row-grade25">
          <div className="div66">1</div>
          <div className="div67">2020-00000</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 1</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">2</div>
          <div className="div67">2020-00001</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 2</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">3</div>
          <div className="div67">2020-00002</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 3</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">4</div>
          <div className="div67">2020-00003</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 4</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">5</div>
          <div className="div67">2020-00004</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 5</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">6</div>
          <div className="div67">2020-00005</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 6</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">7</div>
          <div className="div67">2020-00006</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 7</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">8</div>
          <div className="div67">2020-00007</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 8</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">9</div>
          <div className="div67">2020-00008</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 9</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">10</div>
          <div className="div67">2020-00009</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 10</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">11</div>
          <div className="div67">2020-00010</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 11</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">12</div>
          <div className="div67">2020-00011</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 12</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">13</div>
          <div className="div67">2020-00012</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 13</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
        <div className="student-row-grade25">
          <div className="div66">14</div>
          <div className="div67">2020-00013</div>
          <div className="div68">4</div>
          <div className="bscs14">BSCS</div>
          <div className="student-name-15">STUDENT NAME 14</div>
          <div className="student-row-grade-child" />
          <img
            className="systemarrow-down-s-line-icon1"
            alt=""
            src="/systemarrowdownsline1.svg"
          />
          <div className="student-row-grade-item" />
        </div>
      </div>
      <ContainerHeaderCsc0413 />
      <div className="metadata1">
        <div className="metadata-item" />
        <div className="count1">COUNT</div>
        <div className="student-no1">STUDENT NO.</div>
        <div className="year1">YEAR</div>
        <div className="college1">COLLEGE</div>
        <div className="student-name1">STUDENT NAME</div>
        <div className="remarks1">REMARKS</div>
        <div className="final-grade1">FINAL GRADE</div>
      </div>
      <div className="report-of-grades">REPORT OF GRADES</div>
      <div className="reminders">***REMINDERS***</div>
      <div className="please-take-note-container">
        <span className="please-take-note-container1">
          <ul className="please-take-note-that-once-you">
            <li className="please-take-note">
              Please take note that once you click the “SUBMIT GRADES”
            </li>
          </ul>
          <p className="button-you-can">
            {" "}
            button you can no longer change the grades online.
          </p>
        </span>
      </div>
      <div className="acceptable-grades-100-container">
        <span className="please-take-note-container1">
          <span className="i">**acceptable grades 1.00 to 3.00, 3.00,</span>
          <i className="i">{` `}</i>
          <b>{`INC- `}</b>
          <span>{`incomplete, `}</span>
          <b>DO</b>
          <span>{` - dropped officially, `}</span>
          <b>1.0</b>
          <span>{` - 1.00 `}</span>
          <b>{`1.5 - `}</b>
          <span>{`1.50 `}</span>
          <b>{`2.0 - `}</b>
          <span>{`2.00 `}</span>
          <b>{`2.5 - `}</b>
          <span>{`2.50 `}</span>
          <b>{`3.0 - `}</b>
          <span>{`3.00 `}</span>
          <b>4.0</b>
          <span>{` - 4.00 `}</span>
          <b>5.0</b>
          <span> - 5.00</span>
        </span>
      </div>
      <div className="request-for-grade-container">
        <span className="please-take-note-container1">
          <ul className="please-take-note-that-once-you">
            <li className="please-take-note">{`Request for grade changes can only be done through a letter `}</li>
          </ul>
          <p className="button-you-can">
            {" "}
            of request addressed to the ______________________
          </p>
        </span>
      </div>
      <div className="all-final-grade-container">
        <ul className="please-take-note-that-once-you">
          All “Final Grade” first should be filled up before clicking the
          “Submit Grades” button
        </ul>
      </div>
      <div className="print-button1" onClick={onPRINTBUTTONContainerClick}>
        <div className="print-button-item" />
        <div className="print1">
          <span className="please-take-note-container1">
            <span>PRINT</span>
            <span className="span2">{` `}</span>
          </span>
        </div>
        <img className="print-icon1" alt="" src="/print-icon.svg" />
      </div>
      <div className="submit-to-email">
        <div className="submit-to-email-child" />
        <div className="submit-grades">SUBMIT GRADES</div>
        <MessageAltDuotoneLine
          dimensions="/vector-31.svg"
          propWidth="34px"
          propHeight="36px"
          propHeight1="58.33%"
          propWidth1="75.59%"
          propTop="20.83%"
          propRight="12.06%"
          propBottom="20.83%"
          propLeft="12.35%"
          propHeight2="37.5%"
          propWidth2="66.76%"
          propTop1="37.5%"
          propRight1="16.47%"
          propBottom1="25%"
          propLeft1="16.76%"
        />
      </div>
      <div className="side-bar-menu4">
        <img
          className="side-bar-menu-child16"
          alt=""
          src="/rectangle-5565.svg"
        />
        <img
          className="plm-logo-with-header-1-icon5"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1ImageClick}
        />
        <div className="link38">
          <img
            className="sign-in-squre-icon5"
            alt=""
            src="/sign-in-squre1.svg"
          />
        </div>
        <div className="side-bar-menu-child17" />
        <div className="side-bar-menu-child18" />
        <div className="side-bar-menu-child19" />
        <div className="side-bar-menu-child20" />
        <div className="link-parent1">
          <div className="link39" onClick={onLinkContainer1Click}>
            <img
              className="systemdashboard-line-icon4"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link39" onClick={onLinkContainer2Click}>
            <img
              className="systemdashboard-line-icon4"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link39" onClick={onLinkContainer3Click}>
            <img
              className="systemdashboard-line-icon4"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link39" onClick={onLinkContainer4Click}>
            <img
              className="folder-search-icon4"
              alt=""
              src="/folder-search1.svg"
            />
          </div>
          <div className="link39" onClick={onLinkContainer5Click}>
            <img
              className="systemdashboard-line-icon4"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link44">
            <img
              className="systemdashboard-line-icon4"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link45" onClick={onLinkContainer7Click}>
          <img
            className="systemdashboard-line-icon4"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GRADINGSHEETMODULECLASS;
