import React from "react";

const planetStats = ({ info, days }) => {
  return (
    <div className="border border-solid border-white border-opacity-20 pt-5 pl-6 pb-7 pr-[108px]">
      <h3
        className="font-spartan text-xs font-bold leading-6 tracking-[1px] uppercase
     text-white opacity-50"
      >
        {info}
      </h3>
      <h1 className="text-white font-antonio text-[40px] tracking-[-1.5px] uppercase">
        {days}
      </h1>
    </div>
  );
};

export default planetStats;
