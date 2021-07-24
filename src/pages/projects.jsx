import React, { useState, useEffect, useRef } from "react";
import HamToggle from "../components/HamToggle";
import Sidebar from "../components/sidebar";
import ProjectsContainer from "../containers/projects";
import Isotope from "isotope-layout";
import { projects } from "../../data.json";
import "./projects.scss";

const Projects = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("*");
  const [menu, setMenu] = useState([]);

  const iso = useRef();

  useEffect(() => {
    // menu setup
    let items = [
      {
        text: "All Projects",
        filter: "*",
      },
    ];
    projects.forEach((project) => {
      project.filters.forEach((f) => {
        // only push not existing
        let exists = items.filter((el) => el.filter === f).length > 0;
        if (!exists) {
          items.push({
            text: f,
            filter: f,
          });
        }
      });
    });
    setMenu(items);

    // isotope setup
    iso.current = new Isotope(".projects-grid", {
      itemSelector: ".project",
      layoutMode: "fitRows",
    });

    // FIX isotope bug
    setTimeout(() => {
      iso.current.arrange({ filter: "*" });
    }, 300);

    return () => {
      iso.current.destroy();
    };
  }, []);

  useEffect(() => {
    filter === "*"
      ? iso.current.arrange({ filter: `*` })
      : iso.current.arrange({ filter: `.${filter}` });
  }, [filter]);

  return (
    <div className="projects">
      <div className="head flex justify-between my-8">
        <div className="title">
          <p className="block md:hidden">
            projects {">"} {menu[currentPage]?.text}
          </p>
          <h1 className="md:ml-60">projects</h1>
        </div>
        <div className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <HamToggle open={menuOpen} />
        </div>
      </div>
      <div className="flex relative">
        <div
          className={
            "sidebar-container sticky top-20" + (menuOpen ? " show" : "")
          }
        >
          <Sidebar
            menu={menu}
            active={currentPage}
            setCurrentPage={setCurrentPage}
            setFilter={setFilter}
          />
        </div>
        <div className="test w-full">
          <ProjectsContainer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
