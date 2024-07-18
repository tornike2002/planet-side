import Image from "next/image";
import data from "../../../data/data.json";
import chevron from "../../../public/assets/icon-source.svg";

const PlanetInfo = ({ params }) => {
  const filtered = data.filter((planet) => planet.name === params.planetsName);
  return (
    <main>
      {filtered.map((planetData) => {
        return (
          <div
            key={planetData.name}
            className="flex justify-around items-center"
          >
            <Image
              src={planetData.images.planet}
              alt="Planet Mercury"
              width={290}
              height={290}
            />
            <div>
              <h1 className="text-[80px] uppercase text-white font-antonio">
                {planetData.name}
              </h1>
              <p className="max-w-[350px] text-white font-spartan text-sm leading-6">
                {planetData.overview.content}
              </p>
              <div className="flex gap-2 items-center">
                <p className="font-spartan text-sm font-bold leading-6 text-opacity-[0.5] text-white ">
                  Source:
                  <a
                    className="pl-2 underline"
                    href={planetData.overview.source}
                    target="_blank"
                  >
                    Wikipedia
                  </a>
                </p>
                <Image className="object-contain" src={chevron} alt="chevron" />
              </div>
              <div className="flex flex-col text-white">
                <button
                  className="font-spartan text-xs font-bold leading-6 tracking-[2.571px] uppercase
                 border border-solid border-white border-opacity-20 pt-4 pb-3 text-left"
                >
                  <span className="opacity-50 pl-7 pr-5">01</span> OVERVIEW
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default PlanetInfo;
