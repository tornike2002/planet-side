import Image from "next/image";
import Mercury from "@/public/assets/planet-mercury.svg";
import DataMercury from "@/app/data/data.json";
import chevron from "@/public/assets/icon-source.svg";
export default function Home() {
  const MercuryInfo = DataMercury.find((planet) => planet.name === "Mercury");
  return (
    <main className="">
      <div className="flex justify-around items-center">
        <Image src={Mercury} alt="Planet Mercury" />
        <div className="">
          {MercuryInfo && (
            <div>
              <h1 className="text-[80px] uppercase text-white font-antonio">
                {MercuryInfo.name}
              </h1>
              <p className="max-w-[350px] text-white font-spartan text-sm leading-6">
                {MercuryInfo.overview.content}
              </p>
              <div className="flex gap-2 items-center">
                <p className="font-spartan text-sm font-bold leading-6 text-opacity-[0.5] text-white ">
                  Source:
                  <a
                    className="pl-2 underline"
                    href={MercuryInfo.overview.source}
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
          )}
        </div>
      </div>
    </main>
  );
}
