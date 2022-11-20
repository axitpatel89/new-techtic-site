import React from "react";
import { SiteLayout } from "../components/Layout";
import { useHealthcareIntroQuery } from "../querys/PlateformTemplateQuery/HealthcarePage/useHealthcareIntroQuery";
import { useHealthcareBenefitsQuery } from "../querys/PlateformTemplateQuery/HealthcarePage/useHealthcareBenefitsQuery";
import { useHealthcareWhyUsQuery } from "../querys/PlateformTemplateQuery/HealthcarePage/useHealthcareWhyUsQuery";
import { useHealthcarePlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/HealthcarePage/useHealthcarePlatformCapabilitiesQuery";
import { useHealthcareCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/HealthcarePage/useHealthcareCoreSpecialtiesQuery";
import { useHealthcareFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/HealthcarePage/useHealthcareFeaturedWorkQuery";
import { useHealthcareFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/HealthcarePage/useHealthcareFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useHealthcareFaqsQuery } from "../querys/PlateformTemplateQuery/HealthcarePage/useHealthcareFaqsQuery";

const healthcare = () => {
  const { HealthcareIntroData } = useHealthcareIntroQuery();
  const { HealthcareBenefitsData } = useHealthcareBenefitsQuery();
  const { HealthcareWhayUsData } = useHealthcareWhyUsQuery();
  const { HealthcarePlatformCapabilitiesData } =
    useHealthcarePlatformCapabilitiesQuery();
  const { HealthcareCoreSpecialtiesData } = useHealthcareCoreSpecialtiesQuery();
  const { HealthcareFeaturedWorkData } = useHealthcareFeaturedWorkQuery();
  const { HealthcareThoughtspaceData } =
    useHealthcareFeaturedThoughtspaceQuery();
    const {HealthcareFaqsData} =useHealthcareFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={HealthcareIntroData} />
      <ShopifyBenefits BenefitsData={HealthcareBenefitsData} />
      <WhyUs WhyUsData={HealthcareWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={HealthcarePlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={HealthcareCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={HealthcareFeaturedWorkData} />
      <FAQs FaqData={HealthcareFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={HealthcareThoughtspaceData} />
    </SiteLayout>
  );
};

export default healthcare;
