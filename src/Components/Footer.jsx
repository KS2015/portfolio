import React from "react";
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="text-center text-gray-400 text-sm py-4">
        <p className="flex justify-center text-base">
          Build by Kyle Sampson with{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="no-referrer"
            className="px-2"
          >
            <DiReact size={24} fill={"#087EA4"} />
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="no-referrer"
            className="px-2"
          >
            <SiTailwindcss size={24} fill={"#38BDF8"} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
