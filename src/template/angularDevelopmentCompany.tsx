import React from "react";
import { SiteLayout } from "../components/Layout";
import { useAngularIntroQuery } from "../querys/PlateformTemplateQuery/AngularPage/useAngularIntroQuery";
import { useAngularBenefitsQuery } from "../querys/PlateformTemplateQuery/AngularPage/useAngularBenefitsQuery";
import { useAngularWhyUsQuery } from "../querys/PlateformTemplateQuery/AngularPage/useAngularWhyUsQuery";
import { useAngularPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/AngularPage/useAngularPlatformCapabilitiesQuery";
import { useAngularCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/AngularPage/useAngularCoreSpecialtiesQuery";
import { useAngularFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/AngularPage/useAngularFeaturedWorkQuery";
import { useAngularFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/AngularPage/useAngularFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useAngularFaqsQuery } from "../querys/PlateformTemplateQuery/AngularPage/useAngularFaqsQuery";

const angularDevelopmentCompany = () => {
  const { AngularIntroData } = useAngularIntroQuery();
  const { AngularBenefitsData } = useAngularBenefitsQuery();
  const { AngularWhayUsData } = useAngularWhyUsQuery();
  const { AngularPlatformCapabilitiesData } =
    useAngularPlatformCapabilitiesQuery();
  const { AngularCoreSpecialtiesData } = useAngularCoreSpecialtiesQuery();
  const { AngularFeaturedWorkData } = useAngularFeaturedWorkQuery();
  const { AngularThoughtspaceData } = useAngularFeaturedThoughtspaceQuery();
  const { AngularFaqsData } = useAngularFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={AngularIntroData} />
      <ShopifyBenefits BenefitsData={AngularBenefitsData} />
      <WhyUs WhyUsData={AngularWhayUsData} />
      <PlatformCapabilities PlanProjectData={AngularPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={AngularCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={AngularFeaturedWorkData} />
      <FAQs FaqData={AngularFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={AngularThoughtspaceData} />
    </SiteLayout>
  );
};

export default angularDevelopmentCompany;
