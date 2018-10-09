import css from 'styled-jsx/css'

import {
  WHATS_SHOWING,
  WHATS_SHOWING_MEDIUM,
  WHATS_SHOWING_SMALL,
} from 'images'

export default css`
  .page-section.whats-showing {
    padding: 0;
    background-image: url(${WHATS_SHOWING});
    min-height: 500px;
    background-repeat:no-repeat;
    background-position: right center;
    background-size: contain;
  }
  .page-section.whats-showing-mobile {
    text-align: center;
  }
  .whats-showing-text {
    min-height: 500px;
    background-color: white;
    padding: 80px 0;
  }
  p.hashtags {
    margin-top: 40px;
    color: #003569;
  }
  @media only screen and (max-width: 1199px) {
    .page-section.whats-showing {
      background-position: calc(100% + 100px) 100%;
    }
  }
  @media only screen and (max-width: 991px) {
    .page-section.whats-showing {
      min-height: 800px;
      background-image: url(${WHATS_SHOWING_MEDIUM});
      background-repeat:no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
  @media only screen and (max-width: 991px) {
    .whats-showing-text {
      background-color: transparent;
    }
  }
  @media only screen and (max-width: 576px) {
    .page-section.whats-showing {
      background-image: url(${WHATS_SHOWING_SMALL});
      min-height: 400px;
    }
  }
`
