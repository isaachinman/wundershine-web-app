import css from 'styled-jsx/css'

import { NAVBAR_HEIGHT } from 'components/Navbar/Navbar.styles'

import {
  LOADING_SLOT,
  LOADING_SLOT_MEDIUM,
  LOADING_SLOT_SMALL,
} from 'images'

export default css`
  .page-section.loading {
    background-color: #eee;
    background-image: url(${LOADING_SLOT});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: calc(100vh - ${NAVBAR_HEIGHT + 100}px);
    display: flex;
    align-items: center;
    padding: 0 0 100px 0;
  }
  @media only screen and (max-width: 767px) {
    .page-section.loading {
      background-image: url(${LOADING_SLOT_MEDIUM});
      background-position: center center;
      padding: 0 0 60px 0;
    }
    h2.loading {
      margin-top: 80%;
    }
  }
  @media only screen and (max-width: 576px) {
    .page-section.loading {
      background-image: url(${LOADING_SLOT_SMALL});
      background-size: cover;
      padding: 0 0 20px 0;
      min-height: 400px;
    }
  }
`
