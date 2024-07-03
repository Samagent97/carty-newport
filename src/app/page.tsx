// components
import {  Footer } from "../components";


import Hero from "./hero";

import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {/* <Clients /> */}
      <Skills />
      <Projects />
      <Resume />
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
