import React from "react";
import { SiteLayout } from "../components/Layout";

import BannerSection from "../components/PlatformTemplate/BannerSection";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";

import { useMagentoIntroQuery } from "../querys/PlateformTemplateQuery/MagentoPage/useMagentoIntroQuery";
import { useMagentoBenefitsQuery } from "../querys/PlateformTemplateQuery/MagentoPage/useMagentoBenefitsQuery";
import { useMagentoWhyUsQuery } from "../querys/PlateformTemplateQuery/MagentoPage/useMagentoWhyUsQuery";
import { useMagentoFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/MagentoPage/useMagentoFeaturedWorkQuery";
import { useMagentoCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/MagentoPage/useMagentoCoreSpecialtiesQuery";
import { useMagentoPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/MagentoPage/useMagentoPlatformCapabilitiesQuery";
import { useMagentoFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/MagentoPage/useMagentoFeaturedThoughtspaceQuery";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useMagentoFaqsQuery } from "../querys/PlateformTemplateQuery/MagentoPage/useMagentoFaqsQuery";

const magentoDevelopmentCompany = () => {
  const { MagentoIntroData } = useMagentoIntroQuery();
  const { MagentoBenefitsData } = useMagentoBenefitsQuery();
  const { MagentoWhayUsData } = useMagentoWhyUsQuery();
  const { MagentoFeaturedWorkData } = useMagentoFeaturedWorkQuery();
  const { MagentoCoreSpecialtiesData } = useMagentoCoreSpecialtiesQuery();

  const { MagentoThoughtspaceData } = useMagentoFeaturedThoughtspaceQuery();
  const { MagentoPlatformCapabilitiesData } =
  useMagentoPlatformCapabilitiesQuery();
  const {MagentoFaqsData} = useMagentoFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={MagentoIntroData} />
      <ShopifyBenefits BenefitsData={MagentoBenefitsData} />
      <WhyUs WhyUsData={MagentoWhayUsData} />
      <PlatformCapabilities PlanProjectData={MagentoPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={MagentoCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={MagentoFeaturedWorkData} />
      <FAQs FaqData={MagentoFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={MagentoThoughtspaceData} />
    </SiteLayout>
  );
};

export default magentoDevelopmentCompany;

