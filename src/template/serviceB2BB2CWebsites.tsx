import React from "react";
import { SiteLayout } from "../components/Layout";
import ServiceInnerIntro from "../components/ServiceInnerPage/ServiceInnerIntro";
import Capabilities from "../components/ServiceInnerPage/Capabilities";
import Tech from "../components/ServiceInnerPage/Tech";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import PlanProject from "../components/ServiceInnerPage/PlanProject";
import { useB2BB2CWebsitesIntroQurey } from "../querys/servicePageQuery/B2BB2CWebsitesQuery/useB2BB2CWebsitesIntroQurey";
import { useB2BB2CWebsitesCapabilitiesQuery } from "../querys/servicePageQuery/B2BB2CWebsitesQuery/useB2BB2CWebsitesCapabilitiesQuery";
import { useB2BB2CWebsitesTechQuery } from "../querys/servicePageQuery/B2BB2CWebsitesQuery/useB2BB2CWebsitesTechQuery";
import { useDigitalB2BB2CWebsitesFeaturedWorkQuery } from "../querys/servicePageQuery/B2BB2CWebsitesQuery/useDigitalB2BB2CWebsitesFeaturedWorkQuery";
import { useB2BB2CWebsitesPlanProjectQuery } from "../querys/servicePageQuery/B2BB2CWebsitesQuery/useB2BB2CWebsitesPlanProjectQuery";
import { useB2BB2CWebsitesWhoitsforQuery } from "../querys/servicePageQuery/B2BB2CWebsitesQuery/useB2BB2CWebsitesWhoitsforQuery";
import Whoitsfor from "../components/ServiceInnerPage/Whoit’sfor";
import { useB2BB2CWebsitesCoreSpecialtiesQuery } from "../querys/servicePageQuery/B2BB2CWebsitesQuery/useB2BB2CWebsitesCoreSpecialtiesQuery";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import { useB2BB2CWebsitesEBookQuery } from "../querys/servicePageQuery/B2BB2CWebsitesQuery/useB2BB2CWebsitesEBookQuery";
import EBook from "../components/ServiceInnerPage/EBook";
import { useB2BB2CWebsitesFeturedThoughtspaceQuery } from "../querys/servicePageQuery/B2BB2CWebsitesQuery/useB2BB2CWebsitesFeturedThoughtspaceQuery";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";

const serviceB2BB2CWebsites = () => {
  const { B2BB2CWebsitesData, ServiceMenu } = useB2BB2CWebsitesIntroQurey();
  const { B2BB2CCapabilitiesData } = useB2BB2CWebsitesCapabilitiesQuery();
  const { B2BB2CTechData } = useB2BB2CWebsitesTechQuery();
  const { B2BB2CFeaturedWorkData } =
    useDigitalB2BB2CWebsitesFeaturedWorkQuery();
  const { B2BB2CPlanProjectData } = useB2BB2CWebsitesPlanProjectQuery();
  const { B2BB2CWhoitsforData } = useB2BB2CWebsitesWhoitsforQuery();
  const { B2BB2CCoreSpecialtiesData } = useB2BB2CWebsitesCoreSpecialtiesQuery();
  const { B2BB2CEBookData } = useB2BB2CWebsitesEBookQuery();
  const { B2BB2CThoughtspaceData } =
    useB2BB2CWebsitesFeturedThoughtspaceQuery();

  return (
    <SiteLayout>
      <ServiceInnerIntro
        IntroData={B2BB2CWebsitesData}
        ServiceMenu={ServiceMenu}
      />
      <Capabilities CapabilitiesData={B2BB2CCapabilitiesData} />
      <Tech TechData={B2BB2CTechData} />
      <FeaturedWork FeaturedWorkData={B2BB2CFeaturedWorkData} />
      <PlanProject PlanProjectData={B2BB2CPlanProjectData} />
      <Whoitsfor WhoitsforData={B2BB2CWhoitsforData} />
      <CoreSpecialties CoreSpecialtiesData={B2BB2CCoreSpecialtiesData} />
      <EBook EBookData={B2BB2CEBookData} URL="/dos-and-donts-of-experience-design" />
      <FeturedThoughtspace ThoughtspaceData={B2BB2CThoughtspaceData} />
    </SiteLayout>
  );
};

export default serviceB2BB2CWebsites;
