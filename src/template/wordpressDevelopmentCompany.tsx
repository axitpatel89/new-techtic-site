import React from "react";
import { SiteLayout } from "../components/Layout";
import { useWordPressIntroQuery } from "../querys/PlateformTemplateQuery/WordpressPage/useWordPressIntroQuery";
import { useWordPressBenefitsQuery } from "../querys/PlateformTemplateQuery/WordpressPage/useWordPressBenefitsQuery";
import { useWordPressWhyUsQuery } from "../querys/PlateformTemplateQuery/WordpressPage/useWordPressWhyUsQuery";
import { useWordPressPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/WordpressPage/useWordPressPlatformCapabilitiesQuery";
import { useWordPressCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/WordpressPage/useWordPressCoreSpecialtiesQuery";
import { useWordPressFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/WordpressPage/useWordPressFeaturedWorkQuery";
import { useWordPressFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/WordpressPage/useWordPressFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useWordPressFaqsQuery } from "../querys/PlateformTemplateQuery/WordpressPage/useWordPressFaqsQuery";

const wordpressDevelopmentCompany = () => {
  const { WordPressIntroData } = useWordPressIntroQuery();
  const { WordPressBenefitsData } = useWordPressBenefitsQuery();
  const { WordPressWhayUsData } = useWordPressWhyUsQuery();
  const { WordPressPlatformCapabilitiesData } =
    useWordPressPlatformCapabilitiesQuery();
  const { WordPressCoreSpecialtiesData } = useWordPressCoreSpecialtiesQuery();
  const { WordPressFeaturedWorkData } = useWordPressFeaturedWorkQuery();
  const { WordPressThoughtspaceData } = useWordPressFeaturedThoughtspaceQuery();
  const { WordPressFaqsData } = useWordPressFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={WordPressIntroData} />
      <ShopifyBenefits BenefitsData={WordPressBenefitsData} />
      <WhyUs WhyUsData={WordPressWhayUsData} />
      <PlatformCapabilities
        PlanProjectData={WordPressPlatformCapabilitiesData}
      />
      <CoreSpecialties CoreSpecialtiesData={WordPressCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={WordPressFeaturedWorkData} />
      <FAQs FaqData={WordPressFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={WordPressThoughtspaceData} />
    </SiteLayout>
  );
};

export default wordpressDevelopmentCompany;
