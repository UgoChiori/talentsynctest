// import React from "react";
// import "./layoutoneleft.css";

// const LayoutOneLeft: React.FC = () => {
//   return (
//     <div>
//       <div className="layout-one-left-wrapper">
//         <div className="header-text">
//           <h1 className="layeroneleft-header">
//             Uniting the world, one video call at a time
//           </h1>
//           <p className="layeroneleft-text">
//             Experience the future of communication with ClearLink – where
//             crystal-clear video conferencing meets unparalleled simplicity.
//           </p>
//         </div>
//         <div className="layoutoneleft-btnlink">
//           <button id="nav-signup">Start your free trial</button>
//           <a href="" className="layoutoneleft-link">
//             <img src="/images/robot.svg" alt="robot icon" />
//             <span>Discover AI assistant</span>
//           </a>
//         </div>
//         <div className="layeroneleft-thumbnailwrapper">
//           <div className="avatars">
//           <img src="/images/avatargroup.svg" alt="avatars" />
//           </div>
//         <div className="ratings" >
//          <div className="rating-container">

// <img src="/images/star-icon.svg" alt="rating stars" />
// <img src="/images/star-icon.svg" alt="rating stars" />
// <img src="/images/star-icon.svg" alt="rating stars" />
// <img src="/images/star-icon.svg" alt="rating stars" />
// <img src="/images/star-icon.svg" alt="rating stars" />
// <p>5.0</p>
// </div> 
// <p>from 3,000+ reviews</p>
//         </div>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default LayoutOneLeft;
import React from "react";
import "./layoutoneleft.css";

const LayoutOneLeft: React.FC = () => {
  return (
   
      <div className="layout-one-left-wrapper">
        <div className="header-text">
          <h1 className="layeroneleft-header">
            Uniting the world, one video call at a time
          </h1>
          <p className="layeroneleft-text">
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
        </div>
        <div className="layoutoneleft-btnlink">
          <button id="nav-signup">Start your free trial</button>
          <a href="" className="layoutoneleft-link">
            <img src="/images/robot.svg" alt="robot icon" />
            <span>Discover AI assistant</span>
          </a>
        </div>
        <div className="layeroneleft-thumbnailwrapper">
          <div className="avatars">
            <img src="/images/avatargroup.svg" alt="avatars" />
          </div>
          <div className="ratings">
            <div className="rating-container">
              <img src="/images/star-icon.svg" alt="rating stars" />
              <img src="/images/star-icon.svg" alt="rating stars" />
              <img src="/images/star-icon.svg" alt="rating stars" />
              <img src="/images/star-icon.svg" alt="rating stars" />
              <img src="/images/star-icon.svg" alt="rating stars" />
              <p>5.0</p>
            </div>
            <p>from 3,000+ reviews</p>
          </div>
        </div>
      </div>

  );
};

export default LayoutOneLeft;
