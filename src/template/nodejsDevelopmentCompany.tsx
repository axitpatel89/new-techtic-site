import React from "react";
import { SiteLayout } from "../components/Layout";
import { useNodejsIntroQuery } from "../querys/PlateformTemplateQuery/NodejsPage/useNodejsIntroQuery";
import { useNodejsBenefitsQuery } from "../querys/PlateformTemplateQuery/NodejsPage/useNodejsBenefitsQuery";
import { useNodejsWhyUsQuery } from "../querys/PlateformTemplateQuery/NodejsPage/useNodejsWhyUsQuery";
import { useNodejsPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/NodejsPage/useNodejsPlatformCapabilitiesQuery";
import { useNodejsCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/NodejsPage/useNodejsCoreSpecialtiesQuery";
import { useNodejsFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/NodejsPage/useNodejsFeaturedWorkQuery";
import { useNodejsFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/NodejsPage/useNodejsFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useNodejsFaqsQuery } from "../querys/PlateformTemplateQuery/NodejsPage/useNodejsFaqsQuery";

const nodejsDevelopmentCompany = () => {
  const { NodejsIntroData } = useNodejsIntroQuery();
  const { NodejsBenefitsData } = useNodejsBenefitsQuery();
  const { NodejsWhayUsData } = useNodejsWhyUsQuery();
  const { NodejsPlatformCapabilitiesData } =
    useNodejsPlatformCapabilitiesQuery();
  const { NodejsCoreSpecialtiesData } = useNodejsCoreSpecialtiesQuery();
  const { NodejsFeaturedWorkData } = useNodejsFeaturedWorkQuery();
  const { NodejsThoughtspaceData } = useNodejsFeaturedThoughtspaceQuery();
  const { NodejsFaqsData } = useNodejsFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={NodejsIntroData} />
      <ShopifyBenefits BenefitsData={NodejsBenefitsData} />
      <WhyUs WhyUsData={NodejsWhayUsData} />
      <PlatformCapabilities PlanProjectData={NodejsPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={NodejsCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={NodejsFeaturedWorkData} />
      <FAQs FaqData={NodejsFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={NodejsThoughtspaceData} />
    </SiteLayout>
  );
};

export default nodejsDevelopmentCompany;
