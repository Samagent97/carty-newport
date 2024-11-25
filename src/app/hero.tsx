/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import CustomTypography from "../components/CustomTypography";

import Image from "next/image";
// import { Input } from "@material-tailwind/react";
// import CustomButton from "../components/CustomButton";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <CustomTypography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my  <br />  Portofolio!
          </CustomTypography>
          <CustomTypography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Samson Nuhu Mccarthy, an Innovator , developer ,Trainer and Instructor  based in Nigeria. I love using tech to impact. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development,     creativity meets functionality.
          </CustomTypography>
          <div className="grid">
            {/* <CustomTypography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </CustomTypography> */}
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              {/* <Input color="gray" label="Enter your email" size="lg" />
              <CustomButton color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </CustomButton> */}
            </div>
          </div>
         
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/carty.webp"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
