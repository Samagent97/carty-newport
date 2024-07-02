import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import CustomCard from "./CustomCard";
import CustomTypography from "./CustomTypography";
import CustomCardBody from "./CustomCardBody";
import CustomButton from "./CustomButton";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  link:string;
}

export function ProjectCard({ img, title, desc,link }: ProjectCardProps) {
  return (
    <CustomCard color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CustomCardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <CustomTypography variant="h5" className="mb-2">
            {title}
          </CustomTypography>
        </a>
        <CustomTypography className="mb-6 font-normal !text-gray-500">
          {desc}
        </CustomTypography>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <CustomButton color="gray" size="sm">
          see details
        </CustomButton>
        </a>
      </CustomCardBody>
    </CustomCard>
  );
}

export default ProjectCard;
