import React from "react";
import { SiteLayout } from "../components/Layout";
import MVPIntro from "../components/MVPPage/MVPIntro";
import MVPDevelopment from "../components/MVPPage/MVPDevelopment";
import MVPDevelopment2 from "../components/MVPPage/MVPDevelopment2";
import MVPSlider from "../components/MVPPage/MVPSlider";

import { useMVPBannerQuery } from "../querys/MVPTemplateQuery2/useMVPBannerQuery";
import { useMVPDevelopmentQuery } from "../querys/MVPTemplateQuery2/useMVPDevelopmentQuery";
import { useMVPDevelopment2Query } from "../querys/MVPTemplateQuery2/useMVPDevelopment2Query";
import { useMVPSliderQuery } from "../querys/MVPTemplateQuery2/useMVPSliderQuery";

const mvpTemplate = () => {
  const { MVPBanner } = useMVPBannerQuery();
  const { MVPDevelopmentData } = useMVPDevelopmentQuery();
  const { MVPDevelopment2Data } = useMVPDevelopment2Query();
  const { MVPSliderData } = useMVPSliderQuery();

  return (
    <SiteLayout>
      <MVPIntro BannerData={MVPBanner} />
      <MVPDevelopment
        MVPDevelopmentData={MVPDevelopmentData}
        sectionCount="01"
      />
      <MVPDevelopment2
        MVPDevelopment2Data={MVPDevelopment2Data}
        sectionCount="02"
      />
      <MVPSlider SliderData={MVPSliderData} sectionCount="03" />
    </SiteLayout>
  );
};

export default mvpTemplate;
