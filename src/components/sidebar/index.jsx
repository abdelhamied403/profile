import React from "react";
import SidebarItem from "./item";
import "./sidebar.scss";

const Sidebar = ({ menu, active, setFilter, setCurrentPage }) => {
  return (
    <div className="sidebar hidden md:block">
      <ul>
        {menu.map((item, i) => (
          <li key={i}>
            <SidebarItem
              text={item.text}
              setFilter={() => {
                setFilter(item.filter);
                setCurrentPage(i);
              }}
              active={i === active}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
