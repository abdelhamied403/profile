import React from "react";

const SocialIcon = ({ to, icon }) => {
  return (
    <div className="social-icon">
      <a href={to}>
        <img className="w-8" src={icon} alt="" />
      </a>
    </div>
  );
};

export default SocialIcon;
