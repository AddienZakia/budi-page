"use client";
import React, { useEffect } from "react";
import Aos from "aos";

import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      id="anchor"
      className="border border-transparent flex flex-col justify-center items-center py-52 pb-80 -space-y-3"
    >
      <div>
        <div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-2 border-biru_gelap"
          data-aos="fade-down-right"
          data-aos-duration="500"
          data-aos-delay="100"
        ></div>

        <Image
          src="/main/Ellipse.png"
          width={301}
          height={301}
          alt="ellipse"
          className="absolute top-[470px] left-10 w-[30%] md:w-[20%] xl:w-[15%]"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="100"
        />

        <Image
          src="/main/Ellipse.png"
          width={301}
          height={301}
          alt="ellipse"
          className="absolute top-32 right-5 md:right-10 lg:right-16 w-[20%] md:w-[15%] xl:w-[10%] rotate-180"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="300"
        />
      </div>

      <div className="space-y-1 md:space-y-3 text-center">
        <h3
          className="text-biru_nyentrik/60 text-xl md:text-3xl xl:text-3xl"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Welcome To
        </h3>
        <h1
          className={twMerge(
            "text-biru_nyentrik font-black text-4xl md:text-6xl xl:text-[80px]"
          )}
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <span className="absolute text-border-size-2 text-border-biru_nyentrik text-white_custom -z-20 -ml-1 mt-1">
            MY PORTOFOLIO
          </span>
          MY PORTOFOLIO
        </h1>
      </div>

      <p
        className="text-lg text-biru_gelap/70 absolute top-[600px] md:top-[670px] text-center animate-bounce"
        data-aos="zoom-in-down"
        data-aos-duration="500"
        data-aos-delay="300"
        data-aos-anchor="#anchor"
      >
        Scroll Down
      </p>
    </section>
  );
}
