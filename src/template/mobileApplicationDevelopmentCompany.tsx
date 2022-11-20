import React from "react";
import { SiteLayout } from "../components/Layout";
import { useMobileAppIntroQuery } from "../querys/PlateformTemplateQuery/mobileApplicationPage/useMobileAppIntroQuery";
import { useMobileAppBenefitsQuery } from "../querys/PlateformTemplateQuery/mobileApplicationPage/useMobileAppBenefitsQuery";
import { useMobileAppWhyUsQuery } from "../querys/PlateformTemplateQuery/mobileApplicationPage/useMobileAppWhyUsQuery";
import { useMobileAppPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/mobileApplicationPage/useMobileAppPlatformCapabilitiesQuery";
import { useMobileAppCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/mobileApplicationPage/useMobileAppCoreSpecialtiesQuery";
import { useMobileAppFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/mobileApplicationPage/useMobileAppFeaturedWorkQuery";
import { useMobileAppFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/mobileApplicationPage/useMobileAppFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useMobileAppFaqsQuery } from "../querys/PlateformTemplateQuery/mobileApplicationPage/useMobileAppFaqsQuery";

const mobileApplicationDevelopmentCompany = () => {
  const { MobileAppIntroData } = useMobileAppIntroQuery();
  const { MobileAppBenefitsData } = useMobileAppBenefitsQuery();
  const { MobileAppWhayUsData } = useMobileAppWhyUsQuery();
  const { MobileAppPlatformCapabilitiesData } =
    useMobileAppPlatformCapabilitiesQuery();
  const { MobileAppCoreSpecialtiesData } = useMobileAppCoreSpecialtiesQuery();
  const { MobileAppFeaturedWorkData } = useMobileAppFeaturedWorkQuery();
  const { MobileAppThoughtspaceData } = useMobileAppFeaturedThoughtspaceQuery();
  const { MobileAppFaqsData } = useMobileAppFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={MobileAppIntroData} />
      <ShopifyBenefits BenefitsData={MobileAppBenefitsData} />
      <WhyUs WhyUsData={MobileAppWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={MobileAppPlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={MobileAppCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={MobileAppFeaturedWorkData} />
      <FAQs FaqData={MobileAppFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={MobileAppThoughtspaceData} />
    </SiteLayout>
  );
};

export default mobileApplicationDevelopmentCompany;
