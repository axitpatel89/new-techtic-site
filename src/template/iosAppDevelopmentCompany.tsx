import React from "react";
import { SiteLayout } from "../components/Layout";
import { useIosIntroQuery } from "../querys/PlateformTemplateQuery/IosPage/useIosIntroQuery";
import { useIosBenefitsQuery } from "../querys/PlateformTemplateQuery/IosPage/useIosBenefitsQuery";
import { useIosWhyUsQuery } from "../querys/PlateformTemplateQuery/IosPage/useIosWhyUsQuery";
import { useIosPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/IosPage/useIosPlatformCapabilitiesQuery";
import { useIosCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/IosPage/useIosCoreSpecialtiesQuery";
import { useIosFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/IosPage/useIosFeaturedWorkQuery";
import { useIosFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/IosPage/useIosFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useIosFaqsQuery } from "../querys/PlateformTemplateQuery/IosPage/useIosFaqsQuery";

const iosAppDevelopmentCompany = () => {
  const { IosIntroData } = useIosIntroQuery();
  const { IosBenefitsData } = useIosBenefitsQuery();
  const { IosWhayUsData } = useIosWhyUsQuery();
  const { IosPlatformCapabilitiesData } = useIosPlatformCapabilitiesQuery();
  const { IosCoreSpecialtiesData } = useIosCoreSpecialtiesQuery();
  const { IosFeaturedWorkData } = useIosFeaturedWorkQuery();
  const { IosThoughtspaceData } = useIosFeaturedThoughtspaceQuery();
  const {IosFaqsData} = useIosFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={IosIntroData} />
      <ShopifyBenefits BenefitsData={IosBenefitsData} />
      <WhyUs WhyUsData={IosWhayUsData} />
      <PlatformCapabilities PlanProjectData={IosPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={IosCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={IosFeaturedWorkData} />
      <FAQs FaqData={IosFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={IosThoughtspaceData} />
    </SiteLayout>
  );
};

export default iosAppDevelopmentCompany;
