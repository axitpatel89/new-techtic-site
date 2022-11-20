import styled from "styled-components";
import theme from "../../../theme";
import { Link } from "gatsby";
import DragButton from "../../../images/Group 62DragButton-2.svg";

export const ThoughtspaceDetailsSection = styled.div`
  margin-top: 120px;
`;

export const PrevNestBlogSection = styled.div`
  margin-top: 50px;
`;

export const SliderSection = styled.div`
  clear: both;
  padding-top: 156px;
`;

export const PreviousSection = styled.div`
  width: 48%;
  float: left;
  position: relative;

  @media (max-width: 768px) {
    width: 100% !important;
    margin-bottom: 20px;
    text-align: center;
  }
`;
export const PreviousLabel = styled.div`
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.black};
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const PreviousBlog = styled(Link)`
  display: block;
  font-size: 21px;
  line-height: 24px;
  font-weight: 300;

  :hover {
    color: ${theme.cyan};
  }
`;

export const NextSection = styled.div`
  width: 48%;
  float: right;
  position: relative;

  @media (max-width: 768px) {
    width: 100% !important;
    margin-bottom: 20px;
    text-align: center;
    float: none;
  }
`;
export const NextLabel = styled.div`
  margin-bottom: 5px;
  text-align: right;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.black};
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const NextBlog = styled(Link)`
  display: block;
  text-align: right;
  font-size: 21px;
  line-height: 24px;
  font-weight: 300;

  :hover {
    color: ${theme.cyan};
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  cursor: url(${DragButton}), auto;
  /* margin-top: 156px; */
  margin-bottom: 248px;
  padding-left: calc((100vw - 1220px) / 2);

  @media (max-width: 1220px) {
    margin-left: 70px;
  }
  @media (max-width: 790px) {
    margin-left: 50px;
  }
  @media (max-width: 425px) {
    margin-left: 20px;
  }

  @media (max-width: 890px) {
    /* margin-top: 80px !important; */
    margin-bottom: 165px !important;
  }
  @media (max-width: 425px) {
    /* margin-top: 96px !important; */
    margin-bottom: 124px !important;
  }

  img {
    object-fit: contain !important;
    max-height: 410px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-wrapper .swiper-slide:last-child {
    margin-right: 30px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    font-weight: 300 !important;
    width: auto !important;
    max-width: 473px;
    max-height: 570px;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    @media (max-width: 767px) {
      max-width: 440px;
      max-height: auto;
    }

    @media (max-width: 480px) {
      max-width: 290px;
      max-height: auto;
    }
  }
`;

export const LineComponent = styled.div`
  max-width: 100%;
  margin-top: 16px;

  & :first-child {
    max-width: 65% !important;
    @media (max-width: 767px) {
      max-width: 70% !important;
    }
  }
  span {
    &:first-child {
      float: left;
      text-align: left;
    }
    &:last-child {
      float: right;
      max-width: 30%;
      text-align: right;
    }
  }
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

//new css

export const SubTitle = styled.div`
  max-width: 809px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
`;

export const BannerImage = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  .gatsby-image-wrapper.gatsby-image-wrapper-constrained {
    box-shadow: rgb(0 0 0 / 5%) 0px 2px 6px 0px !important;
    border-radius: 10px;
  }
`;

export const Description = styled.div`
  max-width: 610px;
  margin: auto;
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    img {
      height: auto;
      box-shadow: 0 2px 38px 0 rgb(0 0 0 / 15%);
      border-radius: 10px;
    }

    a{
      :hover{
        color: ${theme.cyan} !important;
      }
    }
  }
  h2 {
    font-weight: 300;
    font-size: 40px;
    line-height: 48px;
    margin-top: 65px;

    strong {
      font-weight: 300 !important;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;
    margin-top: 65px;
    strong {
      font-weight: 300 !important;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  .blog_index_cover {
    margin-bottom: 50px;
  }
  p.blog_index_toggle_btn {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
  }

  .blog_index {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    padding-left: 20px;
    margin-bottom: 50px;
    a {
      color: ${theme.black};
      :hover {
        color: ${theme.cyan};
      }
    }
  }

  .blog_index_toggle_btn {
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
  }

  .blog_index_cover .blog_index_toggle_btn.open:after {
    content: "[More]";
    cursor: pointer;
  }

  .blog_index_toggle_btn:after {
    content: "[Less]";
    cursor: pointer;
    text-align: right;
    color: ${theme.black};
    opacity: 1;
    margin-left: 5px;
    transition: all 0.1s linear 0s;
  }

  .blog_index ul {
    list-style-type: disc;
  }
`;

export const BlogDetails = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  margin-top: 60px;
  margin-bottom: 60px;
`;
