import React from "react";
import "./sidebar-item.scss";

const SidebarItem = ({ text, setFilter, active }) => {
  return (
    <div className="sidebar-item">
      <div
        className={
          "item flex items-center cursor-pointer" + (active ? " active" : "")
        }
        onClick={() => {
          setFilter();
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default SidebarItem;
