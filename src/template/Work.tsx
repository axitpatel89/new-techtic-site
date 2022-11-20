import React from "react";
import { SiteLayout } from "../components/Layout";
import WorkIntro from "../components/Work/WorkIntro";
import WorkImages from "../components/Work/WorkListingPage";
import { useAllWorksQuery } from "../querys/workPageQuery/useAllWorksQuery";

const OurWorksPage = () => {
  const { AllWorks } = useAllWorksQuery();
  return (
    <SiteLayout>
      <WorkIntro />
      <WorkImages ImageContent={AllWorks} />
    </SiteLayout>
  );
};

export default OurWorksPage;
