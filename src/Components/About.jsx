import React from "react";
import SectionTitle from "../Components/SectionTitle";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-600 to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <SectionTitle title={"About Me"} />
        </div>
        <p className="text-xl">
          Hello! I am a Front-End Web Developer with over 9 years of experience
          with a demonstrated history of working in the marketing and
          advertising industry. Skilled in WordPress Theme development, HTML,
          CSS, SCSS, Tailwind CSS, JavaScript & jQuery, PHP, Responsive Web
          Design, Shopify Theme Customization, Web Frameworks (Bootstrap,
          Foundation), Email Marketing (Pardot, Hubspot, Vbout), and SEO tools
          (Google Analytics, Yoast SEO, Google PageSpeed Insights).
        </p>
        <p className="pt-5 text-xl">
          I also have experience successfully launching and maintaining websites
          using platforms such as DigitalOcean, MediaTemple, Pantheon, and WP
          Engine as well as analytics and data tools like Google Analytics and
          Data Dog, that ensure high performance and visibility for the websites
          I create.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
