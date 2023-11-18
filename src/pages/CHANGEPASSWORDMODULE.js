import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CHANGEPASSWORDMODULE.css";

const CHANGEPASSWORDMODULE = () => {
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
    <div className="change-password-module">
      <div className="change-password-module-child" />
      <img className="plm-cover-5-icon1" alt="" src="/plm-cover-41@2x.png" />
      <div className="change-password-module-item" />
      <div className="change-password">CHANGE PASSWORD</div>
      <div className="password-must-contain">Password must contain:</div>
      <div className="current-password">Current Password:</div>
      <div className="forgot-password">Forgot Password?</div>
      <div className="new-password">New Password:</div>
      <div className="confirm-new-password">Confirm New Password:</div>
      <div className="frame-parent">
        <div className="done-ring-round-duotone-parent">
          <img
            className="done-ring-round-duotone-icon"
            alt=""
            src="/done-ring-round-duotone.svg"
          />
          <div className="at-least-6">At least 6 characters</div>
        </div>
        <div className="done-ring-round-duotone-group">
          <img
            className="done-ring-round-duotone-icon"
            alt=""
            src="/done-ring-round-duotone.svg"
          />
          <div className="at-least-6">At least 1 upper case letter (A-Z)</div>
        </div>
        <div className="done-ring-round-duotone-container">
          <img
            className="done-ring-round-duotone-icon"
            alt=""
            src="/done-ring-round-duotone.svg"
          />
          <div className="at-least-6">At least 1 lower case letter (a-z)</div>
        </div>
        <div className="done-ring-round-duotone-container">
          <img
            className="done-ring-round-duotone-icon"
            alt=""
            src="/done-ring-round-duotone.svg"
          />
          <div className="at-least-6">At least 1 number (0-9)</div>
        </div>
      </div>
      <div className="current-password1">
        <div className="current-password-child" />
        <img className="lock-duotone-icon" alt="" src="/lock-duotone.svg" />
        <div className="current-password2">Current Password</div>
      </div>
      <div className="new-password1">
        <div className="current-password-child" />
        <img className="lock-duotone-icon" alt="" src="/lock-duotone1.svg" />
        <div className="new-password2">New Password</div>
      </div>
      <div className="confirm-new-password1">
        <div className="current-password-child" />
        <img className="lock-duotone-icon" alt="" src="/lock-duotone1.svg" />
        <div className="new-password2">Confirm New Password</div>
      </div>
      <div className="save-button1">
        <div className="save-button-item" />
        <div className="save1">SAVE</div>
      </div>
      <div className="cancel-button1">
        <div className="cancel1">CANCEL</div>
      </div>
      <div className="side-bar-menu6">
        <img
          className="side-bar-menu-child26"
          alt=""
          src="/rectangle-5565.svg"
        />
        <img
          className="plm-logo-with-header-1-icon7"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1ImageClick}
        />
        <div className="link54">
          <img
            className="sign-in-squre-icon7"
            alt=""
            src="/sign-in-squre1.svg"
          />
        </div>
        <div className="side-bar-menu-child27" />
        <div className="side-bar-menu-child28" />
        <div className="side-bar-menu-child29" />
        <div className="side-bar-menu-child30" />
        <div className="link-parent3">
          <div className="link55" onClick={onLinkContainer1Click}>
            <img
              className="systemdashboard-line-icon6"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link55" onClick={onLinkContainer2Click}>
            <img
              className="systemdashboard-line-icon6"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link55" onClick={onLinkContainer3Click}>
            <img
              className="systemdashboard-line-icon6"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link55" onClick={onLinkContainer4Click}>
            <img
              className="folder-search-icon6"
              alt=""
              src="/folder-search1.svg"
            />
          </div>
          <div className="link55" onClick={onLinkContainer5Click}>
            <img
              className="systemdashboard-line-icon6"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link60">
            <img
              className="systemdashboard-line-icon6"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link61" onClick={onLinkContainer7Click}>
          <img
            className="systemdashboard-line-icon6"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
      <div className="plm-cover-43" />
      <div className="change-password-module-inner" />
    </div>
  );
};

export default CHANGEPASSWORDMODULE;
