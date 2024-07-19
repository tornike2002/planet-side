const PlanetButton = ({ countNumber, buttonName, onClick, isActive }) => {
  return (
    <button
      type="button"
      className={`font-spartan text-xs font-bold leading-6 tracking-[2.571px] uppercase
   border border-solid border-white pr-2 md:pr-5 border-opacity-20 pt-4 pb-3 text-left ${
     isActive ? "bg-lightbg" : ""
   } }`}
      onClick={onClick}
    >
      <span className="opacity-50 pl-3 md:pl-7 md:pr-5">{countNumber}</span>{" "}
      {buttonName}
    </button>
  );
};

export default PlanetButton;
