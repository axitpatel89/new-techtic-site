import React from "react";
import { SiteLayout } from "../components/Layout";
import { useOffshoreIntroQuery } from "../querys/PlateformTemplateQuery/OffshorePage/useOffshoreIntroQuery";
import { useOffshoreBenefitsQuery } from "../querys/PlateformTemplateQuery/OffshorePage/useOffshoreBenefitsQuery";
import { useOffshoreWhyUsQuery } from "../querys/PlateformTemplateQuery/OffshorePage/useOffshoreWhyUsQuery";
import { useOffshorePlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/OffshorePage/useOffshorePlatformCapabilitiesQuery";
import { useOffshoreCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/OffshorePage/useOffshoreCoreSpecialtiesQuery";
import { useOffshoreFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/OffshorePage/useOffshoreFeaturedWorkQuery";
import { useOffshoreFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/OffshorePage/useOffshoreFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useOffshoreFaqsQuery } from "../querys/PlateformTemplateQuery/OffshorePage/useOffshoreFaqsQuery";

const offshoreDevelopment = () => {
  const { OffshoreIntroData } = useOffshoreIntroQuery();
  const { OffshoreBenefitsData } = useOffshoreBenefitsQuery();
  const { OffshoreWhayUsData } = useOffshoreWhyUsQuery();
  const { OffshorePlatformCapabilitiesData } =
    useOffshorePlatformCapabilitiesQuery();
  const { OffshoreCoreSpecialtiesData } = useOffshoreCoreSpecialtiesQuery();
  const { OffshoreFeaturedWorkData } = useOffshoreFeaturedWorkQuery();
  const { OffshoreThoughtspaceData } = useOffshoreFeaturedThoughtspaceQuery();
  const { OffshoreFaqsData } = useOffshoreFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={OffshoreIntroData} />
      <ShopifyBenefits BenefitsData={OffshoreBenefitsData} />
      <WhyUs WhyUsData={OffshoreWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={OffshorePlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={OffshoreCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={OffshoreFeaturedWorkData} />
      <FAQs FaqData={OffshoreFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={OffshoreThoughtspaceData} />
    </SiteLayout>
  );
};

export default offshoreDevelopment;
