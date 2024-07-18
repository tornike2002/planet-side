import Link from "next/link";
import PlanetsData from "../data/data.json";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center pt-[22px] pl-8 pr-10 pb-7 border-b border-opacity-[0.2] border-white">
      <h1 className="text-white font-antonio text-28px font-normal leading-normal uppercase">
        THE PLANETS
      </h1>
      <nav
        className="text-white font-spartan text-xs font-bold leading-6 tracking-[1px] 
      uppercase flex gap-8"
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
  );
};

export default Navbar;
