import React from "react";
import { SiteLayout } from "../components/Layout";
import { useTravelIntroQuery } from "../querys/PlateformTemplateQuery/TravelPage/useTravelIntroQuery";
import { useTravelBenefitsQuery } from "../querys/PlateformTemplateQuery/TravelPage/useTravelBenefitsQuery";
import { useTravelWhyUsQuery } from "../querys/PlateformTemplateQuery/TravelPage/useTravelWhyUsQuery";
import { useTravelPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/TravelPage/useTravelPlatformCapabilitiesQuery";
import { useTravelCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/TravelPage/useTravelCoreSpecialtiesQuery";
import { useTravelFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/TravelPage/useTravelFeaturedWorkQuery";
import { useTravelFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/TravelPage/useTravelFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useTravelFaqsQuery } from "../querys/PlateformTemplateQuery/TravelPage/useTravelFaqsQuery";

const travel = () => {
  const { TravelIntroData } = useTravelIntroQuery();
  const { TravelBenefitsData } = useTravelBenefitsQuery();
  const { TravelWhayUsData } = useTravelWhyUsQuery();
  const { TravelPlatformCapabilitiesData } =
    useTravelPlatformCapabilitiesQuery();
  const { TravelCoreSpecialtiesData } = useTravelCoreSpecialtiesQuery();
  const { TravelFeaturedWorkData } = useTravelFeaturedWorkQuery();
  const { TravelThoughtspaceData } = useTravelFeaturedThoughtspaceQuery();
  const { TravelFaqsData } = useTravelFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={TravelIntroData} />
      <ShopifyBenefits BenefitsData={TravelBenefitsData} />
      <WhyUs WhyUsData={TravelWhayUsData} />
      <PlatformCapabilities PlanProjectData={TravelPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={TravelCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={TravelFeaturedWorkData} />
      <FAQs FaqData={TravelFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={TravelThoughtspaceData} />
    </SiteLayout>
  );
};

export default travel;
