import React from "react";
import { GlobalContainer } from "../components/Global/layout";
import { SiteLayout } from "../components/Layout";
import ThoughtspacceListing from "../components/ThoughtspacePage/ThoughtspaceListing";

const thoughtspace = () => {
  return (
    <SiteLayout>
      <GlobalContainer>
        <ThoughtspacceListing />
      </GlobalContainer>
    </SiteLayout>
  );
};

export default thoughtspace;
