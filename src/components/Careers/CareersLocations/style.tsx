import { Row } from "antd";
import styled from "styled-components";
import theme from "../../../theme";
import DragButton from "../../../images/Group 62DragButton-2.svg";

export const LocationSection = styled.div`
  background-color: ${(props) => props.color || theme.white};
  margin-bottom: 200px;

  @media (max-width: 576px) {
    margin-bottom: 46px;
  }
`;

export const LocationRow = styled(Row)`
  margin-top: 72px;
`;

export const Address = styled.div`
  font-size: 24px;
  font-weight: 300;
  line-height: 31px;
  margin-top: 24px;
  margin-bottom: 112px;
  max-width: 400px;

  @media (max-width: 576px) {
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    margin-top: 16px;
    margin-bottom: 72px;
    max-width: 228px;
  }
`;

export const ImageContainer = styled.div`
  /* cursor: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOThweCIgaGVpZ2h0PSI5OHB4IiB2aWV3Qm94PSIwIDAgOTggOTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+R3JvdXAgNzwvdGl0bGU+CiAgICA8ZyBpZD0iU2VhcmNoLVBhZ2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC03Ij4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzAwQUZBQSIgeD0iMCIgeT0iMCIgd2lkdGg9Ijk4IiBoZWlnaHQ9Ijk4IiByeD0iNDkiPjwvcmVjdD4KICAgICAgICAgICAgPHRleHQgaWQ9IkRyYWciIGZvbnQtZmFtaWx5PSJJQk1QbGV4U2Fucy1SZWd1bGFyLCBJQk0gUGxleCBTYW5zIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0ibm9ybWFsIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIzMC4xIiB5PSI1NSI+RHJhZzwvdHNwYW4+CiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==),
    auto; */
    cursor: url(${DragButton}), auto;
  padding-left: calc((100vw - 1220px) / 2);

  @media (max-width: 1220px) {
    margin-left: 70px;
  }
  @media (max-width: 790px) {
    margin-left: 50px;
  }
  @media (max-width: 426px) {
    margin-left: 20px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    width: auto !important;
    margin: auto 0px;

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
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
