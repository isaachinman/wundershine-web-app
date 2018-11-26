import css from 'styled-jsx/css'

import {
  REFRESH_AT_WILL,
  REFRESH_AT_WILL_SMALL,
} from 'images'

export default css`
  .page-section.refresh {
    text-align: center;
    padding-bottom: 130px;
    background-color: #fafafa;
  }
  .page-section.refresh p {
    margin-bottom: 70px;
  }
  .refresh-image, .refresh-image-small {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .refresh-image {
    background-image: url(${REFRESH_AT_WILL});
  }
  .refresh-image-small-container {
    padding: 0 25px;
  }
  .refresh-image-small {
    background-image: url(${REFRESH_AT_WILL_SMALL});
  }

  @media only screen and (max-width: 991px) {
    .page-section.refresh {
      padding-bottom: 110px;
    }
  }

  @media only screen and (max-width: 576px) {
    .page-section.refresh {
      padding: 35px 20px 70px 20px;
    }
    .page-section.refresh p {
      margin-bottom: 40px;
    }
    .refresh-image-small-container {
      padding: 0;
    }
  }

`
