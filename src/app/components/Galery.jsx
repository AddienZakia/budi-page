"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";

import { twMerge } from "tailwind-merge";
import Link from "next/link";

export default function Galery() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="relative mt-32">
      <Image
        src="/main/strip.png"
        width={2880}
        height={265}
        alt="galery"
        className="z-20 w-[3000px] -top-7 sm:-top-9 md:-top-12 h-auto absolute xl:-top-16"
      />

      <div
        className={twMerge(
          "py-32 bg-[url('/main/bg-galery.png')] bg-cover -z-20 w-full h-full",
          "flex flex-col justify-center items-center"
        )}
      >
        <h1
          id="anchor-galery"
          className="text-4xl md:text-5xl font-extrabold text-biru_gelap"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Galery
        </h1>
        <div
          id="galery"
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10"
        >
          {["", "", "", "", "", ""].map((x, i) => {
            return (
              <div key={i}>
                <Image
                  src="/main/rec.png"
                  width={250}
                  height={250}
                  alt="Picture of the author"
                  className="w-full h-[250px]"
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-delay={100 + (i + 1) * 100}
                />
              </div>
            );
          })}
        </div>

        <Link href="">
          <h1
            className={twMerge(
              "relative before:block before:absolute before:-left-1.5 before:top-1.5 before:rounded-md before:border before:border-biru_gelap before:w-full before:h-full",
              "transition duration-200 cursor-pointer w-fit px-5 py-2 bg-biru_gelap hover:bg-[#6182b7] hover:before:border-[#6182b7] rounded-md text-white_custom font-semibold text-lg mt-20"
            )}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            Lihat Lebih Banyak
          </h1>
        </Link>

        <Image
          src="/main/camera-icon.png"
          width={476}
          height={538}
          alt="camera icon"
          className="absolute -bottom-5 xl:-bottom-10 -z-10 left-0 w-[30%] md:w-[20%] xl:w-[20%]"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="500"
        />

        <Image
          src="/main/video-icon.png"
          width={508}
          height={656}
          alt="video icn"
          className="absolute -bottom-7 md:-bottom-10 xl:-bottom-20 -z-10 right-0 w-[30%] md:w-[23%] xl:w-[20%]"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="500"
        />
      </div>
    </section>
  );
}
