
import CustomCard from "./CustomCard";
import CustomTypography from "./CustomTypography";
import CustomCardBody from "./CustomCardBody";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <CustomCard color="transparent" shadow={false}>
      <CustomCardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <CustomTypography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </CustomTypography>
        <CustomTypography className="px-8 font-normal !text-gray-500">
          {children}
        </CustomTypography>
      </CustomCardBody>
    </CustomCard>
  );
}

export default SkillCard;
