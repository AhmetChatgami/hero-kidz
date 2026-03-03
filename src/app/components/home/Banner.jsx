import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
      {/* text area */}
      <div className="flex-1 space-y-5 text-center md:text-left">
        <h2 className={`${fontBangla.className} text-4xl md:text-5xl`}>
          শিশুদের বাগানে স্বাগতম!
        </h2>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Brought your child, happy & Joy
        </h2>
        <p>Explore, Take & Enjoy with</p>
        <button className="btn btn-primary btn-outline">Explore More</button>
      </div>

    {/* Banner image */}
      <div className="flex-1 w-full flex justify-center">
        <Image
          alt="hero banner"
          src={"/assets/hero.png"}
          width={500}
          height={400}
          className="w-full max-w-[400px] md:max-w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
