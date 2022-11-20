import React from "react";
import { SiteLayout } from "../components/Layout";
import { useXamarinIntroQuery } from "../querys/PlateformTemplateQuery/XamarinPage/useXamarinIntroQuery";
import { useXamarinBenefitsQuery } from "../querys/PlateformTemplateQuery/XamarinPage/useXamarinBenefitsQuery";
import { useXamarinWhyUsQuery } from "../querys/PlateformTemplateQuery/XamarinPage/useXamarinWhyUsQuery";
import { useXamarinPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/XamarinPage/useXamarinPlatformCapabilitiesQuery";
import { useXamarinCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/XamarinPage/useXamarinCoreSpecialtiesQuery";
import { useXamarinFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/XamarinPage/useXamarinFeaturedWorkQuery";
import { useXamarinFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/XamarinPage/useXamarinFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useXamarinFaqsQuery } from "../querys/PlateformTemplateQuery/XamarinPage/useXamarinFaqsQuery";

const xamarinAppDevelopment = () => {
  const { XamarinIntroData } = useXamarinIntroQuery();
  const { XamarinBenefitsData } = useXamarinBenefitsQuery();
  const { XamarinWhayUsData } = useXamarinWhyUsQuery();
  const { XamarinPlatformCapabilitiesData } =
    useXamarinPlatformCapabilitiesQuery();
  const { XamarinCoreSpecialtiesData } = useXamarinCoreSpecialtiesQuery();
  const { XamarinFeaturedWorkData } = useXamarinFeaturedWorkQuery();
  const { XamarinThoughtspaceData } = useXamarinFeaturedThoughtspaceQuery();
  const { XamarinFaqsData } = useXamarinFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={XamarinIntroData} />
      <ShopifyBenefits BenefitsData={XamarinBenefitsData} />
      <WhyUs WhyUsData={XamarinWhayUsData} />
      <PlatformCapabilities PlanProjectData={XamarinPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={XamarinCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={XamarinFeaturedWorkData} />
      <FAQs FaqData={XamarinFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={XamarinThoughtspaceData} />
    </SiteLayout>
  );
};

export default xamarinAppDevelopment;
