import React from "react";
import { SiteLayout } from "../components/Layout";
import AboutIntro from "../components/AboutPage/AboutInnerIntro";
import AboutValues from "../components/AboutPage/AboutPageValues";
import AboutTeam from "../components/AboutPage/AboutTeam";
import { useBannerSectionQuery } from "../querys/aboutPageQuery/useBannerSectionQuery";
import AboutCareer from "../components/AboutPage/AboutCareers";

function About() {
  const IntroData = useBannerSectionQuery();

  return (
    <SiteLayout>
      <AboutIntro IntroData={IntroData} />
      <AboutValues />
      <AboutTeam />
      <AboutCareer />
    </SiteLayout>
  );
}

export default About;
