import React from "react";
import meritImage from "../assets/portfolio/merit-image.png";
import fullMeritImage from "../assets/portfolio/merit-image-full.png";
import shydaImage from "../assets/portfolio/shyda-image.png";
import ventImage from "../assets/portfolio/vent-img.png";
import recipeApp from "../assets/portfolio/recipe-app-design.jpg";
import SectionTitle from "../Components/SectionTitle";
import { FiExternalLink } from "react-icons/fi";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: recipeApp,
      title: "Recipe Sharing App | Design & Development",
      shortdesc:
        "Recipe app design was created in Figma for prototyping and built using React and TailwindCSS for a modern and responsive user interface, showcasing my skills in UI/UX design and front-end development.",
      fulldesc:
        "I designed this recipe app in Figma to prototype an intuitive and visually appealing user interface. The app features functionalities like recipe browsing, user profiles, and favorite recipes, all aimed at enhancing the user experience. Using React, I implemented dynamic components and state management to ensure smooth navigation and interactivity. TailwindCSS was utilized for rapid styling and responsive design, aligning the app's visuals with modern web design standards. This project highlights my proficiency in creating user-centered designs and efficiently transforming them into functional web applications. ",
      tools: ["Figma,", "React,", "TailwindCSS,"],
      link: "https://www.figma.com/proto/qoOUAVgr5F2UeWE7NSLKNj/Recipe-Sharing-App?node-id=12-371&p=f&t=N4stMQQuKtpT1ish-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    },
    {
      id: 2,
      src: ventImage,
      title: "Redesigned Laravel Website",
      shortdesc:
        "Transformed online presence with modern design, captivating animations, and a focus on the product benefits that matter most.",
      fulldesc:
        "The website redesign focuses on transforming an outdated design into a modern, dynamic experience. It incorporates engaging animations and seamless video integration to capture user attention and enhance storytelling. Emphasis is placed on showcasing the product benefits through visually appealing layouts, interactive elements, and clear calls-to-action, providing an intuitive and immersive browsing experience. The result is a fresh, user-centered design that not only looks sleek but also effectively communicates the value of the products. ",
      tools: [
        "Laravel,",
        "HTML,",
        "CSS/SCSS,",
        "JavaScript & jQuery,",
        "PHP,",
        "Figma",
      ],
      link: "https://ventrac.com/",
    },
    {
      id: 3,
      src: meritImage,
      fullSrc: fullMeritImage,
      title: "Custom WordPress Theme",
      shortdesc:
        "Homepage for a custom WordPress theme featuring new branding, animations, automated content updates.",
      fulldesc:
        "This is an example of a custom built WordPress theme homepage. My role was coding this page based on a basic blueprint model. I was able to build the structure, apply the necessary styles, as well as the animations throughout in a way that flows as the user scrolls. The goal of this page was create something that stood out to potential clients instead of a 'cookie-cutter' approach. I was able to create the page in a responsive manner and utilize third-party libraries where necessary to ensure the page looks and functions great on any device.",
      tools: [
        "WordPress,",
        "HTML,",
        "CSS/SCSS,",
        "JavaScript & jQuery,",
        "PHP",
        "Adobe Photoshop,",
        "Adobe XD",
      ],
      link: "",
    },
    {
      id: 4,
      src: shydaImage,
      title: "E-Commerce Website Design & Development",
      shortdesc:
        "E-Commerce website that I was able to build to match the client approved design.",
      fulldesc:
        "This project started with an e-commerce starter theme that I expanded and customized to align with the client-approved design. It involved importing products, refining pages for consistency, and handling backend tasks to complete the site. Additionally, I implemented a custom-built age verification popup to ensure visitors meet the age requirement before accessing the content.",
      tools: [
        "BigCommerce,",
        "HTML,",
        "CSS/SCSS,",
        "JavaScript & jQuery,",
        "PHP,",
        "Adobe XD",
      ],
      link: "https://shydasoutdoorcenter.com",
    },
  ];

  const moreProjects = [
    {
      id: 3,
      title: "Custom WordPress Theme",
      link: "https://linkfound.org",
      industry: "Nonprofit",
      tools: [
        "WordPress,",
        "HTML,",
        "CSS/SCSS,",
        "JavaScript & jQuery,",
        "PHP,",
        "Adobe Photoshop",
      ],
    },
    {
      id: 2,
      title: "Custom WordPress Theme",
      link: "https://vigilix.com",
      industry: "Point-of-Sale",
      tools: [
        "WordPress,",
        "HTML,",
        "CSS/SCSS,",
        "JavaScript & jQuery,",
        "PHP,",
        "Adobe Photoshop",
      ],
    },
    {
      id: 1,
      title: "Custom WordPress Theme",
      link: "https://www.youngstarconnect.com/",
      industry: "Public Service",
      tools: [
        "WordPress,",
        "HTML,",
        "CSS/SCSS,",
        "JavaScript & jQuery,",
        "PHP,",
        "Adobe Photoshop",
      ],
    },
    {
      id: 4,
      title: "WordPress Website",
      link: "https://sparklycleaningnashville.com/",
      industry: "Services",
      tools: [
        "WordPress,",
        "HTML,",
        "CSS,",
        "JavaScript & jQuery,",
        "PHP,",
        "Adobe Photoshop",
      ],
    },
    {
      id: 5,
      title: "Website Brand Refresh",
      link: "https://betterbricks.com/",
      industry: "Services",
      tools: [
        "CraftCMS,",
        "HTML,",
        "CSS,",
        "JavaScript & jQuery,",
        "PHP,",
        "Adobe Photoshop",
      ],
    },
  ];

  return (
    <div
      name="portfolio"
      className="pt-24 sm:pt-16 bg-gradient-to-b from-gray-800 to-gray-600 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <SectionTitle title={"Websites I've Built"} />
          <p className="pt-8">Check out some of my work below.</p>
        </div>
        <div className="px-12 sm:px-0">
          {portfolios.map((portfolio, index) => {
            return (
              <div
                key={portfolio.index}
                className="flex flex-col items-center md:flex-row w-full py-8 my-8 "
              >
                <div className="basis-1/2 md:basis-3/4">
                  <img
                    src={portfolio.src}
                    alt=""
                    className="rounded-md shadow-xl shadow-gray-850"
                  />
                </div>
                <div className="basis-1/2 md:basis-1/4 flex justify-center items-center overflow-visible">
                  <div className="text-right md:px-4">
                    <h4 className="mb-0 text-sm mt-4 md:mt-0 text-sky-300">
                      Featured Project
                    </h4>
                    <h2 className="pb-2 mb-2 text-4xl font-bold">
                      {portfolio.title}
                    </h2>
                    <div className="my-2 bg-gray-500 py-5 px-8 mb-4 md:-ml-20 rounded-md md:min-w-400 bg-gradient-to-r from-cyan-500 to-blue-500">
                      <p>{portfolio.shortdesc}</p>
                    </div>
                    <div className="text-xs">
                      {portfolio.tools.map((item, index) => {
                        return (
                          <span className="inline-block pr-1">{item}</span>
                        );
                      })}
                    </div>
                    <div className="pt-4">
                      <a
                        href={
                          portfolio.link ? portfolio.link : portfolio.fullSrc
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-row justify-center items-center border py-2 px-5 rounded-md hover:bg-gray-700 hover:text-gray-200 duration-500 cursor-pointer hover:shadow-xl hover:shadow-gray-850"
                      >
                        View Project <FiExternalLink className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <SectionTitle title={"More notable projects..."} />
          <p className="pt-8">Check out some of my work below.</p>
        </div>
        <div className="px-12 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {moreProjects.map((project, index) => {
              return (
                <div
                  key={project.index}
                  className="flex flex-col w-full py-8 px-4 border-2 border-white 0 mt-8 rounded-md bg-gray-500 shadow-xl shadow-gray-700"
                >
                  <div className="">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <h5 className="text-md mb-2 text-sky-300">
                        Industry: {project.industry}
                      </h5>
                      <div className="text-xs">
                        {project.tools.map((item, index) => {
                          return (
                            <span className="inline-block pr-1 text-gray-300">
                              {item}
                            </span>
                          );
                        })}
                      </div>
                      <a
                        href={project.link ? project.link : project.fullSrc}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-row justify-center items-center border py-2 px-5 mt-3 text-sm rounded-md cursor-pointer hover:bg-gray-700 duration-500  hover:shadow-xl hover:shadow-gray-850"
                      >
                        View Website <FiExternalLink className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
