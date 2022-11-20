import React from "react";
import { SiteLayout } from "../components/Layout";
import { useSwiftIntroQuery } from "../querys/PlateformTemplateQuery/SwiftPage/useSwiftIntroQuery";
import { useSwiftBenefitsQuery } from "../querys/PlateformTemplateQuery/SwiftPage/useSwiftBenefitsQuery";
import { useSwiftWhyUsQuery } from "../querys/PlateformTemplateQuery/SwiftPage/useSwiftWhyUsQuery";
import { useSwiftPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/SwiftPage/useSwiftPlatformCapabilitiesQuery";
import { useSwiftCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/SwiftPage/useSwiftCoreSpecialtiesQuery";
import { useSwiftFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/SwiftPage/useSwiftFeaturedWorkQuery";
import { useSwiftFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/SwiftPage/useSwiftFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useSwiftFaqsQuery } from "../querys/PlateformTemplateQuery/SwiftPage/useSwiftFaqsQuery";

const swiftAppDevelopment = () => {
  const { SwiftIntroData } = useSwiftIntroQuery();
  const { SwiftBenefitsData } = useSwiftBenefitsQuery();
  const { SwiftWhayUsData } = useSwiftWhyUsQuery();
  const { SwiftPlatformCapabilitiesData } = useSwiftPlatformCapabilitiesQuery();
  const { SwiftCoreSpecialtiesData } = useSwiftCoreSpecialtiesQuery();
  const { SwiftFeaturedWorkData } = useSwiftFeaturedWorkQuery();
  const { SwiftThoughtspaceData } = useSwiftFeaturedThoughtspaceQuery();
  const { SwiftFaqsData } = useSwiftFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={SwiftIntroData} />
      <ShopifyBenefits BenefitsData={SwiftBenefitsData} />
      <WhyUs WhyUsData={SwiftWhayUsData} />
      <PlatformCapabilities PlanProjectData={SwiftPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={SwiftCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={SwiftFeaturedWorkData} />
      <FAQs FaqData={SwiftFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={SwiftThoughtspaceData} />
    </SiteLayout>
  );
};

export default swiftAppDevelopment;
