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
    background-position: 55% center;
    background-size: cover;
    min-height: 650px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .text {
    max-width: 500px;
    margin: 0 0 0 auto;
  }
  .page-section.add-photos h2, .page-section.add-photos p {
    color: white;
    text-shadow: 1px 1px 2px rgba(50, 50, 50, 0.35);
  }
  .provider-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-section.add-photos img.provider-icon {
    width: 45px;
    margin: 10px 20px 0 0;
  }
  @media only screen and (max-width: 767px) {
    .page-section.add-photos {
      padding-top: 20px;
      min-height: 640px;
      align-items: flex-start;
      background-image: url(${ADD_PHOTOS_SMALL});
      background-position: 25% 100%;
    }
    .page-section.add-photos img.provider-icon {
      width: 40px;
      margin: 10px;
    }
  }
`
