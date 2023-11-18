import { useCallback } from "react";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";
import "./EDITPROFILEMODULE.css";

const EDITPROFILEMODULE = () => {
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
    navigate("/edit-profile-module");
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
    <div className="edit-profile-module">
      <div className="plm-cover-4" />
      <div className="current-address-inputs">
        <div className="phone-no-input">
          <div className="phone-no-input-child" />
          <div className="phone-no">Phone No. :</div>
        </div>
        <div className="emergency-contact-input">
          <div className="phone-no-input-child" />
          <div className="emergency-contact">Emergency Contact:</div>
        </div>
        <div className="zip-code-input">
          <div className="zip-code-input-child" />
          <div className="zip-code">Zip Code :</div>
        </div>
        <div className="province-city-input">
          <div className="phone-no-input-child" />
          <div className="province-city">Province-City :</div>
        </div>
        <div className="street-address-input">
          <div className="street-address-input-child" />
          <div className="street-adress">Street Adress :</div>
        </div>
      </div>
      <div className="current-address-title">
        <div className="current-address-title-child" />
        <div className="current-address">CURRENT ADDRESS</div>
      </div>
      <div className="student-terms-inputs">
        <div className="second-row-inputs">
          <div className="registration-code-input">
            <div className="registration-code-input-child" />
            <img className="arrow-icon" alt="" src="/arrow.svg" />
            <div className="instructor-code">Instructor Code :</div>
          </div>
          <div className="block-input">
            <div className="block-input-child" />
            <img className="arrow-icon1" alt="" src="/arrow1.svg" />
            <div className="no">___ No :</div>
          </div>
          <div className="college-input">
            <div className="college-input-child" />
            <img className="arrow-icon2" alt="" src="/arrow2.svg" />
            <div className="tin">TIN :</div>
          </div>
        </div>
      </div>
      <div className="student-terms-title">
        <div className="current-address-title-child" />
        <div className="employment-details">EMPLOYMENT DETAILS</div>
      </div>
      <FormContainer />
      <div className="personal-details-title">
        <div className="current-address-title-child" />
        <div className="personal-details">PERSONAL DETAILS</div>
      </div>
      <div className="side-bar-menu1">
        <img className="rectangle-icon" alt="" src="/rectangle-5565.svg" />
        <img
          className="plm-logo-with-header-1-icon2"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1ImageClick}
        />
        <div className="link14">
          <img
            className="sign-in-squre-icon2"
            alt=""
            src="/sign-in-squre1.svg"
          />
        </div>
        <div className="side-bar-menu-child2" />
        <div className="side-bar-menu-child3" />
        <div className="side-bar-menu-child4" />
        <div className="side-bar-menu-child5" />
        <div className="link-group">
          <div className="link15" onClick={onLinkContainer1Click}>
            <img
              className="systemdashboard-line-icon1"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link15" onClick={onLinkContainer2Click}>
            <img
              className="systemdashboard-line-icon1"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link15" onClick={onLinkContainer3Click}>
            <img
              className="systemdashboard-line-icon1"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link15" onClick={onLinkContainer4Click}>
            <img
              className="folder-search-icon1"
              alt=""
              src="/folder-search1.svg"
            />
          </div>
          <div className="link15" onClick={onLinkContainer5Click}>
            <img
              className="systemdashboard-line-icon1"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link20">
            <img
              className="systemdashboard-line-icon1"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link21" onClick={onLinkContainer7Click}>
          <img
            className="systemdashboard-line-icon1"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
      <div className="save-button">
        <div className="save-button-child" />
        <div className="save">SAVE</div>
      </div>
      <div className="cancel-button">
        <div className="cancel">CANCEL</div>
      </div>
    </div>
  );
};

export default EDITPROFILEMODULE;
