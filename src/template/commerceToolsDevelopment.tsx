import React from "react";
import { SiteLayout } from "../components/Layout";
import { useCommerceToolsIntroQuery } from "../querys/PlateformTemplateQuery/CommerceToolsPage/useCommerceToolsIntroQuery";
import { useCommerceToolsBenefitsQuery } from "../querys/PlateformTemplateQuery/CommerceToolsPage/useCommerceToolsBenefitsQuery";
import { useCommerceToolsWhyUsQuery } from "../querys/PlateformTemplateQuery/CommerceToolsPage/useCommerceToolsWhyUsQuery";
import { useCommerceToolsPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/CommerceToolsPage/useCommerceToolsPlatformCapabilitiesQuery";
import { useCommerceToolsCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/CommerceToolsPage/useCommerceToolsCoreSpecialtiesQuery";
import { useCommerceToolsFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/CommerceToolsPage/useCommerceToolsFeaturedWorkQuery";
import { useCommerceToolsFaqsQuery } from "../querys/PlateformTemplateQuery/CommerceToolsPage/useCommerceToolsFaqsQuery";
import { useCommerceToolsFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/CommerceToolsPage/useCommerceToolsFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";

const commerceToolsDevelopment = () => {
  const { CommerceToolsIntroData } = useCommerceToolsIntroQuery();
  const { CommerceToolsBenefitsData } = useCommerceToolsBenefitsQuery();
  const { CommerceToolsWhayUsData } = useCommerceToolsWhyUsQuery();
  const { CommerceToolsPlatformCapabilitiesData } =
    useCommerceToolsPlatformCapabilitiesQuery();
  const { CommerceToolsCoreSpecialtiesData } =
    useCommerceToolsCoreSpecialtiesQuery();
  const { CommerceToolsFeaturedWorkData } = useCommerceToolsFeaturedWorkQuery();
  const { CommerceToolsFaqsData } = useCommerceToolsFaqsQuery();
  const { CommerceToolsThoughtspaceData } =
    useCommerceToolsFeaturedThoughtspaceQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={CommerceToolsIntroData} />
      <ShopifyBenefits BenefitsData={CommerceToolsBenefitsData} />
      <WhyUs WhyUsData={CommerceToolsWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={CommerceToolsPlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={CommerceToolsCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={CommerceToolsFeaturedWorkData} />
      <FAQs FaqData={CommerceToolsFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={CommerceToolsThoughtspaceData} />
    </SiteLayout>
  );
};

export default commerceToolsDevelopment;
