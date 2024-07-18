"use client";
import { useState } from "react";
import Image from "next/image";
import data from "../../../data/data.json";
import chevron from "../../../public/assets/icon-source.svg";
import PlanetButton from "../../../components/PlanetButton.js";
const PlanetInfo = ({ params }) => {
  const [planetAsset, setPlanetAsset] = useState("overview");
  const [activeButton, setActiveButton] = useState("overview");

  const filtered = data.filter((planet) => planet.name === params.planetsName);
  console.log(planetAsset);
  return (
    <main>
      {filtered.map((planetData) => {
        return (
          <div
            key={planetData.name}
            className="flex justify-around items-center"
          >
            <div className="relative">
              {planetAsset === "overview" ? (
                <Image
                  src={planetData.images.planet}
                  alt="Planet Mercury"
                  width={290}
                  height={290}
                />
              ) : null}
              {planetAsset === "internal" ? (
                <Image
                  src={planetData.images.internal}
                  alt="Planet Mercury"
                  width={290}
                  height={290}
                />
              ) : null}

              {planetAsset === "surface" ? (
                <Image
                  src={planetData.images.planet}
                  alt="Planet Mercury"
                  width={290}
                  height={290}
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
        );
      })}
    </main>
  );
};

export default PlanetInfo;
