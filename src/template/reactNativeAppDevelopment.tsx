import React from "react";
import { SiteLayout } from "../components/Layout";
import { useReactNativeIntroQuery } from "../querys/PlateformTemplateQuery/ReactNativePage/useReactNativeIntroQuery";
import { useReactNativeBenefitsQuery } from "../querys/PlateformTemplateQuery/ReactNativePage/useReactNativeBenefitsQuery";
import { useReactNativeWhyUsQuery } from "../querys/PlateformTemplateQuery/ReactNativePage/useReactNativeWhyUsQuery";
import { useReactNativePlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/ReactNativePage/useReactNativePlatformCapabilitiesQuery";
import { useReactNativeCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/ReactNativePage/useReactNativeCoreSpecialtiesQuery";
import { useReactNativeFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/ReactNativePage/useReactNativeFeaturedWorkQuery";
import { useReactNativeFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/ReactNativePage/useReactNativeFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useReactNativeFaqsQuery } from "../querys/PlateformTemplateQuery/ReactNativePage/useReactNativeFaqsQuery";

const reactNativeAppDevelopment = () => {
  const { ReactNativeIntroData } = useReactNativeIntroQuery();
  const { ReactNativeBenefitsData } = useReactNativeBenefitsQuery();
  const { ReactNativeWhayUsData } = useReactNativeWhyUsQuery();
  const { ReactNativePlatformCapabilitiesData } =
    useReactNativePlatformCapabilitiesQuery();
  const { ReactNativeCoreSpecialtiesData } =
    useReactNativeCoreSpecialtiesQuery();
  const { ReactNativeFeaturedWorkData } = useReactNativeFeaturedWorkQuery();
  const { ReactNativeThoughtspaceData } =
    useReactNativeFeaturedThoughtspaceQuery();
  const { ReactNativeFaqsData } = useReactNativeFaqsQuery();
  
  return (
    <SiteLayout>
      <BannerSection IntroData={ReactNativeIntroData} />
      <ShopifyBenefits BenefitsData={ReactNativeBenefitsData} />
      <WhyUs WhyUsData={ReactNativeWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={ReactNativePlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={ReactNativeCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={ReactNativeFeaturedWorkData} />
      <FAQs FaqData={ReactNativeFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={ReactNativeThoughtspaceData} />
    </SiteLayout>
  );
};

export default reactNativeAppDevelopment;
