import React from "react";
import { Hero } from "../components/HomePage/Hero";
import { About } from "../components/HomePage/About";
import { Services } from "../components/HomePage/Services";
import { OurAccomplishments } from "../components/HomePage/OurAccomplishments";
import { BlackBox } from "../components/HomePage/BlackBox";
import { Thoughtspace } from "../components/HomePage/Thoughtspace";
import { SiteLayout } from "../components/Layout";
import Work from "../components/HomePage/Work";

const home = () => {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Services />
      <Work />
      <BlackBox />
      <OurAccomplishments />
      <Thoughtspace />
    </SiteLayout>
  );
};

export default home;
