
const PlanetStats = ({ info, days }) => {
  return (
    <div
      className="border border-solid border-white 
    border-opacity-20  max-w-full h-[88px] p-7"
    >
      <h3 className="font-spartan text-[8px] font-bold leading-4 tracking-[0.727px] uppercase text-white opacity-50">
        {info}
      </h3>

      <h1
        className="text-white font-antonio text-[24px] md:text-[40px] 
      tracking-[-0.9px] md:tracking-[-1.5px] uppercase"
      >
        {days}
      </h1>
    </div>
  );
};

export default PlanetStats;
