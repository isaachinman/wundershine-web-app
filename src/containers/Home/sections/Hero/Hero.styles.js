import css from 'styled-jsx/css'

import { NAVBAR_HEIGHT } from 'components/Navbar/Navbar.styles'

import {
  HOMEPAGE_HERO,
  HOMEPAGE_HERO_SMALL,
} from 'images'

export default css`
  .page-section.hero {
    background-color: #e9e9e9;
    background-image: url(${HOMEPAGE_HERO});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: auto 100%;
    min-height: calc(100vh - ${NAVBAR_HEIGHT + 100}px);
    display: flex;
    align-items: center;
    padding: 0 0 100px 0;
    text-align: right;
  }
  .text-container {
    padding: 0 0 50px 0;
    max-width: 460px;
    margin: 0 30px 0 auto;
  }
  @media only screen and (max-width: 991px) {
    .page-section.hero {
      align-items: flex-start;
      padding-top: 50px;
      background-image: url(${HOMEPAGE_HERO_SMALL});
      background-size: 100% auto;
      background-position: center bottom;
      min-height: 840px;
      text-align: center;
    }
    .text-container {
      padding: 10px 0 50px 0;
      max-width: 440px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 950px) {
    .page-section.hero {
      min-height: 800px;
    }
  }
  @media only screen and (max-width: 900px) {
    .page-section.hero {
      min-height: 760px;
    }
  }
  @media only screen and (max-width: 850px) {
    .page-section.hero {
      min-height: 730px;
    }
  }
  @media only screen and (max-width: 800px) {
    .page-section.hero {
      min-height: 700px;
    }
  }
  @media only screen and (max-width: 700px) {
    .page-section.hero {
      min-height: 600px;
    }
  }
  @media only screen and (max-width: 576px) {
    .page-section.hero {
      padding-top: 30px;
      min-height: 100vw;
      background-size: 120% auto;
    }
    .text-container {
      padding: 0 15px 20px 15px;
    }
  }
  @media only screen and (max-width: 450px) {
    .page-section.hero {
      min-height: calc(100vw + 20px);
    }
  }
  @media only screen and (max-width: 350px) {
    .page-section.hero {
      min-height: calc(100vw + 60px);
    }
  }
`
