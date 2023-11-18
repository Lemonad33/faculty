import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Minutes from "../components/Minutes";
import Hours from "../components/Hours";
import FormContainer2 from "../components/FormContainer2";
import "./LANDINGPAGEDASHBOARD.css";

const LANDINGPAGEDASHBOARD = () => {
  const navigate = useNavigate();

  const onLinkContainer3Click = useCallback(() => {
    navigate("/class-assignment-module");
  }, [navigate]);

  const onLinkContainer4Click = useCallback(() => {
    navigate("/profile-module");
  }, [navigate]);

  const onPlmLogoWithHeader1Image1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='plmCover4Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkContainer7Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='plmCover4Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkContainer8Click = useCallback(() => {
    navigate("/profile-module");
  }, [navigate]);

  const onLinkContainer9Click = useCallback(() => {
    navigate("/class-assignment-module");
  }, [navigate]);

  const onLinkContainer10Click = useCallback(() => {
    navigate("/search-class-assignment-module");
  }, [navigate]);

  const onLinkContainer11Click = useCallback(() => {
    navigate("/grading-sheet-module");
  }, [navigate]);

  const onLinkContainer13Click = useCallback(() => {
    navigate("/change-password-module");
  }, [navigate]);

  return (
    <div className="landing-pagedashboard">
      <div className="landing-pagedashboard-child" />
      <div className="vector-parent">
        <img className="frame-child" alt="" src="/rectangle-5559.svg" />
        <img className="plm-cover-4-icon" alt="" src="/plm-cover-4@2x.png" />
        <div className="frame-item" />
        <img
          className="plm-logo-with-header-1-icon"
          alt=""
          src="/plmlogowithheader-1@2x.png"
        />
        <div className="link">
          <img className="home-icon" alt="" src="/home.svg" />
        </div>
        <div className="link1">
          <img className="home-icon" alt="" src="/file-dock-search.svg" />
        </div>
        <div className="link2">
          <img className="home-icon" alt="" src="/book-open-alt.svg" />
        </div>
        <div className="link3" onClick={onLinkContainer3Click}>
          <img className="home-icon" alt="" src="/book-check.svg" />
        </div>
        <div className="link4" onClick={onLinkContainer4Click}>
          <img className="home-icon" alt="" src="/user.svg" />
        </div>
        <div className="link5">
          <img className="home-icon" alt="" src="/sign-in-squre.svg" />
        </div>
      </div>
      <img
        className="plm-cover-4-icon1"
        alt=""
        src="/plm-cover-41@2x.png"
        data-scroll-to="plmCover4Image"
      />
      <div className="calendar-board">
        <div className="calendar-board-child" />
        <div className="calendar">Calendar</div>
        <div className="date">
          <b className="nov">NOV</b>
          <b className="encoding-of-grade">Encoding of grade</b>
          <b className="nov-03">01 Nov - 03 Nov</b>
          <b className="b">01</b>
          <div className="date-child" />
          <b className="upcoming">Upcoming</b>
        </div>
      </div>
      <div className="class-assignment-board">
        <div className="class-assignment-board-child" />
      </div>
      <div className="welcome-board-parent">
        <div className="welcome-board">
          <img className="welcome-board-icon" alt="" src="/welcome-board.svg" />
          <div className="welcome-board1">
            <div className="welcome-teacher">WELCOME, TEACHER!</div>
            <div className="today-is-tuesday-container">
              <span className="today-is-tuesday-container1">
                <span>{`Today is `}</span>
                <span className="tuesday">Tuesday,</span>
                <span>{` `}</span>
                <span className="tuesday">October 2, 2023</span>
              </span>
            </div>
          </div>
        </div>
        <div className="clock-board">
          <img
            className="welcome-board-icon1"
            alt=""
            src="/welcome-board1.svg"
          />
          <div className="clock">
            <Minutes />
            <Hours />
          </div>
        </div>
      </div>
      <img
        className="landing-pagedashboard-item"
        alt=""
        src="/rectangle-5576.svg"
      />
      <FormContainer2 />
      <div className="landing-pagedashboard-inner" />
      <div className="class-code">Class Code</div>
      <div className="course-code">{`Course Code & Section`}</div>
      <div className="course-title">Course Title</div>
      <div className="class-schedule">Class Schedule</div>
      <div className="credits">Credits</div>
      <div className="rectangle-div" />
      <div className="st-semester-sy">1st Semester SY. 2023-2024</div>
      <div className="frame-child">
        <img className="side-bar-menu-child" alt="" src="/rectangle-5565.svg" />
        <img
          className="plm-logo-with-header-1-icon1"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1Image1Click}
        />
        <div className="link6">
          <img className="home-icon" alt="" src="/sign-in-squre1.svg" />
        </div>
        <div className="side-bar-menu-item" />
        <div className="side-bar-menu-inner" />
        <div className="line-div" />
        <div className="landing-pagedashboard-child" />
        <div className="link-parent">
          <div className="link7" onClick={onLinkContainer7Click}>
            <img
              className="systemdashboard-line-icon"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link7" onClick={onLinkContainer8Click}>
            <img
              className="systemdashboard-line-icon"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link7" onClick={onLinkContainer9Click}>
            <img
              className="systemdashboard-line-icon"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link7" onClick={onLinkContainer10Click}>
            <img
              className="folder-search-icon"
              alt=""
              src="/folder-search.svg"
            />
          </div>
          <div className="link7" onClick={onLinkContainer11Click}>
            <img
              className="systemdashboard-line-icon"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link12">
            <img
              className="systemdashboard-line-icon"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link13" onClick={onLinkContainer13Click}>
          <img
            className="systemdashboard-line-icon"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LANDINGPAGEDASHBOARD;
