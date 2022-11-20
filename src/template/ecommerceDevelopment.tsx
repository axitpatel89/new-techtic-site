import React from "react";
import { SiteLayout } from "../components/Layout";
import { useEcommerceIntroQuery } from "../querys/PlateformTemplateQuery/EcommercePage/useEcommerceIntroQuery";
import { useEcommerceBenefitsQuery } from "../querys/PlateformTemplateQuery/EcommercePage/useEcommerceBenefitsQuery";
import { useEcommerceWhyUsQuery } from "../querys/PlateformTemplateQuery/EcommercePage/useEcommerceWhyUsQuery";
import { useEcommercePlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/EcommercePage/useEcommercePlatformCapabilitiesQuery";
import { useEcommerceCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/EcommercePage/useEcommerceCoreSpecialtiesQuery";
import { useEcommerceFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/EcommercePage/useEcommerceFeaturedWorkQuery";
import { useEcommerceFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/EcommercePage/useEcommerceFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useEcommerceFaqsQuery } from "../querys/PlateformTemplateQuery/EcommercePage/useEcommerceFaqsQuery";

const ecommerceDevelopment = () => {
  const { EcommerceIntroData } = useEcommerceIntroQuery();
  const { EcommerceBenefitsData } = useEcommerceBenefitsQuery();
  const { EcommerceWhayUsData } = useEcommerceWhyUsQuery();
  const { EcommercePlatformCapabilitiesData } =
    useEcommercePlatformCapabilitiesQuery();
  const { EcommerceCoreSpecialtiesData } = useEcommerceCoreSpecialtiesQuery();
  const { EcommerceFeaturedWorkData } = useEcommerceFeaturedWorkQuery();
  const { EcommerceThoughtspaceData } = useEcommerceFeaturedThoughtspaceQuery();
  const {EcommerceFaqsData} =useEcommerceFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={EcommerceIntroData} />
      <ShopifyBenefits BenefitsData={EcommerceBenefitsData} />
      <WhyUs WhyUsData={EcommerceWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={EcommercePlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={EcommerceCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={EcommerceFeaturedWorkData} />
      <FAQs FaqData={EcommerceFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={EcommerceThoughtspaceData} />
    </SiteLayout>
  );
};

export default ecommerceDevelopment;
