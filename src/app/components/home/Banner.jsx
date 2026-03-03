import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-5">
        <h2 className={`${fontBangla.className} text-5xl`} >শিশুদের বাগানে স্বাগতম!</h2>
        <h2 className="text-4xl font-semibold">Brought your child, happy & Joy</h2>
        <p>Explore, Take & Enjoy with</p>
        <button className="btn btn-primary btn-outline">Explore More</button>
      </div>
      <div className="flex-1">
        <Image
          alt="hero banner"
          src={"/assets/hero.png"}
          width={500}
          height={400}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
