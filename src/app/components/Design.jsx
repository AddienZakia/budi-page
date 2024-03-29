"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Design() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="relative my-10 md:my-32 lg:my-20 flex flex-col justify-center items-center ">
      <div>
        <h1 className="hidden md:block rotate-[270deg] text-[80px] md:text-[140px] lg:text-[170px] font-black absolute top-56 -left-32 md:-left-44 text-white_custom text-border-biru_gelap text-border-size-4">
          Poster
        </h1>
        <h1 className="hidden md:block rotate-90 text-[80px] md:text-[140px] lg:text-[170px] font-black absolute bottom-96 -right-32 md:-right-[270px] text-white_custom text-border-biru_gelap text-border-size-4">
          Greeting
        </h1>

        <Image
          src="/main/Ellipse.png"
          width={301}
          height={301}
          alt="ellipse"
          className="absolute min-[500px]:-top-24 min-[500px]:left-10 -top-16 left-0 xl:-top-24 xl:left-80 w-[30%] min-[500px]:w-[20%] xl:w-[10%]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="100"
        />
      </div>

      <h1
        className="text-4xl md:text-5xl font-extrabold text-biru_gelap"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        Design
      </h1>

      <div className="max-[400px]:px-10 max-[400px]:mx-auto w-full px-20 lg:px-36 xl:px-44 mt-10">
        <h1
          className={twMerge(
            "relative before:block before:absolute before:-left-1.5 before:top-1.5 before:rounded-md before:border before:border-biru_gelap before:w-full before:h-full",
            "w-fit px-5 py-2 bg-biru_gelap rounded-md text-white_custom font-semibold text-lg"
          )}
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Poster
        </h1>

        <div
          className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          {["", "", ""].map((x, i) => {
            return (
              <div
                key={i}
                className={twMerge(
                  " drop-shadow-xl bg-white_custom rounded-md",
                  "flex justify-center items-center px-8 md:px-10 py-10 pb-14"
                )}
              >
                <Image
                  src="/main/rec.png"
                  width={577}
                  height={628}
                  alt="Picture of the author"
                  className=""
                />
              </div>
            );
          })}
        </div>
      </div>

      {/*  -------------- */}

      <div className="max-[400px]:px-10 max-[400px]:mx-auto w-full px-20 lg:px-36 xl:px-44 mt-10 flex flex-col items-end">
        <h1
          className={twMerge(
            "relative before:block before:absolute before:-left-1.5 before:top-1.5 before:rounded-md before:border before:border-biru_gelap before:w-full before:h-full",
            "w-fit px-5 py-2 bg-biru_gelap rounded-md text-white_custom font-semibold text-lg"
          )}
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Greeting Card
        </h1>

        <div
          className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          {["", "", ""].map((x, i) => {
            return (
              <div
                key={i}
                className={twMerge(
                  " drop-shadow-xl bg-white_custom rounded-md",
                  "flex justify-center items-center px-8 md:px-10 py-10 pb-14"
                )}
              >
                <Image
                  src="/main/rec.png"
                  width={577}
                  height={628}
                  alt="Picture of the author"
                  className=""
                />
              </div>
            );
          })}
        </div>
      </div>

      <Link href="">
        <h1
          className={twMerge(
            "relative before:block before:absolute before:-left-1.5 before:top-1.5 before:rounded-md before:border before:border-biru_gelap before:w-full before:h-full",
            "transition duration-200 cursor-pointer w-fit px-5 py-2 bg-biru_gelap hover:bg-[#6182b7] hover:before:border-[#6182b7] rounded-md text-white_custom font-semibold text-lg my-10"
          )}
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Lihat Lebih Banyak
        </h1>
      </Link>
    </section>
  );
}
