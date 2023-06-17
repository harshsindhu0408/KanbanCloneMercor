import React from "react";

const TabStyle = (props) => {
  return (
    <div className="flex opacity-90 mt-4">
      <div className="w-[150px] cursor-pointer text-lg flex flex-row gap-6">
        <div>{props.icons}</div>
        <div className="font-Inter">{props.names}</div>
      </div>
    </div>
  );
};

export default TabStyle;
