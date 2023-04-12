import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          neque illo consequatur, quasi alias quia repudiandae aliquam vitae
          beatae explicabo nesciunt illum ea et obcaecati temporibus expedita
          deleniti consectetur minima optio ut adipisci. Temporibus, quibusdam
          porro! Possimus repellendus laudantium corporis illum adipisci fugiat,
          accusantium obcaecati totam cupiditate cum tempore labore.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magnam
          exercitationem maiores nam labore deleniti porro, unde voluptatum
          pariatur repudiandae iste dolorem modi quis amet sint ipsa soluta
          commodi facilis repellat nostrum minus quibusdam asperiores vero
          molestiae. Dolores similique tempore repellendus eum quae velit
          quidem, natus alias, sunt expedita neque.
        </p>
      </div>
    </div>
  );
};

export default About;
