import React from "react";
import { SiteLayout } from "../components/Layout";
import { useExpressjsIntroQuery } from "../querys/PlateformTemplateQuery/ExpressjsPage/useExpressjsIntroQuery";
import { useExpressjsBenefitsQuery } from "../querys/PlateformTemplateQuery/ExpressjsPage/useExpressjsBenefitsQuery";
import { useExpressjsWhyUsQuery } from "../querys/PlateformTemplateQuery/ExpressjsPage/useExpressjsWhyUsQuery";
import { useExpressjsPlatformCapabilitiesQuery } from "../querys/PlateformTemplateQuery/ExpressjsPage/useExpressjsPlatformCapabilitiesQuery";
import { useExpressjsCoreSpecialtiesQuery } from "../querys/PlateformTemplateQuery/ExpressjsPage/useExpressjsCoreSpecialtiesQuery";
import { useExpressjsFeaturedWorkQuery } from "../querys/PlateformTemplateQuery/ExpressjsPage/useExpressjsFeaturedWorkQuery";
import { useExpressjsFeaturedThoughtspaceQuery } from "../querys/PlateformTemplateQuery/ExpressjsPage/useExpressjsFeaturedThoughtspaceQuery";
import BannerSection from "../components/PlatformTemplate/BannerSection";
import ShopifyBenefits from "../components/PlatformTemplate/ShopifyBenefits";
import WhyUs from "../components/PlatformTemplate/WhyUs";
import PlatformCapabilities from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FAQs from "../components/ServiceInnerPage/FAQsSection";
import { useExpressjsFaqsQuery } from "../querys/PlateformTemplateQuery/ExpressjsPage/useExpressjsFaqsQuery";

const expressjsDevelopment = () => {
  const { ExpressjsIntroData } = useExpressjsIntroQuery();
  const { ExpressjsBenefitsData } = useExpressjsBenefitsQuery();
  const { ExpressjsWhayUsData } = useExpressjsWhyUsQuery();
  const { ExpressjsPlatformCapabilitiesData } =
    useExpressjsPlatformCapabilitiesQuery();
  const { ExpressjsCoreSpecialtiesData } = useExpressjsCoreSpecialtiesQuery();
  const { ExpressjsFeaturedWorkData } = useExpressjsFeaturedWorkQuery();
  const { ExpressjsThoughtspaceData } = useExpressjsFeaturedThoughtspaceQuery();
  const { ExpressjsFaqsData} = useExpressjsFaqsQuery();

  return (
    <SiteLayout>
      <BannerSection IntroData={ExpressjsIntroData} />
      <ShopifyBenefits BenefitsData={ExpressjsBenefitsData} />
      <WhyUs WhyUsData={ExpressjsWhayUsData} />
      <PlatformCapabilities PlanProjectData={ExpressjsPlatformCapabilitiesData} />
      <CoreSpecialties CoreSpecialtiesData={ExpressjsCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={ExpressjsFeaturedWorkData} />
      <FAQs FaqData={ExpressjsFaqsData} />
      <FeturedThoughtspace ThoughtspaceData={ExpressjsThoughtspaceData} />
    </SiteLayout>
  );
};

export default expressjsDevelopment;
