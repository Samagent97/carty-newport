"use client";

import { ProjectCard } from "@/components";
import CustomTypography from "@/components/CustomTypography";
import { Typography } from "@material-tailwind/react";
import { link } from "fs";

const PROJECTS = [
  {
    img: "/image/elenii.webp",
    title: "Project Elenii",
    desc: "Elenii is an SDG advocacy platform , designed for young people to collaborate and help solve local problems in relation to the United Nation's SDG goals .",
    link: "https://www.elenii.xyz/"
  },
  {
    img: "/image/igblh.webp",
    title: "Infinity Gem",
    desc: "Infinity gem is an online Learning Platform. Made for Individuals who are trying to navigate their way into tech and also professionals who keep learning everyday . it is owned by Bluehouse Technologies ",
    link:"https://ig.bluehouseng.com/"
  },
  {
    img: "/image/bluehouse.webp",
    title: "Bluehouse Technologies ",
    desc: "Bluehouse Technologies bridges the gap between the pace of technological innovations and adoption",
    link: "https://www.bluehouseng.com/"
  },
  {
    img: "/image/iconpackmyload.webp",
    title: "Packmyload",
    desc: "Packmyload is the preferred and rated Nigeria's #1 packing and moving company in Lagos and Abuja. They offer international and interstate packing and moving....",
  },
  // {
  //   img: "/image/blog-1.svg",
  //   title: "Mobile App Development",
  //   desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  // },
  // {
  //   img: "/image/blog2.svg",
  //   title: "Landing Page Development",
  //   desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  // },
  // {
  //   img: "/image/blog3.svg",
  //   title: "Mobile App Development",
  //   desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  // },
  // {
  //   img: "/image/blog4.svg",
  //   title: "E-commerce development",
  //   desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  // },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <CustomTypography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </CustomTypography>
        <CustomTypography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have an idea that needs to come to life or a
          platform that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </CustomTypography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
