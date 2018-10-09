import css from 'styled-jsx/css'

import { NAVBAR_HEIGHT } from 'components/Navbar/Navbar.styles'

import {
  HOMEPAGE_HERO,
  HOMEPAGE_HERO_SMALL,
} from 'images'

export default css`
  .page-section.hero {
    background-color: #eee;
    background-image: url(${HOMEPAGE_HERO});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: calc(100vh - ${NAVBAR_HEIGHT + 100}px);
    display: flex;
    align-items: center;
    padding: 0 0 100px 0;
    text-align: right;
  }
  @media only screen and (max-width: 767px) {
    .page-section.hero {
      align-items: flex-start;
      padding-top: 50px;
      background-image: url(${HOMEPAGE_HERO_SMALL});
      background-size: 100% auto;
      background-position: center bottom;
      min-height: 600px;
    }
  }
  @media only screen and (max-width: 576px) {
    .page-section.hero {
      padding-top: 30px;
      min-height: 430px;
    }
  }
`
