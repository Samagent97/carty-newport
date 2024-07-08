/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import CustomTypography from "../components/CustomTypography";
import {
  
  
  
  Input,
  Textarea,
  
  
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import CustomCard from "../components/CustomCard";
import CustomCardBody from "../components/CustomCardBody";
import CustomIconButton from "../components/CustomIconButton";
import CustomButton from "../components/CustomButton";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <CustomTypography variant="h1" color="blue-gray" className="mb-4" >
          Contact Me

        </CustomTypography>
        <CustomTypography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </CustomTypography>
      </div>
      <div>
        <CustomCard shadow={true} className="container mx-auto border border-gray/50">
          <CustomCardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <CustomTypography variant="h4" color="white" className="mb-2">
                Contact Information
              </CustomTypography>
              <CustomTypography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and i will get back to you within 24
                hours.
              </CustomTypography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <CustomTypography variant="h6" color="white" className="mb-2">
                  +2348140915380
                </CustomTypography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <CustomTypography variant="h6" color="white" className="mb-2">
                  sammccarthy090@gmail.com
                </CustomTypography>
              </div>
              {/* <div className="flex mb-10 gap-5">
                <TicketIcon className="h-6 w-6 text-white" />
                <CustomTypography variant="h6" color="white" className="mb-2">
                  Open Support Ticket
                </CustomTypography>
              </div> */}
              <div className="flex items-center gap-5">
                <CustomIconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </CustomIconButton>
                <CustomIconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </CustomIconButton>
                <CustomIconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </CustomIconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    placeholder="eg. Sam"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-expect-error */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. carty"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="first-name"
                  placeholder="eg. sammy@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                {/* <CustomTypography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested on?
                </CustomTypography> */}
               
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="first-name"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div  className="w-full flex justify-end">
                  <CustomButton className="w-full md:w-fit" color="gray" size="md">
                    Send message
                  </CustomButton>
                </div>
              </form>
            </div>
          </CustomCardBody>
        </CustomCard>
      </div>
    </section>
  );
}

export default ContactForm;
