import React from "react";
import { SiteLayout } from "../components/Layout";
import MoSCowPrioritization from "../components/MoscowPrioritizationComponents/MoSCowPrioritization";
import MoSCoWPrioritization2 from "../components/MoscowPrioritizationComponents/MoSCoWPrioritization2";
import { useMoscowIntroQuery } from "../querys/MoSCoWPrioritizationPageQuery/useMoscowIntroQuery";
import { useMoscowPrioritizationQuery } from "../querys/MoSCoWPrioritizationPageQuery/useMoscowPrioritizationQuery";
import { useMoscowPrioritization2Query } from "../querys/MoSCoWPrioritizationPageQuery/useMoscowPrioritization2Query";
import { useWhyDoYouNeedQuery } from "../querys/MoSCoWPrioritizationPageQuery/useWhyDoYouNeedQuery";
import WhyDoYouNeed from "../components/MoscowPrioritizationComponents/WhyDoYouNeed";
import { useMoscowMYPDevelopementQuery } from "../querys/MoSCoWPrioritizationPageQuery/useMoscowMYPDevelopementQuery";
import { useMoscowSliderQuery } from "../querys/MoSCoWPrioritizationPageQuery/useMoscowSliderQuery";

import StaffBanner from "../components/StaffAugmentationPage/StaffBanner";
import MVPDevelopment from "../components/MVPPage/MVPDevelopment";
import MVPSlider from "../components/MVPPage/MVPSlider";

const moscowPrioritization = () => {
  const { MoscowBanner } = useMoscowIntroQuery();
  const { MoscowPrioritization } = useMoscowPrioritizationQuery();
  const { MoscowPrioritization2 } = useMoscowPrioritization2Query();
  const { WhyDoYouNeedData } = useWhyDoYouNeedQuery();
  const { MoscowMVPDevelopment } = useMoscowMYPDevelopementQuery();
  const { MoscowSlider } = useMoscowSliderQuery();

  return (
    <SiteLayout>
      <StaffBanner BannerData={MoscowBanner} />
      <MoSCowPrioritization MoscowPrioritizationData={MoscowPrioritization} />
      <MoSCoWPrioritization2
        MoscowPrioritization2Data={MoscowPrioritization2}
      />
      <WhyDoYouNeed WhyDoYouNeedData={WhyDoYouNeedData} />
      <MVPDevelopment
        MVPDevelopmentData={MoscowMVPDevelopment}
        sectionCount="04"
      />
      <MVPSlider SliderData={MoscowSlider} sectionCount="05" />
    </SiteLayout>
  );
};

export default moscowPrioritization;
