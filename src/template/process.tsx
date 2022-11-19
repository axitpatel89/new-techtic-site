import React from "react";
import { SiteLayout } from "../components/Layout";
import Banner from "../components/ProcessPage/Banner";
import ImageWithContent from "../components/ProcessPage/ImageWithContent";
import {useProcessPageQuery} from "../querys/ProcessPageQuery/useProcessPageQuery";

const process = () => {
  const {ProcessPageData} = useProcessPageQuery();
  return (
    <SiteLayout>
      <Banner ProcessData={ProcessPageData} />
      <ImageWithContent ProcessData={ProcessPageData} />
    </SiteLayout>
  );
};

export default process;
