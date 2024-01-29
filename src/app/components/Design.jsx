import React from "react";
import Image from "next/image";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Design() {
  return (
    <section className="relative my-10 md:my-32 lg:my-20 flex flex-col justify-center items-center ">
      <div>
        <h1 className="hidden md:block rotate-[270deg] text-[80px] md:text-[140px] lg:text-[170px] font-black absolute top-56 -left-32 md:-left-44 text-white_custom text-border-biru_gelap text-border-size-4">
          Poster
        </h1>
        <h1 className="hidden md:block rotate-90 text-[80px] md:text-[140px] lg:text-[170px] font-black absolute bottom-96 -right-32 md:-right-[270px] text-white_custom text-border-biru_gelap text-border-size-4">
          Greeting
        </h1>
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-biru_gelap">
        Design
      </h1>

      <div className="max-[400px]:px-10 max-[400px]:mx-auto w-full px-20 lg:px-36 xl:px-44 mt-10">
        <h1
          className={twMerge(
            "relative before:block before:absolute before:-left-1.5 before:top-1.5 before:rounded-md before:border before:border-biru_gelap before:w-full before:h-full",
            "w-fit px-5 py-2 bg-biru_gelap rounded-md text-white_custom font-semibold text-lg"
          )}
        >
          Poster
        </h1>

        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
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
        >
          Greeting Card
        </h1>

        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
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
        >
          Lihat Lebih Banyak
        </h1>
      </Link>
    </section>
  );
}
