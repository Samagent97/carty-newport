"use client";
import Image from "next/image";

import CustomButton from "./CustomButton";

export function FixedPlugin() {
  return (
    <a href="https://www.elenii.xyz/about-us" target="_blank">
      <CustomButton
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="https://www.elenii.xyz/about-us"
        />{" "}
        Made by dmakers of elenii 
      </CustomButton>
    </a>
  );
}
