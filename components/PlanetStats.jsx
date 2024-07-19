const PlanetStats = ({ info, days }) => {
  return (
    <div
      className="border border-solid border-white 
      border-opacity-20 h-[48px] sm:h-[88px] md:h-[128px] flex-shrink-0 w-[327px] sm:w-[144px] md: 
      max-w-[70%] p-3 flex justify-between sm:justify-normal items-center sm:items-start sm:flex-col
      md:w-[18vw]
      "
    >
      <h3 className="font-spartan text-[8px] font-bold leading-4 tracking-[0.727px] uppercase 
      text-white opacity-50">
        {info}
      </h3>

      <h1
        className="text-white font-antonio text-[20px] md:text-[30px] 
      tracking-[-0.9px]  md:tracking-[-1.5px] uppercase"
      >
        {days}
      </h1>
    </div>
  );
};

export default PlanetStats;
