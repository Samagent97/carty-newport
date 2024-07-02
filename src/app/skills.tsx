"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  UserIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import CustomTypography from "@/components/CustomTypography";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: UserIcon,
    title: "Product Management",
    children:
      " I Focus on the product's overall scope and success from start to finish. Then use strategic thinking to define the product's vision and strategy, prioritize initiatives, and make decisions about what to build. And also research the market, understand customer needs, and perform competitor analysis.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript,Typescript  and frameworks like React and Nextjs.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: UserGroupIcon,
    title: "SDG Champion ",
    children:
      "As an SDG Champion, I raise awareness and educate the public about the United Nations Sustainable Development Goals. I use my platforms, such as social media and public speaking, to spread the message and inspire others to take action.i also lead and implement projects that contribute directly to the SDG. I focus on practical solutions and measurable outcomes, driving specific initiatives that address SDG-related challenges.",
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
