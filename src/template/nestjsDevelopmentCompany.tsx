import React from "react";
import { SiteLayout } from "../components/Layout";
import { useNestjsIntroQuery } from "../querys/PlateformTemplateQuery/NestjsPage/useNestjsIntroQuery";
import { useNestjsBenefitsQuery } from "../querys/PlateformTemplateQuery/NestjsPage/useNestjsBenefitsQuery";
import { useNestjsWhyUsQuery } from "../querys/PlateformTemplateQuery/NestjsPage/useNestjsWhyUsQuery";
import { useNestjsPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/NestjsPage/useNestjsPlatformCapabilitiesQuery";
import { useNestjsCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/NestjsPage/useNestjsCoreSpecialtiesQuery";
import { useNestjsFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/NestjsPage/useNestjsFeaturedWorkQuery";
import { useNestjsFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/NestjsPage/useNestjsFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useNestjsFaqsQuery } from "../querys/PlateformTemplateQuery/NestjsPage/useNestjsFaqsQuery";

const nestjsDevelopmentCompany = () => {
  const { NestjsIntroData } = useNestjsIntroQuery();
  const { NestjsBenefitsData } = useNestjsBenefitsQuery();
  const { NestjsWhayUsData } = useNestjsWhyUsQuery();
  const { NestjsPlatformCapabilitiesData } =
    useNestjsPlatformCapabilitiesQuery();
  const { NestjsCoreSpecialtiesData } = useNestjsCoreSpecialtiesQuery();
  const { NestjsFeaturedWorkData } = useNestjsFeaturedWorkQuery();
  const { NestjsThoughtspaceData } = useNestjsFeaturedThoughtspaceQuery();
  const { NestjsFaqsData } = useNestjsFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={NestjsIntroData} />
      <ShopifyBenefits BenefitsData={NestjsBenefitsData} />
      <WhyUs WhyUsData={NestjsWhayUsData} />
      <PlatformCapabilities PlanProjectData={NestjsPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={NestjsCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={NestjsFeaturedWorkData} />
      <FAQs FaqData={NestjsFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={NestjsThoughtspaceData} />
    </SiteLayout>
  );
};

export default nestjsDevelopmentCompany;
