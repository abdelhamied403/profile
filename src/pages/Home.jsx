import React, { useEffect, useState } from "react";

import SocialIcon from "../components/socialIcon";
import { EM, GH, LI, WA } from "../components/icon";
import me from "../assets/me.png";
import Projects from "./projects";

const Home = (props) => {
  const socials = [
    {
      icon: EM,
      to: "mailto:Abdelhamied403@gmail.com",
    },
    {
      icon: GH,
      to: "https://github.com/abdelhamied403",
    },
    {
      icon: LI,
      to: "https://www.linkedin.com/in/abdelhamied-mostafa/",
    },
    {
      icon: WA,
      to: "tel:+201060126809",
    },
  ];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <div className="page">
      <div className="home">
        <section className="w-full h-screen px-4 sm:px-12 xl:px-24">
          <div className="flex justify-between relative">
            <div className="about flex flex-col py-12 xl:py-20">
              <div className="content flex flex-col mt-24">
                <div className="mb-2">
                  <h3 className="font-extralight">My name is</h3>
                </div>
                <h1>Abdelhamied mostafa</h1>

                <div className="my-4">
                  <p className="">
                    I build awesome things for the web from just an idea to a
                    whole production ready application
                  </p>
                </div>
              </div>

              <div className="social-icons flex space-x-8 mt-auto">
                {socials.map((social, i) => (
                  <SocialIcon {...social} key={i} />
                ))}
              </div>
            </div>
            <div className="me hidden xl:flex relative">
              <img className="mt-auto h-screen" src={me} alt="" />
              <span
                className={
                  "overlay bg-meGrad absolute bottom-0 w-full h-24 transition-all " +
                  (scrolled ? "opacity-100" : "opacity-0")
                }
              />
            </div>
          </div>
        </section>
        <section className="px-4 sm:px-12 xl:px-24 my-12">
          <Projects />
        </section>
        <section className="px-4 sm:px-12 xl:px-24 mt-12 flex">
          <div className="content m-auto flex flex-col">
            <h1 className="text-center my-4">Let’s Talk</h1>
            <h5 className="text-center my-2 font-light">
              I would love to hear from you
            </h5>
            <div className="contact-info text-center my-4 font-light flex justify-between">
              <p className="">+(20)1060126809</p>
              <p className="">Abdelhamied403@gmail.com</p>
            </div>
            <div className="social-icons flex justify-center space-x-8 my-12">
              {socials.map((social, i) => (
                <SocialIcon {...social} key={i} />
              ))}
            </div>
            <button
              className="m-auto capitalize bg-gray-800 border-2 border-gray-600 w-full py-4 hover:bg-gray-900 font-bold text-xl tracking-wider"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1mnJQF8ZHJy51RWBfAqpsLhIJAe0emqrh/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              download resume
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
