import React from "react";
import { SiteLayout } from "../components/Layout";
import { useUIUXIntroQuery } from "../querys/PlateformTemplateQuery/UIUXPage/useUIUXIntroQuery";
import { useUIUXBenefitsQuery } from "../querys/PlateformTemplateQuery/UIUXPage/useUIUXBenefitsQuery";
import { useUIUXWhyUsQuery } from "../querys/PlateformTemplateQuery/UIUXPage/useUIUXWhyUsQuery";
import { useUIUXPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/UIUXPage/useUIUXPlatformCapabilitiesQuery";
import { useUIUXCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/UIUXPage/useUIUXCoreSpecialtiesQuery";
import { useUIUXFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/UIUXPage/useUIUXFeaturedWorkQuery";
import { useUIUXFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/UIUXPage/useUIUXFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useUIUXFaqsQuery } from "../querys/PlateformTemplateQuery/UIUXPage/useUIUXFaqsQuery";

const uiuxDevelopmentCompany = () => {
  const { UIUXIntroData } = useUIUXIntroQuery();
  const { UIUXBenefitsData } = useUIUXBenefitsQuery();
  const { UIUXWhayUsData } = useUIUXWhyUsQuery();
  const { UIUXPlatformCapabilitiesData } = useUIUXPlatformCapabilitiesQuery();
  const { UIUXCoreSpecialtiesData } = useUIUXCoreSpecialtiesQuery();
  const { UIUXFeaturedWorkData } = useUIUXFeaturedWorkQuery();
  const { UIUXThoughtspaceData } = useUIUXFeaturedThoughtspaceQuery();
  const { UIUXFaqsData } = useUIUXFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={UIUXIntroData} />
      <ShopifyBenefits BenefitsData={UIUXBenefitsData} />
      <WhyUs WhyUsData={UIUXWhayUsData} />
      <PlatformCapabilities PlanProjectData={UIUXPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={UIUXCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={UIUXFeaturedWorkData} />
      <FAQs FaqData={UIUXFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={UIUXThoughtspaceData} />
    </SiteLayout>
  );
};

export default uiuxDevelopmentCompany;
