import React from "react";
import { SiteLayout } from "../components/Layout";
import { useFlutterIntroQuery } from "../querys/PlateformTemplateQuery/FlutterPage/useFlutterIntroQuery";
import { useFlutterBenefitsQuery } from "../querys/PlateformTemplateQuery/FlutterPage/useFlutterBenefitsQuery";
import { useFlutterWhyUsQuery } from "../querys/PlateformTemplateQuery/FlutterPage/useFlutterWhyUsQuery";
import { useFlutterPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/FlutterPage/useFlutterPlatformCapabilitiesQuery";
import { useFlutterCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/FlutterPage/useFlutterCoreSpecialtiesQuery";
import { useFlutterFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/FlutterPage/useFlutterFeaturedWorkQuery";
import { useFlutterFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/FlutterPage/useFlutterFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useFlutterFaqsQuery } from "../querys/PlateformTemplateQuery/FlutterPage/useFlutterFaqsQuery";

const flutterAppDevelopment = () => {
  const { FlutterIntroData } = useFlutterIntroQuery();
  const { FlutterBenefitsData } = useFlutterBenefitsQuery();
  const { FlutterWhayUsData } = useFlutterWhyUsQuery();
  const { FlutterPlatformCapabilitiesData } =
    useFlutterPlatformCapabilitiesQuery();
  const { FlutterCoreSpecialtiesData } = useFlutterCoreSpecialtiesQuery();
  const { FlutterFeaturedWorkData } = useFlutterFeaturedWorkQuery();
  const { FlutterThoughtspaceData } = useFlutterFeaturedThoughtspaceQuery();
  const {FlutterFaqsData} = useFlutterFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={FlutterIntroData} />
      <ShopifyBenefits BenefitsData={FlutterBenefitsData} />
      <WhyUs WhyUsData={FlutterWhayUsData} />
      <PlatformCapabilities PlanProjectData={FlutterPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={FlutterCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={FlutterFeaturedWorkData} />
      <FAQs FaqData={FlutterFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={FlutterThoughtspaceData} />
    </SiteLayout>
  );
};

export default flutterAppDevelopment;
