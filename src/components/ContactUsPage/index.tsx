import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { StyledHeadingh1 } from "../Global/headings";
import { GlobalContainer } from "../Global/layout";
import {
  Address,
  City,
  ContactUsSection,
  ContainerRow,
  InnerDiv,
  LeftHeading,
  LeftSectionCol,
  LocationCont,
  RightHeading,
} from "./style";
import { graphql, useStaticQuery } from "gatsby";

const ContactUs = () => {
  const data = useStaticQuery(
    graphql`
      query MyQueryContactPage {
        ts {
          tsOptions {
            generaloptions {
              officeAddresses {
                title
                content
              }
              enquireLists {
                title
                content
              }
            }
          }
        }
      }
    `
  );

  return (
    <ContactUsSection>
      <GlobalContainer>
        <StyledHeadingh1 maxWidth="925px" text={"Contact"} />
        <ContainerRow gutter={40}>
          <LeftSectionCol xs={24} sm={24} md={24} lg={12} xl={12}>
            <LeftHeading>
              <p>Get in touch</p>
            </LeftHeading>
            <iframe
              src="//45.79.111.106/techtic/start-your-project-startup/"
              frameBorder="0"
              allowFullScreen
              allow="accelemeter; autoplay; encrypted-media; gyroscope; picture-in-picture"
              className="player-loop -visible"
              data-custom-cursor
              data-cursor-text="Learn More"
              data-lf-yt-playback-inspected-dzlr5a5rw9a8boq2="true"
            ></iframe>
          </LeftSectionCol>

          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <RightHeading>
              <p>Our Locations</p>
            </RightHeading>
            <LocationCont>
              {data.ts.tsOptions.generaloptions.officeAddresses.map(
                (item: any, index: number) => {
                  return (
                    <InnerDiv key={index}>
                      <City>{item.title}</City>
                      <Address
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </InnerDiv>
                  );
                }
              )}
              {data.ts.tsOptions.generaloptions.enquireLists.map(
                (item: any, index: number) => {
                  return (
                    <InnerDiv key={index}>
                      <City>{item.title}</City>
                      <Address
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </InnerDiv>
                  );
                }
              )}
            </LocationCont>
          </Col>
        </ContainerRow>
      </GlobalContainer>
    </ContactUsSection>
  );
};

export default ContactUs;
