import React from "react";
import { SiteLayout } from "../components/Layout";
import { useKotlinIntroQuery } from "../querys/PlateformTemplateQuery/KotlinPage/useKotlinIntroQuery";
import { useKotlinBenefitsQuery } from "../querys/PlateformTemplateQuery/KotlinPage/useKotlinBenefitsQuery";
import { useKotlinWhyUsQuery } from "../querys/PlateformTemplateQuery/KotlinPage/useKotlinWhyUsQuery";
import { useKotlinPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/KotlinPage/useKotlinPlatformCapabilitiesQuery";
import { useKotlinCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/KotlinPage/useKotlinCoreSpecialtiesQuery";
import { useKotlinFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/KotlinPage/useKotlinFeaturedWorkQuery";
import { useKotlinFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/KotlinPage/useKotlinFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useKotlinFaqsQuery } from "../querys/PlateformTemplateQuery/KotlinPage/useKotlinFaqsQuery";

const kotlinAppDevelopment = () => {
  const { KotlinIntroData } = useKotlinIntroQuery();
  const { KotlinBenefitsData } = useKotlinBenefitsQuery();
  const { KotlinWhayUsData } = useKotlinWhyUsQuery();
  const { KotlinPlatformCapabilitiesData } =
    useKotlinPlatformCapabilitiesQuery();
  const { KotlinCoreSpecialtiesData } = useKotlinCoreSpecialtiesQuery();
  const { KotlinFeaturedWorkData } = useKotlinFeaturedWorkQuery();
  const { KotlinThoughtspaceData } = useKotlinFeaturedThoughtspaceQuery();
  const {KotlinFaqsData} = useKotlinFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={KotlinIntroData} />
      <ShopifyBenefits BenefitsData={KotlinBenefitsData} />
      <WhyUs WhyUsData={KotlinWhayUsData} />
      <PlatformCapabilities PlanProjectData={KotlinPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={KotlinCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={KotlinFeaturedWorkData} />
      <FAQs FaqData={KotlinFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={KotlinThoughtspaceData} />
    </SiteLayout>
  );
};

export default kotlinAppDevelopment;
