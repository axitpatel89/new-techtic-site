import React from "react";
import { SiteLayout } from "../components/Layout";
import { useReactjsIntroQuery } from "../querys/PlateformTemplateQuery/ReactjsPage/useReactjsIntroQuery";
import { useReactjsBenefitsQuery } from "../querys/PlateformTemplateQuery/ReactjsPage/useReactjsBenefitsQuery";
import { useReactjsWhyUsQuery } from "../querys/PlateformTemplateQuery/ReactjsPage/useReactjsWhyUsQuery";
import { useReactjsPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/ReactjsPage/useReactjsPlatformCapabilitiesQuery";
import { useReactjsCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/ReactjsPage/useReactjsCoreSpecialtiesQuery";
import { useReactjsFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/ReactjsPage/useReactjsFeaturedWorkQuery";
import { useReactjsFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/ReactjsPage/useReactjsFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useReactjsFaqsQuery } from "../querys/PlateformTemplateQuery/ReactjsPage/useReactjsFaqsQuery";

const reactjsDevelopmentCompany = () => {
  const { ReactjsIntroData } = useReactjsIntroQuery();
  const { ReactjsBenefitsData } = useReactjsBenefitsQuery();
  const { ReactjsWhayUsData } = useReactjsWhyUsQuery();
  const { ReactjsPlatformCapabilitiesData } =
    useReactjsPlatformCapabilitiesQuery();
  const { ReactjsCoreSpecialtiesData } = useReactjsCoreSpecialtiesQuery();
  const { ReactjsFeaturedWorkData } = useReactjsFeaturedWorkQuery();
  const { ReactjsThoughtspaceData } = useReactjsFeaturedThoughtspaceQuery();
  const { ReactjsFaqsData } = useReactjsFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={ReactjsIntroData} />
      <ShopifyBenefits BenefitsData={ReactjsBenefitsData} />
      <WhyUs WhyUsData={ReactjsWhayUsData} />
      <PlatformCapabilities PlanProjectData={ReactjsPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={ReactjsCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={ReactjsFeaturedWorkData} />
      <FAQs FaqData={ReactjsFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={ReactjsThoughtspaceData} />
    </SiteLayout>
  );
};

export default reactjsDevelopmentCompany;
