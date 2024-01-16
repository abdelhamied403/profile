import React from "react";
import { EY, GH } from "../components/icon";

import "./ProjectCard.scss";

const ProjectCard = (props) => {
  return (
    <div className="project-card rounded-3xl overflow-hidden relative cursor-pointer w-72 height-80">
      <a href={props.links.view} target="_blank">
        <img className="h-full object-cover" src={props.image} alt="" />
        <div className="overlay absolute bg-overlayGrad w-full h-full z-auto flex">
          <div className="content w-full mt-auto p-5">
            <h5 className="text-center my-4">{props.name}</h5>
            <div className="links flex justify-between">
              {props.links.git ? (
                <a
                  className="flex items-center space-x-2"
                  href={props.links.git}
                  target="_blank"
                >
                  <img className="w-8" src={GH} alt="" />
                  <p>code</p>
                </a>
              ) : (
                <a
                  className="flex items-center space-x-2 hover:line-through"
                  title="my client doesn't want me to share the code "
                >
                  <img className="w-8" src={GH} alt="" />
                  <p>restricted</p>
                </a>
              )}
              <a
                className="flex items-center space-x-2"
                href={props.links.view}
                target="_blank"
              >
                <img className="w-8" src={EY} alt="" />
                <p>view</p>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
