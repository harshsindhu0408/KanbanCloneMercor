import React from "react";

const Menustyle = (props) => {
  return (
    <div className="flex opacity-90 mt-4">
      <div className="w-[250px] ml-4 cursor-pointer items-center flex flex-row gap-6">
        <div className={`w-[8px] h-[8px] rounded-full ${props.color}`}></div>
        <p className="font-Inter text-lg">{props.name}</p>
      </div>
    </div>
  );
};

export default Menustyle;
