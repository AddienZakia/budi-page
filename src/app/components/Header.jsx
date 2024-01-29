"use client";
import React, { useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { FaBars } from "react-icons/fa";
import {
  IoPersonSharp,
  IoFolderOpenOutline,
  IoImageOutline,
  IoImagesOutline,
} from "react-icons/io5";

export default function Header() {
  const [active, setactive] = useState(false);

  return (
    <section
      id="headers"
      className={twMerge(
        "relative w-full py-8 px-10 flex flex-col-reverse float-end items-end",
        "md:justify-center md:items-center md:float-none"
      )}
    >
      <ul
        className={twMerge(
          active ? "opacity-100" : "opacity-0 hidden",
          "z-20 bg-white_custom flex flex-col transition-all duration-200 absolute top-16",
          "px-10 py-8 md:py-0 border rounded-md mt-3",
          "md:space-x-14 md:opacity-100 md:flex-row md:border-none",
          "md:relative md:top-0"
        )}
      >
        <li>
          <IoPersonSharp className="text-2xl text-biru_gelap/80 md:hidden" />
          <a href="#">About</a>
        </li>
        <li>
          <IoFolderOpenOutline className="text-2xl text-biru_gelap/80 md:hidden" />
          <a href="#">Project</a>
        </li>
        <li>
          <IoImagesOutline className="text-2xl text-biru_gelap/80 md:hidden" />
          <a href="#">Media</a>
        </li>
        <li>
          <IoImageOutline className="text-2xl text-biru_gelap/80 md:hidden" />
          <a href="#">Galery</a>
        </li>
      </ul>

      <FaBars
        className="z-10 text-end block md:hidden text-3xl text-biru_gelap/60"
        onClick={() => setactive((pre) => !pre)}
      />
    </section>
  );
}
