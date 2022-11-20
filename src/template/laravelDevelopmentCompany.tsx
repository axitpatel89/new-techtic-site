import React from "react";
import { SiteLayout } from "../components/Layout";
import { useLaravelIntroQuery } from "../querys/PlateformTemplateQuery/LaravelPage/useLaravelIntroQuery";
import { useLaravelBenefitsQuery } from "../querys/PlateformTemplateQuery/LaravelPage/useLaravelBenefitsQuery";
import { useLaravelWhyUsQuery } from "../querys/PlateformTemplateQuery/LaravelPage/useLaravelWhyUsQuery";
import { useLaravelPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/LaravelPage/useLaravelPlatformCapabilitiesQuery";
import { useLaravelCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/LaravelPage/useLaravelCoreSpecialtiesQuery";
import { useLaravelFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/LaravelPage/useLaravelFeaturedWorkQuery";
import { useLaravelFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/LaravelPage/useLaravelFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useLaravelFaqsQuery } from "../querys/PlateformTemplateQuery/LaravelPage/useLaravelFaqsQuery";

const laravelDevelopmentCompany = () => {
  const { LaravelIntroData } = useLaravelIntroQuery();
  const { LaravelBenefitsData } = useLaravelBenefitsQuery();
  const { LaravelWhayUsData } = useLaravelWhyUsQuery();
  const { LaravelPlatformCapabilitiesData } =
    useLaravelPlatformCapabilitiesQuery();
  const { LaravelCoreSpecialtiesData } = useLaravelCoreSpecialtiesQuery();
  const { LaravelFeaturedWorkData } = useLaravelFeaturedWorkQuery();
  const { LaravelThoughtspaceData } = useLaravelFeaturedThoughtspaceQuery();
  const { LaravelFaqsData } = useLaravelFaqsQuery();
  
  return (
    <SiteLayout>
      <BannerSection IntroData={LaravelIntroData} />
      <ShopifyBenefits BenefitsData={LaravelBenefitsData} />
      <WhyUs WhyUsData={LaravelWhayUsData} />
      <PlatformCapabilities PlanProjectData={LaravelPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={LaravelCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={LaravelFeaturedWorkData} />
      <FAQs FaqData={LaravelFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={LaravelThoughtspaceData} />
    </SiteLayout>
  );
};

export default laravelDevelopmentCompany;
