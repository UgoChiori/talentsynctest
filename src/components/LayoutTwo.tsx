import React from "react";
import "./layouttwo.css";

const LayoutTwo: React.FC = () => {
  return (
    <div className="layout-two-wrapper">
      <div className="texts">
        <p className="clear-link-text">The ClearLink Advantage</p>
        <h1>Why choose ClearLink</h1>
        <p className="clearlink-phrase">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className="card-wrapper">
        <div className="cards">
          <div className="card-one">
            <div className="icon-circle">
            <img src="/images/video-camera.svg" alt="video-camera-icon" />
            </div>
           
            <h2>Crystal-clear HD video</h2>
            <p>
            No more pixelation or blurriness – just stunning, lifelike clarity
            that brings your team closer in meetings.
            </p>
          </div>
          <div className="card-one">
            <div className="icon-circle">
            <img src="/images/recording.svg" alt="Recording icon" />
            </div>
            <h2>Noise-canceling icon</h2>
            <p>
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </p>
          </div>
          <div className="card-one">
           <div className="icon-circle">
           <img src="/images/calendar.svg" alt="calendar-icon" />
           </div>
            <h2>Scheduling made easy</h2>
            <p>
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </p>
          </div>
          <div className="card-one">
           <div className="icon-circle">
           <img src="/images/lock.svg" alt="chat-icon" />
           </div>
            <h2>Bank-grade security</h2>
            <p>
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </p>
          </div>
        </div>
        <div className="avatar-wrapper">
          <img src="/images/collage.svg" alt="collage" />
        </div>
      </div>
    </div>
  );
};

export default LayoutTwo;
