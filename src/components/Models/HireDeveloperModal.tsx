import React from "react";
import {
  FormModelWrapper,
  RowContainer,
  SectionTitle,
  RightCol,
  FormSection,
  FormModal,
  FormHeading,
} from "./HireDeveloperModalStyle";
import { Modal } from "antd";
import { StyledHeadingh3 } from "../Global/headings";
import { useHireDeveloperModalQuery } from "../../querys/modalQuery/useHireDeveloperModalQuery";
import ModalLeftContent from "./ModalLeftContent";
import ModalFooter from "./ModalFooter";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { BlackButton } from "../Global/button";

const HireDeveloperModal = ({ visible, setVisible }: any) => {
  const {
    HireDeveloperModalHeadings,
    HireDeveloperModalData,
    HireDeveloperModalTestimonials,
  } = useHireDeveloperModalQuery();

  return (
    <FormModelWrapper>
      <FormModal
        title={
          <>
            <Link to="/">
              <StaticImage src="../../images/logo.svg" alt="" />
            </Link>
            <BlackButton
              onClick={() => setVisible(false)}
              style={{ float: "right" }}
            >
              Close
            </BlackButton>
          </>
        }
        closable={false}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        // This was removed
        width="100vw"
      >
        <RowContainer>
          <ModalLeftContent
            ModalHeadings={HireDeveloperModalHeadings}
            ModalData={HireDeveloperModalData}
            ModalTestimonials={HireDeveloperModalTestimonials}
          />

          <RightCol md={24} xl={12}>
            <FormSection>
              <SectionTitle>
                {HireDeveloperModalHeadings.getInTouchHeading}
              </SectionTitle>
              <FormHeading>
                {HireDeveloperModalHeadings.formHeading}
              </FormHeading>
              <iframe
                src="//45.79.111.106/techtic/hire-a-developer/"
                frameBorder="0"
                allowFullScreen
                allow="accelemeter; autoplay; encrypted-media; gyroscope; picture-in-picture"
                className="player-loop -visible"
                data-custom-cursor
                data-cursor-text="Learn More"
                data-lf-yt-playback-inspected-dzlr5a5rw9a8boq2="true"
              ></iframe>
            </FormSection>
          </RightCol>
        </RowContainer>
        {/* <ModalFooter /> */}
      </FormModal>
    </FormModelWrapper>
  );
};

export default HireDeveloperModal;
