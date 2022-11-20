import React from "react";
import { SiteLayout } from "../components/Layout";
import { useIonicIntroQuery } from "../querys/PlateformTemplateQuery/IonicPage/useIonicIntroQuery";
import { useIonicBenefitsQuery } from "../querys/PlateformTemplateQuery/IonicPage/useIonicBenefitsQuery";
import { useIonicWhyUsQuery } from "../querys/PlateformTemplateQuery/IonicPage/useIonicWhyUsQuery";
import { useIonicPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/IonicPage/useIonicPlatformCapabilitiesQuery";
import { useIonicCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/IonicPage/useIonicCoreSpecialtiesQuery";
import { useIonicFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/IonicPage/useIonicFeaturedWorkQuery";
import { useIonicFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/IonicPage/useIonicFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useIonicFaqsQuery } from "../querys/PlateformTemplateQuery/IonicPage/useIonicFaqsQuery";

const ionicAppDevelopment = () => {
  const { IonicIntroData } = useIonicIntroQuery();
  const { IonicBenefitsData } = useIonicBenefitsQuery();
  const { IonicWhayUsData } = useIonicWhyUsQuery();
  const { IonicPlatformCapabilitiesData } = useIonicPlatformCapabilitiesQuery();
  const { IonicCoreSpecialtiesData } = useIonicCoreSpecialtiesQuery();
  const { IonicFeaturedWorkData } = useIonicFeaturedWorkQuery();
  const { IonicThoughtspaceData } = useIonicFeaturedThoughtspaceQuery();
  const {IonicFaqsData} = useIonicFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={IonicIntroData} />
      <ShopifyBenefits BenefitsData={IonicBenefitsData} />
      <WhyUs WhyUsData={IonicWhayUsData} />
      <PlatformCapabilities PlanProjectData={IonicPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={IonicCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={IonicFeaturedWorkData} />
      <FAQs FaqData={IonicFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={IonicThoughtspaceData} />
    </SiteLayout>
  );
};

export default ionicAppDevelopment;
