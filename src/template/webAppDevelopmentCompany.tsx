import React from "react";
import { SiteLayout } from "../components/Layout";
import { useWebAppIntroQuery } from "../querys/PlateformTemplateQuery/WebAppPage/useWebAppIntroQuery";
import { useWebAppBenefitsQuery } from "../querys/PlateformTemplateQuery/WebAppPage/useWebAppBenefitsQuery";
import { useWebAppWhyUsQuery } from "../querys/PlateformTemplateQuery/WebAppPage/useWebAppWhyUsQuery";
import { useWebAppPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/WebAppPage/useWebAppPlatformCapabilitiesQuery";
import { useWebAppCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/WebAppPage/useWebAppCoreSpecialtiesQuery";
import { useWebAppFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/WebAppPage/useWebAppFeaturedWorkQuery";
import { useWebAppFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/WebAppPage/useWebAppFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useWebAppFaqsQuery } from "../querys/PlateformTemplateQuery/WebAppPage/useWebAppFaqsQuery";

const webAppDevelopmentCompany = () => {
  const { WebAppIntroData } = useWebAppIntroQuery();
  const { WebAppBenefitsData } = useWebAppBenefitsQuery();
  const { WebAppWhayUsData } = useWebAppWhyUsQuery();
  const { WebAppPlatformCapabilitiesData } =
    useWebAppPlatformCapabilitiesQuery();
  const { WebAppCoreSpecialtiesData } = useWebAppCoreSpecialtiesQuery();
  const { WebAppFeaturedWorkData } = useWebAppFeaturedWorkQuery();
  const { WebAppThoughtspaceData } = useWebAppFeaturedThoughtspaceQuery();
  const { WebAppFaqsData } = useWebAppFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={WebAppIntroData} />
      <ShopifyBenefits BenefitsData={WebAppBenefitsData} />
      <WhyUs WhyUsData={WebAppWhayUsData} />
      <PlatformCapabilities PlanProjectData={WebAppPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={WebAppCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={WebAppFeaturedWorkData} />
      <FAQs FaqData={WebAppFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={WebAppThoughtspaceData} />
    </SiteLayout>
  );
};

export default webAppDevelopmentCompany;
