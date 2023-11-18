import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PROFILEMODULE.css";

const PROFILEMODULE = () => {
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
    <div className="profile-module">
      <div className="plm-cover-46" />
      <div className="current-address-inputs1">
        <div className="phone-no-input1">
          <div className="phone-no1">Phone No. :</div>
        </div>
        <div className="emergency-contact-input1">
          <div className="emergency-contact1">Emergency Contact:</div>
        </div>
        <div className="zip-code-input1">
          <div className="zip-code1">Zip Code :</div>
        </div>
        <div className="province-city-input1">
          <div className="middle-name">Province-City :</div>
        </div>
        <div className="street-address-input1">
          <div className="street-adress1">Street Adress :</div>
        </div>
      </div>
      <div className="current-address-title1">
        <div className="current-address-title-item" />
        <div className="current-address1">CURRENT ADDRESS</div>
      </div>
      <div className="student-terms-inputs1">
        <div className="second-row-inputs1">
          <div className="registration-code-input1">
            <div className="instructor-code1">Instructor Code :</div>
          </div>
          <div className="block-input1">
            <div className="no1">___ No :</div>
          </div>
          <div className="college-input1">
            <div className="tin1">TIN :</div>
          </div>
        </div>
      </div>
      <div className="student-terms-title1">
        <div className="current-address-title-item" />
        <div className="employment-details1">EMPLOYMENT DETAILS</div>
      </div>
      <div className="personal-details-inputs">
        <div className="third-row-inputs">
          <div className="email-address-input">
            <div className="email-address">Email Address :</div>
          </div>
          <div className="mobile-phone-input">
            <div className="email-address">Mobile Phone :</div>
          </div>
          <div className="civil-status-input">
            <div className="civil-status">Civil Status :</div>
          </div>
          <div className="gender-input">
            <div className="gender">Gender :</div>
          </div>
        </div>
        <div className="second-row-inputs2">
          <div className="country-input">
            <div className="country">Country :</div>
          </div>
          <div className="birth-place-input">
            <div className="birth-place-province">
              Birth Place (Province City) :
            </div>
          </div>
          <div className="birthdate-input">
            <div className="birthdate">Birthdate :</div>
          </div>
          <div className="student-no-input">
            <div className="employee-number">Employee Number</div>
          </div>
        </div>
        <div className="first-row-inputs">
          <div className="maiden-name-input">
            <div className="maiden-name">Maiden Name :</div>
          </div>
          <div className="extension-name-input">
            <div className="extension-name">Extension Name :</div>
          </div>
          <div className="middle-name-input">
            <div className="middle-name">Middle Name :</div>
          </div>
          <div className="first-name-input">
            <div className="first-name">First Name :</div>
          </div>
          <div className="last-name-input">
            <div className="last-name">Last Name :</div>
          </div>
          <div className="last-name-input1">
            <div className="last-name1">LAST NAME</div>
            <div className="street-address">STREET ADDRESS</div>
            <div className="div147">2020 - 12345</div>
            <div className="div148">2020 - 12345</div>
            <div className="div149">2020 - 12345</div>
            <div className="female">FEMALE</div>
            <div className="div150">0912345678</div>
            <div className="div151">0912345678</div>
            <div className="div152">0912345678</div>
            <div className="emailaddressgmailcom">EMAILADDRESS@GMAIL.COM</div>
            <div className="mmddyyyy">MM/DD/YYYY</div>
            <div className="province-city2">PROVINCE CITY</div>
            <div className="province-city3">PROVINCE CITY</div>
            <div className="div153">1008</div>
            <div className="philippines">PHILIPPINES</div>
            <div className="first-name1">FIRST NAME</div>
            <div className="middle-name1">MIDDLE NAME</div>
            <div className="maiden-name1">MAIDEN NAME:</div>
          </div>
        </div>
      </div>
      <div className="personal-details-title1">
        <div className="current-address-title-item" />
        <div className="personal-details1">PERSONAL DETAILS</div>
      </div>
      <div className="side-bar-menu9">
        <img
          className="side-bar-menu-child41"
          alt=""
          src="/rectangle-5565.svg"
        />
        <img
          className="plm-logo-with-header-1-icon10"
          alt=""
          src="/plmlogowithheader-1@2x.png"
          onClick={onPlmLogoWithHeader1ImageClick}
        />
        <div className="link78">
          <img
            className="sign-in-squre-icon10"
            alt=""
            src="/sign-in-squre1.svg"
          />
        </div>
        <div className="side-bar-menu-child42" />
        <div className="side-bar-menu-child43" />
        <div className="side-bar-menu-child44" />
        <div className="side-bar-menu-child45" />
        <div className="link-parent6">
          <div className="link79" onClick={onLinkContainer1Click}>
            <img
              className="systemdashboard-line-icon9"
              alt=""
              src="/systemdashboardline.svg"
            />
          </div>
          <div className="link79" onClick={onLinkContainer2Click}>
            <img
              className="systemdashboard-line-icon9"
              alt=""
              src="/useruserline.svg"
            />
          </div>
          <div className="link79" onClick={onLinkContainer3Click}>
            <img
              className="systemdashboard-line-icon9"
              alt=""
              src="/documentbookletline.svg"
            />
          </div>
          <div className="link79" onClick={onLinkContainer4Click}>
            <img
              className="folder-search-icon9"
              alt=""
              src="/folder-search1.svg"
            />
          </div>
          <div className="link79" onClick={onLinkContainer5Click}>
            <img
              className="systemdashboard-line-icon9"
              alt=""
              src="/documentfileline.svg"
            />
          </div>
          <div className="link84">
            <img
              className="systemdashboard-line-icon9"
              alt=""
              src="/documentfileeditline.svg"
            />
          </div>
        </div>
        <div className="link85" onClick={onLinkContainer7Click}>
          <img
            className="systemdashboard-line-icon9"
            alt=""
            src="/systemlockline.svg"
          />
        </div>
      </div>
      <div className="save-button2">
        <div className="save-button-inner" />
        <div className="edit">EDIT</div>
      </div>
    </div>
  );
};

export default PROFILEMODULE;
