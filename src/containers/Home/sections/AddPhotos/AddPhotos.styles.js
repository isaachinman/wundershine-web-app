import css from 'styled-jsx/css'

import {
  ADD_PHOTOS,
  ADD_PHOTOS_SMALL,
} from 'images'

export default css`
  .page-section.add-photos {
    background-color: #eee;
    background-image: url(${ADD_PHOTOS});
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 260px 0;
  }
  .page-section.add-photos h2, .page-section.add-photos p {
    color: white;
    text-shadow: 1px 1px 2px rgba(50, 50, 50, 0.85);
  }
  .provider-icon-container {
    display: flex;
    align-items: center;
  }
  .page-section.add-photos img.provider-icon {
    width: 50px;
    margin: 10px 20px 0 0;
  }
  @media only screen and (max-width: 767px) {
    .page-section {
      text-align: center !important;
    }
    .page-section.add-photos {
      padding: 0 0 360px 0;
      background-image: url(${ADD_PHOTOS_SMALL});
    }
    .provider-icon-container {
      justify-content: center;
    }
    .page-section.add-photos img.provider-icon {
      width: 50px;
      margin: 10px;
    }
  }
`
