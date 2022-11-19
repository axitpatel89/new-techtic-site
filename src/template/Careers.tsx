import React from "react";
import { SiteLayout } from "../components/Layout";
import CareersBannerSection from "../components/Careers/CareersBannerSection";
import CareersOpenRoles from "../components/Careers/CareersOpenRoles";
import CareerBenefits from "../components/Careers/CareersBenefits";
import CareersLocations from "../components/Careers/CareersLocations";
import { useBannerSectionQuery } from "../querys/careerPageQuery/useBannerSectionQuery";
import { useCareersOpenRolesQuery } from "../querys/careerPageQuery/useCareersOpenRolesQuery";
import { useCareersBenefitsQuery } from "../querys/careerPageQuery/useCareersBenefitsQuery";
import { useCareersLocationsQuery } from "../querys/careerPageQuery/useCareersLocationsQuery";

const careers = () => {
  const { CareersData } = useBannerSectionQuery();
  const { CareersOpenRolesData } = useCareersOpenRolesQuery();
  const { CareersBenefitsData } = useCareersBenefitsQuery();
  const { CareersLocationsData } = useCareersLocationsQuery();
  return (
    <SiteLayout>
      <CareersBannerSection Careers={CareersData} />
      <CareersOpenRoles OpenRoles={CareersOpenRolesData} />
      <CareerBenefits Benefits={CareersBenefitsData} />
      <CareersLocations Locations={CareersLocationsData} />
    </SiteLayout>
  );
};

export default careers;
