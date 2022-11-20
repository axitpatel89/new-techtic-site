import React from "react";
import { SiteLayout } from "../components/Layout";
import { useCrossPlatformAppIntroQuery } from "../querys/PlateformTemplateQuery/CrossPlatformAppPage/useCrossPlatformAppIntroQuery";
import { useCrossPlatformAppBenefitsQuery } from "../querys/PlateformTemplateQuery/CrossPlatformAppPage/useCrossPlatformAppBenefitsQuery";
import { useCrossPlatformAppWhyUsQuery } from "../querys/PlateformTemplateQuery/CrossPlatformAppPage/useCrossPlatformAppWhyUsQuery";
import { useCrossPlatformAppPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/CrossPlatformAppPage/useCrossPlatformAppPlatformCapabilitiesQuery";
import { useCrossPlatformAppCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/CrossPlatformAppPage/useCrossPlatformAppCoreSpecialtiesQuery";
import { useCrossPlatformAppFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/CrossPlatformAppPage/useCrossPlatformAppFeaturedWorkQuery";
import { useCrossPlatformAppFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/CrossPlatformAppPage/useCrossPlatformAppFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useCrossPlatformAppFaqsQuery } from "../querys/PlateformTemplateQuery/CrossPlatformAppPage/useCrossPlatformAppFaqsQuery";

const crossPlatformAppDevelopment = () => {
  const { CrossPlatformAppIntroData } = useCrossPlatformAppIntroQuery();
  const { CrossPlatformAppBenefitsData } = useCrossPlatformAppBenefitsQuery();
  const { CrossPlatformAppWhayUsData } = useCrossPlatformAppWhyUsQuery();
  const { CrossPlatformAppPlatformCapabilitiesData } =
    useCrossPlatformAppPlatformCapabilitiesQuery();
  const { CrossPlatformAppCoreSpecialtiesData } =
    useCrossPlatformAppCoreSpecialtiesQuery();
  const { CrossPlatformAppFeaturedWorkData } =
    useCrossPlatformAppFeaturedWorkQuery();
  const { CrossPlatformAppThoughtspaceData } =
    useCrossPlatformAppFeaturedThoughtspaceQuery();

  const { CrossPlatformAppFaqsData } = useCrossPlatformAppFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={CrossPlatformAppIntroData} />
      <ShopifyBenefits BenefitsData={CrossPlatformAppBenefitsData} />
      <WhyUs WhyUsData={CrossPlatformAppWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={CrossPlatformAppPlatformCapabilitiesData}
      />
      <CoreSpecialties
        CoreSpecialtiesData={CrossPlatformAppCoreSpecialtiesData}
      />
      <FeaturedWork FeaturedWorkData={CrossPlatformAppFeaturedWorkData} />
      <FAQs FaqData={CrossPlatformAppFaqsData} />
      <FeturedThoughtspace
        ThoughtspaceData={CrossPlatformAppThoughtspaceData}
      />
    </SiteLayout>
  );
};

export default crossPlatformAppDevelopment;
