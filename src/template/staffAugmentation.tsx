import React from "react";
import { SiteLayout } from "../components/Layout";
import StaffBanner from "../components/StaffAugmentationPage/StaffBanner";
import MVPDevelopment from "../components/MVPPage/MVPDevelopment";
import MVPSlider from "../components/MVPPage/MVPSlider";
import { useStaffAugmentationBannerQuery } from "../querys/staffAugmentationQuery2/useStaffAugmentationBannerQuery";
import { useStaffAugmentationMVPDevelopmentQuery } from "../querys/staffAugmentationQuery2/useStaffAugmentationMVPDevelopmentQuery";
import { useStaffAugmentationSliderQuery } from "../querys/staffAugmentationQuery2/useStaffAugmentationSliderQuery";

const staffAugmentation = () => {
  const { StaffAugmentationBanner } = useStaffAugmentationBannerQuery();
  const { StaffAugmentationMVPDevelopment } =
    useStaffAugmentationMVPDevelopmentQuery();
  const { StaffAugmentationSlider } = useStaffAugmentationSliderQuery();
  return (
    <SiteLayout>
      <StaffBanner BannerData={StaffAugmentationBanner} />
      <MVPDevelopment
        MVPDevelopmentData={StaffAugmentationMVPDevelopment}
        sectionCount="01"
      />
      <MVPSlider SliderData={StaffAugmentationSlider} sectionCount="02" />
    </SiteLayout>
  );
};

export default staffAugmentation;
