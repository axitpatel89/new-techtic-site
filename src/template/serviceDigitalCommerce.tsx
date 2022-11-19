import React from "react";
import { SiteLayout } from "../components/Layout";
import ServiceInnerIntro from "../components/ServiceInnerPage/ServiceInnerIntro";
import { useDigitalCommerceIntroQurey } from "../querys/servicePageQuery/DigitalCommerceQuery/useDigitalCommerceIntroQurey";
import Capabilities from "../components/ServiceInnerPage/Capabilities";
import Tech from "../components/ServiceInnerPage/Tech";
import TypesOfCommerce from "../components/ServiceInnerPage/TypesOfCommerce";
import WebsiteAudit from "../components/ServiceInnerPage/WebsiteAudit";
import Whoitsfor from "../components/ServiceInnerPage/Whoit’sfor";
import PlanProject from "../components/ServiceInnerPage/PlanProject";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import { useDigitalCommerceCapabilitiesQuery } from "../querys/servicePageQuery/DigitalCommerceQuery/useDigitalCommerceCapabilitiesQuery";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import { useDigitalCommercePlanProjectQuery } from "../querys/servicePageQuery/DigitalCommerceQuery/useDigitalCommercePlanProjectQuery";
import { useDigitalCommerceWhoitsforQuery } from "../querys/servicePageQuery/DigitalCommerceQuery/useDigitalCommerceWhoitsforQuery";
import { useDigitalCommerceCoreSpecialtiesQuery } from "../querys/servicePageQuery/DigitalCommerceQuery/useDigitalCommerceCoreSpecialtiesQuery";
import { useDigitalCommerceFeturedThoughtspaceQuery } from "../querys/servicePageQuery/DigitalCommerceQuery/useDigitalCommerceFeturedThoughtspaceQuery";
import { useDigitalCommerceFeaturedWorkQuery } from "../querys/servicePageQuery/DigitalCommerceQuery/useDigitalCommerceFeaturedWorkQuery";
import { useDigitalCommerceTechQuery } from "../querys/servicePageQuery/DigitalCommerceQuery/useDigitalCommerceTechQuery";
import { useTypeOfCommerceQuery } from "../querys/servicePageQuery/DigitalCommerceQuery/useTypeOfCommerceQuery";
import { useWebsiteAuditQuery } from "../querys/servicePageQuery/DigitalCommerceQuery/useWebsiteAuditQuery";

function ServiceDigitalCommerce() {
  const { digitalCommerceData, ServiceMenu } = useDigitalCommerceIntroQurey();
  const { DcCapabilitiesData } = useDigitalCommerceCapabilitiesQuery();
  const { DcPlanProjectData } = useDigitalCommercePlanProjectQuery();
  const { DcTechData } = useDigitalCommerceTechQuery();
  const { DcWhoitsforData } = useDigitalCommerceWhoitsforQuery();
  const { DcCoreSpecialtiesData } = useDigitalCommerceCoreSpecialtiesQuery();
  const { DCThoughtspaceData } = useDigitalCommerceFeturedThoughtspaceQuery();
  const { DcFeaturedWorkData } = useDigitalCommerceFeaturedWorkQuery();
  const { DCTypeOfCommerceData } = useTypeOfCommerceQuery();
  const { DCWebsiteAuditData } = useWebsiteAuditQuery();

  return (
    <SiteLayout>
      <ServiceInnerIntro
        IntroData={digitalCommerceData}
        ServiceMenu={ServiceMenu}
      />
      <Capabilities CapabilitiesData={DcCapabilitiesData} />
      <Tech TechData={DcTechData} />
      <TypesOfCommerce TypeOfCommerceData={DCTypeOfCommerceData} />
      <WebsiteAudit WebsiteAuditData={DCWebsiteAuditData} />
      <FeaturedWork FeaturedWorkData={DcFeaturedWorkData} />
      <PlanProject PlanProjectData={DcPlanProjectData} />
      <Whoitsfor WhoitsforData={DcWhoitsforData} />
      <CoreSpecialties CoreSpecialtiesData={DcCoreSpecialtiesData} />
      <FeturedThoughtspace ThoughtspaceData={DCThoughtspaceData} />
    </SiteLayout>
  );
}

export default ServiceDigitalCommerce;
