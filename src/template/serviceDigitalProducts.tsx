import React from "react";
import { SiteLayout } from "../components/Layout";
import Capabilities from "../components/ServiceInnerPage/Capabilities";
import ServiceInnerIntro from "../components/ServiceInnerPage/ServiceInnerIntro";
import { useDigitalProductIntroQuery } from "../querys/servicePageQuery/DigitalProductQuery/useDigitalProductIntroQuery";
import { useDigitalProductCapabilitiesQuery } from "../querys/servicePageQuery/DigitalProductQuery/useDigitalProductCapabilitiesQuery";
import PlanProject from "../components/ServiceInnerPage/PlanProject";
import { useDigitalProductPlanProjectQuery } from "../querys/servicePageQuery/DigitalProductQuery/useDigitalProductPlanProjectQuery";
import Whoitsfor from "../components/ServiceInnerPage/Whoit’sfor";
import { useDigitalProductWhoitsforQuery } from "../querys/servicePageQuery/DigitalProductQuery/useDigitalProductWhoitsforQuery";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import { useDigitalProductFeturedThoughtspaceQuery } from "../querys/servicePageQuery/DigitalProductQuery/useDigitalProductFeturedThoughtspaceQuery";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import { useDigitalProductCoreSpecialtiesQuery } from "../querys/servicePageQuery/DigitalProductQuery/useDigitalProductCoreSpecialtiesQuery";
import DigitalProductTech from "../components/ServiceInnerPage/DigitalProductTech";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { useDigitalProductFeaturedWorkQuery } from "../querys/servicePageQuery/DigitalProductQuery/useDigitalProductFeaturedWorkQuery";
import EBook from "../components/ServiceInnerPage/EBook";
import { useDigitalProducteBookQuery } from "../querys/servicePageQuery/DigitalProductQuery/useDigitalProducteBookQuery";
import GrowthStages from "../components/ServiceInnerPage/GrowthStages";

function serviceDigitalProducts() {
  const { digitalProductData, ServiceMenu } = useDigitalProductIntroQuery();
  const { DpCapabilitiesData } = useDigitalProductCapabilitiesQuery();
  const { DpPlanProjectData } = useDigitalProductPlanProjectQuery();
  const { DpWhoitsforData } = useDigitalProductWhoitsforQuery();
  const { DpCoreSpecialtiesData } = useDigitalProductCoreSpecialtiesQuery();
  const { DpThoughtspaceData } = useDigitalProductFeturedThoughtspaceQuery();
  const { DpFeaturedWorkData } = useDigitalProductFeaturedWorkQuery();
  const { EBookData } = useDigitalProducteBookQuery();

  return (
    <SiteLayout>
      <ServiceInnerIntro
        IntroData={digitalProductData}
        ServiceMenu={ServiceMenu}
      />
      <GrowthStages />
      <Capabilities CapabilitiesData={DpCapabilitiesData} />
      <DigitalProductTech />
      <FeaturedWork FeaturedWorkData={DpFeaturedWorkData} />
      <PlanProject PlanProjectData={DpPlanProjectData} />
      <Whoitsfor WhoitsforData={DpWhoitsforData} />
      <CoreSpecialties CoreSpecialtiesData={DpCoreSpecialtiesData} />
      <EBook EBookData={EBookData} URL="/dos-and-donts-of-experience-design"/>
      <FeturedThoughtspace ThoughtspaceData={DpThoughtspaceData} />
    </SiteLayout>
  );
}

export default serviceDigitalProducts;
