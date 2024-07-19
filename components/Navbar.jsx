import Link from "next/link";
import PlanetsData from "../data/data.json";
import Burgermenu from "./Burgermenu.jsx";
const Navbar = () => {
  return (
    <>
      <header
        className="sm:flex sm:flex-col gap-5  sm:justify-center sm:items-center pt-[22px] pl-5 pr-5 pb-7 border-b border-opacity-[0.2]
     border-white lg:flex-row md:justify-between hidden"
      >
        <h1 className="text-white font-antonio text-[28px] font-normal leading-normal uppercase">
          THE PLANETS
        </h1>

        <nav
          className="hidden text-white font-spartan text-xs font-bold leading-6 tracking-[1px] 
      uppercase sm:flex gap-[30px]"
        >
          {PlanetsData.map((planets) => {
            return (
              <Link key={planets.name} href={`/${planets.name}`}>
                {planets.name}
              </Link>
            );
          })}
        </nav>
      </header>
      <div className="sm:hidden">
        <Burgermenu />
      </div>
    </>
  );
};

export default Navbar;
