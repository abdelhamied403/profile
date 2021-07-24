import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../data.json";

const ProjectsContainer = (props) => {
  return (
    <div className="projects-grid">
      {projects.map((project, i) => (
        <div className={"project m-4 " + project.filters.join(" ")} key={i}>
          <ProjectCard {...project}></ProjectCard>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;
