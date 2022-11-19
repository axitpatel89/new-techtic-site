import React from "react";
import { SiteLayout } from "../components/Layout";
import ServiceInnerIntro from "../components/ServiceInnerPage/ServiceInnerIntro";
import { useScaleIntroQurey } from "../querys/servicePageQuery/ScaleQuery/useScaleIntroQurey";
import { useScaleFeturedThoughtspaceQuery } from "../querys/servicePageQuery/ScaleQuery/useScaleFeturedThoughtspaceQuery";
import { FeturedThoughtspace } from "../components/ServiceInnerPage/FeaturedThoughtspace";
import { useScaleEBookQuery } from "../querys/servicePageQuery/ScaleQuery/useScaleEBookQuery";
import EBook from "../components/ServiceInnerPage/EBook";
import { useScaleCoreSpecialtiesQuery } from "../querys/servicePageQuery/ScaleQuery/useScaleCoreSpecialtiesQuery";
import CoreSpecialties from "../components/ServiceInnerPage/CoreSpecialties";
import { useScaleEngagementModelsQuery } from "../querys/servicePageQuery/ScaleQuery/useScaleEngagementModelsQuery";
import EngagementModels from "../components/ServiceInnerPage/PlanProject";
import { useScaleFeaturedWorkQuery } from "../querys/servicePageQuery/ScaleQuery/useScaleFeaturedWorkQuery";
import FeaturedWork from "../components/ServiceInnerPage/FeaturedWork";
import Partners from "../components/ServiceInnerPage/Partners";
import { useScalePartnersQuery } from "../querys/servicePageQuery/ScaleQuery/useScalePartnersQuery";
import Trial from "../components/ServiceInnerPage/Trial";
import { useScaleTrialQuery } from "../querys/servicePageQuery/ScaleQuery/useScaleTrialQuery";
import ScaleWhoItsFor from "../components/ServiceInnerPage/ScaleWhoIt'sFor";
import { useScaleWhoitsforQuery } from "../querys/servicePageQuery/ScaleQuery/useScaleWhoitsforQuery";
import WhyItWorks from "../components/ServiceInnerPage/WhyItWorks";
import { useScaleWhyItWorksQuery } from "../querys/servicePageQuery/ScaleQuery/useScaleWhyItWorksQuery";
import WhatWeOffer from "../components/ServiceInnerPage/WhatWeOffer";
import { useScaleWhatWeOfferQuery } from "../querys/servicePageQuery/ScaleQuery/useScaleWhatWeOfferQuery";

const serviceScale = () => {
  const { ScaleData, ServiceMenu } = useScaleIntroQurey();
  const { ScaleEBookData } = useScaleEBookQuery();
  const { ScaleCoreSpecialtiesData } = useScaleCoreSpecialtiesQuery();
  const { ScaleEngagementModelsData } = useScaleEngagementModelsQuery();
  const { ScaleFeaturedWorkData } = useScaleFeaturedWorkQuery();
  const { ScalePartners } = useScalePartnersQuery();
  const { ScaleTrial } = useScaleTrialQuery();
  const { ScaleWhoitsfor } = useScaleWhoitsforQuery();
  const { ScaleWhyItWorks } = useScaleWhyItWorksQuery();
  const { ScaleWhatWeOffer } = useScaleWhatWeOfferQuery();
  const { ScaleThoughtspaceData } = useScaleFeturedThoughtspaceQuery();

  return (
    <SiteLayout>
      <ServiceInnerIntro IntroData={ScaleData} ServiceMenu={ServiceMenu} />
      <ScaleWhoItsFor WhoItsForData={ScaleWhoitsfor} />
      <WhatWeOffer WhatWeOffer={ScaleWhatWeOffer} />
      <EngagementModels PlanProjectData={ScaleEngagementModelsData} />
      <WhyItWorks WhyItWorks={ScaleWhyItWorks} />
      <Partners PartnersData={ScalePartners} />
      <CoreSpecialties CoreSpecialtiesData={ScaleCoreSpecialtiesData} />
      <FeaturedWork FeaturedWorkData={ScaleFeaturedWorkData} />
      <Trial TrialData={ScaleTrial} />
      <EBook EBookData={ScaleEBookData} URL="/staff-augmentation-guide-2021" />
      <FeturedThoughtspace ThoughtspaceData={ScaleThoughtspaceData} />
    </SiteLayout>
  );
};

export default serviceScale;
