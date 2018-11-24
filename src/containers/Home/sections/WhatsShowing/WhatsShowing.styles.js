import css from 'styled-jsx/css'

import {
  WHATS_SHOWING,
  WHATS_SHOWING_MEDIUM,
  WHATS_SHOWING_SMALL,
} from 'images'

export default css`
  .page-section.whats-showing {
    margin-top: -2px;
    padding: 0;
    background-image: url(${WHATS_SHOWING});
    background-repeat:no-repeat;
    background-position: right center;
    background-size: contain;
  }
  .page-section.whats-showing-mobile {
    text-align: center;
    padding: 0 0 25px 0;
  }
  .whats-showing-text {
    min-height: 640px;
    background-color: white;
    padding: 80px 20px 80px 0;
  }
  p.hashtags {
    margin-top: 40px;
    color: #003569;
  }
  p.padded-top {
    padding-top: 20px;
  }
  @media only screen and (max-width: 1199px) {
    .page-section.whats-showing {
      background-position: calc(100% + 100px) 100%;
    }
  }
  @media only screen and (max-width: 1080px) {
    .whats-showing-text {
      min-height: 500px;
    }
  }
  @media only screen and (max-width: 991px) {
    .whats-showing-text {
      padding: 80px 0;
      text-align: center;
    }
    .hashtags {
      max-width: 200px;
      margin-left: auto;
      margin-right: auto;
    }
    .page-section.whats-showing {
      min-height: 500px;
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
    .hashtags {
      max-width: 100%;
    }
    h2 {
      margin-bottom: -10px;
    }
    .whats-showing-text {
      padding: 30px 0 40px 0;
    }
    .page-section.whats-showing {
      background-image: url(${WHATS_SHOWING_SMALL});
      min-height: 400px;
    }
  }
`
