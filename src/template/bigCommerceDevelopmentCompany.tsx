import React from "react";
import { SiteLayout } from "../components/Layout";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import { useBigCommerceIntroQuery } from "../querys/PlateformTemplateQuery/BigCommerce/useBigCommerceIntroQuery";
import { useBigCommerceBenefitsQuery } from "../querys/PlateformTemplateQuery/BigCommerce/useBigCommerceBenefitsQuery";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import { useBigCommercePlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/BigCommerce/useBigCommercePlatformCapabilitiesQuery";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import { useBigCommerceWhyUsQuery } from "../querys/PlateformTemplateQuery/BigCommerce/useBigCommerceWhyUsQuery";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import { useBigCommerceCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/BigCommerce/useBigCommerceCoreSpecialtiesQuery";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import { useBigCommerceFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/BigCommerce/useBigCommerceFeaturedWorkQuery";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { useBigCommerceFaqsQuery } from "../querys/PlateformTemplateQuery/BigCommerce/useBigCommerceFaqsQuery";
import { useBigCommerceFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/BigCommerce/useBigCommerceFeaturedThoughtspaceQuery";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";

const bigCommerceDevelopmentCompany = () => {
  const { BigCommerceIntroData } = useBigCommerceIntroQuery();
  const { BigCommerceBenefitsData } = useBigCommerceBenefitsQuery();
  const { BigCommerceWhayUsData } = useBigCommerceWhyUsQuery();
  const { BigCommercePlatformCapabilitiesData } =
    useBigCommercePlatformCapabilitiesQuery();
  const { BigCommerceCoreSpecialtiesData } =
    useBigCommerceCoreSpecialtiesQuery();
  const { BigCommerceFeaturedWorkData } = useBigCommerceFeaturedWorkQuery();
  const { BigCommerceFaqsData } = useBigCommerceFaqsQuery();
  const { BigCommerceThoughtspaceData } =
    useBigCommerceFeaturedThoughtspaceQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={BigCommerceIntroData} />
      <ShopifyBenefits BenefitsData={BigCommerceBenefitsData} />
      <WhyUs WhyUsData={BigCommerceWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={BigCommercePlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={BigCommerceCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={BigCommerceFeaturedWorkData} />
      <FAQs FaqData={BigCommerceFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={BigCommerceThoughtspaceData} />
    </SiteLayout>
  );
};

export default bigCommerceDevelopmentCompany;
