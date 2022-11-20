import React from "react";
import { SiteLayout } from "../components/Layout";
import { useWoocommerceIntroQuery } from "../querys/PlateformTemplateQuery/WoocommercePage/useWoocommerceIntroQuery";
import { useWoocommerceBenefitsQuery } from "../querys/PlateformTemplateQuery/WoocommercePage/useWoocommerceBenefitsQuery";
import { useWoocommerceWhyUsQuery } from "../querys/PlateformTemplateQuery/WoocommercePage/useWoocommerceWhyUsQuery";
import { useWoocommercePlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/WoocommercePage/useWoocommercePlatformCapabilitiesQuery";
import { useWoocommerceCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/WoocommercePage/useWoocommerceCoreSpecialtiesQuery";
import { useWoocommerceFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/WoocommercePage/useWoocommerceFeaturedWorkQuery";
import { useWoocommerceFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/WoocommercePage/useWoocommerceFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useWoocommerceFaqsQuery } from "../querys/PlateformTemplateQuery/WoocommercePage/useWoocommerceFaqsQuery";

const woocommerceDevelopment = () => {
  const { WoocommerceIntroData } = useWoocommerceIntroQuery();
  const { WoocommerceBenefitsData } = useWoocommerceBenefitsQuery();
  const { WoocommerceWhayUsData } = useWoocommerceWhyUsQuery();
  const { WoocommercePlatformCapabilitiesData } =
    useWoocommercePlatformCapabilitiesQuery();
  const { WoocommerceCoreSpecialtiesData } =
    useWoocommerceCoreSpecialtiesQuery();
  const { WoocommerceFeaturedWorkData } = useWoocommerceFeaturedWorkQuery();
  const { WoocommerceThoughtspaceData } =
    useWoocommerceFeaturedThoughtspaceQuery();
  const { WoocommerceFaqsData } = useWoocommerceFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={WoocommerceIntroData} />
      <ShopifyBenefits BenefitsData={WoocommerceBenefitsData} />
      <WhyUs WhyUsData={WoocommerceWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={WoocommercePlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={WoocommerceCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={WoocommerceFeaturedWorkData} />
      <FAQs FaqData={WoocommerceFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={WoocommerceThoughtspaceData} />
    </SiteLayout>
  );
};

export default woocommerceDevelopment;
