import React from "react";
import { SiteLayout } from "../components/Layout";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import { useShopifyIntroQuery } from "../querys/PlateformTemplateQuery/ShopifyPage/useShopifyIntroQuery";
import { useShopifyFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/ShopifyPage/useShopifyFeaturedThoughtspaceQuery";
import { useShopifyFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/ShopifyPage/useShopifyFeaturedWorkQuery";
import { useShopifyCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/ShopifyPage/useShopifyCoreSpecialtiesQuery";
import { useShopifyWhyUsQuery } from "../querys/PlateformTemplateQuery/ShopifyPage/useShopifyWhyUsQuery";
import { useShopifyBenefitsQuery } from "../querys/PlateformTemplateQuery/ShopifyPage/useShopifyBenefitsQuery";
import { useShopifyPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/ShopifyPage/useShopifyPlatformCapabilitiesQuery";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import {useShopifyFaqsQuery} from "../querys/PlateformTemplateQuery/ShopifyPage/useShopifyFaqsQuery";

const shopifyDevelopmentCompany = () => {
  const { ShopifyIntroData } = useShopifyIntroQuery();
  const { ShopifyThoughtspaceData } = useShopifyFeaturedThoughtspaceQuery();
  const { ShopifyFeaturedWorkData } = useShopifyFeaturedWorkQuery();
  const { ShopifyCoreSpecialtiesData } = useShopifyCoreSpecialtiesQuery();
  const { ShopifyWhayUsData } = useShopifyWhyUsQuery();
  const { ShopifyBenefitsData } = useShopifyBenefitsQuery();
  const { ShopifyPlatformCapabilitiesData } =
    useShopifyPlatformCapabilitiesQuery();
    const {ShopifyFaqsData} = useShopifyFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={ShopifyIntroData} />
      <ShopifyBenefits BenefitsData={ShopifyBenefitsData} />
      <WhyUs WhyUsData={ShopifyWhayUsData} />
      <PlatformCapabilities PlanProjectData={ShopifyPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={ShopifyCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={ShopifyFeaturedWorkData} />
      <FAQs FaqData={ShopifyFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={ShopifyThoughtspaceData} />
    </SiteLayout>
  );
};

export default shopifyDevelopmentCompany;
