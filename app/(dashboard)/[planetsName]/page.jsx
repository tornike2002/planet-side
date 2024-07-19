"use client";
import { useState } from "react";
import Image from "next/image";
import data from "../../../data/data.json";
import chevron from "../../../public/assets/icon-source.svg";
import PlanetButton from "../../../components/PlanetButton.jsx";
import PlanetStats from "../../../components/PlanetStats.jsx";

const PlanetInfo = ({ params }) => {
  const [planetAsset, setPlanetAsset] = useState("overview");
  const [activeButton, setActiveButton] = useState("overview");

  const filtered = data.filter((planet) => planet.name === params.planetsName);
  console.log(planetAsset);
  return (
    <main className="h-full">
      {filtered.map((planetData) => {
        return (
          <div
            key={planetData.name}
            className="flex justify-around items-center flex-col"
          >
            <div className="flex flex-col  md:flex-row justify-around items-center w-full h-full">
              <div className="relative mt-36 mb-36">
                {planetAsset === "overview" ? (
                  <Image
                    src={planetData.images.planet}
                    alt="Planet"
                    width={111}
                    height={111}
                  />
                ) : null}
                {planetAsset === "internal" ? (
                  <Image
                    src={planetData.images.internal}
                    alt="Planet Mercury"
                    width={111}
                    height={111}
                  />
                ) : null}

                {planetAsset === "surface" ? (
                  <Image
                    src={planetData.images.planet}
                    alt="Planet Mercury"
                    width={111}
                    height={111}
                  />
                ) : null}
                {planetAsset === "surface" ? (
                  <Image
                    className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2"
                    src={planetData.images.geology}
                    alt="Planet Mercury"
                    width={158}
                    height={165}
                  />
                ) : null}
              </div>
              <div
                className="flex flex-col  md:items-start items-center md:flex-col justify-center 
              gap-16 md:gap-1 "
              >
                <div>
                  <h1
                    className="text-center text-[48px] md:text-[80px] md:mt-16 uppercase text-white 
                  font-antonio pb-5 md:pb-0"
                  >
                    {planetData.name}
                  </h1>
                  <p className="text-center max-w-[339px] md:max-w-[350px] text-white font-spartan text-[11px] leading-[22px] md:text-sm md:leading-6">
                    {planetData.overview.content}
                  </p>
                  <div className="flex gap-2 items-center justify-center">
                    <p
                      className="font-spartan text-xs md:text-sm font-bold leading-6 text-opacity-[0.5]
                     text-white pt-6 pb-8 flex items-center"
                    >
                      Source:
                      <a
                        className="pl-2 underline text-xs md:text-sm"
                        href={planetData.overview.source}
                        target="_blank"
                      >
                        Wikipedia
                      </a>
                    </p>
                    <Image
                      className="object-contain pb-2"
                      src={chevron}
                      alt="chevron"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-white">
                  <PlanetButton
                    buttonName={"OVERVIEW"}
                    countNumber={"01"}
                    onClick={() => {
                      setPlanetAsset("overview"), setActiveButton("overview");
                    }}
                    isActive={activeButton === "overview"}
                  />
                  <PlanetButton
                    buttonName={"Internal Structure"}
                    countNumber={"02"}
                    onClick={() => {
                      setPlanetAsset("internal"), setActiveButton("internal");
                    }}
                    isActive={activeButton === "internal"}
                  />
                  <PlanetButton
                    buttonName={"Surface Geology"}
                    countNumber={"03"}
                    onClick={() => {
                      setPlanetAsset("surface"), setActiveButton("surface");
                    }}
                    isActive={activeButton === "surface"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-6 md:gap-8 items-center justify-center mt-[87px] mb-11">
              <PlanetStats info="ROTATION TIME" days={planetData.rotation} />
              <PlanetStats
                info="REVOLUTION TIME"
                days={planetData.revolution}
              />
              <PlanetStats info="radius" days={planetData.radius} />
              <PlanetStats info="AVERAGE TEMP." days={planetData.temperature} />
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default PlanetInfo;
