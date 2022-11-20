import React from "react";
import { SiteLayout } from "../components/Layout";
import { useOnDemandIntroQuery } from "../querys/PlateformTemplateQuery/OnDemandPage/useOnDemandIntroQuery";
import { useOnDemandBenefitsQuery } from "../querys/PlateformTemplateQuery/OnDemandPage/useOnDemandBenefitsQuery";
import { useOnDemandWhyUsQuery } from "../querys/PlateformTemplateQuery/OnDemandPage/useOnDemandWhyUsQuery";
import { useOnDemandPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/OnDemandPage/useOnDemandPlatformCapabilitiesQuery";
import { useOnDemandCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/OnDemandPage/useOnDemandCoreSpecialtiesQuery";
import { useOnDemandFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/OnDemandPage/useOnDemandFeaturedWorkQuery";
import { useOnDemandFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/OnDemandPage/useOnDemandFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useOnDemandFaqsQuery } from "../querys/PlateformTemplateQuery/OnDemandPage/useOnDemandFaqsQuery";

const onDemand = () => {
  const { OnDemandIntroData } = useOnDemandIntroQuery();
  const { OnDemandBenefitsData } = useOnDemandBenefitsQuery();
  const { OnDemandWhayUsData } = useOnDemandWhyUsQuery();
  const { OnDemandPlatformCapabilitiesData } =
    useOnDemandPlatformCapabilitiesQuery();
  const { OnDemandCoreSpecialtiesData } = useOnDemandCoreSpecialtiesQuery();
  const { OnDemandFeaturedWorkData } = useOnDemandFeaturedWorkQuery();
  const { OnDemandThoughtspaceData } = useOnDemandFeaturedThoughtspaceQuery();
  const {OnDemandFaqsData} = useOnDemandFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={OnDemandIntroData} />
      <ShopifyBenefits BenefitsData={OnDemandBenefitsData} />
      <WhyUs WhyUsData={OnDemandWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={OnDemandPlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={OnDemandCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={OnDemandFeaturedWorkData} />
      <FAQs FaqData={OnDemandFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={OnDemandThoughtspaceData} />
    </SiteLayout>
  );
};

export default onDemand;
