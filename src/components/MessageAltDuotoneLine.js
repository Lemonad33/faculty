import { useMemo } from "react";
import "./MessageAltDuotoneLine.css";

const MessageAltDuotoneLine = ({
  dimensions,
  propWidth,
  propHeight,
  propHeight1,
  propWidth1,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propHeight2,
  propWidth2,
  propTop1,
  propRight1,
  propBottom1,
  propLeft1,
}) => {
  const messageAltDuotoneLineStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propHeight1, propWidth1, propTop, propRight, propBottom, propLeft]);

  const vectorIconStyle = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth2,
      top: propTop1,
      right: propRight1,
      bottom: propBottom1,
      left: propLeft1,
    };
  }, [propHeight2, propWidth2, propTop1, propRight1, propBottom1, propLeft1]);

  return (
    <div
      className="message-alt-duotone-line"
      style={messageAltDuotoneLineStyle}
    >
      <div
        className="message-alt-duotone-line-child"
        style={rectangleDivStyle}
      />
      <img
        className="message-alt-duotone-line-item"
        alt=""
        src={dimensions}
        style={vectorIconStyle}
      />
    </div>
  );
};

export default MessageAltDuotoneLine;
