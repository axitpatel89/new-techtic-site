import React, { useEffect } from "react";
import {
  FormModelWrapper,
  RowContainer,
  SectionTitle,
  RightCol,
  FormSection,
  FormModal,
  FormHeading,
} from "./StarterModalStyle";
import { useStarterModalQuery } from "../../querys/modalQuery/useStarterModalQuery";
import ModalLeftContent from "./ModalLeftContent";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { BlackButton } from "../Global/button";

const StarterModal = ({ visible, setVisible }: any) => {
  const { StarterModalHeadings, StarterModalData, StarterModalTestimonials } =
    useStarterModalQuery();

    const handleClose = (e: any) => {
      e.preventDefault();
      setVisible(false);
      document.body.style.overflow = 'auto';
      document.body.style.removeProperty("overflow")
    };
  
    useEffect(() => {
      if (visible){
      document.body.style.overflow = 'hidden';
      }
    },[])  

  return (
    <FormModelWrapper>
      <FormModal
        title={
          <>
            <Link to="/">
              <StaticImage src="../../images/logo.svg" alt="" />
            </Link>
            <BlackButton onClick={handleClose} style={{ float: "right" }}>
              Close
            </BlackButton>
          </>
        }
        closable={false}
        visible={visible}
        onOk={handleClose}
        onCancel={handleClose}
        width="100vw"
      >
        <RowContainer>
          <ModalLeftContent
            ModalHeadings={StarterModalHeadings}
            ModalData={StarterModalData}
            ModalTestimonials={StarterModalTestimonials}
          />
          <RightCol md={24} xl={12}>
            <FormSection>
              <SectionTitle>
                {StarterModalHeadings.getInTouchHeading}
              </SectionTitle>
              <FormHeading>{StarterModalHeadings.formHeading}</FormHeading>
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
            </FormSection>
          </RightCol>
        </RowContainer>
      </FormModal>
    </FormModelWrapper>
  );
};

export default StarterModal;