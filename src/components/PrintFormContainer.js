import ImportIcon from "./ImportIcon";
import MessageAltDuotoneLine from "./MessageAltDuotoneLine";
import "./PrintFormContainer.css";

const PrintFormContainer = () => {
  return (
    <div className="print-button-parent">
      <div className="download-button">
        <div className="print-button-child1" />
        <div className="print3">{`PRINT `}</div>
        <img className="print-icon3" alt="" src="/print-icon1.svg" />
      </div>
      <div className="download-button">
        <div className="download-button-child" />
        <div className="download">DOWNLOAD</div>
        <ImportIcon />
      </div>
      <div className="submit-to-email1">
        <div className="submit-to-email-item" />
        <div className="download">SUBMIT TO EMAIL</div>
        <MessageAltDuotoneLine dimensions="/vector-3.svg" />
      </div>
    </div>
  );
};

export default PrintFormContainer;
