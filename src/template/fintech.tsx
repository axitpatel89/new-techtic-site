import React from "react";
import { SiteLayout } from "../components/Layout";
import { useFintechIntroQuery } from "../querys/PlateformTemplateQuery/FintechPage/useFintechIntroQuery";
import { useFintechBenefitsQuery } from "../querys/PlateformTemplateQuery/FintechPage/useFintechBenefitsQuery";
import { useFintechWhyUsQuery } from "../querys/PlateformTemplateQuery/FintechPage/useFintechWhyUsQuery";
import { useFintechPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/FintechPage/useFintechPlatformCapabilitiesQuery";
import { useFintechCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/FintechPage/useFintechCoreSpecialtiesQuery";
import { useFintechFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/FintechPage/useFintechFeaturedWorkQuery";
import { useFintechFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/FintechPage/useFintechFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useFintechFaqsQuery } from "../querys/PlateformTemplateQuery/FintechPage/useFintechFaqsQuery";

const fintech = () => {
  const { FintechIntroData } = useFintechIntroQuery();
  const { FintechBenefitsData } = useFintechBenefitsQuery();
  const { FintechWhayUsData } = useFintechWhyUsQuery();
  const { FintechPlatformCapabilitiesData } =
    useFintechPlatformCapabilitiesQuery();
  const { FintechCoreSpecialtiesData } = useFintechCoreSpecialtiesQuery();
  const { FintechFeaturedWorkData } = useFintechFeaturedWorkQuery();
  const { FintechThoughtspaceData } = useFintechFeaturedThoughtspaceQuery();
  const {FintechFaqsData} = useFintechFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={FintechIntroData} />
      <ShopifyBenefits BenefitsData={FintechBenefitsData} />
      <WhyUs WhyUsData={FintechWhayUsData} />
      <PlatformCapabilities PlanProjectData={FintechPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={FintechCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={FintechFeaturedWorkData} />
      <FAQs FaqData={FintechFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={FintechThoughtspaceData} />
    </SiteLayout>
  );
};

export default fintech;
