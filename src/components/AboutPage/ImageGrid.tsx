import React from "react";
import { useEffect, useRef, useState } from "react";
import { WrapperLG, LeftSide } from "./style";
import { useWindowDimensions } from "../../querys/globalQuery/useWindowDimensions";

const ImageGrid = ({ ValuesList }: any) => {
  const [imgSource, setImgSrc] = useState("Surpass Goals");
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const leftDivSecond = useRef(null);

  const mobileDivRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [scroll, setScroll] = useState(0);
  const [firstDiv, setFirstDiv] = useState(true);
  const [secondDiv, setSecondDiv] = useState(false);
  const [thirdDiv, setTthirdDiv] = useState(false);
  const [forthDiv, setForthDiv] = useState(false);

  const [mobileFirstDiv, setMobileFirstDiv] = useState(true);
  const [mobileSecondDiv, seMobiletSecondDiv] = useState(false);
  const [mobileThirdDiv, setMobileTthirdDiv] = useState(false);
  const [mobileForthDiv, setMobileForthDiv] = useState(false);

  const windowDimensions = useWindowDimensions();
  const center = windowDimensions.height / 2;
  const scrollHeight = `-${center}`;

  const handleScroll = (e: any) => {
    const leftDiv = leftDivRef.current;

    const mobilediv = mobileDivRef.current;

    if (mobilediv) {
      const mobileScroll = 0 - mobilediv.getBoundingClientRect().top;

      if (mobileScroll < -161) {
        setMobileFirstDiv(true);
        seMobiletSecondDiv(false);
        setMobileTthirdDiv(false);
        setMobileForthDiv(false);
      } else if (mobileScroll < 38) {
        setMobileFirstDiv(false);
        seMobiletSecondDiv(true);
        setMobileTthirdDiv(false);
        setMobileForthDiv(false);
      } else if (mobileScroll < 160) {
        setMobileFirstDiv(false);
        seMobiletSecondDiv(false);
        setMobileTthirdDiv(true);
        setMobileForthDiv(false);
      } else {
        setMobileFirstDiv(false);
        seMobiletSecondDiv(false);
        setMobileTthirdDiv(false);
        setMobileForthDiv(true);
      }
    }

    if (leftDiv) {
      const scrollTop = 0 - leftDiv.getBoundingClientRect().top;

      setScroll(scrollTop);

      if (window.innerWidth >= 2560) {
        if (scrollTop < -280) {
          setFirstDiv(true);
          setSecondDiv(false);
          setTthirdDiv(false);
          setForthDiv(false);
          setImgSrc("Surpass Goals");
        } else if (scrollTop < 300) {
          setFirstDiv(false);
          setSecondDiv(true);
          setTthirdDiv(false);
          setForthDiv(false);
          setImgSrc("Make Positive Changes");
        } else if (scrollTop < 700) {
          setFirstDiv(false);
          setSecondDiv(false);
          setTthirdDiv(true);
          setForthDiv(false);
          setImgSrc("Work with Integrity");
        } else {
          setFirstDiv(false);
          setSecondDiv(false);
          setTthirdDiv(false);
          setForthDiv(true);
          setImgSrc("Drive innovation");
        }
      } else if (window.innerWidth >= 1440) {
        if (scrollTop < 190) {
          setFirstDiv(true);
          setSecondDiv(false);
          setTthirdDiv(false);
          setForthDiv(false);
          setImgSrc("Surpass Goals");
        } else if (scrollTop < 600) {
          setFirstDiv(false);
          setSecondDiv(true);
          setTthirdDiv(false);
          setForthDiv(false);
          setImgSrc("Make Positive Changes");
        } else if (scrollTop < 1000) {
          setFirstDiv(false);
          setSecondDiv(false);
          setTthirdDiv(true);
          setForthDiv(false);
          setImgSrc("Work with Integrity");
        } else {
          setFirstDiv(false);
          setSecondDiv(false);
          setTthirdDiv(false);
          setForthDiv(true);
          setImgSrc("Drive innovation");
        }
      } else if (window.innerWidth >= 1024) {
        if (scrollTop < 350) {
          setFirstDiv(true);
          setSecondDiv(false);
          setTthirdDiv(false);
          setForthDiv(false);
          setImgSrc("Surpass Goals");
        } else if (scrollTop < 1000) {
          setFirstDiv(false);
          setSecondDiv(true);
          setTthirdDiv(false);
          setForthDiv(false);
          setImgSrc("Make Positive Changes");
        } else if (scrollTop < 1300) {
          setFirstDiv(false);
          setSecondDiv(false);
          setTthirdDiv(true);
          setForthDiv(false);
          setImgSrc("Work with Integrity");
        } else {
          setFirstDiv(false);
          setSecondDiv(false);
          setTthirdDiv(false);
          setForthDiv(true);
          setImgSrc("Drive innovation");
        }
      }
    }
  };

  return (
    <>
      {windowDimensions.width > 768 ? (
        <WrapperLG>
          <div className="container">
            <LeftSide
              ref={rightDivRef}
              // theme={scroll > scrollHeight ? "center" : ""}
            >
              <h1>{imgSource}</h1>
            </LeftSide>
            <div className="middle" ref={leftDivRef}>
              <div className="in-middle">
                <div
                  style={{ opacity: firstDiv ? 1 : 0.3 }}
                  className="in-in-middle"
                >
                  <p style={{ paddingRight: "35px" }}>
                    Processes have been a big challenge to the startups, because
                    of multiple roles the CXOs are playing in the company. We
                    help build your lean team and establish agile processes and
                    development standards.
                  </p>
                </div>
                <div
                  style={{ opacity: secondDiv ? 1 : 0.3 }}
                  className="in-in-middle"
                >
                  <p style={{ paddingRight: "35px" }}>
                    One size doesn’t fit all when it comes to tech skills. At
                    different stages of the product, resource requirements,
                    skillset and experience vary. So, we offer elastic teams
                    help startups get the right resources at the right time and
                    that would help them scale faster with cost efficiency.
                  </p>
                </div>
                <div
                  style={{ opacity: thirdDiv ? 1 : 0.3 }}
                  className="in-in-middle"
                >
                  <p style={{ paddingRight: "35px" }}>
                    Youthful talent with the balance of integrity is in our DNA.
                    We believe that with the culture fit team, the company can
                    truly expand keeping their value system intact.
                  </p>
                </div>
                <div
                  style={{ opacity: forthDiv ? 1 : 0.3 }}
                  className="in-in-middle"
                >
                  <p style={{ paddingRight: "105px" }}>
                    Hassle-free hiring of the fitting resources and nurturing
                    them can be outsourced to Techtic. Save thousands of dollars
                    at no liability & focus on growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </WrapperLG>
      ) : (
        <div ref={mobileDivRef}>
          <div style={{ opacity: mobileFirstDiv ? 1 : 0.3 }}>
            <h1>Surpass Goals</h1>
            <p>
              Processes have been a big challenge to the startups, because of
              multiple roles the CXOs are playing in the company. We help build
              your lean team and establish agile processes and development
              standards.
            </p>
          </div>
          <div style={{ opacity: mobileSecondDiv ? 1 : 0.3 }}>
            <h1>Make Positive Changes</h1>
            <p>
              One size doesn’t fit all when it comes to tech skills. At
              different stages of the product, resource requirements, skillset
              and experience vary. So, we offer elastic teams help startups get
              the right resources at the right time and that would help them
              scale faster with cost efficiency.
            </p>
          </div>
          <div style={{ opacity: mobileThirdDiv ? 1 : 0.3 }}>
            <h1>Work with Integrity</h1>
            <p>
              Youthful talent with the balance of integrity is in our DNA. We
              believe that with the culture fit team, the company can truly
              expand keeping their value system intact.
            </p>
          </div>
          <div style={{ opacity: mobileForthDiv ? 1 : 0.3 }}>
            <h1>Drive innovation</h1>
            <p>
              Hassle-free hiring of the fitting resources and nurturing them can
              be outsourced to Techtic. Save thousands of dollars at no
              liability & focus on growth.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;
