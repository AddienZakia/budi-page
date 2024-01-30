"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="relative py-32 md:text-red-500 md:py-60 border border-transparent flex flex-col md:flex-row items-center justify-center lg:mx-20 lg:space-x-10">
      <div>
        <h1
          className="text-[80px] md:text-[140px] lg:text-[170px] font-black absolute top-0 -left-20 md:-left-60 text-white_custom text-border-biru_gelap text-border-size-4"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Graphics
        </h1>

        <h1
          className="text-[80px] md:text-[140px] lg:text-[170px] font-black absolute bottom-0 -right-20 md:-left-60 text-white_custom text-border-biru_gelap text-border-size-4"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Graphics
        </h1>

        <h1
          className="hidden md:block text-[80px] md:text-[140px] lg:text-[170px] font-black absolute top-20 md:-right-64 text-white_custom text-border-biru_gelap text-border-size-4"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          Graphics
        </h1>

        <h1
          className="hidden md:block text-[80px] md:text-[140px] lg:text-[170px] font-black absolute -bottom-20 md:-right-64 text-white_custom text-border-biru_gelap text-border-size-4"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          Graphics
        </h1>
      </div>

      <Image
        id="image-anchor"
        src="/main/profile.png"
        width={577}
        height={628}
        alt="Picture of the author"
        className="w-[70%] sm:w-[60%] md:w-[30%] lg:w-[40%] z-10"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="100"
      />

      <div className="my-5 md:my-10 w-[80%] min-[500px]:w-[60%] lg:w-[40%] text-biru_gelap">
        <h1
          className="text-3xl font-semibold"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          Hallow, Gwejh <span className="text-biru_nyentrik">Budi</span>
        </h1>
        <p
          className="text-justify indent-5 mt-2"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
          quibusdam a excepturi ullam consequatur quidem eligendi exercitationem
          fugiat aperiam, suscipit atque? Cumque aliquid, fugiat nostrum minima
          fuga praesentium magni ducimus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestiae blanditiis eveniet doloribus sapiente
          laborum repudiandae, natus tempore id corporis temporibus?
        </p>
      </div>
    </section>
  );
}

export default About;
