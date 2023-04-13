import React from "react";

const SectionTitle = (props) => {
  return (
    <div>
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        {props.title}
      </p>
    </div>
  );
};

export default SectionTitle;
