import React from "react";
import { SiteLayout } from "../components/Layout";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import { useShopwareIntroQuery } from "../querys/PlateformTemplateQuery/ShopwarePage/useShopwareIntroQuery";
import { useShopwareBenefitsQuery } from "../querys/PlateformTemplateQuery/ShopwarePage/useShopwareBenefitsQuery";
import { useShopwareWhyUsQuery } from "../querys/PlateformTemplateQuery/ShopwarePage/useShopwareWhyUsQuery";
import { useShopwarePlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/ShopwarePage/useShopwarePlatformCapabilitiesQuery";
import { useShopwareCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/ShopwarePage/useShopwareCoreSpecialtiesQuery";
import { useShopwareFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/ShopwarePage/useShopwareFeaturedWorkQuery";
import { useShopwareFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/ShopwarePage/useShopwareFeaturedThoughtspaceQuery";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useShopwareFaqsQuery } from "../querys/PlateformTemplateQuery/ShopwarePage/useShopwareFaqsQuery";

const shopwareDevelopment = () => {
  const { ShopwareIntroData } = useShopwareIntroQuery();
  const { ShopwareBenefitsData } = useShopwareBenefitsQuery();
  const { ShopwareWhayUsData } = useShopwareWhyUsQuery();
  const { ShopwarePlatformCapabilitiesData } =
    useShopwarePlatformCapabilitiesQuery();
  const { ShopwareCoreSpecialtiesData } = useShopwareCoreSpecialtiesQuery();
  const { ShopwareFeaturedWorkData } = useShopwareFeaturedWorkQuery();
  const { ShopwareThoughtspaceData } = useShopwareFeaturedThoughtspaceQuery();
  const { ShopwareFaqsData } = useShopwareFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={ShopwareIntroData} />
      <ShopifyBenefits BenefitsData={ShopwareBenefitsData} />
      <WhyUs WhyUsData={ShopwareWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={ShopwarePlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={ShopwareCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={ShopwareFeaturedWorkData} />
      <FAQs FaqData={ShopwareFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={ShopwareThoughtspaceData} />
    </SiteLayout>
  );
};

export default shopwareDevelopment;
