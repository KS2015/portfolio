import React from "react";
import { FaLinkedin } from "react-icons/fa";
import resumeLink from "../assets/portfolio/Sampson-Resume.pdf";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kyle-sampson-96a247121/",
      style: "rounded-md",
    },
    {
      id: 2,
      child: (
        <>
          Resume <FaFilePdf size={30} />
        </>
      ),
      href: resumeLink,
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md hover:ml-[-10px] duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              rel="noreferrer"
              target="_blank"
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
