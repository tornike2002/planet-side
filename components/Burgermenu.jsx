"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import PlanetsData from "../data/data.json";
import Link from "next/link";
import Image from "next/image";

const Burgermenu = () => {
  const [menu, setMenu] = useState(false);
  const burgerMenuHandler = () => {
    setMenu((value) => !value);
  };
  return (
    <>
      <nav className="flex justify-between px-6 pt-4 items-center">
        <h1 className="text-white font-antonio text-28px font-normal leading-normal uppercase">
          THE PLANETS
        </h1>
        <FaBars
          className="text-white cursor-pointer"
          onClick={burgerMenuHandler}
        />
      </nav>
      {menu && (
        <div className="flex flex-col items-start justify-center gap-10 px-6 pt-6">
          {PlanetsData.map((planets) => {
            return (
              <div
                key={planets.name}
                className="text-white flex items-center gap-3  
                 border-b border-b-white border-opacity-10 w-full pb-5"
              >
                <Image
                  src={planets.images.planet}
                  alt=""
                  width={20}
                  height={20}
                />
                <Link href={`/${planets.name}`} className="">
                  {planets.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Burgermenu;
