import React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-gray_custom flex flex-col items-center justify-center py-16    text-biru_gelap">
      <h1 className="font-extrabold text-2xl">phlv Design</h1>
      <p className="textmd md:text-lg w-[80%] md:w-[45%] text-center mx-auto my-5 md:my-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea fuga vitae
        nobis cum aliquam pariatur deleniti explicabo officia unde excepturi!
      </p>

      <div className="flex justify-center items-center space-x-3">
        <Link href="">
          <FaInstagram className="text-2xl md:text-3xl" />
        </Link>
        <Link href="">
          <FaTiktok className="text-2xl md:text-3xl" />
        </Link>
      </div>
    </div>
  );
}
