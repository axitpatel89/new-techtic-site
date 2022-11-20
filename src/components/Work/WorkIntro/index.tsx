import React from "react";
import { GlobalContainer } from "../../Global/layout";
import { StyledHeadingh1 } from "../../Global/headings";

const WorkIntro = () => {

  const Title = 'Defining industries and propelling companies forward<span>.</span>'

  return (
      <GlobalContainer>
        <StyledHeadingh1 style={{marginTop: '65px'}} maxWidth="1032px" text={Title} />
      </GlobalContainer>
  );
};

export default WorkIntro;
