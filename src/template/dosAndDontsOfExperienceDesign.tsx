import React from "react";
import { SiteLayout } from "../components/Layout";
import MVPDevelopment from "../components/MVPPage/MVPDevelopment";
import MVPSlider from "../components/MVPPage/MVPSlider";
import StaffBanner from "../components/StaffAugmentationPage/StaffBanner";
import { useDosAndDontsBannerQuery } from "../querys/DosAndDontsQuery/useDosAndDontsBannerQuery";
import { useDosAndDontsMVPDevelopmentQuery } from "../querys/DosAndDontsQuery/useDosAndDontsMVPDevelopmentQuery";
import { useDosAndDontsSliderQuery } from "../querys/DosAndDontsQuery/useDosAndDontsSliderQuery";

const dosAndDontsOfExperienceDesign = () => {
  const { DosAndDontsBanner } = useDosAndDontsBannerQuery();
  const { DosAndDontsMVPDevelopment } = useDosAndDontsMVPDevelopmentQuery();
  const { DosAndDontsSlider } = useDosAndDontsSliderQuery();
  return (
    <SiteLayout>
      <StaffBanner BannerData={DosAndDontsBanner} />
      <MVPDevelopment
        MVPDevelopmentData={DosAndDontsMVPDevelopment}
        sectionCount="01"
      />
      <MVPSlider SliderData={DosAndDontsSlider} sectionCount="02" />
    </SiteLayout>
  );
};

export default dosAndDontsOfExperienceDesign;
