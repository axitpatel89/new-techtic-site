import React from "react";
import { SiteLayout } from "../components/Layout";
import { useIotIntroQuery } from "../querys/PlateformTemplateQuery/IOTPage/useIotIntroQuery";
import { useIotBenefitsQuery } from "../querys/PlateformTemplateQuery/IOTPage/useIotBenefitsQuery";
import { useIotWhyUsQuery } from "../querys/PlateformTemplateQuery/IOTPage/useIotWhyUsQuery";
import { useIotPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/IOTPage/useIotPlatformCapabilitiesQuery";
import { useIotCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/IOTPage/useIotCoreSpecialtiesQuery";
import { useIotFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/IOTPage/useIotFeaturedWorkQuery";
import { useIotFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/IOTPage/useIotFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useIotFaqsQuery } from "../querys/PlateformTemplateQuery/IOTPage/useIotFaqsQuery";

const internetOfThings = () => {
  const { IotIntroData } = useIotIntroQuery();
  const { IotBenefitsData } = useIotBenefitsQuery();
  const { IotWhayUsData } = useIotWhyUsQuery();
  const { IotPlatformCapabilitiesData } = useIotPlatformCapabilitiesQuery();
  const { IotCoreSpecialtiesData } = useIotCoreSpecialtiesQuery();
  const { IotFeaturedWorkData } = useIotFeaturedWorkQuery();
  const { IotThoughtspaceData } = useIotFeaturedThoughtspaceQuery();
const {IotFaqsData} =useIotFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={IotIntroData} />
      <ShopifyBenefits BenefitsData={IotBenefitsData} />
      <WhyUs WhyUsData={IotWhayUsData} />
      <PlatformCapabilities PlanProjectData={IotPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={IotCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={IotFeaturedWorkData} />
      <FAQs FaqData={IotFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={IotThoughtspaceData} />
    </SiteLayout>
  );
};

export default internetOfThings;
