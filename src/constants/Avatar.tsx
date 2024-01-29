import React from "react";
import "./avatar.css";

const Avatar: React.FC = () => {
  return (
    <div className="layer-one-right">
      <div className="images-wrapper">
        <img
          src="/images/thumbnail1.svg"
          alt="avatar"
          style={{ backgroundColor: "#FF9C66" }}
        />
        <img
          src="/images/thumbnail2.svg"
          alt="avatar"
          style={{ backgroundColor: "#D6BBFB" }}
        />
        <img
          src="/images/thumbnail3.svg"
          alt="avatar"
          style={{ backgroundColor: "#ACDC79" }}
        />
        <img
          src="/images/thumbnail4.svg"
          alt="avatar"
          style={{ backgroundColor: "#B3B8DB" }}
        />
        <img
          src="/images/thumbnail5.svg"
          alt="avatar"
          style={{ backgroundColor: "#FEC84B" }}
        />
        <img
          src="/images/thumbnail6.svg"
          alt="avatar"
          style={{ backgroundColor: "#FEA3B4" }}
        />
      </div>
      <div className="icon-wrapper">
        <span className="icon-circle">
          <img src="/images/microphone.svg" alt="avatar" width="24px" />
        </span>
        <span className="icon-circle">
          <img src="/images/video-camera.svg" alt="avatar" />
        </span>
        <span className="icon-circle">
          <img src="/images/monitor.svg" alt="avatar" />
        </span>
        <span className="icon-circle">
          <img src="/images/face-smile.svg" alt="avatar" />
        </span>
        <span className="icon-circle">
          <img src="/images/message-text-circle.svg" alt="avatar" />
        </span>
        <span className="icon-circle">
          <img src="/images/settings.svg" alt="avatar" />
        </span>
      </div>
    </div>
  );
};

export default Avatar;
