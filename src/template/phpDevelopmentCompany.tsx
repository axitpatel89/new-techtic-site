import React from "react";
import { SiteLayout } from "../components/Layout";
import { usePhpIntroQuery } from "../querys/PlateformTemplateQuery/PhpPage/usePhpIntroQuery";
import { usePhpBenefitsQuery } from "../querys/PlateformTemplateQuery/PhpPage/usePhpBenefitsQuery";
import { usePhpWhyUsQuery } from "../querys/PlateformTemplateQuery/PhpPage/usePhpWhyUsQuery";
import { usePhpPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/PhpPage/usePhpPlatformCapabilitiesQuery";
import { usePhpCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/PhpPage/usePhpCoreSpecialtiesQuery";
import { usePhpFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/PhpPage/usePhpFeaturedWorkQuery";
import { usePhpFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/PhpPage/usePhpFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { usePhpFaqsQuery } from "../querys/PlateformTemplateQuery/PhpPage/usePhpFaqsQuery";

const phpDevelopmentCompany = () => {
  const { PhpIntroData } = usePhpIntroQuery();
  const { PhpBenefitsData } = usePhpBenefitsQuery();
  const { PhpWhayUsData } = usePhpWhyUsQuery();
  const { PhpPlatformCapabilitiesData } = usePhpPlatformCapabilitiesQuery();
  const { PhpCoreSpecialtiesData } = usePhpCoreSpecialtiesQuery();
  const { PhpFeaturedWorkData } = usePhpFeaturedWorkQuery();
  const { PhpThoughtspaceData } = usePhpFeaturedThoughtspaceQuery();
  const { PhpFaqsData } = usePhpFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={PhpIntroData} />
      <ShopifyBenefits BenefitsData={PhpBenefitsData} />
      <WhyUs WhyUsData={PhpWhayUsData} />
      <PlatformCapabilities PlanProjectData={PhpPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={PhpCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={PhpFeaturedWorkData} />
      <FAQs FaqData={PhpFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={PhpThoughtspaceData} />
    </SiteLayout>
  );
};

export default phpDevelopmentCompany;
