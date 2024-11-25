"use client";


import {
  RectangleGroupIcon,
  
  SwatchIcon,
  
  UserIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";
import { SkillCard } from "../components";
import CustomTypography from "../components/CustomTypography";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: " Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: UserIcon,
    title: "Linux Administrator ",
    children:
    "Seasoned Linux administrator with hands-on experience across 5+ distributions. Adept at navigating various system configurations and troubleshooting challenges.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript,Typescript,Python  and frameworks like React,Expo and Nextjs.",
  },
  
  
  {
    icon: UserGroupIcon,
    title: "Trainer  ",
    children:
      "With over 20 students successfully trained and mentored, I'm a seasoned trainer who equips tech beginners with the skills they need to thrive. I use a blend of live classes, physical mentorship, and dedicated support to ensure their growth.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <CustomTypography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </CustomTypography>
        <CustomTypography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </CustomTypography>
        <CustomTypography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </CustomTypography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
