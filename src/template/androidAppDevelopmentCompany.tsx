import React from "react";
import { SiteLayout } from "../components/Layout";
import { useAndroidIntroQuery } from "../querys/PlateformTemplateQuery/AndroidPage/useAndroidIntroQuery";
import { useAndroidBenefitsQuery } from "../querys/PlateformTemplateQuery/AndroidPage/useAndroidBenefitsQuery";
import { useAndroidWhyUsQuery } from "../querys/PlateformTemplateQuery/AndroidPage/useAndroidWhyUsQuery";
import { useAndroidPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/AndroidPage/useAndroidPlatformCapabilitiesQuery";
import { useAndroidCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/AndroidPage/useAndroidCoreSpecialtiesQuery";
import { useAndroidFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/AndroidPage/useAndroidFeaturedWorkQuery";
import { useAndroidFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/AndroidPage/useAndroidFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useAndroidFaqsQuery } from "../querys/PlateformTemplateQuery/AndroidPage/useAndroidFaqsQuery";

const androidAppDevelopmentCompany = () => {
  const { AndroidIntroData } = useAndroidIntroQuery();
  const { AndroidBenefitsData } = useAndroidBenefitsQuery();
  const { AndroidWhayUsData } = useAndroidWhyUsQuery();
  const { AndroidPlatformCapabilitiesData } =
    useAndroidPlatformCapabilitiesQuery();
  const { AndroidCoreSpecialtiesData } = useAndroidCoreSpecialtiesQuery();
  const { AndroidFeaturedWorkData } = useAndroidFeaturedWorkQuery();
  const { AndroidThoughtspaceData } = useAndroidFeaturedThoughtspaceQuery();
  const {AndroidFaqsData} = useAndroidFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={AndroidIntroData} />
      <ShopifyBenefits BenefitsData={AndroidBenefitsData} />
      <WhyUs WhyUsData={AndroidWhayUsData} />
      <PlatformCapabilities PlanProjectData={AndroidPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={AndroidCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={AndroidFeaturedWorkData} />
      <FAQs FaqData={AndroidFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={AndroidThoughtspaceData} />
    </SiteLayout>
  );
};

export default androidAppDevelopmentCompany;
