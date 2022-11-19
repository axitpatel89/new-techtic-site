import styled from 'styled-components'
import theme from '../../theme'

export const GlobalContainer = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 1220px) {
    padding-left: 70px;
    padding-right: 70px;
  }
  @media (max-width: 790px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 575px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const StyledH1 = styled.div`
  font-weight: 300;
  font-size: 100px;
  line-height: 130px;
  margin: 0;

  span {
    color: #00afaa;
  }

  @media (max-width: 890px) {
    font-weight: 300px;
    font-size: 70px;
    line-height: 115px;
    margin: 0;
  }
  @media (max-width: 768px) {
    font-weight: 300px;
    font-size: 58px;
    line-height: 85px;
    margin: 0;
  }
  @media (max-width: 426px) {
    font-weight: 300;
    font-size: 49px;
    line-height: 62px;
  }
`

export const StyledH2 = styled.div`
  font-size: 72px;
  line-height: 86px;
  font-weight: 300;
  margin: 0;

  @media (max-width: 890px) {
    font-weight: 300 !important;
    font-size: 58px;
    line-height: 68px;
  }
  @media (max-width: 768px) {
    font-weight: 300 !important;
    font-size: 44px;
    line-height: 62px;
  }
  @media (max-width: 426px) {
    font-weight: 300 !important;
    font-size: 36px;
    line-height: 55px;
  }
`

export const StyledH3 = styled.div`
  font-size: 44px !important;
  line-height: 57px !important;
  font-weight: 400 !important;
  margin: 0;
  color: ${theme.black};

  a {
    text-decoration: underline;
    color: ${theme.black};
    &:hover {
      color: ${theme.cyan};
      text-decoration: underline;
    }
  }

  @media (max-width: 890px) {
    font-weight: 400 !important;
    font-size: 35px !important;
    line-height: 40px !important;
  }
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 30px;
    line-height: 31px;
  }

  @media (max-width: 575px) {
    font-weight: 400;
    font-size: 24px !important;
    line-height: 31px !important;
  }
`

export const StyledH5 = styled.div`
  font-weight: 400;
  margin-bottom: 14px;
  font-size: 16px;
  color: ${theme.black};
`
export const StyledH4 = styled.div`
  font-weight: 300;
  margin-bottom: 14px;
  font-size: 36px;
  line-height: normal;
  color: ${theme.black};

  @media (max-width: 426px) {
    font-size: 30px;
  }
`
