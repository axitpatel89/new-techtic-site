import React from "react";
import { SiteLayout } from "../components/Layout";
import { useMvpIntroQuery } from "../querys/PlateformTemplateQuery/MvpPage/useMvpIntroQuery";
import { useMvpBenefitsQuery } from "../querys/PlateformTemplateQuery/MvpPage/useMvpBenefitsQuery";
import { useMvpWhyUsQuery } from "../querys/PlateformTemplateQuery/MvpPage/useNestjsWhyUsQuery";
import { useMvpPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/MvpPage/useMvpPlatformCapabilitiesQuery";
import { useMvpCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/MvpPage/useMvpCoreSpecialtiesQuery";
import { useMvpFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/MvpPage/useMvpFeaturedWorkQuery";
import { useMvpFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/MvpPage/useMvpFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useMvpFaqsQuery } from "../querys/PlateformTemplateQuery/MvpPage/useMvpFaqsQuery";

const mvpDevelopment = () => {
  const { MvpIntroData } = useMvpIntroQuery();
  const { MvpBenefitsData } = useMvpBenefitsQuery();
  const { MvpWhayUsData } = useMvpWhyUsQuery();
  const { MvpPlatformCapabilitiesData } = useMvpPlatformCapabilitiesQuery();
  const { MvpCoreSpecialtiesData } = useMvpCoreSpecialtiesQuery();
  const { MvpFeaturedWorkData } = useMvpFeaturedWorkQuery();
  const { MvpThoughtspaceData } = useMvpFeaturedThoughtspaceQuery();
  const { MvpFaqsData } = useMvpFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={MvpIntroData} />
      <ShopifyBenefits BenefitsData={MvpBenefitsData} />
      <WhyUs WhyUsData={MvpWhayUsData} />
      <PlatformCapabilities PlanProjectData={MvpPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={MvpCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={MvpFeaturedWorkData} />
      <FAQs FaqData={MvpFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={MvpThoughtspaceData} />
    </SiteLayout>
  );
};

export default mvpDevelopment;
