import Image from "next/image";
import data from "../../../data/data.json";
import chevron from "../../../public/assets/icon-source.svg";

const PlanetInfo = ({ params }) => {
  const filtered = data.filter((planet) => planet.name === params.planetsName);
  return (
    <main>
      {filtered.map((planetData) => {
        return (
          <div className="flex justify-around items-center">
            <Image src={planetData.images.planet} alt="Planet Mercury" width={100} height={100} />
            <div>
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
                  <Image
                    className="object-contain"
                    src={chevron}
                    alt="chevron"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default PlanetInfo;
